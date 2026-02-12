# Corporate Pro 디자인 가이드

## 디자인 철학

- **블루는 신뢰, 안정, 전문성을 전달한다.** 비즈니스의 핵심 가치
- **정돈된 그리드와 정렬이 세심함을 보여준다.** 믿을 수 있는 인상
- **일관된 간격이 질서와 신뢰감을 만든다.** 정리정돈된 느낌
- **전문적인 타이포그래피와 명확한 위계.** 격식 있으면서도 읽기 쉽게

## UX 원칙

- 사용자가 필요한 정보를 빠르게 찾을 수 있도록 구조화
- 비즈니스 맥락에 맞는 전문적인 톤 유지
- 데이터와 숫자는 명확하고 읽기 쉽게 표현
- 신뢰를 주는 일관된 경험 제공

## 컬러

### Brand
- Primary: `#2563EB` (Blue) - CTA, 강조 요소
- Primary Hover: `#1D4ED8` (Deeper Blue)

### Background
- Primary: `#FFFFFF` (White)
- Secondary: `#F8FAFC` (Slate 50)
- Tertiary: `#DBEAFE` (Blue 100)

### Content (Text)
- Highlight: `#0F172A` - 제목, 강조 텍스트
- Primary: `#1E293B` - 본문 텍스트
- Subtle: `#64748B` - 보조 텍스트
- Muted: `#94A3B8` - 비활성 텍스트

### Border
- Subtle: `#E2E8F0` - 기본 보더
- Strong: `#CBD5E1` - 강조 보더
- Focus: `#2563EB` - 포커스 상태

### Status
- Error: `#DC2626` / Soft: `#FEE2E2`
- Success: `#16A34A` / Soft: `#DCFCE7`
- Info: `#2563EB` / Soft: `#DBEAFE`
- Warning: `#D97706` / Soft: `#FEF3C7`

## 사이즈

### Spacing
- 요소 내부: `12px`
- 요소 간격: `16px`
- 섹션 간격: `32px`

### Border Radius
- 버튼/인풋: `6px`
- 카드: `8px`
- 배지: `4px`

### 컴포넌트
- 버튼: `36px` (기본), `44px` (Large)
- 인풋: `44px`

### Typography
- Font: Pretendard, system-ui
- 본문: `14px` / `400`
- 제목: `24px` / `600`
- Display: `32px` / `700`

## Shadow
- sm: `0 1px 2px rgba(15, 23, 42, 0.06)`
- md: `0 4px 6px rgba(15, 23, 42, 0.08)`
- lg: `0 8px 16px rgba(15, 23, 42, 0.1)`

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: #2563EB;
color: #FFFFFF;
border: none;
border-radius: 6px;
font-weight: 500;

/* Secondary */
background: #FFFFFF;
color: #2563EB;
border: 1px solid #2563EB;
```

### Input
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 6px;
color: #1E293B;
padding: 12px 14px;

/* Focus */
border-color: #2563EB;
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
```

### Card
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 8px;
padding: 24px;
box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
```

### Table
```css
/* Header */
background: #F8FAFC;
color: #64748B;
font-weight: 500;
text-transform: uppercase;
font-size: 12px;
letter-spacing: 0.5px;

/* Row */
border-bottom: 1px solid #E2E8F0;
```

---

## 적용 가이드

이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:

- **웹 vs 모바일**: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- **정보 밀도**: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- **브랜드 톤**: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게

→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정
