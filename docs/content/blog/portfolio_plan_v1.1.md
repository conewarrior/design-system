# 디자인 시스템 포트폴리오 상세 계획 v1.1

> 스타일 가이드: [portfolio-make-guide.md](./portfolio-make-guide.md) 참조
>
> **v1.2 업데이트 (2026-01-26)**
> - 3장: 개념/이론과 실행 로직 분리
> - 4장: design-rules.md 복사 제거 → node_modules 직접 참조로 변경
> - 5장: 토큰 배포 - 자동화 내용 간소화 (상세는 8장)
> - 6장: 컴포넌트 배포 - 자동화 내용 간소화 (상세는 8장)
> - 7장: 품질 체계로 변경 (기존 8장)
> - 8장: **자동화 체계 통합** (토큰/컴포넌트/규칙/업데이트 전체)
> - 전체: 구조 재정리 및 중복 제거

---

## 페이지 구성 (총 9페이지)

| 장 | 제목 | 핵심 내용 |
|----|------|----------|
| 1 | 커버 | 프로젝트 요약 + 타임라인 + 성과 |
| 2 | 문제 정의 | 왜 이 프로젝트가 필요했나 |
| 3 | 솔루션 개요 | 어떤 **개념**으로 해결하려 했나 (이론 중심) |
| 4 | /setup-design | 명령어 실행 시 **실제 작동 로직** (실행 중심) |
| 5 | 토큰 배포 | CDN 배포 원리 + 사용법 (자동화는 8장) |
| 6 | 컴포넌트 배포 | npm 배포 원리 + 버전 관리 (자동화는 8장) |
| 7 | 품질 체계 | Generation Protocol 4단계 검증 |
| 8 | 자동화 체계 | **모든 자동화 통합** (배포/업데이트/동기화) |
| 9 | 문서 사이트 | 최종 아웃풋 - 50+ 페이지 구조 |

---

## 1장. 커버 페이지

### 레이아웃 (16:9, 1920×1080)

**마진:** 48px (8px × 6)

```
┌─ 48px ─────────────────────────────────────────────────────────────── 48px ─┐
│                                                                              │
│ 48px                                                                    48px │
│                                                                              │
│  ┌────────────────────────────┐  ┌────────────────────────────────────────┐ │
│  │                            │  │ [우측 상단 - 제목 영역]                  │ │
│  │                            │  │                                        │ │
│  │                            │  │ Label: 2026 · Design System            │ │
│  │                            │  │                                        │ │
│  │                            │  │ Display:                               │ │
│  │                            │  │ 조직 공용 디자인 시스템 구축             │ │
│  │                            │  │                                        │ │
│  │      대표 이미지            │  │ Body:                                  │ │
│  │                            │  │ 프로젝트마다 다른 UI와 반복되는 설정     │ │
│  │      (문서 사이트           │  │ 문제를 해결하기 위해, 디자인 토큰과      │ │
│  │       스크린샷)             │  │ 컴포넌트를 중앙에서 관리하고 명령어      │ │
│  │                            │  │ 하나로 자동 배포하는 시스템을 구축했다.  │ │
│  │                            │  │                                        │ │
│  │                            │  ├───────────────────┬────────────────────┤ │
│  │                            │  │ [타임라인 좌]      │ [타임라인 우]       │ │
│  │                            │  │                   │                    │ │
│  │                            │  │ ● 문제 정의       │ ● 설정 자동화       │ │
│  │                            │  │   프로젝트마다 다른│   npm 설치, CDN    │ │
│  │                            │  │   컬러, 간격 사용. │   연결, 규칙 복사,  │ │
│  │                            │  │   신규 프로젝트    │   Hook 설정을      │ │
│  │                            │  │   설정에 30분 이상.│   명령어 하나로.   │ │
│  │                            │  │ │                 │ │                  │ │
│  │                            │  │ ● 솔루션 설계     │ ● 업데이트 자동화   │ │
│  │                            │  │   토큰과 컴포넌트를│   Dependabot이 새  │ │
│  │                            │  │   중앙에서 관리,   │   버전 감지 후 PR  │ │
│  │                            │  │   자동 동기화 구조.│   생성, CI 통과 시 │ │
│  │                            │  │                   │   자동 머지.       │ │
│  │                            │  │ │                 │ │                  │ │
│  │                            │  │ ● /setup-design   │ ● 품질 체계        │ │
│  │                            │  │   Claude Code     │   Generation      │ │
│  │                            │  │   Command로 설정   │   Protocol로 토큰  │ │
│  │                            │  │   자동화. 실행    │   미사용, 중복,    │ │
│  │                            │  │   단계와 구성요소. │   접근성 위반 차단.│ │
│  │                            │  │ │                 │ │                  │ │
│  │                            │  │ ● 배포 체계       │ ● 문서 사이트      │ │
│  │                            │  │   토큰은 CDN으로  │   설치 가이드, 토큰│ │
│  │                            │  │   즉시 반영,      │   시각화, 규칙 문서│ │
│  │                            │  │   컴포넌트는 npm  │   버전 대시보드까지│ │
│  │                            │  │   으로 버전 관리.  │   9페이지 구성.    │ │
│  │                            │  │                   │                    │ │
│  │                            │  ├───────────────────┴────────────────────┤ │
│  │                            │  │ [우측 하단 - 성과 2×2 그리드]           │ │
│  │                            │  │                                        │ │
│  │                            │  │ ▸ 토큰 시스템       ▸ 자동화 체계       │ │
│  │                            │  │   3-tier 계층        /setup-design     │ │
│  │                            │  │   CDN 즉시반영       원클릭 설정        │ │
│  │                            │  │                                        │ │
│  │                            │  │ ▸ 품질 관리         ▸ 문서화           │ │
│  │                            │  │   Generation         9페이지 문서      │ │
│  │                            │  │   Protocol           사이트 구축       │ │
│  │                            │  │                                        │ │
│  └────────────────────────────┘  └────────────────────────────────────────┘ │
│                                                                              │
│ 48px                                                                    48px │
│                                                                              │
└─ 48px ─────────────────────────────────────────────────────────────── 48px ─┘
```

