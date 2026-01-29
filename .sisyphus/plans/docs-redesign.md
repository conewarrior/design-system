# Docs Site Redesign - shadcn Style

## TL;DR

> **Quick Summary**: docs 사이트 UI를 shadcn/ui 문서 스타일로 전면 리디자인. 콘텐츠 유지, 스타일만 변경.
>
> **Deliverables**:
> - globals.css 재작성 (4,201줄 → ~200줄)
> - 레이아웃 컴포넌트 리디자인 (Header, Sidebar, Main)
> - 22개 핵심 페이지 UI 업데이트
> - 52개 컴포넌트 문서 자동 생성 스크립트
> - workspace 연동 설정
> - Portfolio 페이지 삭제
>
> **Estimated Effort**: Large (3-5일)
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 → Task 2 → Task 4 → Task 6

---

## Context

### Original Request
npm으로 배포되는 디자인 시스템 컴포넌트와 동일한 것을 보여주는 문서 사이트가 필요. 현재 docs 사이트가 "못생겼다"고 하여 shadcn/ui 문서 스타일로 전면 리디자인 요청.

### Interview Summary
**Key Discussions**:
- 페이지 구조 유지, UI만 전면 리디자인
- 기존 tokens.css 값 유지 (새 토큰 추가 X)
- shadcn 컴포넌트 그대로 활용
- Template 페이지 (8개): 스코프 제외 (현재 상태 유지)
- Portfolio 페이지 (CRO/DS): 삭제
- 컴포넌트 문서: 자동 생성 스크립트로 52개 생성

**Research Findings**:
- globals.css 실제 줄 수: **4,201줄** (커스텀 CSS 클래스 방식)
- shadcn 패턴: ~200줄 globals.css + Tailwind utilities
- workspace 이미 설정됨: `workspaces: ["docs"]`

### Metis Review
**Identified Gaps** (addressed):
- Template/Portfolio 스코프 불명확 → 사용자 결정 완료 (제외/삭제)
- "shadcn style" 주관적 → 구체적 기준 정의 (배경 통일, 라인 제거)
- 4,201줄 CSS 마이그레이션 복잡성 → 단계별 진행

---

## Work Objectives

### Core Objective
docs 사이트의 모든 UI를 shadcn/ui 문서 스타일로 변경하여 미니멀하고 모던한 디자인 구현

### Concrete Deliverables
- `docs/styles/globals.css` 재작성 (~200줄)
- `docs/components/layout/` 레이아웃 컴포넌트 (Header, Sidebar, Main)
- 22개 핵심 페이지 UI 업데이트
- `docs/scripts/generate-component-docs.js` 스크립트
- 52개 컴포넌트 문서 페이지 (`docs/app/components/[name]/page.tsx`)
- `docs/package.json` workspace 연동 설정

### Definition of Done
- [ ] `npm run dev` 정상 실행
- [ ] `npm run build` 성공 (exit code 0)
- [ ] 모든 페이지 라우트 접근 가능
- [ ] 사이드바와 메인 영역 사이 border 없음
- [ ] 배경색 통일 (사이드바 = 메인)
- [ ] Tailwind utilities만 사용 (커스텀 CSS 클래스 최소화)

### Must Have
- shadcn 스타일 레이아웃 (배경 통일, 라인 제거)
- 기존 페이지 콘텐츠 유지
- 52개 컴포넌트 문서 생성
- workspace 연동으로 `@design-geniefy/ui` import 가능
- 중복 컴포넌트 재사용 (DRY 원칙): 전역/반복 컴포넌트는 공통 컴포넌트로 추출

### Must NOT Have (Guardrails)
- tokens.css 수정 금지
- 새로운 디자인 토큰 추가 금지
- Template 페이지 (8개) 수정 금지
- Search, TOC 등 새 기능 추가 금지
- 컴포넌트 소스 파일 (`components/*.tsx`) 수정 금지
- 빌드/배포 워크플로우 변경 금지

---

## Verification Strategy (MANDATORY)

### Test Decision
- **Infrastructure exists**: NO (현재 테스트 인프라 없음)
- **User wants tests**: Manual-only
- **Framework**: none

### Automated Verification (Agent-Executable)

**모든 검증은 에이전트가 직접 실행:**

**빌드 검증 (Bash):**
```bash
cd docs && npm run build
# Assert: Exit code 0
```

**페이지 접근 검증 (Bash curl):**
```bash
curl -s http://localhost:3000 | grep -q "design"
# Assert: Exit code 0
```

