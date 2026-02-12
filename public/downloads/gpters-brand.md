# Genify Design System Rules

> AI가 일관된 UI를 생성하기 위한 디자인 제약 규칙

## Overview

이 문서는 LLM이 지니파이 브랜드에 맞는 일관된 UI를 생성하도록 안내합니다.
**핵심 원칙: LLM은 미학을 이해하지 못하고 제약만 이해한다.**

---

## 1. Color System

### Brand Colors
- **Primary Brand**: `#FF6900` (오렌지) - 모든 주요 CTA, 강조 요소에 사용
- **Brand Hover**: `#FFF0D3` - 브랜드 컬러 호버 배경

### Layer (Background)
| Token | Value | Usage |
|-------|-------|-------|
| `--layer-base` | `#FFFFFF` | 기본 배경, 카드 |
| `--layer-mid` | `#FAFAFA` | 섹션 배경, 호버 |
| `--layer-low` | `#F4F4F5` | Secondary 버튼 배경 |

### Content (Text)
| Token | Value | Usage |
|-------|-------|-------|
| `--content-highlight` | `#09090B` | 가장 강조되는 텍스트 |
| `--content-primary` | `#3F4146` | 기본 본문 텍스트 |
| `--content-subtle` | `#71717A` | 보조 텍스트, placeholder |
| `--content-muted` | `#B5B5BA` | 비활성 텍스트 |
| `--content-inverse` | `#FFFFFF` | 어두운 배경 위 텍스트 |

### Status Colors
| Status | Color | Soft | Usage |
|--------|-------|------|-------|
| Error | `#E7000B` | `#FFE8E9` | 에러, 필수 표시 |
| Success | `#008236` | `#B9F8CF` | 성공, 완료 |
| Info | `#509EDA` | `#DBEAFE` | 정보성 알림 |

### 🚫 하지 말 것
- 정의되지 않은 색상 사용 금지
- 브랜드 컬러를 배경에 과도하게 사용 금지
- 회색 계열에 컬러 틴트 넣지 않기

---

## 2. Typography

### Font Family
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Type Scale
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Display | 24px | 600 | 36px | 페이지 타이틀 |
| Heading | 20px | 600 | 30px | 섹션 타이틀 |
| Label-L | 16px | 600 | 24px | 버튼(Lg), 강조 라벨 |
| Label-M | 14px | 500 | 21px | 버튼(Sm/Md), 기본 라벨 |
| Label-R | 13px | 700 | 19.5px | 작은 강조 텍스트 |
| Body-L | 16px | 400 | 24px | 큰 본문 |
| Body-R | 14px | 400 | 21px | 기본 본문 |

### 🚫 하지 말 것
- 위 스케일 외의 폰트 사이즈 사용 금지
- font-weight 300 이하 사용 금지
- letter-spacing 임의 조정 금지

---

## 3. Spacing

### Spacing Scale (4px 기반)
```
4px | 6px | 8px | 10px | 12px | 14px | 16px | 20px | 24px | 32px
```

### 컴포넌트별 Padding
| Component | Padding |
|-----------|---------|
| Button (Sm) | 6px |
| Button (Md) | 6px |
| Button (Lg) | 10px |
| Input | 8px 14px |
| Card | 16px ~ 24px |
| Modal | 24px |

### 🚫 하지 말 것
- 5px, 7px, 15px 등 스케일에 없는 값 사용 금지
- 컴포넌트 간 간격 8px 미만 금지

---

## 4. Border & Radius

### Border
| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `#E4E4E7` | 기본 테두리 |
| `--border-strong` | `#B5B5BA` | 강조 테두리 |
| `--border-brand` | `#FF6900` | 포커스, 브랜드 강조 |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | 작은 버튼, 뱃지 |
| `--radius-md` | 6px | 중간 버튼, 드롭다운 |
| `--radius-lg` | 8px | 큰 버튼, 카드, 인풋 |
| `--radius-xl` | 12px | 모달, 큰 카드 |
| `--radius-full` | 9999px | 원형 아바타, 뱃지 |

### 🚫 하지 말 것
- 3px, 5px, 10px 등 정의되지 않은 radius 사용 금지
- 같은 컴포넌트에서 다른 radius 혼용 금지
- 이모지(📚⚡💬🎨 등) 사용 금지 - 아이콘 라이브러리 사용할 것
- strokeWidth 1 미만, 3 초과 사용 금지
---

## 5. Shadows

```css
--shadow-sm: 0px 1px 2px rgba(10, 13, 18, 0.05);
--shadow-md: 0px 4px 6px rgba(16, 24, 40, 0.09);
--shadow-lg: 0px 8px 8px -4px rgba(16, 24, 40, 0.09);
--shadow-xl: 0px 8px 16px -2px rgba(16, 24, 40, 0.09);
```

| Shadow | Usage |
|--------|-------|
| sm | 인풋, 작은 카드 |
| md | 드롭다운 |
| lg | 모달, 토스트 |
| xl | 툴팁, 팝오버 |

---

## 6. Icons

