# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

팀 공용 디자인 시스템 저장소. 디자인 토큰(CSS 변수)과 React 컴포넌트를 중앙에서 관리하고 배포한다.

## 배포 구조

- **tokens.css**: jsDelivr CDN으로 즉시 반영 (`https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css`)
- **components/**: GitHub Actions로 npm 자동 배포 (main 브랜치 push 시)

## 명령어

```bash
npm run build    # TypeScript 컴파일 (dist/ 생성)
```

## 파일 구조

```
design-system/
├── tokens.css           # 디자인 토큰 (CDN 배포)
├── index.ts             # 컴포넌트 export 진입점
├── components/          # React 컴포넌트
└── .github/workflows/   # npm 자동 배포
```

## 컴포넌트 추가 규칙

1. `components/{ComponentName}/` 폴더 생성
2. `index.ts`에서 export 추가
3. main 브랜치 push → GitHub Actions가 npm 자동 배포

## 토큰 규칙

- CSS 변수는 `:root`에 정의
- 다크모드는 `.dark` 클래스로 오버라이드
- 네이밍: `--{category}-{name}` (예: `--color-primary`, `--spacing-md`)