**Visual 검증 (Playwright):**
```typescript
// 사이드바-메인 border 없음 확인
const sidebar = await page.locator('[data-slot="sidebar"]');
const borderRight = await sidebar.evaluate(el => getComputedStyle(el).borderRightWidth);
expect(borderRight).toBe('0px');

// 배경색 통일 확인
const sidebarBg = await sidebar.evaluate(el => getComputedStyle(el).backgroundColor);
const main = await page.locator('[data-slot="main"]');
const mainBg = await main.evaluate(el => getComputedStyle(el).backgroundColor);
expect(sidebarBg).toBe(mainBg);
```

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately):
├── Task 1: globals.css 재작성
└── Task 3: Portfolio 페이지 삭제

Wave 2 (After Task 1):
├── Task 2: 레이아웃 컴포넌트 리디자인
└── Task 5: workspace 연동 설정

Wave 3 (After Task 2):
├── Task 4: 핵심 페이지 UI 업데이트 (22개)
└── Task 6: 컴포넌트 문서 자동 생성

Critical Path: Task 1 → Task 2 → Task 4 → Task 6
Parallel Speedup: ~40% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 2, 4 | 3 |
| 2 | 1 | 4 | 5 |
| 3 | None | None | 1 |
| 4 | 2 | 6 | 5 |
| 5 | None | 6 | 2, 3 |
| 6 | 4, 5 | None | None (final) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1, 3 | visual-engineering (Task 1), quick (Task 3) |
| 2 | 2, 5 | visual-engineering (Task 2), quick (Task 5) |
| 3 | 4, 6 | visual-engineering (Task 4), quick (Task 6) |

---

## TODOs

- [x] 1. globals.css 재작성

  **What to do**:
  - 현재 4,201줄의 커스텀 CSS 클래스를 백업
  - 새로운 globals.css 생성 (~200줄):
    - Tailwind CSS v4 imports (`@import "tailwindcss"`)
    - tokens.css import (`@import './tokens.css'`)
    - @theme 블록 (토큰 → Tailwind 매핑)
    - 최소한의 base 스타일 (html, body, a)
  - 커스텀 CSS 클래스 (.page-title, .sidebar-link 등) 제거

  **Must NOT do**:
  - tokens.css 수정 금지
  - 새로운 CSS 변수 추가 금지
  - Template 페이지용 스타일 유지 필요 (해당 페이지만)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: CSS 리팩토링, Tailwind 마이그레이션은 프론트엔드 스타일링 작업
  - **Skills**: [`frontend-ui-ux`, `design-system`]
    - `frontend-ui-ux`: Tailwind CSS v4, shadcn 스타일링 패턴
    - `design-system`: 토큰 시스템 이해, CSS 변수 매핑

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 3)
  - **Blocks**: Task 2, Task 4
  - **Blocked By**: None (can start immediately)

  **References**:
  
  **Pattern References**:
  - `docs/styles/globals.css` - 현재 파일 (백업 후 재작성 대상)
  - shadcn globals.css 패턴: https://ui.shadcn.com/docs/installation/next
  
  **Token References**:
  - `docs/styles/tokens.css` - 토큰 정의 파일 (import만 유지)
  - `docs/styles/globals.css:14-58` - 현재 @theme 블록 (유지 필요)

  **Acceptance Criteria**:
  
  **Automated Verification (Bash):**
  ```bash
  # 파일 줄 수 확인
  wc -l docs/styles/globals.css
  # Assert: < 300 lines
  
  # 커스텀 클래스 제거 확인 (주요 클래스들)
  grep -c "\.page-title\|\.sidebar-link\|\.top-nav" docs/styles/globals.css
  # Assert: 0
  
  # Tailwind import 존재 확인
  grep -q '@import "tailwindcss"' docs/styles/globals.css
  # Assert: Exit code 0
  
  # 빌드 검증
  cd docs && npm run build
  # Assert: Exit code 0
  ```

  **Evidence to Capture:**
  - [ ] `wc -l` 출력 (줄 수)
  - [ ] `npm run build` 성공 로그

  **Commit**: YES
  - Message: `refactor(docs): rewrite globals.css to minimal shadcn style`
  - Files: `docs/styles/globals.css`, `docs/styles/globals.css.backup`
  - Pre-commit: `cd docs && npm run build`

---

