# Minimal Clean 디자인 가이드

## 디자인 철학

- **Less is more.** 불필요한 것은 모두 제거한다
- **타이포그래피가 주인공.** 굵기와 크기로 위계를 표현한다
- **넉넉한 여백이 우아함을 만든다.** 빼는 것이 더하는 것이다
- **모노톤 베이스에 미세한 악센트.** 화려함보다 절제된 세련미

## UX 원칙

- 사용자가 콘텐츠에 집중할 수 있도록 시각적 소음을 최소화한다
- 시각적 위계를 명확히: 가장 중요한 것만 눈에 띄게
- 불필요한 장식 요소 없이 기능에 충실하게
- 마이크로 인터랙션으로 섬세한 피드백을 제공한다

## 컬러

### Brand
- Primary: `#18181B` (Near Black) - CTA, 강조 요소
- Primary Hover: `#27272A` (Dark Gray)

### Background
- Background: `#FFFFFF` (White)
- Secondary: `#FAFAFA` (Off White)
- Tertiary: `#F4F4F5` (Light Gray)

### Content (Text)
- Highlight: `#09090B` - 제목, 강조 텍스트
- Primary: `#18181B` - 본문 텍스트
- Subtle: `#71717A` - 보조 텍스트
- Muted: `#A1A1AA` - 비활성 텍스트

### Border
- Subtle: `#E4E4E7` - 기본 보더
- Strong: `#D4D4D8` - 강조 보더
- Focus: `#18181B` - 포커스 상태

### Status
- Error: `#DC2626` / Soft: `#FEE2E2`
- Success: `#16A34A` / Soft: `#DCFCE7`
- Info: `#2563EB` / Soft: `#DBEAFE`

## 사이즈

### Spacing
- 요소 내부: `8px`
- 요소 간격: `16px`
- 섹션 간격: `48px` (미니멀은 더 넓은 간격)

### Border Radius
- 버튼/인풋: `6px`
- 카드: `8px`
- 배지: `4px`

### 컴포넌트
- 버튼: `36px` (기본), `44px` (Large)
- 인풋: `44px`

### Typography
- Font: Pretendard, system-ui
- 본문: `15px` / `400`
- 제목: `28px` / `600`
- Display: `36px` / `700`

## Shadow
- sm: `0 1px 2px rgba(0, 0, 0, 0.04)`
- md: `0 2px 4px rgba(0, 0, 0, 0.06)`
- lg: `0 4px 8px rgba(0, 0, 0, 0.08)`

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: #18181B;
color: #FFFFFF;
border: none;
border-radius: 6px;
font-weight: 500;

/* Secondary */
background: #FFFFFF;
color: #18181B;
border: 1px solid #E4E4E7;
```

### Input
```css
background: #FFFFFF;
border: 1px solid #E4E4E7;
border-radius: 6px;
padding: 12px 14px;
font-size: 15px;

/* Focus */
border-color: #18181B;
outline: none;
```

### Card
```css
background: #FFFFFF;
border: 1px solid #E4E4E7;
border-radius: 8px;
padding: 24px;
```
