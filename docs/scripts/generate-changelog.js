#!/usr/bin/env node
/**
 * Git 로그를 파싱하여 changelog.json 생성
 * 빌드 시 실행되어 정적 데이터 생성
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 설정
const CONFIG = {
  // 추적할 경로 패턴
  trackedPaths: [
    'components/',
    'tokens.css',
    'docs/app/components/',
  ],
  // 최대 커밋 수
  maxCommits: 100,
  // 출력 경로
  outputPath: path.join(__dirname, '../data/changelog.json'),
  // GitHub 저장소 URL
  repoUrl: 'https://github.com/geniefy/design-system',
};

// 변경 유형 판별
function getChangeType(files, message) {
  const lowerMessage = message.toLowerCase();

  // 토큰 변경
  if (files.some(f => f.includes('tokens.css'))) {
    return 'token';
  }

  // 문서 변경
  if (files.some(f => f.includes('docs/'))) {
    return 'docs';
  }

  // 커밋 메시지 기반 판별
  if (lowerMessage.includes('delete') || lowerMessage.includes('remove') || lowerMessage.includes('삭제')) {
    return 'delete';
  }

  if (lowerMessage.includes('add') || lowerMessage.includes('create') || lowerMessage.includes('추가') || lowerMessage.includes('생성')) {
    return 'add';
  }

  // 기본값: 수정
  return 'modify';
}

// Git 로그 파싱
function parseGitLog() {
  try {
    // Git 루트 디렉토리로 이동
    const gitRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim();
    process.chdir(gitRoot);

    // Git 로그 가져오기 (구분자로 파싱하기 쉽게)
    const format = '--format=COMMIT_START%n%H%n%an%n%ai%n%s%nCOMMIT_END';
    const logOutput = execSync(
      `git log ${format} --name-only -n ${CONFIG.maxCommits}`,
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
      // COMMIT_END 이후의 파일 목록
      const endIndex = lines.indexOf('COMMIT_END');
      const files = lines.slice(endIndex + 1).filter(f => f.trim());

      // 추적 대상 파일만 필터링
      const relevantFiles = files.filter(file =>
        CONFIG.trackedPaths.some(p => file.includes(p))
      );

      // 관련 파일이 없으면 스킵
      if (relevantFiles.length === 0) continue;

      const date = new Date(dateStr);
      const type = getChangeType(relevantFiles, message);

      commits.push({
        id: hash.substring(0, 7),
        type,
        title: message,
        author: author.split(' ')[0].toLowerCase(), // 첫 단어만 (이름)
        date: date.toISOString().split('T')[0],
        time: date.toTimeString().substring(0, 5),
        files: relevantFiles,
        commitUrl: `${CONFIG.repoUrl}/commit/${hash}`,
      });
    }

    return commits;
  } catch (error) {
    console.error('Git 로그 파싱 실패:', error.message);
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

  // 날짜 내림차순 정렬
  return Object.entries(groups)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => b.time.localeCompare(a.time)), // 시간 내림차순
    }));
}

// 메인 실행
function main() {
  console.log('Changelog 데이터 생성 중...');

  const commits = parseGitLog();
  const grouped = groupByDate(commits);

  // 출력 디렉토리 생성
  const outputDir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // JSON 저장
  const output = {
    generatedAt: new Date().toISOString(),
    totalChanges: commits.length,
    data: grouped,
  };

  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(output, null, 2));
  console.log(`✅ ${commits.length}개 변경사항 저장: ${CONFIG.outputPath}`);
}

main();