- [x] 2. 레이아웃 컴포넌트 리디자인

  **What to do**:
  - `docs/components/` 폴더에 새 레이아웃 컴포넌트 생성:
    - `layout/sidebar.tsx` - shadcn 스타일 사이드바
    - `layout/header.tsx` - shadcn 스타일 헤더 (선택적, 현재 TopNav 대체)
    - `layout/main.tsx` - 메인 콘텐츠 래퍼
  - `docs/app/layout.tsx` 업데이트하여 새 컴포넌트 사용
  - 기존 `LayoutClient` 컴포넌트 대체
  - **DRY 원칙 적용**: 모든 페이지에서 반복되는 컴포넌트는 `components/` 폴더로 추출

  **shadcn 스타일 요구사항**:
  - 사이드바와 메인 사이 border 제거
  - 배경색 통일 (neutral-50 또는 white)
  - 사이드바 너비: 220px (shadcn 기준)
  - 메인 콘텐츠 최대 너비: 40rem
  - `data-slot` 속성 추가 (sidebar, main, header)

  **Must NOT do**:
  - Template 페이지용 레이아웃 변경 금지 (bypass 유지)
  - 새로운 기능 추가 금지 (TOC, Search 등)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: React 컴포넌트 + Tailwind 스타일링 = 프론트엔드 UI 작업
  - **Skills**: [`frontend-ui-ux`, `design-system`]
    - `frontend-ui-ux`: shadcn 컴포넌트 패턴, 레이아웃 설계
    - `design-system`: 일관된 디자인 시스템 적용

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Task 5)
  - **Blocks**: Task 4
  - **Blocked By**: Task 1

  **References**:
  
  **Pattern References**:
  - `docs/app/layout.tsx` - 현재 레이아웃 (수정 대상)
  - `components/sidebar.tsx` - 디자인 시스템의 사이드바 컴포넌트 (참고용)
  - shadcn sidebar: https://ui.shadcn.com/docs/components/sidebar
  
  **Current Implementation**:
  - `docs/app/components/LayoutClient.tsx` (있다면) - 현재 레이아웃 로직

  **Acceptance Criteria**:
  
  **Automated Verification (Playwright):**
  ```typescript
  // playwright skill 사용
  test('Layout matches shadcn style', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // data-slot 속성 존재 확인
    await expect(page.locator('[data-slot="sidebar"]')).toBeVisible();
    await expect(page.locator('[data-slot="main"]')).toBeVisible();
    
    // border 없음 확인
    const sidebar = page.locator('[data-slot="sidebar"]');
    const borderRight = await sidebar.evaluate(el => 
      getComputedStyle(el).borderRightWidth
    );
    expect(borderRight).toBe('0px');
    
    // 스크린샷 저장
    await page.screenshot({ path: '.sisyphus/evidence/task-2-layout.png' });
  });
  ```
  
  **Automated Verification (Bash):**
  ```bash
  # 개발 서버 실행 및 접근 확인
  cd docs && npm run dev &
  sleep 5
  curl -s http://localhost:3000 | grep -q 'data-slot="sidebar"'
  # Assert: Exit code 0
  
  # 빌드 검증
  npm run build
  # Assert: Exit code 0
  ```

  **Evidence to Capture:**
  - [ ] 스크린샷: `.sisyphus/evidence/task-2-layout.png`
  - [ ] curl 출력

  **Commit**: YES
  - Message: `feat(docs): add shadcn-style layout components`
  - Files: `docs/components/layout/*.tsx`, `docs/app/layout.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [x] 3. Portfolio 페이지 삭제

  **What to do**:
  - `docs/app/portfolio/` 폴더 전체 삭제
  - 사이드바 네비게이션에서 Portfolio 링크 제거 (있다면)

  **Must NOT do**:
  - 다른 페이지 삭제 금지
  - 백업 생성 권장 (삭제 전)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 단순 파일 삭제 작업
  - **Skills**: [`git-master`]
    - `git-master`: 안전한 파일 삭제 및 커밋

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References**:
  - `docs/app/portfolio/` - 삭제 대상 폴더
  - `docs/app/portfolio/cro/` - CRO 슬라이드
  - `docs/app/portfolio/ds/` - DS 슬라이드

  **Acceptance Criteria**:
  
  **Automated Verification (Bash):**
  ```bash
  # 폴더 삭제 확인
  [ ! -d "docs/app/portfolio" ] && echo "DELETED"
  # Assert: Output contains "DELETED"
  
  # 빌드 검증 (없는 라우트 참조 없음)
  cd docs && npm run build
  # Assert: Exit code 0
  ```

  **Evidence to Capture:**
  - [ ] 폴더 삭제 확인 출력

  **Commit**: YES
  - Message: `chore(docs): remove portfolio pages`
  - Files: `docs/app/portfolio/` (deleted)
  - Pre-commit: `cd docs && npm run build`

---

- [~] 4. 핵심 페이지 UI 업데이트 (22개) - 3/22 완료, 패턴 확립

  **What to do**:
  - 각 페이지의 커스텀 CSS 클래스를 Tailwind utilities로 교체
  - 대상 페이지:
    - `/` (home)
    - `/components` (메인)
    - `/tokens` + 6개 하위 (colors, spacing, typography, radius, border, effects)
    - `/install` + 1개 하위 (how-it-works)
    - `/rules` + 2개 하위 (philosophy, changelog)
    - `/status` + 7개 하위
    - `/changelog`
    - `/updates`

  **변환 패턴:**
  ```tsx
  // Before
  <h1 className="page-title">Title</h1>
  
  // After
  <h1 className="text-4xl font-bold tracking-tight mb-2">Title</h1>
  ```

  **Must NOT do**:
  - 콘텐츠 변경 금지
  - Template 페이지 (/templates/*) 수정 금지
  - 페이지 라우트 변경 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 대량의 CSS 클래스 → Tailwind 변환 작업
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Tailwind utilities, 일관된 스타일링

  **Parallelization**:
  - **Can Run In Parallel**: YES (Task 4 내부에서 페이지별 병렬 가능)
  - **Parallel Group**: Wave 3 (with Task 6 after Task 4 done)
  - **Blocks**: Task 6
  - **Blocked By**: Task 2

  **References**:
  
  **Pattern References**:
  - shadcn docs 페이지 스타일: https://ui.shadcn.com/docs
  - 새 globals.css (Task 1에서 생성)
  
  **Page Files**:
  - `docs/app/page.tsx` - 홈페이지
  - `docs/app/tokens/page.tsx` - 토큰 메인
  - `docs/app/tokens/colors/page.tsx` - 색상 토큰
  - `docs/app/install/page.tsx` - 설치 가이드
  - (전체 목록은 glob 결과 참조)

  **Acceptance Criteria**:
  
  **Automated Verification (Bash):**
  ```bash
  # 모든 페이지 라우트 접근 확인
  cd docs && npm run dev &
  sleep 5
  
  for route in "/" "/tokens" "/tokens/colors" "/install" "/rules" "/status" "/changelog" "/updates"; do
    curl -s "http://localhost:3000$route" | grep -q "</html>"
    if [ $? -ne 0 ]; then echo "FAIL: $route"; exit 1; fi
  done
  echo "All routes accessible"
  # Assert: "All routes accessible"
  
  # 빌드 검증
  npm run build
  # Assert: Exit code 0
  ```
  
  **Automated Verification (Playwright):**
  ```typescript
  // 각 페이지 스크린샷 저장
  const routes = ['/', '/tokens', '/install', '/rules', '/status'];
  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`);
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-4-page-${route.replace(/\//g, '-')}.png` 
    });
  }
  ```

  **Evidence to Capture:**
  - [ ] 각 페이지 스크린샷
  - [ ] curl 접근 확인 로그

  **Commit**: YES (페이지 그룹별로 분리 커밋 권장)
  - Message: `style(docs): migrate [section] pages to Tailwind utilities`
  - Files: `docs/app/[section]/**/*.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [x] 5. workspace 연동 설정

  **What to do**:
  - `docs/package.json`에 의존성 추가:
    ```json
    {
      "dependencies": {
        "@design-geniefy/ui": "workspace:*"
      }
    }
    ```
  - `docs/tsconfig.json`의 `@components/*` alias 제거 또는 유지 (선택)
  - `npm install` 실행하여 symlink 생성
  - 테스트용 import 추가하여 동작 확인

  **Must NOT do**:
  - 루트 package.json 수정 금지
  - 기존 컴포넌트 소스 수정 금지

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 설정 파일 수정, npm 명령 실행
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Task 2)
  - **Blocks**: Task 6
  - **Blocked By**: None (but makes sense after Task 1)

  **References**:
  - `docs/package.json` - 수정 대상
  - `package.json` - 루트 workspace 설정 확인용
  - npm workspaces 문서: https://docs.npmjs.com/cli/v7/using-npm/workspaces

  **Acceptance Criteria**:
  
  **Automated Verification (Bash):**
  ```bash
  # workspace 링크 확인
  ls -la docs/node_modules/@design-geniefy/ui
  # Assert: symlink exists
  
  # import 가능 확인
  cd docs
  echo "import { Button } from '@design-geniefy/ui'; console.log(Button);" > /tmp/test-import.tsx
  npx tsc --noEmit /tmp/test-import.tsx 2>&1 | grep -v "error"
  # Assert: No TypeScript errors
  
  # 빌드 검증
  npm run build
  # Assert: Exit code 0
  ```

  **Evidence to Capture:**
  - [ ] symlink 확인 출력
  - [ ] tsc 검증 결과

  **Commit**: YES
  - Message: `feat(docs): add workspace linking for @design-geniefy/ui`
  - Files: `docs/package.json`
  - Pre-commit: `npm install && cd docs && npm run build`

