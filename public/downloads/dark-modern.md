# Dark Modern 디자인 가이드

## 디자인 철학

- **다크 배경은 프리미엄이다.** 눈의 피로를 줄이고 고급스러운 느낌을 준다
- **퍼플 액센트가 모던함을 더한다.** 테크/미래 지향적 이미지
- **어두운 배경 위 높은 대비.** 가독성을 확보하면서 시선을 끈다
- **미묘한 그라데이션과 글로우로 깊이감.** 평면적이지 않게

## UX 원칙

- 사용자 플로우를 고려해 자연스러운 동선으로 배치한다
- 어두운 환경에서도 요소 구분이 명확하도록 대비를 유지
- 퍼플 액센트는 중요한 액션에만 사용해 시선을 집중시킨다
- 호버/클릭 시 미묘한 글로우 효과로 피드백 제공

## 컬러

### Brand
- Primary: `#8B5CF6` (Purple) - CTA, 강조 요소
- Primary Hover: `#A78BFA` (Light Purple)

### Background
- Background: `#0F0F0F` (Near Black)
- Secondary: `#1A1A1A` (Dark Gray)
- Tertiary: `#262626` (Medium Dark)

### Content (Text)
- Highlight: `#FFFFFF` - 제목, 강조 텍스트
- Primary: `#E4E4E7` - 본문 텍스트
- Subtle: `#A1A1AA` - 보조 텍스트
- Muted: `#71717A` - 비활성 텍스트

### Border
- Subtle: `#27272A` - 기본 보더
- Strong: `#3F3F46` - 강조 보더
- Focus: `#8B5CF6` - 포커스 상태

### Status
- Error: `#EF4444` / Soft: `#7F1D1D`
- Success: `#22C55E` / Soft: `#14532D`
- Info: `#3B82F6` / Soft: `#1E3A8A`

## 사이즈

### Spacing
- 요소 내부: `8px`
- 요소 간격: `16px`
- 섹션 간격: `32px`

### Border Radius
- 버튼/인풋: `8px`
- 카드: `12px`
- 배지: `6px`

### 컴포넌트
- 버튼: `36px` (기본), `44px` (Large)
- 인풋: `44px`

### Typography
- Font: Pretendard, system-ui
- 본문: `14px` / `400`
- 제목: `24px` / `600`

## Shadow & Glow
- Card: `0 4px 6px rgba(0, 0, 0, 0.3)`
- Glow: `0 0 20px rgba(139, 92, 246, 0.3)`
- Button Hover Glow: `0 0 16px rgba(139, 92, 246, 0.4)`

## 컴포넌트 가이드

### Button
```css
/* Primary */
background: #8B5CF6;
color: #FFFFFF;
border: none;
border-radius: 8px;
font-weight: 600;
/* Hover */
box-shadow: 0 0 16px rgba(139, 92, 246, 0.4);

/* Secondary */
background: #1A1A1A;
color: #E4E4E7;
border: 1px solid #3F3F46;
```

### Input
```css
background: #1A1A1A;
border: 1px solid #27272A;
border-radius: 8px;
color: #E4E4E7;
padding: 12px 14px;

/* Focus */
border-color: #8B5CF6;
box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
```

### Card
```css
background: #1A1A1A;
border: 1px solid #27272A;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
```

---

## 적용 가이드

이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:

- **웹 vs 모바일**: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- **정보 밀도**: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- **브랜드 톤**: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게

→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정
