# Glassmorphism 디자인 가이드

## 디자인 철학

- **유리 효과가 깊이와 레이어를 만든다.** 반투명 요소로 공간감 표현
- **그라데이션 배경이 시각적 흥미를 더한다.** 단조롭지 않게
- **반투명 요소가 가볍고 현대적으로 느껴진다.** 무겁지 않은 UI
- **미묘한 보더가 유리 가장자리를 정의한다.** 요소 구분을 명확히

## UX 원칙

- 배경이 비쳐보이므로 콘텐츠 가독성에 주의한다
- 중요한 정보는 불투명도를 높여 강조한다
- 레이어 간 위계를 blur 강도로 표현한다
- 트렌디하지만 과하지 않게 절제한다

## 컬러

### Brand
- Primary: `#EC4899` (Pink) - CTA, 강조 요소
- Primary Hover: `#F472B6` (Light Pink)

### Background
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Glass: `rgba(255, 255, 255, 0.15)`
- Glass Strong: `rgba(255, 255, 255, 0.25)`

### Content (Text)
- Highlight: `#FFFFFF` - 제목, 강조 텍스트
- Primary: `rgba(255, 255, 255, 0.9)` - 본문 텍스트
- Subtle: `rgba(255, 255, 255, 0.7)` - 보조 텍스트
- Muted: `rgba(255, 255, 255, 0.5)` - 비활성 텍스트

### Border
- Glass: `rgba(255, 255, 255, 0.2)` - 유리 보더
- Strong: `rgba(255, 255, 255, 0.3)` - 강조 보더
- Focus: `#EC4899` - 포커스 상태

### Status
- Error: `#F87171` / Soft: `rgba(248, 113, 113, 0.2)`
- Success: `#4ADE80` / Soft: `rgba(74, 222, 128, 0.2)`
- Info: `#60A5FA` / Soft: `rgba(96, 165, 250, 0.2)`

## 사이즈

### Spacing
- 요소 내부: `12px`
- 요소 간격: `16px`
- 섹션 간격: `32px`

### Border Radius
- 버튼/인풋: `12px`
- 카드: `16px`
- 배지: `8px`

### 컴포넌트
- 버튼: `40px` (기본), `48px` (Large)
- 인풋: `48px`

### Typography
- Font: Pretendard, system-ui
- 본문: `14px` / `400`
- 제목: `24px` / `600`

## Glass Effect
```css
/* 기본 글라스 효과 */
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: #EC4899;
color: #FFFFFF;
border: none;
border-radius: 12px;
font-weight: 600;

/* Glass */
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
color: #FFFFFF;
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Input
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 12px;
color: #FFFFFF;
padding: 14px 16px;

/* Focus */
border-color: #EC4899;
background: rgba(255, 255, 255, 0.15);
```

### Card
```css
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
padding: 24px;
```