---

- [ ] 6. 컴포넌트 문서 자동 생성 스크립트

  **What to do**:
  - `docs/scripts/generate-component-docs.js` 스크립트 생성
  - 기능:
    - `components/*.tsx` 파일 스캔
    - 각 컴포넌트에 대해 `docs/app/components/[name]/page.tsx` 생성
    - 기본 템플릿: 컴포넌트 이름, import 예시, 기본 사용 예시
  - 스크립트 실행하여 52개 문서 생성
  - `docs/app/components/page.tsx` 업데이트 (컴포넌트 목록)

  **문서 템플릿:**
  ```tsx
  // docs/app/components/button/page.tsx
  import { Button } from '@design-geniefy/ui'
  
  export default function ButtonPage() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Button</h1>
          <p className="text-muted-foreground mt-2">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Usage</h2>
          <pre><code>{`import { Button } from '@design-geniefy/ui'`}</code></pre>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Examples</h2>
          <div className="flex gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </div>
    )
  }
  ```

  **Must NOT do**:
  - 컴포넌트 소스 파일 수정 금지
  - 과도한 문서 내용 추가 금지 (기본만)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Node.js 스크립트 작성 + 실행
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO (Task 4, 5 완료 후)
  - **Parallel Group**: Wave 3 (after 4, 5)
  - **Blocks**: None (final task)
  - **Blocked By**: Task 4, Task 5

  **References**:
  
  **Component List**:
  - `index.ts` - 모든 컴포넌트 export 목록
  - `components/*.tsx` - 52개 컴포넌트 소스
  
  **Pattern References**:
  - shadcn component docs: https://ui.shadcn.com/docs/components/button
  - `docs/scripts/generate-changelog.js` - 기존 생성 스크립트 패턴

  **Acceptance Criteria**:
  
  **Automated Verification (Bash):**
  ```bash
  # 스크립트 실행
  node docs/scripts/generate-component-docs.js
  # Assert: Exit code 0
  
  # 생성된 파일 수 확인
  ls docs/app/components/*/page.tsx | wc -l
  # Assert: >= 52
  
  # 주요 컴포넌트 문서 존재 확인
  for comp in button input dialog card; do
    [ -f "docs/app/components/$comp/page.tsx" ] || { echo "MISSING: $comp"; exit 1; }
  done
  echo "All key component docs exist"
  
  # 빌드 검증
  cd docs && npm run build
  # Assert: Exit code 0
  ```

  **Evidence to Capture:**
  - [ ] 생성된 파일 수 (`ls | wc -l` 출력)
  - [ ] 빌드 성공 로그

  **Commit**: YES
  - Message: `feat(docs): add component docs generation script and generate 52 docs`
  - Files: `docs/scripts/generate-component-docs.js`, `docs/app/components/**/*.tsx`
  - Pre-commit: `cd docs && npm run build`

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 1 | `refactor(docs): rewrite globals.css to minimal shadcn style` | globals.css | npm run build |
| 2 | `feat(docs): add shadcn-style layout components` | layout/*.tsx, layout.tsx | npm run build |
| 3 | `chore(docs): remove portfolio pages` | portfolio/ (deleted) | npm run build |
| 4 | `style(docs): migrate pages to Tailwind utilities` | app/**/*.tsx | npm run build |
| 5 | `feat(docs): add workspace linking for @design-geniefy/ui` | package.json | npm install && build |
| 6 | `feat(docs): add component docs generation script` | scripts/, components/**/ | npm run build |

---

## Success Criteria

### Verification Commands
```bash
# 전체 빌드 성공
cd docs && npm run build
# Expected: Exit code 0

# globals.css 줄 수
wc -l docs/styles/globals.css
# Expected: < 300 lines

# 컴포넌트 문서 수
ls docs/app/components/*/page.tsx | wc -l
# Expected: >= 52

# Portfolio 삭제 확인
[ ! -d "docs/app/portfolio" ] && echo "OK"
# Expected: OK

# workspace 링크 확인
ls -la docs/node_modules/@design-geniefy/ui | grep -q "->"
# Expected: Exit code 0 (symlink exists)
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] All 22 core pages accessible
- [ ] 52 component docs generated
- [ ] Build succeeds
- [ ] No border between sidebar and main
- [ ] Unified background color