### 간격 규격 (8px 배수)

| 요소 | 값 |
|------|-----|
| 페이지 마진 (상하좌우) | 48px |
| 좌/우 영역 간격 | 32px |
| 제목 - 타임라인 간격 | 24px |
| 타임라인 - 성과 간격 | 24px |
| 타임라인 좌/우 열 간격 | 16px |
| 타임라인 각 단계 간격 | 16px |
| 성과 그리드 간격 | 16px |

### 타이포그래피

| 요소 | 토큰 | 크기 |
|------|------|------|
| Label (연도) | `--font-label` | 12px / 500 |
| Display (제목) | `--font-display` | 72px / 700 |
| Body (설명) | `--font-body` | 20px / 400 |
| 타임라인 제목 | `--font-title` | 24px / 600 |
| 타임라인 설명 | `--font-body-sm` | 18px / 400 |
| 성과 제목 | `--font-title` | 24px / 600 |
| 성과 설명 | `--font-body-sm` | 18px / 400 |

---

## 2장. 문제 정의

### 레이아웃
```
Label: Design System · Problem

Heading-1: 프로젝트마다 다른 UI, 반복되는 설정

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ [좌측 - 문제 테이블]                 │ [우측 - Before/After 비주얼]        │
│                                     │                                     │
│ | 문제 | 현상 | 영향 |              │ Before 스크린샷                      │
│ |------|------|------|              │ (색상 불일치 예시)                   │
│ | UI 불일치 | ... | ... |           │            ↓                        │
│ | 설정 복잡 | ... | ... |           │ After 스크린샷                       │
│ | 업데이트 누락 | ... | ... |       │ (일관된 디자인)                      │
│ | 컴포넌트 중복 | ... | ... |       │                                     │
│                                     │                                     │
└─────────────────────────────────────┴─────────────────────────────────────┘
```

### 콘텐츠

| 문제 | 현상 | 영향 |
|------|------|------|
| UI 불일치 | 프로젝트 A는 `#3B82F6`, B는 `#2563EB` 사용 | 브랜드 일관성 붕괴 |
| 설정 복잡 | 토큰 복사, 패키지 설치, 규칙 문서화 7단계 | 신규 프로젝트 온보딩 30분+ |
| 업데이트 누락 | 중앙에서 토큰 변경해도 각 프로젝트 수동 반영 | 버전 파편화 |
| 컴포넌트 중복 | 같은 Button을 프로젝트마다 새로 구현 | 개발 리소스 낭비 |

### 배경 스토리 (발표용)

> "나도 디자인 시스템을 써왔는데, 프로젝트마다 primary가 다르고, 모서리 값이 다르고... 회사 디자인 시스템이라고 하기엔 일관성이 없었다. 새 프로젝트 만들 때마다 기존 프로젝트에서 코드 복사해오고, 대충 설정하고... 바쁘니까 정리는 나중에 하자고 했지만 결국 안 했다. 그러다 보니 '이 색상 어디서 쓰는 거지?' 싶은 코드가 쌓였다."

### 스타일
- 테이블: 헤더 배경색 없음, 첫 열 Primary 컬러, 얇은 구분선
- 비율: 1:1

---

## 3장. 솔루션 개요 (개념/이론)

> **v1.1 변경**: 4장과 분리. 3장은 **개념과 설계 원칙**, 4장은 **실행 로직**.

### 레이아웃
```
Label: Design System · Solution

Heading-1: 중앙 집중형 토큰 + 컴포넌트 + 양방향 동기화

┌─────────────────────────────┬─────────────────────────────────────────────┐
│ Principles                  │ Structure (전체 구조도)                      │
│ ────────────────────────    │ ────────────────────────────────────────    │
│                             │                                             │
│ Single Source of Truth      │      ┌─────────────────────────────┐        │
│ ─────────────────────────   │      │     design-system (중앙)     │        │
│ 모든 토큰/컴포넌트는        │      │  ┌─────────┬───────────────┐│        │
│ 중앙 저장소에서 관리.       │      │  │tokens.css│ components/   ││        │
│ 분산된 복사본 금지.         │      │  └────┬────┴───────┬───────┘│        │
│                             │      └───────┼───────────┼─────────┘        │
│ Zero Config                 │              │           │                  │
│ ─────────────────────────   │         CDN  │           │  npm             │
│ /setup-design 한 번으로     │        즉시  │           │  버전            │
│ 모든 설정 완료.             │        반영  │           │  관리            │
│ 수동 설정 단계 제거.        │              ▼           ▼                  │
│                             │      ┌─────────────────────────────┐        │
│ Bi-directional Sync         │      │      /setup-design          │        │
│ ─────────────────────────   │      │   (설정 자동화 커맨드)        │        │
│ 중앙 → 프로젝트 (다운로드)  │      └──────────────┬──────────────┘        │
│ 프로젝트 → 중앙 (자동 기여) │                     │                       │
│                             │     ┌───────┬───────┼───────┬───────┐       │
│ Auto Sync                   │     ▼       ▼       ▼       ▼       ▼       │
│ ─────────────────────────   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ Dependabot + Auto-merge로   │  │ A   │ │ B   │ │ C   │ │ D   │ │ E   │   │
│ 버전 업데이트 자동 적용.    │  └──┬──┘ └─────┘ └─────┘ └─────┘ └─────┘   │
│                             │     │                                       │
│                             │     │  새 컴포넌트 생성                     │
│                             │     │         │                             │
│                             │     │         ▼                             │
│                             │     │  auto-contribute                      │
│                             │     │         │                             │
│                             │     └─────────┼─────────────────────────────│
│                             │               ▼                             │
│                             │        design-system (중앙에 자동 반영)     │
└─────────────────────────────┴─────────────────────────────────────────────┘
```

