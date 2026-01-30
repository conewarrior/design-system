# Tokens Documentation Pages

## TL;DR

> **Quick Summary**: shadcn/ui 토큰(colors, radius, typography)을 문서화하는 4개의 페이지 생성. 카테고리별 분리된 레퍼런스 + 시각화 + 사용 가이드.
> 
> **Deliverables**:
> - `/tokens/` - 토큰 개요 페이지
> - `/tokens/colors/` - 색상 토큰 (19개)
> - `/tokens/radius/` - Radius 토큰 (7개 + base)
> - `/tokens/typography/` - 타이포그래피 토큰 (2개)
> - Sidebar에 "Tokens" 그룹 추가
> 
> **Estimated Effort**: Medium (4-6시간)
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 → Tasks 2,3,4 (병렬) → Task 5

---

## Context

### Original Request
docs 사이드바에 token 페이지를 생성하여 토큰 레퍼런스, 사용 가이드, 시각화를 제공하는 종합 문서 페이지 구현.

### Interview Summary
**Key Discussions**:
- 토큰 범위: shadcn/ui 토큰만 (테마별 토큰 제외)
- 위치: Docs 섹션, 새 "Tokens" 그룹
- 구조: 카테고리별 페이지 분리 (/tokens/, /tokens/colors/, /tokens/radius/, /tokens/typography/)
- 기능: 시각적 프리뷰, 라이트/다크 모드 값 표시, Tailwind 클래스명 제공

**Research Findings**:
- 토큰 소스: `docs/styles/globals.css` (`:root`, `.dark`, `@theme`)
- 사이드바: `docs/ui/Sidebar.tsx`의 `docsNavigation` 배열
- 기존 `/status/changes/tokens/`는 토큰 변경 이력 페이지 (다른 용도)

### Metis Review
**Identified Gaps** (addressed):
- 토큰 값 표시 형식 → CSS 변수명 + Tailwind 클래스명 둘 다 표시
- 라이트/다크 표현 방식 → Side-by-side 테이블로 비교 (현재 모드 따름)
- Base radius (`--radius`) → 포함하여 문서화
- /status/changes/tokens/와 혼동 방지 → 명확한 페이지 제목과 설명

---

## Work Objectives

### Core Objective
shadcn/ui 디자인 토큰의 완전한 레퍼런스 문서를 생성하여 개발자가 토큰 값, 사용법, 시각적 미리보기를 한 곳에서 확인할 수 있게 한다.

### Concrete Deliverables
1. `docs/app/tokens/page.tsx` - 개요 페이지
2. `docs/app/tokens/colors/page.tsx` - 색상 토큰 레퍼런스
3. `docs/app/tokens/radius/page.tsx` - Radius 토큰 레퍼런스
4. `docs/app/tokens/typography/page.tsx` - 타이포그래피 토큰 레퍼런스
5. `docs/ui/Sidebar.tsx` - "Tokens" 네비게이션 그룹 추가

### Definition of Done
- [ ] 4개 페이지 모두 `/tokens/*` 경로에서 렌더링 확인
- [ ] 사이드바에 "Tokens" 그룹이 표시되고 모든 링크 동작
- [ ] 색상 페이지에 19개 토큰 + 시각적 스와치 표시
- [ ] Radius 페이지에 8개 토큰(7+base) + 시각적 박스 표시
- [ ] Typography 페이지에 2개 폰트 + 샘플 텍스트 표시
- [ ] 라이트/다크 모드 값이 구분되어 표시

### Must Have
- 모든 토큰의 CSS 변수명 표시 (`--background`, `--primary` 등)
- 모든 토큰의 Tailwind 클래스명 표시 (`bg-background`, `text-primary` 등)
- 라이트/다크 모드 HSL 값 표시
- 시각적 프리뷰 (색상 스와치, radius 박스, 폰트 샘플)

### Must NOT Have (Guardrails)
- ❌ 테마 전환 UI (이 범위에서 제외)
- ❌ 토큰 검색/필터 기능 (28개로 불필요)
- ❌ 코드 플레이그라운드 (단순 레퍼런스)
- ❌ 복사-클립보드 기능 (최소 범위 유지)
- ❌ 컴포넌트별 토큰 사용 예제 (컴포넌트 문서 영역)
- ❌ 토큰 비교 도구 (불필요한 복잡성)
- ❌ 동적 CSS 파싱 (정적 콘텐츠 유지)

