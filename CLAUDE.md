# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

팀 공용 디자인 시스템 저장소. shadcn/ui 기반 React 컴포넌트를 중앙에서 관리하고 npm 패키지로 배포한다.

## 기술 스택

- **컴포넌트**: shadcn/ui + Radix UI primitives
- **스타일링**: Tailwind CSS v4 (필수)
- **유틸리티**: class-variance-authority (cva), tailwind-merge, clsx
- **빌드**: TypeScript, npm workspaces

## 배포 구조

| 파일 | 배포 방식 | 업데이트 반영 |
|------|-----------|---------------|
| `components/` | npm 패키지 (@design-geniefy/ui) | 버전 업데이트 후 설치 |
| `tokens.css` | jsDelivr CDN (레거시) | 즉시 반영 |
| `docs/` | 문서 사이트 (Next.js) | 개발용 |

## 명령어

```bash
# 루트 (컴포넌트 라이브러리)
npm run build        # TypeScript 컴파일 (dist/ 생성)

# docs/ (문서 사이트)
cd docs
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드 (prebuild 스크립트 자동 실행)
npm run lint         # ESLint 검사 (page.tsx 파일만)
npm run lint:fix     # ESLint 자동 수정
```

### prebuild 스크립트 (npm run build 시 자동 실행)

| 스크립트 | 생성 파일 | 역할 |
|----------|-----------|------|
| `generate-changelog.js` | `data/changelog.json` | git 커밋에서 변경 이력 추출 |
| `generate-updates.js` | `data/updates.json` | npm 버전/프로젝트 채택 현황 |
| `extract-versions.js` | `data/component-versions.json`, `data/version-codes.json` | 버전별 컴포넌트 코드 |

## 프로젝트 구조

```
design-system/
├── index.ts                # 컴포넌트 export 진입점
├── components/             # shadcn/ui 기반 컴포넌트 (52개)
│   └── _excluded/          # 빌드 제외 컴포넌트
├── lib/utils.ts            # cn() 유틸리티 (tailwind-merge + clsx)
├── hooks/use-mobile.tsx    # 모바일 감지 훅
├── docs/                   # Next.js 14 App Router 문서 사이트
│   ├── app/                # 페이지 라우트
│   ├── ui/                 # 문서 전용 레이아웃 컴포넌트 (6개)
│   │   ├── PageHeader.tsx      # 페이지 제목 + 설명 + Separator
│   │   ├── CodeBlock.tsx       # 코드 블록 + 복사 버튼
│   │   ├── MarkdownRenderer.tsx # 마크다운 파싱 (design-rules.md용)
│   │   ├── Sidebar.tsx         # 사이드바 네비게이션
│   │   ├── TopNav.tsx          # 상단 네비게이션
│   │   └── LayoutClient.tsx    # 레이아웃 클라이언트
│   ├── styles/globals.css  # Tailwind v4 @theme 토큰 + 유틸리티 클래스
│   ├── data/               # 자동 생성 JSON (changelog, updates 등)
│   └── scripts/            # prebuild 스크립트 (changelog, version 추출)
├── tokens.css              # 레거시 디자인 토큰 (CDN)
├── .claude/
│   ├── commands/           # Claude Code 커맨드
│   ├── skills/             # Claude Code 스킬
│   └── scripts/            # 자동화 스크립트
└── .github/workflows/      # npm 자동 배포
```

## Import 경로 규칙

```typescript
// 컴포넌트 내부 (components/*.tsx)
import { cn } from "../lib/utils"
import { useIsMobile } from "../hooks/use-mobile"

// docs에서 컴포넌트 참조 (tsconfig paths)
import { Button } from "@components/button"

// docs에서 문서 전용 레이아웃 컴포넌트
import { PageHeader } from '../../ui/PageHeader'
import { CodeBlock } from '../../ui/CodeBlock'
import { Sidebar } from '../../ui/Sidebar'

// npm 패키지 사용자
import { Button, Input, cn } from "@design-geniefy/ui"
```

## docs 텍스트 스타일링

`docs/styles/globals.css`에 정의된 유틸리티 클래스만 사용한다 (10개):

| 클래스 | 용도 |
|--------|------|
| `text-page-title` | 페이지 메인 제목 (36px, bold) |
| `text-page-description` | 페이지 설명 (18px, muted) |
| `text-section-title` | 섹션 제목 (24px, semibold) |
| `text-subsection-title` | 소제목 (20px, semibold) |
| `text-card-title` | 카드/단계 제목 (16px, semibold) |
| `text-body` | 본문 (16px) |
| `text-body-sm` | 작은 본문 (14px, muted) |
| `text-caption` | 캡션 (12px, muted) |
| `text-code` | 코드/토큰 값 (12px, mono) |
| `text-label` | 라벨 (14px, medium) |

**조합 예시**:
- 그룹 헤더: `text-card-title text-muted-foreground`
- 숫자 인디케이터: `text-caption font-medium`
- 강조 텍스트: `font-medium` 또는 `font-semibold`

## ESLint 규칙 (docs)

페이지 파일(`app/**/page.tsx`)에서 **로컬 컴포넌트 정의 금지**:

```tsx
// ❌ 금지: page.tsx 내에서 컴포넌트 정의
function MyCard() { ... }
const MyButton = () => { ... }

// ✅ 올바른 사용: import
import { Card } from '@components/card'
import { PageHeader } from '../../ui/PageHeader'
```

Page 컴포넌트(`export default function XxxPage`)는 예외.

## Claude Code 커맨드/스킬

- `/setup-design`: 프로젝트에 디자인 시스템 자동 설정 (Tailwind 설치, 패키지 설치, 규칙 복사)
- `design-rules` 스킬: UI 생성 시 토큰 사용 강제, Generation Protocol 적용

## 컴포넌트 생성 규칙 (필수)

**⚠️ 기존 컴포넌트 코드를 참고하지 마라. 기존 코드가 틀렸을 수 있다.**

### shadcn/ui 패턴 준수

1. **파일 구조**: `components/{component-name}.tsx` (단일 파일)
2. **스타일링**: Tailwind CSS 클래스 + `cn()` 유틸리티
3. **Variants**: `class-variance-authority (cva)` 사용
4. **Primitives**: Radix UI 기반 컴포넌트는 Radix 사용

### 생성 전 체크리스트

- [ ] Tailwind 클래스만 사용 (하드코딩 색상/간격 금지)
- [ ] SVG 아이콘만 사용 (이모지/텍스트 문자 금지)
- [ ] Shadow 사용 금지 (Modal/Dropdown/Toast 제외)
- [ ] `data-slot` 속성으로 컴포넌트 부분 식별

### 생성 후 자가 검증

- 작성한 코드가 design-rules 위반하는지 점검
- 위반 발견 시 즉시 수정

## 컴포넌트 추가

1. `components/{component-name}.tsx` 생성 (shadcn 패턴)
2. `index.ts`에서 export 추가
3. `npm run build`로 빌드 확인
4. main 브랜치 push → GitHub Actions가 npm 자동 배포

## 현재 컴포넌트 목록 (52개)

accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

## 제외된 컴포넌트

- `resizable`: 타입 에러로 인해 `_excluded/`로 이동
