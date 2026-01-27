# Design Rules Skill

> UI/컴포넌트 생성 요청 시 자동으로 적용되는 디자인 규칙

## 트리거 키워드
UI, 컴포넌트, 버튼, 카드, 폼, 레이아웃, 스타일, CSS, 디자인, Button, Input, Modal

---

## 1. 필수 제약

### 1.1 색상 (Colors)
**tokens.css 변수만 사용. 하드코딩 금지.**

```css
/* ✅ 올바른 사용 */
color: var(--color-foreground);
background: var(--color-primary);
border-color: var(--color-border);

/* ❌ 금지 */
color: #333;
background: rgb(255, 255, 255);
border-color: gray;
```

**의미 기반 토큰:**
- `--color-foreground`: 기본 텍스트
- `--color-muted`: 보조 텍스트
- `--color-background`: 기본 배경
- `--color-primary`: 주요 액션
- `--color-destructive`: 위험/삭제

### 1.2 간격 (Spacing)
**4px 단위 토큰만 사용.**

```css
/* ✅ 올바른 사용 */
padding: var(--spacing-4);      /* 16px */
margin: var(--spacing-2);       /* 8px */
gap: var(--spacing-3);          /* 12px */

/* ❌ 금지 */
padding: 30px;
margin: 1.5rem;
```

**주요 토큰:**
- `--spacing-1`: 4px
- `--spacing-2`: 8px
- `--spacing-3`: 12px
- `--spacing-4`: 16px
- `--spacing-6`: 24px
- `--spacing-8`: 32px

### 1.3 Border Radius
**토큰만 사용. 6px 이하가 기본.**

```css
/* ✅ 올바른 사용 */
border-radius: var(--radius-md);  /* 4px, 기본값 */
border-radius: var(--radius-lg);  /* 6px, 카드/모달 */
border-radius: var(--radius-full); /* 원형, 아바타 */

/* ❌ 금지 */
border-radius: 5px;
border-radius: 8px;  /* 너무 동그람 */
```

**디자인 근거:**
- 6px 이하의 subtle radius가 더 세련되고 professional한 인상
- 8px 이상은 "친근한/playful" 느낌으로 범용성 낮음
- Apple HIG, Linear, Vercel 등 모던 시스템은 4-6px 기본값 사용

