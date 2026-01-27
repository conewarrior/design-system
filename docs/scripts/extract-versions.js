#!/usr/bin/env node
/**
 * Git 태그에서 컴포넌트 버전별 코드를 추출
 * 빌드 시 실행되어 component-versions.json 생성
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 설정
const CONFIG = {
  // 컴포넌트 디렉토리
  componentsDir: 'components',
  // 출력 경로
  outputPath: path.join(__dirname, '../data/component-versions.json'),
  // 버전별 코드 출력 경로
  codesOutputPath: path.join(__dirname, '../data/version-codes.json'),
  // GitHub 저장소 URL
  repoUrl: 'https://github.com/conewarrior/design-system',
};

/**
 * 모든 버전 태그 조회
 */
function getAllVersionTags() {
  try {
    const output = execSync('git tag -l "v*"', { encoding: 'utf-8' });
    return output.trim().split('\n').filter(Boolean).sort((a, b) => {
      // 버전 번호로 정렬 (v0.0.1 < v0.0.2)
      const versionA = a.replace('v', '').split('.').map(Number);
      const versionB = b.replace('v', '').split('.').map(Number);
      for (let i = 0; i < 3; i++) {
        if (versionA[i] !== versionB[i]) {
          return versionA[i] - versionB[i];
        }
      }
      return 0;
    });
  } catch (error) {
    console.error('태그 조회 실패:', error.message);
    return [];
  }
}

/**
 * 특정 태그의 커밋 날짜 조회
 */
function getTagDate(tag) {
  try {
    const output = execSync(`git log -1 --format=%ai ${tag}`, { encoding: 'utf-8' });
    return output.trim().split(' ')[0]; // YYYY-MM-DD
  } catch (error) {
    return null;
  }
}

/**
 * 특정 태그에서 컴포넌트 코드 조회
 */
function getComponentCodeAtTag(componentName, tag) {
  const filePath = `${CONFIG.componentsDir}/${componentName}/index.tsx`;
  try {
    return execSync(`git show ${tag}:${filePath}`, { encoding: 'utf-8' });
  } catch (error) {
    // 해당 태그에 컴포넌트가 없는 경우
    return null;
  }
}

/**
 * 현재 존재하는 컴포넌트 목록 조회
 */
function getComponentList() {
  try {
    const componentsPath = path.join(process.cwd(), CONFIG.componentsDir);
    return fs.readdirSync(componentsPath).filter(name => {
      const indexPath = path.join(componentsPath, name, 'index.tsx');
      return fs.existsSync(indexPath);
    });
  } catch (error) {
    console.error('컴포넌트 목록 조회 실패:', error.message);
    return [];
  }
}

/**
 * 두 버전 간 변경 사항 추출 (커밋 메시지 기반)
 */
function getChangesBetweenTags(componentName, prevTag, currentTag) {
  const filePath = `${CONFIG.componentsDir}/${componentName}/index.tsx`;
  try {
    const output = execSync(
      `git log --oneline ${prevTag}..${currentTag} -- ${filePath}`,
      { encoding: 'utf-8' }
    );
    return output.trim().split('\n').filter(Boolean).map(line => {
      // 커밋 해시 제거하고 메시지만
      return line.replace(/^[a-f0-9]+ /, '');
    });
  } catch (error) {
    return [];
  }
}

/**
 * 메인 실행
 */
function main() {
  console.log('컴포넌트 버전 데이터 추출 중...');

  // CI 환경에서 이미 데이터가 있으면 건너뛰기 (Vercel은 shallow clone으로 태그가 없음)
  if (process.env.CI || process.env.VERCEL) {
    if (fs.existsSync(CONFIG.outputPath)) {
      const existing = JSON.parse(fs.readFileSync(CONFIG.outputPath, 'utf-8'));
      if (existing.data && Object.keys(existing.data).length > 0) {
        console.log('✅ CI 환경 - 기존 데이터 사용 (태그 접근 불가)');
        return;
      }
    }
  }

  // Git 루트로 이동
  const gitRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim();
  process.chdir(gitRoot);

  const tags = getAllVersionTags();
  const components = getComponentList();

  console.log(`태그: ${tags.join(', ')}`);
  console.log(`컴포넌트: ${components.join(', ')}`);

  const componentVersions = {};
  const versionCodes = {};

  for (const component of components) {
    componentVersions[component] = { versions: [] };
    versionCodes[component] = {};

    let prevTag = null;

    for (const tag of tags) {
      const code = getComponentCodeAtTag(component, tag);

      if (code !== null) {
        const version = tag.replace('v', '');
        const date = getTagDate(tag);
        const changes = prevTag ? getChangesBetweenTags(component, prevTag, tag) : ['Initial version'];

        componentVersions[component].versions.push({
          version,
          tag,
          date,
          changes: changes.length > 0 ? changes : ['No changes recorded'],
        });

        versionCodes[component][version] = code;
        prevTag = tag;
      }
    }

    // 버전이 없으면 제거
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

main();
