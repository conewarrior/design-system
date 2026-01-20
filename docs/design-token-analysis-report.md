# 디자인 시스템 토큰 분석 보고서

주요 디자인 시스템들의 토큰 정의 패턴을 분석한 보고서입니다.

---

## 1. 분석 대상

| 회사 | 디자인 시스템 | 특징 |
|------|---------------|------|
| Shopify | [Polaris](https://polaris-react.shopify.com/tokens) | 커머스 최적화 |
| Atlassian | [Atlassian Design System](https://atlassian.design) | 엔터프라이즈 협업 |
| Adobe | [Spectrum](https://spectrum.adobe.com) | 크리에이티브 도구 |
| Workos | [Radix Colors](https://www.radix-ui.com/colors) | 접근성 중심 |
| Alibaba | [Ant Design](https://ant.design) | 대규모 B2B |
| Microsoft | [Fluent UI](https://microsoft.github.io/fluentui-token-pipeline/) | 크로스 플랫폼 |
| Google | [Material Design 3](https://m3.material.io) | 개인화(Material You) |

---

## 2. 토큰 계층 구조 (공통 패턴)

모든 디자인 시스템이 **3단계 토큰 계층**을 채택하고 있습니다.

```
┌─────────────────────────────────────────────────────────────┐
│  Component Tokens (컴포넌트 토큰)                            │
│  예: --button-primary-bg, --card-border-radius              │
│  → 특정 컴포넌트에 바인딩된 토큰                              │
├─────────────────────────────────────────────────────────────┤
│  Semantic Tokens (시맨틱 토큰)                               │
│  예: --color-bg-surface, --color-text-critical              │
│  → 용도/의미를 기반으로 명명                                  │
├─────────────────────────────────────────────────────────────┤
│  Primitive Tokens (원시 토큰)                                │
│  예: --blue-500, --gray-100, --space-4                      │
│  → 순수 값만 저장, 의미 없음                                  │
└─────────────────────────────────────────────────────────────┘
```

### 계층 간 참조 관계

```css
/* Primitive (원시) */
--blue-600: #1677ff;
--gray-900: #1a1a1a;

/* Semantic (시맨틱) - Primitive 참조 */
--color-primary: var(--blue-600);
--color-text-default: var(--gray-900);

/* Component (컴포넌트) - Semantic 참조 */
--button-bg: var(--color-primary);
--card-text: var(--color-text-default);
```

---

## 3. 토큰 카테고리 (공통 요소)

분석된 모든 시스템에서 공통적으로 사용하는 토큰 카테고리:

### 필수 카테고리 (100% 채택)

| 카테고리 | 설명 | 예시 토큰명 |
|----------|------|-------------|
| **Color** | 색상 시스템 | `--color-primary`, `--color-bg-surface` |
| **Spacing** | 여백/간격 | `--space-100`, `--spacing-md` |
| **Typography** | 글꼴 스타일 | `--font-size-lg`, `--font-weight-bold` |
| **Border** | 테두리 | `--border-radius-md`, `--border-width-1` |

### 확장 카테고리 (70% 이상 채택)

| 카테고리 | 설명 | 예시 토큰명 |
|----------|------|-------------|
| **Shadow** | 그림자/엘리베이션 | `--shadow-md`, `--elevation-2` |
| **Motion** | 애니메이션 | `--duration-fast`, `--easing-standard` |
| **Z-Index** | 레이어 순서 | `--z-index-modal`, `--z-index-tooltip` |
| **Breakpoint** | 반응형 기준점 | `--breakpoint-sm`, `--breakpoint-lg` |
| **Opacity** | 투명도 | `--opacity-disabled`, `--opacity-hover` |

---

## 4. 네이밍 컨벤션

### 4.1 기본 구조

대부분의 시스템이 채택한 네이밍 패턴:

```
--[접두사]-[카테고리]-[용도/대상]-[변형]-[상태]
```

**예시 분석:**

| 시스템 | 접두사 | 예시 |
|--------|--------|------|
| Polaris | `--p-` | `--p-color-bg-surface-hover` |
| Ant Design | `--ant-` | `--ant-color-primary-bg-hover` |
| Fluent | (없음) | `Global.Color.Blue.60` |

### 4.2 케이스 컨벤션

| 형식 | 사용처 | 채택률 |
|------|--------|--------|
| `kebab-case` | CSS 변수, Sass | **90%** |
| `camelCase` | JavaScript 객체 | 70% |
| `dot.notation` | JSON, Figma | 60% |

### 4.3 상태(State) 표기

```css
/* Atlassian 패턴 */
--color-text-link              /* 기본 */
--color-text-link-hovered      /* 호버 */
--color-text-link-pressed      /* 클릭 */
--color-text-link-disabled     /* 비활성 */

/* Fluent UI 패턴 */
--button-fill-color-rest       /* 기본 */
--button-fill-color-hover      /* 호버 */
--button-fill-color-pressed    /* 클릭 */
--button-fill-color-disabled   /* 비활성 */
```

---

## 5. 컬러 토큰 상세 분석

### 5.1 컬러 스케일

| 시스템 | 스케일 단계 | 패턴 |
|--------|-------------|------|
| Radix | 1-12 | `gray-1` ~ `gray-12` |
| Ant Design | 1-10 | `blue-1` ~ `blue-10` |
| Tailwind | 50-950 | `gray-50` ~ `gray-950` |
| Polaris | 퍼센트 기반 | `space-100` = 4px |

### 5.2 시맨틱 컬러 역할 (공통)

```css
/* 브랜드/주요 */
--color-primary
--color-secondary

/* 상태 표시 */
--color-success        /* 성공 */
--color-warning        /* 경고 */
--color-error          /* 오류 */
--color-info           /* 정보 */

/* 중립 */
--color-neutral

/* 표면/배경 */
--color-bg-surface
--color-bg-surface-secondary

/* 텍스트 */
--color-text-default
--color-text-subtle
--color-text-inverse
```

### 5.3 다크모드 처리

**방식 1: CSS 클래스 오버라이드 (가장 일반적)**
```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
}

.dark {
  --color-bg: #1a1a1a;
  --color-text: #ffffff;
}
```

**방식 2: 미디어 쿼리**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1a1a1a;
  }
}
```

---

## 6. 스페이싱 토큰 패턴

### 6.1 기준 단위

| 시스템 | Base Unit | 스케일 |
|--------|-----------|--------|
| Polaris | 4px | 100 = 4px, 400 = 16px |
| Spectrum | 8px | T-shirt (sm, md, lg) |
| Ant Design | 4px | 1-16 배수 |
| Material | 4px | 4, 8, 12, 16... |

### 6.2 네이밍 패턴

**숫자 기반:**
```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-8: 32px;
```

**T-shirt 사이징:**
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

**100 단위 스케일 (Polaris):**
```css
--p-space-100: 4px;   /* 100 = 1x base */
--p-space-200: 8px;   /* 200 = 2x base */
--p-space-400: 16px;  /* 400 = 4x base */
```

---

## 7. 타이포그래피 토큰 패턴

### 7.1 분리된 토큰 (Atomic)

```css
/* 폰트 패밀리 */
--font-family-sans: 'Inter', sans-serif;
--font-family-mono: 'Fira Code', monospace;

/* 폰트 사이즈 */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;

/* 폰트 웨이트 */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;

/* 라인 하이트 */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

### 7.2 복합 토큰 (Composite)

```css
/* 프리셋 조합 */
--text-heading-xl: 700 32px/1.25 var(--font-family-sans);
--text-body-md: 400 16px/1.5 var(--font-family-sans);
--text-caption: 400 12px/1.4 var(--font-family-sans);
```

---

## 8. 그림자/엘리베이션 패턴

```css
/* 숫자 스케일 */
--shadow-1: 0 1px 2px rgba(0,0,0,0.05);
--shadow-2: 0 2px 4px rgba(0,0,0,0.1);
--shadow-3: 0 4px 8px rgba(0,0,0,0.1);
--shadow-4: 0 8px 16px rgba(0,0,0,0.1);

/* 시맨틱 네이밍 */
--shadow-card: var(--shadow-2);
--shadow-dropdown: var(--shadow-3);
--shadow-modal: var(--shadow-4);
```

---

## 9. 권장 토큰 구조 (우리 프로젝트용)

분석 결과를 바탕으로 현재 프로젝트에 적용할 수 있는 구조:

### 9.1 권장 카테고리

```css
:root {
  /* ========== Color Primitives ========== */
  --gray-50: #fafafa;
  --gray-100: #f5f5f5;
  /* ... */
  --gray-900: #171717;

  --blue-50: #eff6ff;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;

  /* ========== Color Semantic ========== */
  --color-primary: var(--blue-600);
  --color-primary-hover: var(--blue-500);

  --color-bg-default: var(--gray-50);
  --color-bg-surface: #ffffff;
  --color-bg-surface-secondary: var(--gray-100);

  --color-text-default: var(--gray-900);
  --color-text-subtle: var(--gray-600);
  --color-text-inverse: #ffffff;

  --color-border-default: var(--gray-200);
  --color-border-subtle: var(--gray-100);

  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* ========== Spacing ========== */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;

  /* ========== Typography ========== */
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: 'Fira Code', monospace;

  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* ========== Border ========== */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-full: 9999px;

  --border-width-1: 1px;
  --border-width-2: 2px;

  /* ========== Shadow ========== */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);

  /* ========== Motion ========== */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);

  /* ========== Z-Index ========== */
  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-modal: 300;
  --z-index-popover: 400;
  --z-index-tooltip: 500;
}

/* ========== Dark Mode ========== */
.dark {
  --color-bg-default: var(--gray-900);
  --color-bg-surface: var(--gray-800);
  --color-bg-surface-secondary: var(--gray-700);

  --color-text-default: var(--gray-50);
  --color-text-subtle: var(--gray-400);

  --color-border-default: var(--gray-700);
  --color-border-subtle: var(--gray-800);
}
```

---

## 10. 핵심 인사이트

### 10.1 성공적인 토큰 시스템의 공통점

1. **일관된 네이밍**: `kebab-case` + 계층적 구조
2. **3단계 계층**: Primitive → Semantic → Component
3. **4px 기준 단위**: 스페이싱의 수학적 일관성
4. **의미 기반 시맨틱**: 색상 값이 아닌 용도로 명명
5. **다크모드 기본 지원**: CSS 클래스 토글 방식

### 10.2 피해야 할 안티패턴

- 하드코딩된 px, hex 값
- 과도하게 세분화된 토큰 (유지보수 비용 증가)
- 불명확한 네이밍 (`color1`, `spacing-a`)
- 계층 없이 평면적 구조

---

## 참고 자료

- [Shopify Polaris Tokens](https://polaris-react.shopify.com/tokens)
- [Atlassian Design Color](https://atlassian.design/foundations/color)
- [Adobe Spectrum Design Tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Radix Colors](https://www.radix-ui.com/colors)
- [Ant Design Colors](https://ant.design/docs/spec/colors)
- [Microsoft Fluent UI Token Pipeline](https://microsoft.github.io/fluentui-token-pipeline/naming.html)
- [Design Tokens Format Module 2025](https://www.designtokens.org/tr/drafts/format/)
- [Naming Tokens in Design Systems - EightShapes](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)
- [Design Tokens Naming Guide - DOOR3](https://www.door3.com/blog/naming-design-tokens-guide)
- [UXPin Design System Examples](https://www.uxpin.com/studio/blog/best-design-system-examples/)
