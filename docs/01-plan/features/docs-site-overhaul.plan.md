# docs-site-overhaul Plan

- **작성일**: 2026-01-27
- **상태**: ✅ Completed
- **작성자**: hskim

---

## 1. 개요

### 배경
현재 docs site에 여러 불일치와 위반 사항이 존재한다:

1. **globals.css**: 300개 이상의 design-rules 위반 (하드코딩 색상/간격)
2. **토큰 문서 페이지**: tokens.css에 없는 가상의 토큰을 문서화
3. **design-rules.md 버전 불일치**: root, skill, docs 세 버전이 서로 다름

### 목표
1. docs site UI를 design-rules 준수하도록 수정
2. 토큰 문서 페이지를 tokens.css 실제 내용으로 최신화
3. design-rules.md 버전 통합

---

## 2. 범위

### 포함
- `docs/styles/globals.css` 전면 수정 (토큰 사용)
- `docs/app/tokens/*` 페이지 최신화 (6개 페이지)
- design-rules.md 버전 동기화

### 제외
- tokens.css 자체 수정 (이미 정답)
- 컴포넌트 라이브러리 (`components/`) 수정
- docs site 기능 추가

---

## 3. 현황 분석

### 3.1 globals.css 위반 현황

| 위반 유형 | 건수 | 예시 |
|----------|------|------|
| 하드코딩 색상 | 100+ | `#fef2f2`, `rgba(0,0,0,0.5)` |
| 하드코딩 간격 | 150+ | `padding: 20px`, `width: 260px` |
| 하드코딩 border | 30+ | `border: 2px solid`, `border-left: 3px` |
| 하드코딩 breakpoint | 10+ | `@media (max-width: 768px)` |

**React 컴포넌트는 깨끗함** (className만 사용, inline style 없음)

### 3.2 토큰 문서 페이지 현황

| 페이지 | 문제점 |
|--------|--------|
| `/tokens/colors` | 존재하지 않는 `--bg-canvas`, `--text-default` 등 문서화 |
| `/tokens/spacing` | 존재하지 않는 `--space-inset-*`, `--space-stack-*` 문서화 |
| `/tokens/radius` | 존재하지 않는 `--radius-control-*`, `--radius-container-*` 문서화 |
| `/tokens/typography` | 존재하지 않는 `--text-display-*`, `--text-heading-*` 문서화 |
| `/tokens/effects` | 존재하지 않는 `--shadow-surface-*`, `--layer-*` 문서화 |

### 3.3 design-rules.md 버전 현황

| 위치 | 버전 | 라인수 | 상태 |
|------|------|--------|------|
| `/design-rules.md` (root) | v1.2 | 815 | 최신, 상세 |
| `/.claude/skills/design-rules.md` | 구버전 | 449 | Hook에서 사용 중 |
| `/docs/content/design-rules.md` | 구버전 | 449 | docs site 표시용 |

---

## 4. 작업 계획

### Phase 1: design-rules.md 동기화 (1시간)

**작업:**
1. root design-rules.md를 .claude/skills/로 복사
2. root design-rules.md를 docs/content/로 복사
3. Hook이 최신 버전 사용하는지 확인

**파일:**
- `/.claude/skills/design-rules.md`
- `/docs/content/design-rules.md`

### Phase 2: 토큰 문서 페이지 최신화 (2시간)

**작업:** tokens.css 실제 토큰으로 문서 재작성

| 페이지 | 문서화할 내용 |
|--------|-------------|
| `/tokens/colors` | `--color-bg-*`, `--color-text-*`, `--color-border-*`, `--color-primary-*`, semantic status 토큰 |
| `/tokens/spacing` | `--spacing-0` ~ `--spacing-96` (primitive만) |
| `/tokens/radius` | `--radius-none` ~ `--radius-full` |
| `/tokens/typography` | `--font-size-*`, `--line-height-*`, `--font-weight-*`, `--letter-spacing-*` |
| `/tokens/effects` | `--shadow-*`, `--z-index-*`, `--duration-*`, `--easing-*` |
| `/tokens` (index) | 카테고리 개요, 네이밍 컨벤션 |

**파일:**
- `docs/app/tokens/colors/page.tsx`
- `docs/app/tokens/spacing/page.tsx`
- `docs/app/tokens/radius/page.tsx`
- `docs/app/tokens/typography/page.tsx`
- `docs/app/tokens/effects/page.tsx`
- `docs/app/tokens/page.tsx`

### Phase 3: globals.css 리팩토링 (3시간)

**작업:** 모든 하드코딩 값을 토큰으로 교체

**단계:**
1. 레이아웃 토큰 추가 (tokens.css에 없으면 추가)
   ```css
   --layout-sidebar-width: 260px;
   --layout-topnav-height: 56px;
   ```

2. 색상 하드코딩 → 토큰 변환
   ```css
   /* Before */
   background: #fef2f2;
   color: #dc2626;

   /* After */
   background: var(--color-error-bg);
   color: var(--color-error-text);
   ```

3. 간격 하드코딩 → 토큰 변환
   ```css
   /* Before */
   padding: 20px;

   /* After */
   padding: var(--spacing-5);
   ```

4. breakpoint 변수화
   ```css
   /* 미디어 쿼리는 CSS 변수 사용 불가하므로 주석으로 문서화 */
   /* Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px) */
   ```

**파일:**
- `docs/styles/globals.css`
- `tokens.css` (레이아웃 토큰 추가 시)

### Phase 4: 검증 (30분)

**검증 방법:**
1. `npm run build` 성공 확인
2. `npm run dev`로 로컬 확인
3. 각 토큰 페이지 렌더링 확인
4. 다크모드 전환 확인

---

## 5. 성공 기준

- [x] design-rules.md 3개 버전 동일 ✅
- [x] 토큰 문서 페이지가 tokens.css 실제 토큰만 표시 ✅
- [x] globals.css에 하드코딩 색상 0개 ✅
- [x] globals.css에 하드코딩 간격 0개 (레이아웃 토큰 제외) ✅
- [x] 빌드 성공 ✅
- [ ] 다크모드 정상 작동 (수동 확인 필요)

---

## 6. 위험 요소

| 위험 | 대응 |
|------|------|
| globals.css 수정 시 UI 깨짐 | 섹션별로 수정하고 즉시 확인 |
| 토큰 문서 페이지 구조 변경 | 기존 URL 유지, 내용만 교체 |
| 레이아웃 토큰 추가 시 Breaking Change | tokens.css에 새 토큰 추가만 (기존 토큰 변경 없음) |

---

## 7. 참고자료

- [tokens.css](/tokens.css) - 토큰 정의 (정답)
- [design-rules.md](/design-rules.md) - 사용 규칙 (root 버전이 최신)
- [globals.css](/docs/styles/globals.css) - 수정 대상
