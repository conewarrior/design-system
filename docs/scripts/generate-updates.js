#!/usr/bin/env node
/**
 * GitHub API를 통해 프로젝트별 @geniefy/ui 버전 현황 조회
 * 빌드 시 실행되어 정적 데이터 생성
 *
 * 환경변수:
 * - GITHUB_TOKEN: GitHub Personal Access Token (선택, rate limit 증가용)
 */

const fs = require('fs');
const path = require('path');

// 설정
const CONFIG_PATH = path.join(__dirname, 'projects.config.json');
const OUTPUT_PATH = path.join(__dirname, '../data/updates.json');

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
    if (response.status === 404) {
      return null; // 파일/저장소 없음
    }
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// package.json에서 버전 추출
async function getPackageVersion(repo, packageName, token, subPath = '') {
  try {
    const filePath = subPath ? `${subPath}/package.json` : 'package.json';
    const data = await fetchGitHub(`/repos/${repo}/contents/${filePath}`, token);

    if (!data || !data.content) {
      return null;
    }

    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const pkg = JSON.parse(content);

    // dependencies 또는 devDependencies에서 버전 찾기
    const version = pkg.dependencies?.[packageName] || pkg.devDependencies?.[packageName];

    if (!version) {
      return null;
    }

    // ^ 또는 ~ 제거
    return version.replace(/[\^~]/, '');
  } catch (error) {
    console.error(`  ⚠️ ${repo} 버전 조회 실패:`, error.message);
    return null;
  }
}

// Dependabot PR 조회
async function getDependabotPR(repo, packageName, token) {
  try {
    // Open PR 중 Dependabot이 생성한 것 조회
    const prs = await fetchGitHub(
      `/repos/${repo}/pulls?state=open&per_page=30`,
      token
    );

    if (!prs) return null;

    // @geniefy/ui 업데이트 PR 찾기
    const dependabotPR = prs.find(pr =>
      pr.user?.login === 'dependabot[bot]' &&
      pr.title.toLowerCase().includes(packageName.toLowerCase().replace('@', ''))
    );

    if (dependabotPR) {
      return {
        number: dependabotPR.number,
        title: dependabotPR.title,
        url: dependabotPR.html_url,
        createdAt: dependabotPR.created_at,
      };
    }

    return null;
  } catch (error) {
    console.error(`  ⚠️ ${repo} PR 조회 실패:`, error.message);
    return null;
  }
}

// 최신 버전 조회 (npm registry)
async function getLatestVersion(packageName) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
    if (!response.ok) {
      // 패키지가 아직 npm에 없는 경우
      return '0.0.1';
    }
    const data = await response.json();
    return data.version;
  } catch (error) {
    console.error('npm 버전 조회 실패:', error.message);
    return '0.0.1';
  }
}

// 상태 판별
function getStatus(version, latestVersion, pendingPR) {
  if (!version) {
    return 'not-installed';
  }
  if (pendingPR) {
    return 'pending';
  }
  if (version === latestVersion) {
    return 'latest';
  }
  return 'outdated';
}

// 버전 분포 계산
function calculateVersionDistribution(projects) {
  const counts = {};
  let total = 0;

  for (const project of projects) {
    if (project.version) {
      counts[project.version] = (counts[project.version] || 0) + 1;
      total++;
    }
  }

  // 버전 내림차순 정렬
  return Object.entries(counts)
    .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
    .map(([version, count]) => ({
      version,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }));
}

// 메인 실행
async function main() {
  console.log('Update Dashboard 데이터 생성 중...\n');

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.log('⚠️ GITHUB_TOKEN이 설정되지 않음. Rate limit이 낮을 수 있습니다.\n');
  }

  // 설정 로드
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
  const { packageName, projects: projectConfigs } = config;

  // 최신 버전 조회
  console.log(`📦 ${packageName} 최신 버전 조회...`);
  const latestVersion = await getLatestVersion(packageName);
  console.log(`   최신 버전: v${latestVersion}\n`);

  // 각 프로젝트 조회
  console.log('🔍 프로젝트별 버전 조회...');
  const projects = [];

  for (const projectConfig of projectConfigs) {
    console.log(`   ${projectConfig.name}...`);

    const version = await getPackageVersion(
      projectConfig.repo,
      packageName,
      token,
      projectConfig.path
    );

    const pendingPR = await getDependabotPR(
      projectConfig.repo,
      packageName,
      token
    );

    const status = getStatus(version, latestVersion, pendingPR);

    projects.push({
      name: projectConfig.name,
      repo: projectConfig.repo,
      description: projectConfig.description,
      version: version || null,
      status,
      ...(pendingPR && { prNumber: pendingPR.number, prUrl: pendingPR.url }),
    });

    // Rate limit 방지용 딜레이
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 버전 분포 계산
  const versionData = calculateVersionDistribution(projects);

  // 통계 계산
  const latestCount = projects.filter(p => p.status === 'latest').length;
  const totalWithVersion = projects.filter(p => p.version).length;

  // 출력 데이터 생성
  const output = {
    generatedAt: new Date().toISOString(),
    latestVersion,
    publishedAt: new Date().toISOString().split('T')[0], // 실제로는 npm에서 가져와야 함
    adoptionRate: totalWithVersion > 0 ? Math.round((latestCount / totalWithVersion) * 100) : 0,
    versionData,
    projects,
  };

  // 출력 디렉토리 생성
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // JSON 저장
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));

  console.log(`\n✅ 데이터 저장 완료: ${OUTPUT_PATH}`);
  console.log(`   - 프로젝트: ${projects.length}개`);
  console.log(`   - 최신 버전 사용: ${latestCount}/${totalWithVersion} (${output.adoptionRate}%)`);
}

main().catch(error => {
  console.error('오류 발생:', error);

  // 오류 시 기본 데이터 생성 (빌드 실패 방지)
  const fallbackData = {
    generatedAt: new Date().toISOString(),
    latestVersion: '0.0.1',
    publishedAt: new Date().toISOString().split('T')[0],
    adoptionRate: 0,
    versionData: [],
    projects: [],
    error: error.message,
  };

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fallbackData, null, 2));
  console.log('⚠️ 기본 데이터로 대체 저장됨');
});
