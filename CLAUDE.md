# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

디자인 시스템 문서 사이트. `@gpters-internal/ui` npm 패키지의 컴포넌트를 문서화하고 디자인 토큰/규칙을 관리한다.

- **이 레포**: Next.js 14 App Router 문서 사이트 (Vercel 배포)
- **컴포넌트 패키지**: `@gpters-internal/ui` (별도 레포 `design-system-ui`, Verdaccio 프라이빗 레지스트리)

## 명령어

```bash
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드 (prebuild 스크립트 자동 실행)
npm run lint         # ESLint 검사 (page.tsx 파일만)
npm run lint:fix     # ESLint 자동 수정
```

### prebuild 스크립트 (npm run build 시 자동 실행)

3개 스크립트 모두 GitHub API로 `conewarrior/design-system-ui` 레포를 조회한다. `GITHUB_TOKEN` 환경변수 설정 시 rate limit 증가.

| 스크립트 | 생성 파일 | 역할 |
|----------|-----------|------|
| `generate-changelog.js` | `data/changelog.json` | GitHub API(컴포넌트) + 로컬 git(문서) 변경 이력 |
| `generate-updates.js` | `data/updates.json` | Verdaccio 버전 + GitHub API 프로젝트 채택 현황 |
| `extract-versions.js` | `data/component-versions.json`, `data/version-codes.json` | GitHub API 태그별 컴포넌트 코드 |

## 프로젝트 구조

```
design-system/                  # Next.js 14 문서 사이트
├── app/                        # 페이지 라우트
│   ├── components/             # 52개 컴포넌트 문서 (각각 page.tsx)
│   ├── tokens/                 # 디자인 토큰 문서 (colors, typography, radius)
│   ├── rules/                  # 디자인 규칙 문서
│   ├── templates/              # 테마 템플릿 (8종)
│   ├── status/                 # 채택 현황, 마이그레이션, 로드맵
│   ├── install/                # 설치 가이드
│   ├── changelog/              # 변경 이력
│   └── updates/                # 업데이트 현황
├── ui/                         # 문서 전용 레이아웃 컴포넌트 (9개)
│   ├── PageHeader.tsx          # 페이지 제목 + 설명 + Separator
│   ├── CodeBlock.tsx           # 코드 블록 + 복사 버튼
│   ├── Container.tsx           # 컴포넌트 데모 컨테이너
│   ├── ContentBox.tsx          # 코드/프로즈 콘텐츠 박스
│   ├── Callout.tsx             # 콜아웃 (default/info/warning/destructive)
│   ├── MarkdownRenderer.tsx    # 마크다운 파싱
│   ├── Sidebar.tsx             # 사이드바 네비게이션
│   ├── TopNav.tsx              # 상단 네비게이션
│   └── LayoutClient.tsx        # 레이아웃 클라이언트
├── lib/utils.ts                # cn() 유틸리티 (tailwind-merge + clsx)
├── styles/globals.css          # Tailwind v4 @theme 토큰 + 유틸리티 클래스
├── content/blog/               # 블로그 글 (MDX, 폴더별 index.mdx + images/)
├── scripts/                    # prebuild 스크립트 (GitHub API 기반)
└── data/                       # 자동 생성 JSON (빌드 시 갱신)
```

## Import 경로 규칙

```typescript
// 컴포넌트 참조 (tsconfig paths → npm 패키지 내부)
import { Button } from "@components/button"

// 프로젝트 루트 기준 절대 경로
import { cn } from "@/lib/utils"

// 문서 전용 레이아웃 컴포넌트 (상대 경로)
import { PageHeader } from '../../ui/PageHeader'
import { Container } from '../../ui/Container'

// 아이콘 (lucide-react)
import { ChevronRight, Mail } from 'lucide-react'
```

| 별칭 | 매핑 대상 |
|------|-----------|
| `@components/*` | `node_modules/@gpters-internal/ui/components/*` |
| `@/*` | 프로젝트 루트 (`./`) |

## 색상 아키텍처 (3-layer)

`styles/globals.css`에 정의된 3계층 색상 시스템:

```
Adobe Spectrum 원시 팔레트 (--spectrum-gray-*, --spectrum-blue-*, ...)
  ↓ :root / .dark 에서 매핑
shadcn 시맨틱 토큰 (--background, --foreground, --primary, --border, ...)
  ↓ @theme 에서 매핑
Tailwind 유틸리티 클래스 (bg-background, text-foreground, border-border, ...)
```

- 라이트/다크 모드: `:root`와 `.dark`에서 Spectrum 원시 값을 다르게 매핑 (단순 반전 아님)
- 추가 시맨틱 색상: `--success`, `--warning`, `--info` (shadcn 기본에 없음)
- 색상 스케일: gray/blue/red/orange/green/yellow/cyan/purple 각 100-900

## Tailwind v4 설정

```css
/* styles/globals.css */
@import "tailwindcss";
@config "../tailwind.config.ts";        /* content 경로 설정 */
@source "../app/**/*.{ts,tsx}";          /* 명시적 소스 경로 */
@source "../ui/**/*.{ts,tsx}";
@custom-variant dark (&:is(.dark *));    /* next-themes 호환 */
```

- `next.config.js`: `trailingSlash: true` (모든 URL에 trailing slash 추가), `transpilePackages: ['@gpters-internal/ui']`

## 배포

- Vercel 프로젝트: `docs` (kimhansols-projects-d104de35)
- GitHub push 시 자동 배포
- 환경변수: `VERDACCIO_TOKEN` (Vercel에 설정됨, npm 패키지 설치용)

## npm 레지스트리

- 패키지: `@gpters-internal/ui` (Verdaccio 프라이빗 레지스트리)
- `.npmrc`: 레지스트리 URL + `${VERDACCIO_TOKEN}` 환경변수 참조
- 컴포넌트 추가/수정은 별도 레포 `design-system-ui`에서 수행 후 `npm update @gpters-internal/ui`

## 주의사항

- `app/rules/page.tsx`는 npm 패키지 `node_modules/@gpters-internal/ui/design-rules.md`를 빌드 시점에 읽는다. 규칙 업데이트 시 `design-system-ui` 레포에서 수정 후 npm 패키지를 업데이트해야 반영됨.
- `data/` 디렉토리 JSON 파일은 빌드 시 자동 생성되므로 직접 수정 불필요. `npm run build`가 prebuild 스크립트를 자동 실행한다.

## docs 텍스트 스타일링

`styles/globals.css`에 정의된 유틸리티 클래스만 사용한다 (10개):

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

## ESLint 규칙

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

## 컴포넌트 생성 규칙 (design-system-ui 레포)

- Tailwind CSS 클래스 + `cn()` 유틸리티만 사용
- SVG 아이콘만 사용 (이모지/텍스트 문자 금지)
- Shadow 사용 금지 (Modal/Dropdown/Toast 제외)
- `data-slot` 속성으로 컴포넌트 부분 식별
- `class-variance-authority (cva)`로 variants 정의
