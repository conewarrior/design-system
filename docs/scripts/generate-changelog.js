#!/usr/bin/env node
/**
 * GitHub API + 로컬 git 로그를 파싱하여 changelog.json 생성
 * - 컴포넌트/토큰 변경: GitHub API (design-system-ui 레포)
 * - 문서 변경: 로컬 git log (이 레포)
 *
 * 환경변수:
 * - GITHUB_TOKEN: GitHub Personal Access Token (선택, rate limit 증가용)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 설정
const CONFIG = {
  // npm 패키지 레포 (컴포넌트/토큰 변경 추적)
  npmRepo: 'conewarrior/design-system-ui',
  npmRepoUrl: 'https://github.com/conewarrior/design-system-ui',
  // 컴포넌트 레포에서 추적할 경로
  npmTrackedPaths: ['components/', 'tokens.css'],
  // docs 레포에서 추적할 경로
  docsTrackedPaths: ['docs/app/components/', 'app/components/'],
  // docs 레포 URL
  docsRepoUrl: 'https://github.com/conewarrior/design-system',
  // 최대 커밋 수
  maxCommits: 100,
  // 출력 경로
  outputPath: path.join(__dirname, '../data/changelog.json'),
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
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// 변경 유형 판별
function getChangeType(files, message) {
  const lowerMessage = message.toLowerCase();

  if (files.some(f => f.includes('tokens.css'))) return 'token';
  if (files.some(f => f.includes('docs/') || f.includes('app/components/'))) return 'docs';

  if (lowerMessage.includes('delete') || lowerMessage.includes('remove') || lowerMessage.includes('삭제')) return 'delete';
  if (lowerMessage.includes('add') || lowerMessage.includes('create') || lowerMessage.includes('추가') || lowerMessage.includes('생성')) return 'add';

  return 'modify';
}

// GitHub API에서 npm 레포 커밋 조회
async function fetchNpmRepoCommits(token) {
  try {
    console.log(`  📦 ${CONFIG.npmRepo} 커밋 조회...`);
    const commits = await fetchGitHub(
      `/repos/${CONFIG.npmRepo}/commits?per_page=${CONFIG.maxCommits}`,
      token
    );

    const results = [];

    for (const commit of commits) {
      // 각 커밋의 상세 정보 (변경 파일 포함)
      const detail = await fetchGitHub(
        `/repos/${CONFIG.npmRepo}/commits/${commit.sha}`,
        token
      );

      const files = (detail.files || []).map(f => f.filename);
      const relevantFiles = files.filter(file =>
        CONFIG.npmTrackedPaths.some(p => file.includes(p))
      );

      if (relevantFiles.length === 0) continue;

      const date = new Date(commit.commit.author.date);
      const type = getChangeType(relevantFiles, commit.commit.message);

      results.push({
        id: commit.sha.substring(0, 7),
        type,
        title: commit.commit.message.split('\n')[0],
        author: (commit.commit.author.name || 'unknown').split(' ')[0].toLowerCase(),
        date: date.toISOString().split('T')[0],
        time: date.toTimeString().substring(0, 5),
        files: relevantFiles,
        commitUrl: `${CONFIG.npmRepoUrl}/commit/${commit.sha}`,
      });

      // Rate limit 방지
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    console.log(`  ✅ npm 레포: ${results.length}개 관련 커밋`);
    return results;
  } catch (error) {
    console.error('  ⚠️ npm 레포 커밋 조회 실패:', error.message);
    return [];
  }
}

// 로컬 git log에서 docs 커밋 조회
function parseLocalDocsLog() {
  try {
    const gitRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim();

    const format = '--format=COMMIT_START%n%H%n%an%n%ai%n%s%nCOMMIT_END';
    const logOutput = execSync(
      `git -C "${gitRoot}" log ${format} --name-only -n ${CONFIG.maxCommits}`,
      { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );

    const commits = [];
    const commitBlocks = logOutput.split('COMMIT_START').filter(Boolean);

    for (const block of commitBlocks) {
      const lines = block.trim().split('\n');
      if (lines.length < 5) continue;

      const hash = lines[0];
      const author = lines[1];
      const dateStr = lines[2];
      const message = lines[3];
      const endIndex = lines.indexOf('COMMIT_END');
      const files = lines.slice(endIndex + 1).filter(f => f.trim());

      const relevantFiles = files.filter(file =>
        CONFIG.docsTrackedPaths.some(p => file.includes(p))
      );

      if (relevantFiles.length === 0) continue;

      const date = new Date(dateStr);

      commits.push({
        id: hash.substring(0, 7),
        type: 'docs',
        title: message,
        author: author.split(' ')[0].toLowerCase(),
        date: date.toISOString().split('T')[0],
        time: date.toTimeString().substring(0, 5),
        files: relevantFiles,
        commitUrl: `${CONFIG.docsRepoUrl}/commit/${hash}`,
      });
    }

    console.log(`  ✅ docs 로컬: ${commits.length}개 관련 커밋`);
    return commits;
  } catch (error) {
    console.error('  ⚠️ 로컬 git 로그 파싱 실패:', error.message);
    return [];
  }
}

// 날짜별 그룹핑
function groupByDate(commits) {
  const groups = {};

  for (const commit of commits) {
    if (!groups[commit.date]) {
      groups[commit.date] = [];
    }
    groups[commit.date].push(commit);
  }

  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => b.time.localeCompare(a.time)),
    }));
}

// 메인 실행
async function main() {
  console.log('Changelog 데이터 생성 중...');

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.log('⚠️ GITHUB_TOKEN 미설정. Rate limit이 낮을 수 있습니다.\n');
  }

  // 두 소스에서 커밋 수집
  const [npmCommits, docsCommits] = await Promise.all([
    fetchNpmRepoCommits(token),
    Promise.resolve(parseLocalDocsLog()),
  ]);

  // 합치고 중복 제거 (같은 id)
  const allCommits = [...npmCommits, ...docsCommits];
  const uniqueCommits = Array.from(
    new Map(allCommits.map(c => [c.id, c])).values()
  );

  const grouped = groupByDate(uniqueCommits);

  // 출력 디렉토리 생성
  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = {
    generatedAt: new Date().toISOString(),
    totalChanges: uniqueCommits.length,
    data: grouped,
  };

  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(output, null, 2));
  console.log(`\n✅ ${uniqueCommits.length}개 변경사항 저장: ${CONFIG.outputPath}`);
}

main().catch(error => {
  console.error('오류 발생:', error);

  // 기존 데이터가 있으면 유지 (빌드 실패 방지)
  if (fs.existsSync(CONFIG.outputPath)) {
    console.log('⚠️ 기존 데이터 유지');
    return;
  }

  // 기존 데이터도 없으면 빈 데이터 생성
  const fallback = {
    generatedAt: new Date().toISOString(),
    totalChanges: 0,
    data: [],
  };

  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(fallback, null, 2));
  console.log('⚠️ 빈 데이터로 대체 저장됨');
});