### 1.4 화면당 컴포넌트 수
**최대 7개** (Miller's Law)

7개 초과 시:
1. 그룹화하여 상위 컴포넌트로 묶기
2. 탭/아코디언으로 숨기기
3. 별도 페이지로 분리

### 1.5 화면당 색상 수
**배경/강조 색상 최대 3개** (텍스트 색상 제외)

### 1.6 컨테이너 중첩 금지 (Flat Structure)
**불필요한 wrapper/container 중첩은 금지.**

```tsx
// ❌ 금지: 과도한 중첩
<div className="section">
  <div className="section-inner">
    <div className="table-container">
      <Table />
    </div>
  </div>
</div>

// ✅ 올바른 사용: 플랫 구조
<section>
  <Table />
</section>

// ❌ 각 아이템을 개별 카드로 감싸기
<Card><Table data={a} /></Card>
<Card><Table data={b} /></Card>

// ✅ 간격으로 구분
<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
  <Table data={a} />
  <Table data={b} />
</div>
```

**이유:**
- 시각적 구분은 **spacing만으로 충분**
- 사용자는 여백만으로도 영역을 인지함 (Gestalt 근접성 원리)
- 중첩 컨테이너는 DOM 복잡도 증가, 스타일 오버라이드 어려움

### 1.7 과도한 인터랙션 효과 금지 (Minimal Feedback)
**상태 변화는 단일 시각적 피드백으로 충분.**

```tsx
// ❌ 금지: 효과 중첩
<li style={{
  borderLeft: isSelected ? '3px solid var(--color-primary)' : 'none',
  background: isSelected ? 'var(--color-primary-bg)' : 'transparent',
  fontWeight: isSelected ? 600 : 400,
  transform: isHovered ? 'translateX(4px)' : 'none',
}}>

// ✅ 올바른 사용: 단일 피드백
<li style={{
  background: isSelected ? 'var(--color-primary-bg)' : 'transparent',
}}>
```

**금지:**
- 왼쪽/오른쪽 indicator 라인
- hover 시 translateX 이동
- selected + hover 효과 중첩
- 상태별 font-weight 변경 (레이아웃 시프트)
- hover 시 shadow 추가

**허용 (택 1):**
- `background-color` 변경
- `color` 변경
- `opacity` 변경

### 1.8 이모지 및 텍스트 아이콘 금지 (SVG Icons Only)
**아이콘은 반드시 SVG 사용. 이모지/텍스트 문자 금지.**

```tsx
// ❌ 금지
<span>✅ 완료</span>      // 이모지
<button>×</button>       // 텍스트 X
<button>+</button>       // 텍스트 +
<span>▼</span>          // 텍스트 화살표

// ✅ 올바른 사용
<span><CheckIcon /> 완료</span>
<button><CloseIcon /></button>
<button><PlusIcon /></button>
<span><ChevronDownIcon /></span>
```

**금지 문자:** `×`, `+`, `-`, `▼`, `›`, `←`, `✓`, `✅`, `❌`, `⚠️`

**이유:**
- 텍스트/이모지는 OS/폰트별로 다르게 렌더링
- SVG는 픽셀 퍼펙트하고 크기/색상 조절 자유로움

**권장 라이브러리:** `lucide-react`, `@heroicons/react`

### 1.9 Shadow 사용 제한 (Flat Design)
**Shadow는 기본적으로 사용 금지. Border로 대체.**

```tsx
// ❌ 금지
<Card style={{ boxShadow: 'var(--shadow-md)' }}>
<Button style={{ boxShadow: 'var(--shadow-sm)' }}>

// ✅ 올바른 사용
<Card style={{ border: '1px solid var(--color-border)' }}>
<Button>  {/* shadow 없음 */}
```

**허용 (예외):** Dropdown, Modal, Toast (실제로 떠있는 요소만)
**금지:** Card, Button, Input, 일반 컨테이너

**이유:**
- Shadow 남용 시 모든 요소가 "부유"하는 느낌
- 실제로 떠있는 요소만 shadow 사용해야 계층 구조가 명확

### 1.10 줄바꿈 금지 요소 (No Text Wrap)
**특정 요소는 반드시 한 줄 유지. `white-space: nowrap` 필수.**

```tsx
// ❌ 금지
<Button>저장하기</Button>  // 2줄 될 수 있음

// ✅ 올바른 사용
<Button style={{ whiteSpace: 'nowrap' }}>저장하기</Button>
```

**nowrap 필수:** Button, Tag, Badge, 메뉴 아이템, 테이블 헤더, 테이블 셀(날짜/숫자/ID), Tab, Breadcrumb

**줄바꿈 허용:** 본문 텍스트, 카드 설명, 모달 본문

**반응형:** 줄바꿈 대신 `text-overflow: ellipsis` 또는 `overflow-x: auto`

### 1.11 레이아웃 위계: Header > Sidebar
**상단바가 항상 최상위. 사이드바는 그 아래.**

```
❌ 금지: 사이드바가 전체 높이
┌────────┬─────────────────┐
│Sidebar │    Header       │
│        ├─────────────────┤
│        │    Content      │
└────────┴─────────────────┘

✅ 올바른 구조:
┌──────────────────────────┐
│         Header           │
├────────┬─────────────────┤
│Sidebar │    Content      │
└────────┴─────────────────┘
```

**구현:**
```tsx
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <Header />
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <Content />
  </div>
</div>
```

**예외:** 없음. 이 규칙은 절대적.

### 1.12 반응형 필수 (Responsive by Default)
**모든 웹 UI는 기본적으로 반응형.**

```tsx
// ❌ 금지: 고정 너비
<div style={{ width: '1200px' }}>

// ✅ 올바른 사용
<div style={{ width: '100%', maxWidth: '1200px' }}>

// ✅ 그리드
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
}}>
```

**필수:** 유동적 너비, Flexbox/Grid, 상대 단위, 미디어 쿼리
**브레이크포인트:** sm(640px), md(768px), lg(1024px), xl(1280px)
**고정 허용:** 아이콘, 아바타, 사이드바

### 1.13 배경색 단일 레이어 (Single Background Layer)
**배경색은 `<html>` 또는 `<body>`에서 한 번만 지정. 레이어 중첩 금지.**

```tsx
// ❌ 금지: 배경 레이어 중첩
<html style={{ background: '#fff' }}>
  <body style={{ background: '#fff' }}>
    <div className="app" style={{ background: '#f5f5f5' }}>

// ✅ 올바른 사용: 단일 배경
<html style={{ background: 'var(--color-background)' }}>
  <body>  {/* 배경 없음 */}
    <main>  {/* 배경 없음 */}
```

**이유:**
- iOS/macOS overscroll bounce 시 `<html>` 배경색이 노출됨
- 레이어 중첩 시 bounce 영역 색상 불일치 발생

**배경색 허용:** `<html>` 또는 `<body>` (단 하나만), Card/Modal, Sidebar, 상태 표시(hover, selected)

### 1.14 컴포넌트 최소 DOM (Minimal DOM Structure)
**컴포넌트는 최소한의 DOM 요소로 구성한다.**

```tsx
// ❌ 금지: 과도한 div
const Button = ({ children }) => (
  <div className="button-wrapper">
    <div className="button-container">
      <button>{children}</button>
    </div>
  </div>
);

// ✅ 올바른 사용: 최소 DOM
const Button = ({ children }) => (
  <button>{children}</button>
);
```

**원칙:**
- 1 기능 = 1 요소 (wrapper 금지)
- 시맨틱 태그 우선 (`<article>`, `<section>`, `<nav>`)
- className을 위한 div 금지

**허용:** flex/grid 컨테이너, 접근성 요소, 이벤트 바운더리

---

## 2. Generation Protocol

UI 생성 시 반드시 다음 4단계를 수행합니다.

### Step 1: 목적 파악
- 이 UI의 주요 사용자 액션은?
- 어떤 정보를 전달해야 하는가?
- @design-geniefy/ui 컴포넌트로 해결 가능한가?

### Step 2: 토큰/컴포넌트 선택
```
체크리스트:
- [ ] 사용할 색상 토큰 (최대 3개)
- [ ] 사용할 간격 토큰
- [ ] 사용할 radius 토큰
- [ ] @design-geniefy/ui에서 재사용할 컴포넌트
```

### Step 3: 검증
```
검증 체크리스트:
- [ ] 하드코딩 색상 없음
- [ ] 하드코딩 간격 없음
- [ ] radius는 토큰 사용 (6px 이하)
- [ ] 컴포넌트 수 ≤ 7
- [ ] 색상 수 ≤ 3
- [ ] 불필요한 wrapper div 없음
- [ ] 인터랙션 효과 중첩 없음 (배경색 변경만)
- [ ] 이모지/텍스트 아이콘 없음 (SVG만)
- [ ] shadow 없음 (dropdown/modal/toast 제외)
- [ ] Button/Tag/Menu 등 nowrap 적용됨
- [ ] 레이아웃: Header > Sidebar 위계
- [ ] 반응형: 고정 width 없음
- [ ] 배경색: html/body에서 단일 지정
- [ ] 컴포넌트: 최소 DOM 구조
```

### Step 4: 위반 시 거부
검증 실패 시 생성을 거부하고 수정합니다.

```
❌ 제약 위반 발견

위반 항목:
1. [C-1.1] 하드코딩 색상: color: #333 → var(--color-foreground) 사용
2. [C-1.6] 불필요한 wrapper: div.container 제거, spacing으로 대체

수정 후 다시 검증합니다.
```

---

## 3. 토큰 보호 규칙 (Token Safety)

### 3.1 토큰 삭제 금지
**기존 토큰명을 삭제하거나 변경하면 Breaking Change 발생**

```css
/* ❌ 금지: 기존 토큰 삭제 */
/* --color-primary 삭제 시 모든 프로젝트 스타일 깨짐 */

/* ❌ 금지: 기존 토큰명 변경 */
/* --color-primary → --color-brand 변경 불가 */

/* ✅ 허용: 새 토큰 추가 */
--color-brand: #327039;  /* 새 토큰 추가는 안전 */

/* ✅ 허용: 기존 토큰 값 변경 */
--color-primary: #327039;  /* 값 변경은 의도적 디자인 변경 */
```

---

## 4. 컴포넌트 사용 규칙

### 4.1 @design-geniefy/ui 우선 사용
```tsx
// ✅ 올바른 사용
import { Button, Input } from '@design-geniefy/ui';

// ❌ 금지: 동일 기능 중복 생성
const MyButton = () => <button>...</button>;
```

### 4.2 커스텀 컴포넌트 생성 시
@design-geniefy/ui에 없는 컴포넌트만 생성하며, 토큰 규칙을 준수합니다.

```tsx
const StatCard = ({ label, value }) => (
  <div style={{
    padding: 'var(--spacing-4)',
    background: 'var(--color-secondary)',
    borderRadius: 'var(--radius-lg)',
  }}>
    <span style={{ color: 'var(--color-muted)' }}>{label}</span>
    <span style={{ color: 'var(--color-foreground)' }}>{value}</span>
  </div>
);
```

---

## 5. 토큰 참조

CDN: `https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css`

### 색상
| 토큰 | 용도 |
|------|------|
| `--color-foreground` | 기본 텍스트 |
| `--color-muted` | 보조 텍스트 |
| `--color-background` | 기본 배경 |
| `--color-primary` | 주요 액션, 브랜드 |
| `--color-secondary` | 보조 배경 |
| `--color-border` | 테두리 |
| `--color-destructive` | 위험/삭제 |

### 간격 (4px 기준)
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--spacing-1` | 4px | 아이콘-텍스트 간격 |
| `--spacing-2` | 8px | 인라인 요소 |
| `--spacing-3` | 12px | 컴포넌트 내부 |
| `--spacing-4` | 16px | 기본 패딩 |
| `--spacing-6` | 24px | 카드 패딩 |
| `--spacing-8` | 32px | 섹션 간격 |

### Radius
| 토큰 | 값 | 용도 |
|------|-----|------|
| `--radius-sm` | 2px | 태그, 뱃지 |
| `--radius-md` | 4px | 버튼, 인풋 (기본) |
| `--radius-lg` | 6px | 카드, 모달 |
| `--radius-xl` | 8px | 큰 카드 |
| `--radius-full` | 9999px | 아바타 |
