#!/usr/bin/env node
/**
 * GitHub API에서 컴포넌트 버전별 코드를 추출
 * design-system-ui 레포의 태그 + 파일 내용을 조회하여
 * component-versions.json, version-codes.json 생성
 *
 * 환경변수:
 * - GITHUB_TOKEN: GitHub Personal Access Token (선택, rate limit 증가용)
 */

const fs = require('fs');
const path = require('path');

// 설정
const CONFIG = {
  // npm 패키지 레포
  repo: 'conewarrior/design-system-ui',
  // 컴포넌트 디렉토리 (레포 내 경로)
  componentsDir: 'components',
  // 출력 경로
  outputPath: path.join(__dirname, '../data/component-versions.json'),
  codesOutputPath: path.join(__dirname, '../data/version-codes.json'),
};

// GitHub API 호출
async function fetchGitHub(endpoint, token) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'geniefy-design-system',
  };
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const response = await fetch(`https://api.github.com${endpoint}`, { headers });
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// 모든 버전 태그 조회
async function getAllVersionTags(token) {
  try {
    const tags = await fetchGitHub(`/repos/${CONFIG.repo}/tags?per_page=100`, token);
    if (!tags) return [];

    return tags
      .map(t => t.name)
      .filter(name => name.startsWith('v'))
      .sort((a, b) => {
        const vA = a.replace('v', '').split('.').map(Number);
        const vB = b.replace('v', '').split('.').map(Number);
        for (let i = 0; i < 3; i++) {
          if ((vA[i] || 0) !== (vB[i] || 0)) return (vA[i] || 0) - (vB[i] || 0);
        }
        return 0;
      });
  } catch (error) {
    console.error('태그 조회 실패:', error.message);
    return [];
  }
}

// 태그의 커밋 날짜 조회
async function getTagDate(tag, token) {
  try {
    const commit = await fetchGitHub(`/repos/${CONFIG.repo}/commits/${tag}`, token);
    if (!commit) return null;
    return commit.commit.author.date.split('T')[0];
  } catch (error) {
    return null;
  }
}

// 특정 태그에서 컴포넌트 코드 조회
async function getComponentCodeAtTag(componentName, tag, token) {
  try {
    const data = await fetchGitHub(
      `/repos/${CONFIG.repo}/contents/${CONFIG.componentsDir}/${componentName}/index.tsx?ref=${tag}`,
      token
    );
    if (!data || !data.content) return null;
    return Buffer.from(data.content, 'base64').toString('utf-8');
  } catch (error) {
    return null;
  }
}

// 레포의 컴포넌트 목록 조회 (최신 main 브랜치)
async function getComponentList(token) {
  try {
    const data = await fetchGitHub(
      `/repos/${CONFIG.repo}/contents/${CONFIG.componentsDir}`,
      token
    );
    if (!data || !Array.isArray(data)) return [];
    return data
      .filter(item => item.type === 'dir' && !item.name.startsWith('_'))
      .map(item => item.name);
  } catch (error) {
    console.error('컴포넌트 목록 조회 실패:', error.message);
    return [];
  }
}

// 두 태그 간 변경 사항 (커밋 메시지)
async function getChangesBetweenTags(componentName, prevTag, currentTag, token) {
  try {
    const compare = await fetchGitHub(
      `/repos/${CONFIG.repo}/compare/${prevTag}...${currentTag}`,
      token
    );
    if (!compare || !compare.commits) return [];

    const filePath = `${CONFIG.componentsDir}/${componentName}/`;
    return compare.commits
      .filter(c => {
        // 파일 변경 정보가 있으면 해당 컴포넌트 파일 변경 여부 확인
        // compare API는 files를 포함하지 않으므로 커밋 메시지만 사용
        return true;
      })
      .map(c => c.commit.message.split('\n')[0])
      .slice(0, 10);
  } catch (error) {
    return [];
  }
}

// 메인 실행
async function main() {
  console.log('컴포넌트 버전 데이터 추출 중...');

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.log('⚠️ GITHUB_TOKEN 미설정. Rate limit이 낮을 수 있습니다.\n');
  }

  // CI 환경에서 이미 데이터가 있으면 건너뛰기
  if (process.env.CI || process.env.VERCEL) {
    if (fs.existsSync(CONFIG.outputPath)) {
      const existing = JSON.parse(fs.readFileSync(CONFIG.outputPath, 'utf-8'));
      if (existing.data && Object.keys(existing.data).length > 0) {
        console.log('✅ CI 환경 - 기존 데이터 사용');
        return;
      }
    }
  }

  const tags = await getAllVersionTags(token);
  const components = await getComponentList(token);

  console.log(`태그: ${tags.length > 0 ? tags.join(', ') : '(없음)'}`);
  console.log(`컴포넌트: ${components.length}개`);

  if (tags.length === 0) {
    console.log('⚠️ 태그가 없습니다. 기존 데이터 유지.');

    // 기존 데이터가 있으면 유지
    if (fs.existsSync(CONFIG.outputPath)) return;

    // 빈 데이터 생성
    saveFallbackData(tags);
    return;
  }

  const componentVersions = {};
  const versionCodes = {};

  for (const component of components) {
    console.log(`  ${component} 처리 중...`);
    componentVersions[component] = { versions: [] };
    versionCodes[component] = {};

    let prevTag = null;

    for (const tag of tags) {
      const code = await getComponentCodeAtTag(component, tag, token);

      if (code !== null) {
        const version = tag.replace('v', '');
        const date = await getTagDate(tag, token);
        const changes = prevTag
          ? await getChangesBetweenTags(component, prevTag, tag, token)
          : ['Initial version'];

        componentVersions[component].versions.push({
          version,
          tag,
          date,
          changes: changes.length > 0 ? changes : ['No changes recorded'],
        });

        versionCodes[component][version] = code;
        prevTag = tag;
      }

      // Rate limit 방지
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    if (componentVersions[component].versions.length === 0) {
      delete componentVersions[component];
      delete versionCodes[component];
    }
  }

  // 출력 디렉토리 생성
  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 메타데이터 저장
  const metadata = {
    generatedAt: new Date().toISOString(),
    totalComponents: Object.keys(componentVersions).length,
    totalVersions: tags.length,
    tags,
    data: componentVersions,
  };

  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(metadata, null, 2));
  console.log(`✅ 메타데이터 저장: ${CONFIG.outputPath}`);

  // 버전별 코드 저장
  const codesOutput = {
    generatedAt: new Date().toISOString(),
    data: versionCodes,
  };

  fs.writeFileSync(CONFIG.codesOutputPath, JSON.stringify(codesOutput, null, 2));
  console.log(`✅ 버전별 코드 저장: ${CONFIG.codesOutputPath}`);

  // 통계 출력
  console.log('\n📊 추출 결과:');
  for (const [component, data] of Object.entries(componentVersions)) {
    console.log(`  ${component}: ${data.versions.length}개 버전`);
  }
}

function saveFallbackData(tags) {
  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(CONFIG.outputPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalComponents: 0,
    totalVersions: tags.length,
    tags,
    data: {},
  }, null, 2));

  fs.writeFileSync(CONFIG.codesOutputPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    data: {},
  }, null, 2));

  console.log('⚠️ 빈 데이터로 저장됨');
}

main().catch(error => {
  console.error('오류 발생:', error);

  if (fs.existsSync(CONFIG.outputPath)) {
    console.log('⚠️ 기존 데이터 유지');
    return;
  }

  saveFallbackData([]);
});