### 핵심 개념 요약

| 원칙 | 설명 | 구현 |
|------|------|------|
| Single Source of Truth | 모든 자산은 중앙에서만 관리 | design-system 저장소 |
| Zero Config | 설정 없이 즉시 사용 | /setup-design 커맨드 |
| Bi-directional Sync | 양방향 동기화 | CDN/npm (다운) + auto-contribute (업) |
| Auto Sync | 업데이트 자동 적용 | Dependabot + Auto-merge |

### 스타일
- 소제목 아래 언더라인이 영역 끝까지
- 비율: 1:2

---

## 4장. /setup-design 실행 로직

> **v1.1 변경**: 3장과 분리. 명령어 실행 시 **실제 작동 순서** + **설치되는 모든 파일** 상세화.

### 레이아웃
```
Label: Design System · Setup Command

Heading-1: /setup-design 실행 시 작동 로직

┌────────────────────────────────────────────────────────────────────────────┐
│ Execution Flow (7단계 실행 순서)                                            │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ $ /setup-design                                                      │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  Step 1          Step 2           Step 3           Step 4                  │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐              │
│  │ 프로젝트 │     │ npm     │     │ 토큰    │     │CLAUDE.md│              │
│  │ 타입감지 │ ──→ │ install │ ──→ │ import  │ ──→ │ 설정    │              │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘              │
│                                                                            │
│  Step 5          Step 6                                                    │
│  ┌─────────┐     ┌─────────┐                                              │
│  │ Hooks   │ ──→ │Dependabot│ ──→ 완료!                                   │
│  │ 등록    │     │ 설정    │                                              │
│  └─────────┘     └─────────┘                                              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### 전체 설치 파일 목록

```
프로젝트/
├── package.json                    ← Step 2에서 수정 (@design-geniefy/ui 추가)
├── node_modules/
│   └── @design-geniefy/ui/               ← Step 2에서 설치 (npm 업데이트 시 자동 갱신)
│       ├── tokens.css             ← 토큰 (import로 사용)
│       ├── components/            ← 컴포넌트
│       └── .claude/
│           └── skills/
│               └── design-rules.md ← Hook이 직접 참조 (자동 업데이트!)
│
├── app/layout.tsx                  ← Step 3에서 수정 (Next.js)
│   또는 src/index.tsx             ← Step 3에서 수정 (React)
│   또는 index.html                ← Step 3에서 수정 (HTML)
│
├── CLAUDE.md                       ← Step 4에서 수정/생성
│
├── .claude/
│   ├── settings.local.json        ← Step 5에서 생성 (Hooks 등록)
│   └── scripts/
│       └── auto-contribute.sh     ← Step 5에서 복사
│
└── .github/
    ├── dependabot.yml             ← Step 6에서 생성
    └── workflows/
        └── dependabot-auto-merge.yml  ← Step 6에서 생성
```

> 💡 **핵심 변경**: design-rules.md를 복사하지 않고 node_modules에서 직접 참조합니다.
> npm 업데이트 시 컴포넌트, 토큰, **규칙까지 모두 자동 업데이트**됩니다.

---

### Step 1: 프로젝트 타입 감지

```
package.json 존재 여부 확인
     │
     ├── 있음 → Node.js 프로젝트 (npm 설치 진행)
     │
     └── 없음 → HTML/CSS 프로젝트 (CDN만 설정)
```

---

### Step 2: npm 패키지 설치

**실행 명령:**
```bash
npm install @design-geniefy/ui
```

**수정되는 파일:**
```json
// package.json
{
  "dependencies": {
    "@design-geniefy/ui": "^0.0.1"  // ← 추가됨
  }
}
```

**설치되는 내용:**
```
node_modules/@design-geniefy/ui/
├── dist/                    # 빌드된 컴포넌트
│   └── index.js
├── tokens.css               # 디자인 토큰
├── design-rules.md          # 규칙 문서
└── .claude/
    ├── skills/design-rules.md
    └── scripts/auto-contribute.sh
```

---

### Step 3: 토큰 import 추가

**프로젝트 타입별 처리:**

| 타입 | 파일 | 추가 코드 |
|------|------|----------|
| Next.js | `app/layout.tsx` | `import '@design-geniefy/ui/tokens.css';` |
| React (CRA/Vite) | `src/index.tsx` | `import '@design-geniefy/ui/tokens.css';` |
| HTML/CSS | `index.html` | `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css">` |

