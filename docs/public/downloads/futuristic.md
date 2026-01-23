# Futuristic 디자인 가이드

## 디자인 철학

- **네온 컬러와 다크 배경이 SF 분위기를 만든다.** 사이버펑크 무드
- **글로우 효과가 에너지와 미래적 느낌을 더한다.** 빛나는 요소들
- **기하학적 형태와 날카로운 각도가 첨단 기술 느낌.** 곡선보다 직선
- **높은 대비가 디지털, 테크 지향적 미학.** 선명하고 강렬하게

## UX 원칙

- 어두운 배경에서 네온 컬러가 시선을 이끌도록
- 글로우 효과는 인터랙티브 요소에 집중 사용
- 기술적이면서도 사용하기 어렵지 않게
- 애니메이션은 빠르고 샤프하게

## 컬러

### Brand
- Primary: `#00F5FF` (Cyan/Neon) - CTA, 강조 요소
- Primary Hover: `#00D4E5` (Slightly darker cyan)

### Background
- Primary: `#0A0A0F` (Very Dark)
- Secondary: `#1A1A2E` (Dark Blue)
- Tertiary: `#16162A` (Dark Purple)

### Content (Text)
- Highlight: `#FFFFFF` - 제목, 강조 텍스트
- Primary: `#E0E0E0` - 본문 텍스트
- Subtle: `#A0A0A0` - 보조 텍스트
- Muted: `#606060` - 비활성 텍스트

### Border
- Subtle: `#2A2A3E` - 기본 보더
- Strong: `#3A3A5E` - 강조 보더
- Neon: `#00F5FF` - 네온 보더
- Focus: `#00F5FF` - 포커스 상태

### Accent Colors
- Neon Pink: `#FF00FF`
- Neon Green: `#00FF88`
- Neon Yellow: `#FFFF00`
- Neon Orange: `#FF6600`

### Status
- Error: `#FF4444` / Soft: `#441111`
- Success: `#00FF88` / Soft: `#114422`
- Info: `#00F5FF` / Soft: `#112233`

## 사이즈

### Spacing
- 요소 내부: `12px`
- 요소 간격: `16px`
- 섹션 간격: `40px`

### Border Radius
- 버튼/인풋: `4px` (날카롭게)
- 카드: `8px`
- 배지: `2px`

### 컴포넌트
- 버튼: `40px` (기본), `48px` (Large)
- 인풋: `44px`

### Typography
- Font: Pretendard, monospace
- 본문: `14px` / `400`
- 제목: `24px` / `700`
- Display: `36px` / `800`

## Glow Effects
```css
/* Cyan Glow */
box-shadow: 0 0 20px #00F5FF, 0 0 40px rgba(0, 245, 255, 0.3);

/* Text Glow */
text-shadow: 0 0 10px #00F5FF, 0 0 20px rgba(0, 245, 255, 0.5);

/* Border Glow */
border: 1px solid #00F5FF;
box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
```

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: transparent;
color: #00F5FF;
border: 1px solid #00F5FF;
border-radius: 4px;
font-weight: 600;
box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
text-transform: uppercase;
letter-spacing: 1px;

/* Hover */
background: #00F5FF;
color: #0A0A0F;
box-shadow: 0 0 20px #00F5FF, 0 0 40px rgba(0, 245, 255, 0.3);

/* Filled */
background: #00F5FF;
color: #0A0A0F;
```

### Input
```css
background: #1A1A2E;
border: 1px solid #2A2A3E;
border-radius: 4px;
color: #E0E0E0;
padding: 12px 14px;

/* Focus */
border-color: #00F5FF;
box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
```

### Card
```css
background: #1A1A2E;
border: 1px solid #2A2A3E;
border-radius: 8px;
padding: 24px;

/* Hover */
border-color: #00F5FF;
box-shadow: 0 0 15px rgba(0, 245, 255, 0.2);
```