---

## Verification Strategy (MANDATORY)

### Test Decision
- **Infrastructure exists**: YES (Next.js dev server)
- **User wants tests**: Manual-only (문서 페이지)
- **Framework**: curl/grep 검증 + Playwright 브라우저 확인

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately):
└── Task 1: Sidebar 설정 + Overview 페이지 생성 (기반 구조)

Wave 2 (After Wave 1):
├── Task 2: Colors 페이지 [depends: 1]
├── Task 3: Radius 페이지 [depends: 1]
└── Task 4: Typography 페이지 [depends: 1]

Wave 3 (After Wave 2):
└── Task 5: 통합 검증 [depends: 2, 3, 4]

Critical Path: Task 1 → Task 2 → Task 5
Parallel Speedup: ~50% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 2, 3, 4 | None (first) |
| 2 | 1 | 5 | 3, 4 |
| 3 | 1 | 5 | 2, 4 |
| 4 | 1 | 5 | 2, 3 |
| 5 | 2, 3, 4 | None | None (final) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1 | delegate_task(category="quick", load_skills=["frontend-ui-ux"]) |
| 2 | 2, 3, 4 | dispatch 3 parallel tasks with category="quick" |
| 3 | 5 | delegate_task(category="quick", load_skills=["playwright"]) |

---

## TODOs

