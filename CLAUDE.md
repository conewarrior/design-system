# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

팀 공용 디자인 시스템 저장소. 디자인 토큰(CSS 변수)과 React 컴포넌트를 중앙에서 관리하고 배포한다.

## 배포 구조

| 파일 | 배포 방식 | 업데이트 반영 |
|------|-----------|---------------|
| `tokens.css` | jsDelivr CDN | 즉시 반영 |
| `components/` | npm 패키지 (@design-geniefy/ui) | 버전 업데이트 후 설치 |
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

## 컴포넌트 생성 규칙 (필수)

**⚠️ 기존 컴포넌트 코드를 참고하지 마라. 기존 코드가 틀렸을 수 있다.**

컴포넌트 생성 시 반드시 다음 순서를 따른다:

1. **design-rules.md를 유일한 소스로 사용**
   - `.claude/skills/design-rules.md` 규칙 먼저 확인
   - 기존 컴포넌트 패턴 복사 금지

2. **생성 전 체크리스트**
   - [ ] 토큰만 사용 (하드코딩 색상/간격 금지)
   - [ ] SVG 아이콘만 사용 (이모지/텍스트 문자 금지)
   - [ ] Shadow 사용 금지 (Modal/Dropdown/Toast 제외)
   - [ ] 적절한 radius 토큰 사용

3. **생성 후 자가 검증**
   - 작성한 코드가 design-rules 위반하는지 점검
   - 위반 발견 시 즉시 수정

4. **기존 컴포넌트 위반 발견 시**
   - 별도로 사용자에게 보고
   - 새 컴포넌트는 규칙대로 작성

## 컴포넌트 추가

1. `components/{ComponentName}/index.tsx` 생성
2. `index.ts`에서 export 추가
3. main 브랜치 push → GitHub Actions가 npm 자동 배포