**Next.js 예시:**
```tsx
// app/layout.tsx
import '@design-geniefy/ui/tokens.css';  // ← 추가됨

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

### Step 4: CLAUDE.md 설정

**추가되는 내용:**
```markdown
## 디자인 시스템

이 프로젝트는 @design-geniefy/ui 디자인 시스템을 사용합니다.

### 토큰
- CDN: https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css
- 모든 색상, 간격, radius는 tokens.css의 CSS 변수 사용 필수

### 규칙 (자동 적용)
UI 생성 시 design-rules skill이 자동 적용됩니다:
- 하드코딩 색상 금지 (#fff, rgb 등) → var(--color-*) 사용
- 8px 단위 간격만 사용 → var(--spacing-*) 사용
- radius는 토큰만 사용 → var(--radius-*) 사용
- 화면당 컴포넌트 최대 7개
- 배경/강조 색상 최대 3개

### 컴포넌트 기여
components/ 폴더에 새 컴포넌트 생성 시 자동으로 design-system 저장소에 기여됩니다.
```

---

### Step 5: Hook 등록

**생성되는 파일:** `.claude/settings.local.json`

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "matcher": "UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS|디자인",
        "command": "cat node_modules/@design-geniefy/ui/.claude/skills/design-rules.md"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "if [[ \"$CLAUDE_TOOL_ARG_file_path\" == *\"components/\"* ]]; then .claude/scripts/auto-contribute.sh \"$CLAUDE_TOOL_ARG_file_path\"; fi"
      }
    ]
  }
}
```

**Hook 동작 설명:**

| Hook | 트리거 조건 | 실행 내용 | 결과 |
|------|------------|----------|------|
| UserPromptSubmit | "버튼 만들어줘" 입력 | **node_modules에서** design-rules.md 로드 | Generation Protocol 적용 |
| PostToolUse | components/Card.tsx 생성 | auto-contribute.sh 실행 | 중앙 저장소에 자동 커밋 |

> 💡 **자동 업데이트 핵심**: node_modules에서 직접 읽으므로 npm 업데이트 시 규칙도 자동 갱신됩니다.

**auto-contribute.sh 스크립트 동작:**
```bash
# 1. 파일 경로 검증 (components/ 폴더인지 확인)
# 2. GITHUB_TOKEN 확인
# 3. 파일 내용을 base64 인코딩
# 4. GitHub API로 중앙 저장소에 직접 커밋
# 5. 성공/실패 메시지 출력
```

---

### Step 6: Dependabot 설정

**생성되는 파일 1:** `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      timezone: "Asia/Seoul"
    allow:
      - dependency-name: "@design-geniefy/ui"
    commit-message:
      prefix: "chore(deps)"
    labels:
      - "dependencies"
      - "auto-merge"
```

**생성되는 파일 2:** `.github/workflows/dependabot-auto-merge.yml`

```yaml
name: Auto-merge Dependabot PRs

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: write
  pull-requests: write

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'
    steps:
      - name: Check if @design-geniefy/ui update
        id: check
        run: |
          TITLE="${{ github.event.pull_request.title }}"
          if [[ "$TITLE" == *"@design-geniefy/ui"* ]]; then
            echo "is_geniefy_ui=true" >> $GITHUB_OUTPUT
          fi

      - name: Check for major version bump
        id: major
        run: |
          # major 버전 변경 감지 (Breaking Change)
          # major면 자동 머지 안 함

      - name: Enable auto-merge (minor/patch만)
        if: steps.check.outputs.is_geniefy_ui == 'true' && steps.major.outputs.is_major != 'true'
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Comment on major update
        if: steps.major.outputs.is_major == 'true'
        run: |
          gh pr comment "$PR_URL" --body "## Major 버전 업데이트
          Breaking change 가능성. 수동 리뷰 필요."
```

---

### 완료 메시지

```
✅ @design-geniefy/ui 디자인 시스템 설정 완료!

설치된 항목:
┌─────────────────────────────────────────────────────────────┐
│ 파일/폴더                      │ 용도                       │
├─────────────────────────────────────────────────────────────┤
│ package.json                   │ @design-geniefy/ui 의존성 추가    │
│ app/layout.tsx                 │ tokens.css import          │
│ .claude/settings.local.json    │ 2개 Hook 설정              │
│ .claude/scripts/auto-contribute│ 자동 기여 스크립트         │
│ CLAUDE.md                      │ 디자인 규칙 안내           │
│ .github/dependabot.yml         │ 버전 감지 설정             │
│ .github/workflows/auto-merge   │ 자동 머지 워크플로우       │
└─────────────────────────────────────────────────────────────┘

양방향 동기화:
- 업로드: components/ 변경 → 자동 기여 → 중앙 저장소
- 다운로드: 새 버전 배포 → Dependabot PR → 자동 머지
  ✓ 컴포넌트, tokens.css, design-rules.md 모두 자동 업데이트

토큰 참조:
- CDN: https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css
- 문서: https://design.geniefy.ai
```

---

### 에러 처리

| 상황 | 처리 방식 |
|------|----------|
| package.json 없음 | npm 설치 스킵, CDN만 설정 |
| npm install 실패 | 에러 출력, 나머지 단계 계속 진행 |
| GITHUB_TOKEN 없음 | 경고 출력, 자동 기여 비활성화 안내 |
| .github 폴더 없음 | 폴더 생성 후 파일 생성 |
| GitHub 저장소 아님 | Dependabot 설정 스킵, 안내 메시지 출력 |

### 스타일
- 전체 가로 레이아웃
- 코드 블록과 테이블 혼합 사용

---

## 5장. 토큰 배포 (CDN)

> 토큰 배포 원리와 사용법 설명. 자동화 상세는 **8장** 참조.

### 레이아웃
```
Label: Design System · Token Distribution

Heading-1: 토큰은 왜 CDN으로 배포하는가

┌─────────────────────────────┬─────────────────────────────────────────────┐
│ Why CDN                     │ How to Use                                  │
│ ────────────────────────    │ ────────────────────────────────────────    │
│                             │                                             │
│ 버전 없이 항상 최신         │ HTML에 한 줄 추가:                          │
│ 즉시 반영이 필요한          │                                             │
│ 디자인 토큰에 적합          │ <link rel="stylesheet"                      │
│                             │   href="https://cdn.jsdelivr.net/           │
│                             │         gh/conewarrior/design-system/           │
│ ┌─────────────────────────┐ │         tokens.css">                        │
│ │ CDN vs npm 비교         │ │                                             │
│ │                         │ │ CSS에서 사용:                               │
│ │      │ 반영  │ 용도    │ │                                             │
│ │ ─────┼───────┼──────── │ │ .button {                                   │
│ │ CDN  │ 즉시  │ 토큰    │ │   background: var(--color-primary);         │
│ │ npm  │ 버전  │ 컴포넌트│ │   padding: var(--spacing-2);                │
│ │                         │ │   border-radius: var(--radius-md);          │
│ └─────────────────────────┘ │ }                                           │
│                             │                                             │
├─────────────────────────────┼─────────────────────────────────────────────┤
│ Distribution Flow           │ Safety Guard (요약)                         │
│ ────────────────────────    │ ────────────────────────────────────────    │
│                             │                                             │
│ tokens.css 수정             │ 토큰은 모든 프로젝트에 즉시 반영되므로      │
│      │                      │ 보호 장치 필수:                             │
│      ▼                      │                                             │
│ git push (main)             │ ● CODEOWNERS: 관리자 리뷰 필수              │
│      │                      │ ● CI Script: 토큰 삭제 감지 경고            │
│      ▼                      │ ● Generation Protocol: 토큰 미사용 차단     │
│ jsDelivr 캐시 자동 갱신     │                                             │
│      │                      │ ─────────────────────────────────           │
│      ▼                      │ 상세 구현 → 8장 자동화 체계 참조            │
│ 모든 프로젝트 즉시 반영     │                                             │
│                             │                                             │
└─────────────────────────────┴─────────────────────────────────────────────┘
```

### 토큰 삭제 규칙

```
✅ 허용: 토큰 값 변경 (의도적 디자인 변경)
   --color-primary: #3B82F6 → #327039

❌ 금지: 토큰명 삭제/변경 (Breaking Change)
   --color-primary 삭제 시 → 모든 프로젝트 스타일 깨짐
```

### 스타일
- 비율: 1:1

---

## 6장. 컴포넌트 배포 (npm)

> 컴포넌트 배포 원리와 버전 관리 설명. 자동화 상세는 **8장** 참조.

### 레이아웃
```
Label: Design System · Component Distribution

Heading-1: 컴포넌트는 왜 npm으로 배포하는가

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ Why npm                             │ Risk without versioning             │
│ ────────────────────────────────    │ ────────────────────────────────    │
│                                     │                                     │
│ ● 버전 고정 가능                    │ Button v1 사용 중                   │
│   Breaking Change 방지              │      ↓                              │
│                                     │ 중앙에서 Button v2 배포 (API 변경)  │
│ ● 의존성 해결                       │      ↓                              │
│   npm이 자동으로 관리               │ 버전 관리 없으면                    │
│                                     │      ↓                              │
│ ● 표준 생태계                       │ 모든 프로젝트 동시 장애             │
│   모든 개발자가 익숙한 도구         │                                     │
│                                     │                                     │
├─────────────────────────────────────┼─────────────────────────────────────┤
│ Semantic Versioning                 │ Automation (요약)                   │
│ ────────────────────────────────    │ ────────────────────────────────    │
│                                     │                                     │
│ v1.2.3                              │ ● 자동 배포                         │
│ │ │ │                               │   컴포넌트 변경 → 자동 npm publish  │
│ │ │ └─ PATCH: 버그 수정             │                                     │
│ │ └─── MINOR: 기능 추가 (호환)      │ ● 자동 버전 업                      │
│ └───── MAJOR: Breaking Change       │   GitHub Actions → npm version patch│
│                                     │                                     │
│                                     │ ● 양방향 동기화                     │
│                                     │   소비자 → 중앙 (auto-contribute)   │
│                                     │   중앙 → 소비자 (Dependabot)        │
│                                     │                                     │
│                                     │ ─────────────────────────────────   │
│                                     │ 상세 구현 → 8장 자동화 체계 참조    │
└─────────────────────────────────────┴─────────────────────────────────────┘
```

### 스타일
- 비율: 1:1

---

## 7장. 품질 체계 (Generation Protocol)

### 레이아웃
```
Label: Design System · Quality Control

Heading-1: 코드 품질은 왜 생성 단계에서 통제하는가

┌─────────────────────────────────────┬─────────────────────────────────────┐
│ Problem                             │ Risk                                │
│ ────────────────────────────────    │ ────────────────────────────────    │
│                                     │                                     │
│ 양방향 동기화에서 각 프로젝트가     │ ● 토큰 미사용 코드 유입             │
│ 자유롭게 컴포넌트를 생성하면        │   color: #333 → 브랜드 컬러 무시    │
│ 전체 디자인 일관성 붕괴             │                                     │
│                                     │ ● 중복 컴포넌트 난립                │
│                                     │   Button이 있는데 MyButton 생성     │
│                                     │                                     │
│                                     │ ● 접근성 위반 코드                  │
│                                     │   aria-label 누락                   │
│                                     │                                     │
│                                     │ ● 반응형 미대응                     │
│                                     │   모바일에서 깨지는 UI              │
├─────────────────────────────────────┼─────────────────────────────────────┤
│ design-rules.md                     │ Generation Protocol 4단계           │
│ ────────────────────────────────    │ ────────────────────────────────    │
│                                     │                                     │
│ AI가 UI 생성 시 자동으로                 │ Step 1. 토큰 검사                   │
│ 참조하는 규칙 문서                       │ ─────────────────────               │
│                                     │ CSS 변수만 사용했는가?              │
│ UserPromptSubmit Hook으로            │ ❌ color: #333                      │
│ UI 키워드 감지 시 자동 로드               │ ✅ var(--color-foreground)          │
│                                     │                                     │
│ ⚡ node_modules에서 직접 참조            │                                     │
│    → npm 업데이트 시 규칙도              │                                     │
│       자동으로 최신화                   │                                     │
│                                     │                                     │
│ ┌─────────────────────────────────┐ │ Step 2. 중복 검사                   │
│ │ 트리거 키워드                   │ │ ─────────────────────               │
│ │                                 │ │ @design-geniefy/ui에 있는 컴포넌트인가?   │
│ │ UI, 컴포넌트, 버튼, 카드,       │ │ ❌ 직접 Button 구현                 │
│ │ 폼, 레이아웃, 스타일, CSS,      │ │ ✅ import { Button }               │
│ │ 디자인, Button, Input, Modal    │ │                                     │
│ └─────────────────────────────────┘ │ Step 3. 접근성                      │
│                                     │ ─────────────────────               │
│                                     │ aria-label, 키보드 지원 있는가?     │
│                                     │                                     │
│                                     │ Step 4. 반응형                      │
│                                     │ ─────────────────────               │
│                                     │ 모바일 대응 여부 확인               │
└─────────────────────────────────────┴─────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ Example Flow                                                              │
│ ─────────────────────────────────────────────────────────────────────    │
│                                                                          │
│ 요청: "빨간 버튼 만들어줘"                                                │
│         │                                                                │
│         ▼                                                                │
│ UserPromptSubmit Hook 감지                                               │
│ ("버튼" 키워드 매칭)                                                      │
│         │                                                                │
│         ▼                                                                │
│ design-rules.md 자동 로드                                                │
│         │                                                                │
│         ▼                                                                │
│ Generation Protocol 검증                                                 │
│         │                                                                │
│    ┌────┴────────────────────────────────────────┐                       │
│    │                                             │                       │
│    ▼                                             ▼                       │
│ ❌ 첫 시도                                    ✅ 수정 후                 │
│ ──────────────                               ──────────────              │
│ <button style="                              import { Button }           │
│   color: red">                               from '@design-geniefy/ui';         │
│   삭제                                                                   │
│ </button>                                    <Button                     │
│                                                variant="destructive">    │
│ → 토큰 미사용 거부                             삭제                      │
│ → 중복 컴포넌트 거부                         </Button>                   │
│                                                                          │
│                                              → 토큰 사용 ✓               │
│                                              → 기존 컴포넌트 재사용 ✓    │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### 검증 체크리스트

```
검증 체크리스트:
- [ ] 하드코딩 색상 없음 (var(--color-*) 사용)
- [ ] 하드코딩 간격 없음 (var(--spacing-*) 사용)
- [ ] radius는 토큰 사용 (var(--radius-*) 사용)
- [ ] 컴포넌트 수 ≤ 7 (Miller's Law)
- [ ] 색상 수 ≤ 3 (배경/강조)
- [ ] @design-geniefy/ui 컴포넌트 우선 사용
```

### 스타일
- 비율: 1:1 (상단), 전체 (하단 플로우)

---

## 8장. 자동화 체계 (양방향 동기화)

> 중앙 저장소 ↔ 소비자 프로젝트 사이의 **모든 자동화 흐름**

### 핵심 개념: 두 가지 방향

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   [중앙 저장소]                              [소비자 프로젝트들]             │
│   design-system                             project-A, B, C...             │
│                                                                             │
│        │  ─────────── 다운로드 방향 ──────────→   │                        │
│        │  (중앙에서 변경 → 소비자에게 전파)        │                        │
│        │                                           │                        │
│        │  ←────────── 업로드 방향 ─────────────   │                        │
│        │  (소비자가 생성 → 중앙에 기여)            │                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Flow 1: 다운로드 방향 (중앙 → 소비자)

**"관리자가 중앙에서 변경하면 소비자에게 어떻게 전파되는가?"**

```
[중앙 저장소]

Step 1. 관리자가 파일 변경 (components/, tokens.css, design-rules.md)
        │
        │ git push (main)
        ▼
Step 2. GitHub Actions 감지 ─────────────────────────────────────────────────
        │  publish.yml의 paths 조건:
        │  - components/**
        │  - .claude/skills/design-rules.md
        │  - tokens.css
        ▼
Step 3. 자동 버전 업 + npm 배포 ──────────────────────────────────────────────
        │  npm version patch → 0.0.1 → 0.0.2
        │  npm publish → @design-geniefy/ui@0.0.2
        │
════════╪═════════════════════════════════════════════════════════════════════
        │
        ▼                              [소비자 프로젝트]

Step 4. Dependabot 감지 ─────────────────────────────────────────────────────
        │  dependabot.yml: 매일 09:00 @design-geniefy/ui 확인
        │  "0.0.2 버전 발견!"
        ▼
Step 5. PR 자동 생성 ────────────────────────────────────────────────────────
        │  "Bump @design-geniefy/ui from 0.0.1 to 0.0.2"
        ▼
Step 6. Auto-merge ──────────────────────────────────────────────────────────
        │  dependabot-auto-merge.yml
        │  CI 통과 → 자동 머지 (minor/patch)
        │  major → 수동 검토 요청
        ▼
Step 7. 업데이트 완료! ──────────────────────────────────────────────────────
        node_modules/@design-geniefy/ui/ 갱신
        → 컴포넌트, tokens.css, design-rules.md 모두 최신!
```

#### 다운로드 흐름 요약

| Step | 위치 | 트리거 | 실행 주체 | 결과 |
|------|------|--------|----------|------|
| 1 | 중앙 | 관리자 push | - | 파일 변경됨 |
| 2 | 중앙 | paths 매칭 | GitHub Actions | publish.yml 실행 |
| 3 | 중앙 | workflow | publish.yml | npm 새 버전 배포 |
| 4 | 소비자 | 매일 09:00 | Dependabot | 새 버전 감지 |
| 5 | 소비자 | 버전 감지 | Dependabot | PR 생성 |
| 6 | 소비자 | PR 생성 | auto-merge.yml | 자동 머지 |
| 7 | 소비자 | 머지 완료 | - | node_modules 갱신 |

---

### Flow 2: 업로드 방향 (소비자 → 중앙)

**"소비자가 새 컴포넌트를 만들면 중앙에 어떻게 기여되는가?"**

```
[소비자 프로젝트]

Step 1. 개발자가 컴포넌트 요청 ───────────────────────────────────────────────
        │  "StatCard 컴포넌트 만들어줘"
        ▼
Step 2. Claude가 파일 생성 (Write 도구) ──────────────────────────────────────
        │  components/StatCard/index.tsx 생성
        │
        │ Write 도구 실행 완료
        ▼
Step 3. PostToolUse Hook 감지 ────────────────────────────────────────────────
        │  settings.local.json
        │  matcher: "Write|Edit"
        │  조건: file_path에 "components/" 포함 → 매칭!
        ▼
Step 4. auto-contribute.sh 실행 ──────────────────────────────────────────────
        │  1. GITHUB_TOKEN 확인
        │  2. 파일 내용 base64 인코딩
        │  3. GitHub API 호출
        │
════════╪═════════════════════════════════════════════════════════════════════
        │
        ▼                              [중앙 저장소]

Step 5. 자동 커밋 생성 ──────────────────────────────────────────────────────
        │  "feat: add StatCard component (auto-contributed)"
        │  components/StatCard/index.tsx 추가됨
        │
        │ main 브랜치에 커밋
        ▼
Step 6. publish.yml 감지 → npm 배포 ─────────────────────────────────────────
        │  paths: components/** 매칭!
        │  → 자동 버전 업 + npm publish
        ▼
        @design-geniefy/ui@0.0.3 배포
        │
        └──→ (다운로드 흐름으로 연결: 모든 소비자에게 전파)
```

#### 업로드 흐름 요약

| Step | 위치 | 트리거 | 실행 주체 | 결과 |
|------|------|--------|----------|------|
| 1 | 소비자 | 사용자 요청 | - | 컴포넌트 요청 |
| 2 | 소비자 | 요청 처리 | Claude (Write) | 파일 생성 |
| 3 | 소비자 | Write 완료 | PostToolUse Hook | 조건 검사 |
| 4 | 소비자 | Hook 매칭 | auto-contribute.sh | API 호출 |
| 5 | 중앙 | API 요청 | GitHub API | 커밋 생성 |
| 6 | 중앙 | push 감지 | publish.yml | npm 배포 |

---

### 자동화 파일 전체 목록

| 위치 | 파일 | 흐름 | 역할 |
|------|------|------|------|
| 중앙 | `publish.yml` | 다운로드 2-3, 업로드 6 | 변경 감지 → npm publish |
| 중앙 | `token-change-check.yml` | (보호) | 토큰 삭제 감지 경고 |
| 중앙 | `CODEOWNERS` | (보호) | tokens.css 리뷰 필수 |
| 소비자 | `dependabot.yml` | 다운로드 4 | 새 버전 감지 |
| 소비자 | `auto-merge.yml` | 다운로드 6 | 자동 머지 |
| 소비자 | `settings.local.json` | 업로드 3 | PostToolUse Hook |
| 소비자 | `auto-contribute.sh` | 업로드 4 | 중앙에 커밋 |

---

### 버전별 처리

| 유형 | 예시 | 자동 머지 | 비고 |
|------|------|----------|------|
| patch | 0.0.1 → 0.0.2 | ✅ | 버그 수정 |
| minor | 0.0.1 → 0.1.0 | ✅ | 기능 추가 |
| major | 0.x.x → 1.0.0 | ❌ | Breaking Change |

### 스타일
- 2개 플로우 다이어그램 (다운로드/업로드)
- 각 플로우별 요약 테이블

---

## 9장. 문서 사이트

> **v1.1 변경**: 50+ 페이지 상세 구조 추가

### 레이아웃
```
Label: Design System · Documentation

Heading-1: 이 모든 것을 담은 문서 사이트

┌─────────────────────────────┬─────────────────────────────────────────────┐
│ [스크린샷 + 링크]           │ Site Structure (50+ pages)                  │
│                             │ ────────────────────────────────────────    │
│ ┌─────────────────────────┐ │                                             │
│ │                         │ │ docs/                                       │
│ │   문서 사이트 대표       │ │  │                                          │
│ │   스크린샷               │ │  ├─ introduction (1p)                       │
│ │                         │ │  │   └─ 왜 만들었는가                        │
│ └─────────────────────────┘ │  │                                          │
│                             │  ├─ install/ (3p)                           │
│ Why                         │  │   ├─ guide                               │
│ ────────────────────────    │  │   ├─ how-it-works                        │
│                             │  │   └─ cli-reference                       │
│ ● "이게 뭔가요?" 질문 제거  │  │                                          │
│ ● 설정 방법 표준화          │  ├─ tokens/ (20p)                           │
│ ● 기술 선택 근거 문서화     │  │   ├─ overview                            │
│ ● 토큰 시각화               │  │   ├─ colors (시각화)                     │
│ ● 버전 채택 현황 파악       │  │   ├─ spacing (시각화)                    │
│                             │  │   ├─ typography                          │
│                             │  │   ├─ radius                              │
│                             │  │   ├─ shadows                             │
│                             │  │   └─ ... (semantic tokens)               │
│                             │  │                                          │
│                             │  ├─ rules/ (5p)                             │
│                             │  │   ├─ constraints                         │
│                             │  │   ├─ generation-protocol                 │
│                             │  │   ├─ token-safety                        │
│                             │  │   ├─ accessibility                       │
│                             │  │   └─ responsive                          │
│                             │  │                                          │
│                             │  ├─ components/ (20p)                       │
│                             │  │   ├─ overview                            │
│                             │  │   ├─ Button                              │
│                             │  │   ├─ Input                               │
│                             │  │   ├─ Card                                │
│                             │  │   ├─ Modal                               │
│                             │  │   ├─ ... (20개 컴포넌트)                 │
│                             │  │   └─ 각 컴포넌트별:                      │
│                             │  │       - Props 테이블                     │
│                             │  │       - 사용 예시                        │
│                             │  │       - 라이브 프리뷰                    │
│                             │  │                                          │
│                             │  └─ updates/ (2p)                           │
│                             │      ├─ changelog                           │
│                             │      └─ adoption-status                     │
│                             │          (버전별 채택 현황)                 │
└─────────────────────────────┴─────────────────────────────────────────────┘
```

### 문서 사이트 주요 기능

| 섹션 | 페이지 수 | 핵심 기능 |
|------|----------|----------|
| Introduction | 1p | 프로젝트 목적, 배경 설명 |
| Install | 3p | /setup-design 사용법, 작동 원리, CLI 레퍼런스 |
| Tokens | 20p | 색상/간격/타이포 시각화, 복사 가능한 코드 |
| Rules | 5p | Generation Protocol, 토큰 보호 규칙, 접근성 |
| Components | 20p | 20개 컴포넌트 문서, Props, 라이브 프리뷰 |
| Updates | 2p | 변경 이력, 버전별 채택 현황 대시보드 |

### 스타일
- 비율: 1:2
- 우측: IA 트리 구조도

---

## 작업 상태

### 완료
- [x] 1장 커버 페이지 레이아웃 확정
- [x] 2장 문제 정의 레이아웃 확정
- [x] 3장 솔루션 개요 레이아웃 확정 (v1.1: 개념/이론 분리)
- [x] 4장 /setup-design 레이아웃 확정 (v1.1: 실행 로직 분리)
- [x] 5장 토큰 배포 레이아웃 확정 (v1.2: 자동화 간소화)
- [x] 6장 컴포넌트 배포 레이아웃 확정 (v1.2: 자동화 간소화)
- [x] 7장 품질 체계 레이아웃 확정 (v1.2: 기존 8장에서 이동)
- [x] 8장 자동화 체계 레이아웃 확정 (v1.2: 모든 자동화 통합)
- [x] 9장 문서 사이트 레이아웃 확정

### 구현 완료 태스크
- [x] CODEOWNERS 설정 → `.github/CODEOWNERS`
- [x] CI 토큰명 변경 감지 → `.github/workflows/token-change-check.yml`
- [x] Generation Protocol → `.claude/skills/design-rules.md`
- [x] 자동 버전 업 → `.github/workflows/publish.yml`
- [x] design-rules.md 자동 업데이트 → Hook이 node_modules 직접 참조
- [x] publish.yml paths 확장 → design-rules.md, tokens.css 추가

### v1.2 구조 변경 (2026-01-26)
- [x] 5장 토큰 배포 - 자동화 내용 간소화 (상세는 8장 참조)
- [x] 6장 컴포넌트 배포 - 자동화 내용 간소화 (상세는 8장 참조)
- [x] 7장으로 품질 체계(Generation Protocol) 이동
- [x] 8장에 모든 자동화 통합 (배포/업데이트/동기화)

---

*Created: 2026-01-22*
*Updated: 2026-01-26 (v1.1)*