### Library
- **Lucide Icons** (lucide.dev)
- React: `lucide-react`

### Sizes
| Size | Value | Usage |
|------|-------|-------|
| sm | 16px | 버튼 내 아이콘 |
| md | 20px | 리스트 아이콘 |
| lg | 24px | 독립 아이콘 |

### Style
```jsx
<Icon 
  size={16} 
  strokeWidth={2} 
  color="var(--content-primary)" 
/>
```

### 🚫 하지 말 것
- Lucide 외 다른 아이콘 라이브러리 혼용 금지
- strokeWidth 1 미만, 3 초과 사용 금지
- 아이콘에 임의 색상 사용 금지

---

## 7. Components

### Button

#### Variants
| Type | Background | Border | Text |
|------|------------|--------|------|
| Primary | `--layer-brand` | none | `--content-inverse` |
| Secondary | `--layer-base` | `--border-strong` | `--content-primary` |
| Ghost | transparent | none | `--content-primary` |
| Brand Outline | transparent | `--border-brand` | `--content-brand` |

#### Sizes
| Size | Height | Padding | Font | Radius |
|------|--------|---------|------|--------|
| Sm | 28px | 6px | 14px/500 | 4px |
| Md | 32px | 6px | 14px/500 | 6px |
| Lg | 44px | 10px | 16px/600 | 8px |

#### States
- **Hover**: 배경색 변경 또는 opacity 조정
- **Disabled**: `--status-disabled` 배경, `--content-inverse` 텍스트
- **Focus**: `--border-brand` 아웃라인

### Input

```css
height: 44px;
padding: 8px 14px;
border-radius: 8px;
border: 1px solid var(--border-subtle);
font-size: 14px;
```

#### States
- **Default**: `--border-subtle`
- **Focus**: `--border-brand`
- **Error**: `--informative-red`
- **Placeholder**: `--content-muted`

### Card

```css
padding: 16px ~ 24px;
border-radius: 8px;
background: var(--layer-base);
border: 1px solid var(--border-subtle);
```

### Modal

```css
border-radius: 12px;
padding: 24px;
background: var(--layer-base);
box-shadow: var(--shadow-lg);
```

### Badge

```css
height: 20px ~ 24px;
padding: 0 8px;
border-radius: 12px; /* 또는 6px */
font-size: 12px;
```

### Toast

```css
min-width: 360px;
padding: 16px;
border-radius: 8px;
box-shadow: var(--shadow-lg);
```

---

## 8. Accessibility (접근성)

### 터치 타겟
- 최소 크기: **44x44px**
- 버튼, 링크, 체크박스 등 모든 인터랙티브 요소

### 색상 대비
- 텍스트/배경 대비: **WCAG 2.1 AA 기준** (4.5:1 이상)
- `--content-primary` on `--layer-base`: ✅ 통과
- `--content-subtle` on `--layer-base`: ✅ 통과

### 키보드 네비게이션
- 모든 인터랙티브 요소는 Tab으로 접근 가능
- Focus 상태 시각적으로 명확하게 표시 (`--border-brand`)

### 스크린 리더
- 시맨틱 HTML 사용 (button, input, nav 등)
- 이미지에 alt 텍스트 필수
- 아이콘 버튼에 aria-label 필수

---

## 9. Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Mobile First
- 기본 스타일은 모바일 기준
- `min-width` 미디어쿼리로 확장

### 규칙
- 모바일에서 버튼은 full-width 고려
- 터치 타겟 44px 유지
- 폰트 사이즈 14px 이상 유지

---

## 10. Animation

### Duration
```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
```

### Easing
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### 🚫 하지 말 것
- 300ms 초과 애니메이션 지양
- 불필요한 애니메이션 추가 금지
- 접근성: `prefers-reduced-motion` 존중

---

## Quick Reference

### 자주 쓰는 조합

```css
/* Primary Button */
background: var(--layer-brand);
color: var(--content-inverse);
padding: 10px;
border-radius: 8px;
font: 600 16px/24px 'Pretendard';

/* Card */
background: var(--layer-base);
border: 1px solid var(--border-subtle);
border-radius: 8px;
padding: 24px;
box-shadow: var(--shadow-md);

/* Input */
height: 44px;
padding: 8px 14px;
border: 1px solid var(--border-subtle);
border-radius: 8px;
font: 400 14px/21px 'Pretendard';

/* Input Focus */
border-color: var(--border-brand);
```

---

## Checklist

UI 생성 시 확인사항:

- [ ] 정의된 컬러 토큰만 사용했는가?
- [ ] 타이포그래피 스케일을 따랐는가?
- [ ] 스페이싱이 4px 배수인가?
- [ ] Border radius가 정의된 값인가?
- [ ] 터치 타겟이 44px 이상인가?
- [ ] Lucide 아이콘을 사용했는가?
- [ ] 버튼/인풋 높이가 규격에 맞는가?

---

## 적용 가이드

이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:

- **웹 vs 모바일**: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- **정보 밀도**: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- **브랜드 톤**: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게

→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정
