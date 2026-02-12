# Bold & Vibrant 디자인 가이드

## 디자인 철학

- **대담한 컬러가 시선을 사로잡고 에너지를 전달한다.** 소극적이지 않게
- **큰 타이포그래피가 강력한 메시지를 전달한다.** 작게 쓰지 않는다
- **높은 대비로 모든 요소가 눈에 확 들어온다.** 놓치는 것 없이
- **전략적인 컬러 사용으로 최대 임팩트.** 의도적으로 강렬하게

## UX 원칙

- 가장 중요한 액션에 가장 강렬한 컬러를 사용한다
- 여백도 과감하게 - 빈 공간이 임팩트를 강화한다
- 스크롤 없이 핵심 메시지가 전달되도록 구성
- 애니메이션도 대담하고 확실하게

## 컬러

### Brand
- Primary: `#EF4444` (Red) - CTA, 강조 요소
- Primary Hover: `#DC2626` (Deeper Red)
- Secondary: `#FBBF24` (Yellow) - 보조 강조

### Background
- Primary: `#FFFFFF` (White)
- Secondary: `#FEF2F2` (Red Tint)
- Tertiary: `#FEF3C7` (Yellow Tint)

### Content (Text)
- Highlight: `#0F172A` - 제목, 강조 텍스트
- Primary: `#1E293B` - 본문 텍스트
- Subtle: `#64748B` - 보조 텍스트
- Muted: `#94A3B8` - 비활성 텍스트

### Border
- Subtle: `#FED7D7` - 기본 보더
- Strong: `#FCA5A5` - 강조 보더
- Focus: `#EF4444` - 포커스 상태

### Status
- Error: `#DC2626` / Soft: `#FEE2E2`
- Success: `#16A34A` / Soft: `#DCFCE7`
- Info: `#2563EB` / Soft: `#DBEAFE`

## 사이즈

### Spacing
- 요소 내부: `12px`
- 요소 간격: `20px`
- 섹션 간격: `48px`

### Border Radius
- 버튼/인풋: `8px`
- 카드: `12px`
- 배지: `6px`

### 컴포넌트
- 버튼: `44px` (기본), `56px` (Large)
- 인풋: `48px`

### Typography
- Font: Pretendard, system-ui
- 본문: `16px` / `400`
- 제목: `32px` / `800`
- Display: `48px` / `900`

## Shadow
- sm: `0 2px 4px rgba(239, 68, 68, 0.1)`
- md: `0 4px 8px rgba(239, 68, 68, 0.15)`
- lg: `0 8px 16px rgba(239, 68, 68, 0.2)`

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: #EF4444;
color: #FFFFFF;
border: none;
border-radius: 8px;
font-weight: 700;
font-size: 16px;
text-transform: uppercase;
letter-spacing: 0.5px;

/* Secondary (Yellow) */
background: #FBBF24;
color: #0F172A;
font-weight: 700;
```

### Input
```css
background: #FFFFFF;
border: 2px solid #FED7D7;
border-radius: 8px;
color: #1E293B;
padding: 14px 16px;
font-size: 16px;

/* Focus */
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
```

### Card
```css
background: #FFFFFF;
border: 2px solid #FED7D7;
border-radius: 12px;
padding: 32px;
box-shadow: 0 4px 8px rgba(239, 68, 68, 0.1);
```

---

## 적용 가이드

이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:

- **웹 vs 모바일**: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- **정보 밀도**: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- **브랜드 톤**: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게

→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정