- [ ] 1. Sidebar 설정 + Tokens Overview 페이지

  **What to do**:
  - `docs/ui/Sidebar.tsx`에 "Tokens" NavGroup 추가 (docsNavigation 배열)
  - `docs/app/tokens/page.tsx` 생성 (개요 페이지)
  - 개요 페이지에 토큰 소개 문구 + 3개 카테고리 페이지 링크 포함

  **Must NOT do**:
  - 다른 네비게이션 그룹 수정하지 않음
  - 복잡한 레이아웃 추가하지 않음

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 단일 파일 수정(Sidebar) + 단순 페이지 생성
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 기존 docs 스타일 패턴 따르기

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (단독)
  - **Blocks**: Tasks 2, 3, 4
  - **Blocked By**: None

  **References**:

  **Pattern References** (existing code to follow):
  - `docs/ui/Sidebar.tsx:18-35` - docsNavigation 구조 (NavGroup[] 배열, title/links 형식)
  - `docs/ui/Sidebar.tsx:29-34` - Rules 그룹 예시 (새 그룹 추가 위치 참고)
  - `docs/app/install/page.tsx` - 페이지 구조 패턴 (h1 제목, p 설명, 콘텐츠)

  **Type References**:
  - `docs/ui/Sidebar.tsx:7-15` - NavLink, NavGroup 인터페이스 정의

  **Documentation References**:
  - `docs/styles/globals.css` - 토큰 소스 (개요 페이지에서 언급)

  **WHY Each Reference Matters**:
  - Sidebar.tsx:18-35: NavGroup 추가 위치와 형식 확인 (title, links 배열)
  - Rules 그룹: 새 Tokens 그룹을 Rules 다음에 배치
  - install/page.tsx: 페이지 heading 구조, 설명 문구 스타일 패턴

  **Acceptance Criteria**:

  **Automated Verification**:
  ```bash
  # 1. 사이드바 설정 확인
  grep -q "title: 'Tokens'" docs/ui/Sidebar.tsx && echo "PASS: Tokens group exists"
  grep -q "href: '/tokens/'" docs/ui/Sidebar.tsx && echo "PASS: Overview link exists"
  grep -q "href: '/tokens/colors/'" docs/ui/Sidebar.tsx && echo "PASS: Colors link exists"
  
  # 2. 페이지 파일 존재 확인
  test -f docs/app/tokens/page.tsx && echo "PASS: Overview page exists"
  
  # 3. 개발 서버에서 렌더링 확인 (서버 실행 중이라면)
  curl -s http://localhost:3000/tokens/ | grep -q "Tokens" && echo "PASS: Page renders"
  ```

  **For Frontend/UI changes** (using playwright skill):
  ```
  1. Navigate to: http://localhost:3000/tokens/
  2. Assert: h1 contains "Tokens"
  3. Assert: Links to /tokens/colors/, /tokens/radius/, /tokens/typography/ visible
  4. Assert: Sidebar shows "Tokens" group with 4 links
  5. Screenshot: .sisyphus/evidence/task-1-overview.png
  ```

  **Evidence to Capture:**
  - [ ] grep 출력 결과 (사이드바 설정 확인)
  - [ ] Screenshot of overview page with sidebar visible

  **Commit**: YES
  - Message: `feat(docs): add tokens overview page and sidebar navigation`
  - Files: `docs/ui/Sidebar.tsx`, `docs/app/tokens/page.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [ ] 2. Colors 토큰 페이지

  **What to do**:
  - `docs/app/tokens/colors/page.tsx` 생성
  - 19개 색상 토큰을 테이블/그리드로 표시
  - 각 토큰: CSS 변수명, Tailwind 클래스명, 라이트/다크 HSL 값
  - 시각적 스와치 (32x32px 색상 박스)
  - 현재 테마 모드에 따라 스와치 색상 반영

  **Must NOT do**:
  - 테마 전환 토글 추가하지 않음
  - 복사 기능 추가하지 않음
  - 하드코딩된 hex 값 사용하지 않음 (CSS 변수 사용)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 단일 페이지, 반복 패턴 (토큰 목록)
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 색상 스와치 시각화, 테이블 레이아웃

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 4)
  - **Blocks**: Task 5
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `docs/app/tokens/page.tsx` (Task 1에서 생성) - 페이지 구조 패턴
  - `docs/app/install/page.tsx:132-156` - 페이지 레이아웃 패턴

  **API/Type References**:
  - `docs/styles/globals.css:12-34` - 라이트 모드 색상 토큰 값
  - `docs/styles/globals.css:36-56` - 다크 모드 색상 토큰 값

  **WHY Each Reference Matters**:
  - globals.css:12-34: 19개 라이트 모드 HSL 값 (--background, --foreground 등)
  - globals.css:36-56: 다크 모드 값 (동일 변수명, 다른 값)
  - 페이지 구조: h1/p 패턴, 일관된 스타일링

  **토큰 목록 (19개)**:
  ```
  Colors (semantic):
  - background, foreground
  - card, card-foreground
  - popover, popover-foreground
  - primary, primary-foreground
  - secondary, secondary-foreground
  - muted, muted-foreground
  - accent, accent-foreground
  - destructive, destructive-foreground
  - border, input, ring
  ```

  **Acceptance Criteria**:

  **Automated Verification**:
  ```bash
  # 파일 존재 확인
  test -f docs/app/tokens/colors/page.tsx && echo "PASS: Colors page exists"
  
  # 토큰 개수 확인 (--background 등 19개)
  grep -c "background\|foreground\|primary\|secondary\|muted\|accent\|destructive\|border\|input\|ring\|card\|popover" docs/app/tokens/colors/page.tsx
  # Expected: 19+ matches
  ```

  **For Frontend/UI changes** (using playwright skill):
  ```
  1. Navigate to: http://localhost:3000/tokens/colors/
  2. Assert: h1 contains "Colors" or "색상"
  3. Assert: At least 19 color swatches visible (div with background-color)
  4. Assert: Text "--background" appears on page
  5. Assert: Text "bg-background" appears on page
  6. Screenshot: .sisyphus/evidence/task-2-colors.png
  ```

  **Evidence to Capture:**
  - [ ] Screenshot of colors page showing swatches and values
  - [ ] Grep output confirming token count

  **Commit**: YES (groups with 3, 4)
  - Message: `feat(docs): add color tokens reference page`
  - Files: `docs/app/tokens/colors/page.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [ ] 3. Radius 토큰 페이지

  **What to do**:
  - `docs/app/tokens/radius/page.tsx` 생성
  - 8개 radius 토큰 표시 (7개 @theme + 1개 base --radius)
  - 각 토큰: CSS 변수명, Tailwind 클래스명, rem/px 값
  - 시각적 프리뷰 (48x48px 박스에 해당 radius 적용)
  - Base `--radius` 설명 (shadcn 컴포넌트의 기준 radius)

  **Must NOT do**:
  - 인터랙티브 radius 조절 슬라이더 추가하지 않음
  - 컴포넌트별 radius 사용 예제 추가하지 않음

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 단일 페이지, 8개 항목
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 시각적 radius 프리뷰

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 4)
  - **Blocks**: Task 5
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `docs/app/tokens/page.tsx` - 페이지 구조 패턴
  - `docs/app/tokens/colors/page.tsx` (Task 2) - 토큰 표시 패턴

  **API/Type References**:
  - `docs/styles/globals.css:33` - Base radius: `--radius: 0.25rem`
  - `docs/styles/globals.css:81-87` - @theme radius 토큰 (sm, md, lg, xl, 2xl, 3xl, full)

  **WHY Each Reference Matters**:
  - globals.css:33: --radius 기본값 (shadcn 컴포넌트 기준)
  - globals.css:81-87: 7개 Tailwind radius 토큰과 값

  **토큰 목록 (8개)**:
  ```
  Base:
  - --radius: 0.25rem (shadcn base)
  
  @theme:
  - --radius-sm: 0.125rem
  - --radius-md: 0.25rem
  - --radius-lg: 0.375rem
  - --radius-xl: 0.5rem
  - --radius-2xl: 0.75rem
  - --radius-3xl: 1rem
  - --radius-full: 9999px
  ```

  **Acceptance Criteria**:

  **Automated Verification**:
  ```bash
  # 파일 존재 확인
  test -f docs/app/tokens/radius/page.tsx && echo "PASS: Radius page exists"
  
  # radius 토큰 확인
  grep -c "radius-sm\|radius-md\|radius-lg\|radius-xl\|radius-2xl\|radius-3xl\|radius-full\|--radius:" docs/app/tokens/radius/page.tsx
  # Expected: 8+ matches
  ```

  **For Frontend/UI changes** (using playwright skill):
  ```
  1. Navigate to: http://localhost:3000/tokens/radius/
  2. Assert: h1 contains "Radius"
  3. Assert: At least 8 preview boxes with different border-radius visible
  4. Assert: Text "--radius-sm" appears on page
  5. Assert: Text "rounded-sm" appears on page
  6. Screenshot: .sisyphus/evidence/task-3-radius.png
  ```

  **Evidence to Capture:**
  - [ ] Screenshot of radius page showing preview boxes
  - [ ] Grep output confirming token count

  **Commit**: YES (groups with 2, 4)
  - Message: `feat(docs): add radius tokens reference page`
  - Files: `docs/app/tokens/radius/page.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [ ] 4. Typography 토큰 페이지

  **What to do**:
  - `docs/app/tokens/typography/page.tsx` 생성
  - 2개 폰트 토큰 표시 (sans, mono)
  - 각 토큰: CSS 변수명, Tailwind 클래스명, 폰트 스택 값
  - 시각적 프리뷰 (각 폰트로 샘플 텍스트 렌더링)
  - 폰트 스택 전체 표시 (fallback 포함)

  **Must NOT do**:
  - 폰트 사이즈/웨이트 토큰 추가하지 않음 (globals.css에 없음)
  - 타이포그래피 스케일 추가하지 않음 (scope creep)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 단일 페이지, 2개 항목
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 폰트 샘플 시각화

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 2, 3)
  - **Blocks**: Task 5
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `docs/app/tokens/page.tsx` - 페이지 구조 패턴
  - `docs/app/tokens/colors/page.tsx` (Task 2) - 토큰 표시 패턴

  **API/Type References**:
  - `docs/styles/globals.css:90-91` - 폰트 토큰 정의

  **WHY Each Reference Matters**:
  - globals.css:90-91: font-sans, font-mono 폰트 스택 값

  **토큰 목록 (2개)**:
  ```
  - --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif
  - --font-mono: "Fira Code", "JetBrains Mono", Consolas, monospace
  ```

  **Acceptance Criteria**:

  **Automated Verification**:
  ```bash
  # 파일 존재 확인
  test -f docs/app/tokens/typography/page.tsx && echo "PASS: Typography page exists"
  
  # 폰트 토큰 확인
  grep -c "font-sans\|font-mono" docs/app/tokens/typography/page.tsx
  # Expected: 2+ matches
  ```

  **For Frontend/UI changes** (using playwright skill):
  ```
  1. Navigate to: http://localhost:3000/tokens/typography/
  2. Assert: h1 contains "Typography" or "타이포그래피"
  3. Assert: Sample text in sans-serif font visible
  4. Assert: Sample text in monospace font visible (code-like)
  5. Assert: Text "--font-sans" appears on page
  6. Assert: Text "font-sans" appears on page
  7. Screenshot: .sisyphus/evidence/task-4-typography.png
  ```

  **Evidence to Capture:**
  - [ ] Screenshot of typography page showing font samples
  - [ ] Grep output confirming font tokens present

  **Commit**: YES (groups with 2, 3)
  - Message: `feat(docs): add typography tokens reference page`
  - Files: `docs/app/tokens/typography/page.tsx`
  - Pre-commit: `cd docs && npm run build`

---

- [ ] 5. 통합 검증 및 사이드바 네비게이션 테스트

  **What to do**:
  - 4개 페이지 모두 렌더링 확인
  - 사이드바 네비게이션 동작 확인 (모든 링크 클릭)
  - 모바일 뷰 사이드바 동작 확인
  - 토큰 개수 검증 (Colors 19, Radius 8, Typography 2)
  - 빌드 성공 확인

  **Must NOT do**:
  - 새로운 기능 추가하지 않음
  - 스타일 수정하지 않음 (버그 아닌 이상)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 검증 작업만
  - **Skills**: [`playwright`]
    - `playwright`: 브라우저 자동화로 전체 흐름 검증

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 (단독)
  - **Blocks**: None (final)
  - **Blocked By**: Tasks 2, 3, 4

  **References**:

  **Test References**:
  - Task 1-4의 개별 Acceptance Criteria

  **Acceptance Criteria**:

  **Automated Verification**:
  ```bash
  # 전체 빌드 확인
  cd docs && npm run build
  # Expected: Build successful, no errors
  
  # 모든 페이지 파일 존재
  ls -la docs/app/tokens/page.tsx docs/app/tokens/colors/page.tsx docs/app/tokens/radius/page.tsx docs/app/tokens/typography/page.tsx
  # Expected: 4 files exist
  ```

  **For Frontend/UI changes** (using playwright skill):
  ```
  # Full navigation flow test
  1. Navigate to: http://localhost:3000/
  2. Assert: Sidebar contains "Tokens" group
  3. Click: "Overview" link under Tokens
  4. Assert: URL is /tokens/, page renders
  5. Click: "Colors" link in sidebar
  6. Assert: URL is /tokens/colors/, 19 swatches visible
  7. Click: "Radius" link in sidebar
  8. Assert: URL is /tokens/radius/, 8 preview boxes visible
  9. Click: "Typography" link in sidebar
  10. Assert: URL is /tokens/typography/, 2 font samples visible
  11. Screenshot: .sisyphus/evidence/task-5-full-navigation.png
  
  # Mobile view test
  12. Set viewport: 375x667 (iPhone SE)
  13. Navigate to: http://localhost:3000/tokens/
  14. Click: Mobile menu button
  15. Assert: Tokens group visible in mobile menu
  16. Screenshot: .sisyphus/evidence/task-5-mobile-sidebar.png
  ```

  **Evidence to Capture:**
  - [ ] Build output log (success confirmation)
  - [ ] Screenshot of full navigation flow
  - [ ] Screenshot of mobile sidebar

  **Commit**: NO (verification only, no changes)

---

## Commit Strategy

| After Task | Message | Files | Verification |
|------------|---------|-------|--------------|
| 1 | `feat(docs): add tokens overview page and sidebar navigation` | Sidebar.tsx, tokens/page.tsx | `npm run build` |
| 2, 3, 4 | `feat(docs): add token reference pages (colors, radius, typography)` | tokens/colors/page.tsx, tokens/radius/page.tsx, tokens/typography/page.tsx | `npm run build` |
| 5 | (No commit - verification only) | - | - |

---

## Success Criteria

### Verification Commands
```bash
# 1. Build succeeds
cd docs && npm run build
# Expected: "✓ Compiled successfully"

# 2. All pages exist
ls docs/app/tokens/*/page.tsx | wc -l
# Expected: 3 (colors, radius, typography)

ls docs/app/tokens/page.tsx
# Expected: file exists

# 3. Sidebar configured
grep -c "Tokens" docs/ui/Sidebar.tsx
# Expected: 1+
```

### Final Checklist
- [ ] All "Must Have" present (CSS 변수명, Tailwind 클래스명, HSL 값, 시각적 프리뷰)
- [ ] All "Must NOT Have" absent (테마 전환, 검색, 플레이그라운드 없음)
- [ ] Build passes without errors
- [ ] All 4 pages render correctly
- [ ] Sidebar navigation works on desktop and mobile
