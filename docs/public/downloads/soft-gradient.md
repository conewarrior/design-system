# Soft Gradient 디자인 가이드

## 디자인 철학

- **부드러운 컬러가 친근하고 다가가기 쉬운 느낌을 준다.** 웜톤 파스텔
- **은은한 그라데이션이 깊이감을 더하면서도 과하지 않다.** 미묘한 변화
- **파스텔 악센트가 모던하면서도 친근하다.** 트렌디 + 편안함
- **둥근 모서리가 소프트한 미학을 강화한다.** 부드러운 형태

## UX 원칙

- 사용자가 편안함을 느끼도록 부드러운 전환과 애니메이션 사용
- 파스텔톤이라도 충분한 대비로 가독성 확보
- 따뜻한 느낌을 유지하면서도 전문적으로
- 과한 그라데이션은 피하고 미묘하게 사용

## 컬러

### Brand
- Primary: `#F472B6` (Pink) - CTA, 강조 요소
- Primary Hover: `#EC4899` (Deeper Pink)

### Background
- Gradient: `linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)`
- Primary: `#FEFEFE` (Off White)
- Secondary: `#FDF2F8` (Pink Tint)
- Tertiary: `#FCE7F3` (Light Pink)

### Content (Text)
- Highlight: `#1F2937` - 제목, 강조 텍스트
- Primary: `#374151` - 본문 텍스트
- Subtle: `#6B7280` - 보조 텍스트
- Muted: `#9CA3AF` - 비활성 텍스트

### Border
- Subtle: `#F3E8FF` - 기본 보더
- Strong: `#E9D5FF` - 강조 보더
- Focus: `#F472B6` - 포커스 상태

### Status
- Error: `#F87171` / Soft: `#FEE2E2`
- Success: `#34D399` / Soft: `#D1FAE5`
- Info: `#60A5FA` / Soft: `#DBEAFE`

## 사이즈

### Spacing
- 요소 내부: `12px`
- 요소 간격: `16px`
- 섹션 간격: `32px`

### Border Radius
- 버튼/인풋: `12px`
- 카드: `16px`
- 배지: `full (9999px)`

### 컴포넌트
- 버튼: `40px` (기본), `48px` (Large)
- 인풋: `48px`

### Typography
- Font: Pretendard, system-ui
- 본문: `14px` / `400`
- 제목: `24px` / `600`

## Shadow
- sm: `0 2px 8px rgba(244, 114, 182, 0.08)`
- md: `0 4px 12px rgba(244, 114, 182, 0.12)`
- lg: `0 8px 24px rgba(244, 114, 182, 0.16)`

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: linear-gradient(135deg, #F472B6 0%, #EC4899 100%);
color: #FFFFFF;
border: none;
border-radius: 12px;
font-weight: 600;
box-shadow: 0 4px 12px rgba(244, 114, 182, 0.3);

/* Secondary */
background: #FFFFFF;
color: #F472B6;
border: 1px solid #FBCFE8;
```

### Input
```css
background: #FFFFFF;
border: 1px solid #F3E8FF;
border-radius: 12px;
color: #374151;
padding: 14px 16px;

/* Focus */
border-color: #F472B6;
box-shadow: 0 0 0 3px rgba(244, 114, 182, 0.1);
```

### Card
```css
background: #FFFFFF;
border: 1px solid #F3E8FF;
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 12px rgba(244, 114, 182, 0.08);
```
