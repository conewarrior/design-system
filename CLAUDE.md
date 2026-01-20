# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

팀 공용 디자인 시스템 저장소. 디자인 토큰(CSS 변수)과 React 컴포넌트를 중앙에서 관리하고 배포한다.

## 배포 구조

| 파일 | 배포 방식 | 업데이트 반영 |
|------|-----------|---------------|
| `tokens.css` | jsDelivr CDN | 즉시 반영 |
| `components/` | npm 패키지 (@geniefy/ui) | 버전 업데이트 후 설치 |
| `docs/` | 문서 사이트 (Next.js) | 개발용 |

## 명령어

```bash
# 루트 (컴포넌트 라이브러리)
npm run build        # TypeScript 컴파일 (dist/ 생성)

# docs/ (문서 사이트)
cd docs
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드
```

## 프로젝트 구조

```
design-system/
├── tokens.css              # 디자인 토큰 (CDN 배포)
├── index.ts                # 컴포넌트 export 진입점
├── components/             # React 컴포넌트 (npm 배포)
│   ├── Button/
│   └── Input/
├── docs/                   # Next.js 14 App Router 문서 사이트
│   ├── app/                # 페이지 라우트
│   ├── ui/                 # 문서 전용 UI 컴포넌트
│   └── styles/globals.css  # 문서 사이트 스타일
├── .claude/
│   ├── commands/           # Claude Code 커맨드
│   ├── skills/             # Claude Code 스킬
│   └── scripts/            # 자동화 스크립트
└── .github/workflows/      # npm 자동 배포
```

## Claude Code 커맨드/스킬

- `/setup-design`: 프로젝트에 디자인 시스템 자동 설정 (토큰 CDN, 패키지 설치, 규칙 복사)
- `design-rules` 스킬: UI 생성 시 토큰 사용 강제, Generation Protocol 적용

## 토큰 규칙

- CSS 변수는 `:root`에 정의
- 다크모드는 `.dark` 클래스로 오버라이드
- 네이밍: `--{category}-{name}` (예: `--color-primary`, `--spacing-md`)
- 컴포넌트에서 하드코딩 px 값 금지, 토큰 변수만 사용

## 컴포넌트 추가

1. `components/{ComponentName}/index.tsx` 생성
2. `index.ts`에서 export 추가
3. main 브랜치 push → GitHub Actions가 npm 자동 배포
