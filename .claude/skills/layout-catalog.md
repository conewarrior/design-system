# Layout Catalog v1

> **목적**: AI가 정형화된 패턴에서 벗어나 다양한 레이아웃을 선택할 수 있도록 실제 코드 템플릿을 제공한다.

**사용 방법**: 사용자가 UI를 요청하면 이 카탈로그에서 레이아웃을 제시하고 선택하게 한다.

---

## Part 1: 페이지 레이아웃 (Page Layouts)

전체 페이지 구조를 정의하는 레이아웃.

---

### P1. Split Hero (좌우 분할)

**특징**: 콘텐츠와 이미지/그래픽을 좌우로 분할. 랜딩 페이지에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────┬───────────────────┤
│                  │                   │
│    Text/CTA      │    Image/Visual   │
│                  │                   │
├──────────────────┴───────────────────┤
│              Footer                  │
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
    {/* Left: Content */}
    <section className="flex flex-col justify-center px-6 py-12 lg:px-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        제목
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        설명 텍스트
      </p>
      <div className="flex gap-4">
        <Button>주요 액션</Button>
        <Button variant="outline">보조 액션</Button>
      </div>
    </section>

    {/* Right: Visual */}
    <section className="bg-muted flex items-center justify-center p-12">
      <div className="w-full max-w-md aspect-square bg-background rounded-lg" />
    </section>
  </main>

  <footer className="border-t border-border px-6 py-4">
    {/* Footer */}
  </footer>
</div>
```

---

### P2. Centered Hero (중앙 집중)

**특징**: 중앙 정렬된 히어로 + 하단 콘텐츠. 제품/서비스 소개에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────────────────────────┤
│                                      │
│           [Centered Hero]            │
│         Title + Description          │
│              + CTAs                  │
│                                      │
├──────────────────────────────────────┤
│    Card    │    Card    │    Card    │
├──────────────────────────────────────┤
│              Footer                  │
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1">
    {/* Hero Section */}
    <section className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold text-foreground mb-6">
        제목
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        설명 텍스트가 여기에 들어갑니다.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg">시작하기</Button>
        <Button size="lg" variant="outline">더 알아보기</Button>
      </div>
    </section>

    {/* Cards Section */}
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">기능 1</h3>
          <p className="text-sm text-muted-foreground">설명</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">기능 2</h3>
          <p className="text-sm text-muted-foreground">설명</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">기능 3</h3>
          <p className="text-sm text-muted-foreground">설명</p>
        </Card>
      </div>
    </section>
  </main>

  <footer className="border-t border-border px-6 py-4">
    {/* Footer */}
  </footer>
</div>
```

---

### P3. Bento Grid (벤토 그리드)

**특징**: 다양한 크기의 카드가 그리드로 배치. 대시보드/포트폴리오에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────────────────────────┤
│                                      │
│  ┌─────────────┬──────┐              │
│  │   Large     │  Sm  │              │
│  │             ├──────┤              │
│  │             │  Sm  │              │
│  ├──────┬──────┴──────┤              │
│  │ Med  │    Med      │              │
│  └──────┴─────────────┘              │
│                                      │
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1 p-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-150">
        {/* Large Card (2x2) */}
        <div className="col-span-2 row-span-2 bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">주요 지표</h3>
          <p className="text-4xl font-bold">1,234</p>
        </div>

        {/* Small Card 1 */}
        <div className="col-span-2 bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">항목 A</h3>
          <p className="text-2xl font-bold">567</p>
        </div>

        {/* Small Card 2 */}
        <div className="col-span-2 bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">항목 B</h3>
          <p className="text-2xl font-bold">89%</p>
        </div>

        {/* Medium Card 1 */}
        <div className="col-span-2 bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">차트</h3>
          {/* Chart placeholder */}
        </div>

        {/* Medium Card 2 */}
        <div className="col-span-2 bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">최근 활동</h3>
          {/* Activity list */}
        </div>
      </div>
    </div>
  </main>
</div>
```

---

### P4. Magazine (매거진 스타일)

**특징**: 큰 피처 이미지 + 그리드 아티클. 블로그/뉴스에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────────────────────────┤
│                                      │
│      [Featured Article - Full]       │
│                                      │
├──────────────────────────────────────┤
│  Article  │  Article  │  Article     │
├───────────┼───────────┼──────────────┤
│  Article  │  Article  │  Article     │
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1">
    {/* Featured Article */}
    <article className="relative h-[60vh] bg-muted">
      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="text-sm text-primary font-medium">카테고리</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">피처 아티클 제목</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          아티클 요약 텍스트
        </p>
      </div>
    </article>

    {/* Article Grid */}
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">최신 글</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <article key={i} className="group">
              <div className="aspect-video bg-muted rounded-lg mb-4" />
              <span className="text-sm text-primary">카테고리</span>
              <h3 className="font-semibold mt-1 mb-2 group-hover:text-primary">
                아티클 제목
              </h3>
              <p className="text-sm text-muted-foreground">
                아티클 요약...
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </main>
</div>
```

---

### P5. Asymmetric (비대칭)

**특징**: 의도적으로 불균형한 레이아웃. 창의적/아트 프로젝트에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────────────────────────┤
│                                      │
│  ┌────────────────────┐    ┌──────┐  │
│  │                    │    │      │  │
│  │      Large         │    │ Sm 1 │  │
│  │                    │    └──────┘  │
│  └────────────────────┘              │
│                         ┌───────────┐│
│  ┌──────┐               │           ││
│  │ Sm 2 │               │  Medium   ││
│  └──────┘               │           ││
│                         └───────────┘│
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1 p-6 lg:p-12">
    <div className="max-w-7xl mx-auto">
      {/* Row 1: Offset grid */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-12 lg:col-span-8 aspect-video bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-bold">프로젝트 A</h2>
        </div>
        <div className="col-span-6 lg:col-span-4 lg:self-end aspect-square bg-muted rounded-lg p-6">
          <h3 className="font-semibold">작은 항목</h3>
        </div>
      </div>

      {/* Row 2: Reverse offset */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 lg:col-span-3 lg:self-start aspect-square bg-muted rounded-lg p-6">
          <h3 className="font-semibold">작은 항목</h3>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 aspect-video bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-bold">프로젝트 B</h2>
        </div>
      </div>
    </div>
  </main>
</div>
```

---

### P6. Sidebar Focus (사이드바 강조)

**특징**: 좁은 사이드바 + 넓은 콘텐츠. 문서/설정 페이지에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├────────┬─────────────────────────────┤
│        │                             │
│  Nav   │       Main Content          │
│  List  │                             │
│        │                             │
│        │                             │
│        │                             │
└────────┴─────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <div className="flex-1 flex">
    {/* Sidebar */}
    <aside className="w-64 border-r border-border p-4 hidden lg:block">
      <nav className="space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md bg-muted text-foreground">
          개요
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
          시작하기
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
          컴포넌트
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
          API
        </a>
      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 lg:p-12 overflow-auto">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">문서 제목</h1>
        <p className="text-muted-foreground mb-8">
          문서 내용이 여기에 들어갑니다.
        </p>
        {/* Content sections */}
      </div>
    </main>
  </div>
</div>
```

---

### P7. Timeline (타임라인)

**특징**: 시간순 콘텐츠 표시. 연혁/로드맵/변경이력에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├──────────────────────────────────────┤
│                                      │
│    ●──── 2024 ────────────────────   │
│    │     Event 1                     │
│    │                                 │
│    ●──── 2023 ────────────────────   │
│    │     Event 2                     │
│    │                                 │
│    ●──── 2022 ────────────────────   │
│          Event 3                     │
│                                      │
└──────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4">
    {/* Header */}
  </header>

  <main className="flex-1 py-12 px-6">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-center">연혁</h1>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        {/* Timeline items */}
        <div className="space-y-12">
          {[
            { year: '2024', title: '글로벌 확장', desc: '아시아 시장 진출' },
            { year: '2023', title: '시리즈 B', desc: '500억 투자 유치' },
            { year: '2022', title: '서비스 런칭', desc: '첫 번째 제품 출시' },
            { year: '2021', title: '회사 설립', desc: '팀 구성 및 시작' },
          ].map((item, i) => (
            <div key={i} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              {/* Content */}
              <div className="bg-muted rounded-lg p-6">
                <span className="text-sm text-muted-foreground">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
</div>
```

---

### P8. Dashboard with Panels (패널 대시보드)

**특징**: 여러 패널이 조합된 복잡한 대시보드. 분석/모니터링에 적합.

```
┌──────────────────────────────────────┐
│              Header                  │
├────────┬─────────────────────────────┤
│        │  Stat │ Stat │ Stat │ Stat │
│  Nav   ├───────┴──────┴──────┴──────┤
│        │                             │
│        │       Main Chart            │
│        │                             │
│        ├──────────────┬──────────────┤
│        │   Table      │   List       │
└────────┴──────────────┴──────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b border-border px-6 py-4 flex items-center justify-between">
    <span className="font-semibold">Dashboard</span>
    <Button variant="outline" size="sm">설정</Button>
  </header>

  <div className="flex-1 flex">
    {/* Sidebar Nav */}
    <aside className="w-16 border-r border-border p-2 flex flex-col items-center gap-2">
      <button className="p-3 rounded-md bg-muted">
        <HomeIcon className="w-5 h-5" />
      </button>
      <button className="p-3 rounded-md hover:bg-muted">
        <ChartIcon className="w-5 h-5" />
      </button>
      <button className="p-3 rounded-md hover:bg-muted">
        <SettingsIcon className="w-5 h-5" />
      </button>
    </aside>

    {/* Main Area */}
    <main className="flex-1 p-6 bg-muted/30">
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {['매출', '사용자', '주문', '전환율'].map((label, i) => (
          <div key={i} className="bg-background border border-border rounded-lg p-4">
            <span className="text-sm text-muted-foreground">{label}</span>
            <p className="text-2xl font-bold mt-1">1,234</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-background border border-border rounded-lg p-6 mb-6 h-64">
        <h3 className="font-semibold mb-4">추이</h3>
        {/* Chart component */}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-4">최근 거래</h3>
          {/* Table */}
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-4">알림</h3>
          {/* List */}
        </div>
      </div>
    </main>
  </div>
</div>
```

---

## Part 2: 섹션 레이아웃 (Section Layouts)

페이지 내에서 사용하는 섹션 블록.

---

### S1. Feature Grid (기능 그리드)

**특징**: 2x2 또는 3x3 그리드로 기능 나열.

```
┌──────────┬──────────┬──────────┐
│  Icon    │  Icon    │  Icon    │
│  Title   │  Title   │  Title   │
│  Desc    │  Desc    │  Desc    │
├──────────┼──────────┼──────────┤
│  Icon    │  Icon    │  Icon    │
│  Title   │  Title   │  Title   │
│  Desc    │  Desc    │  Desc    │
└──────────┴──────────┴──────────┘
```

```tsx
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: ZapIcon, title: '빠른 속도', desc: '최적화된 성능' },
        { icon: ShieldIcon, title: '보안', desc: '엔터프라이즈급 보안' },
        { icon: CodeIcon, title: '개발자 친화', desc: '직관적인 API' },
        { icon: GlobeIcon, title: '글로벌', desc: '전 세계 CDN' },
        { icon: CpuIcon, title: 'AI 기반', desc: '스마트 자동화' },
        { icon: HeartIcon, title: '서포트', desc: '24/7 지원' },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### S2. Alternating (좌우 교차)

**특징**: 이미지와 텍스트가 좌우로 번갈아 배치.

```
┌─────────────────┬─────────────────┐
│     Image       │      Text       │
├─────────────────┼─────────────────┤
│      Text       │     Image       │
├─────────────────┼─────────────────┤
│     Image       │      Text       │
└─────────────────┴─────────────────┘
```

```tsx
<section className="py-16">
  {[
    { title: '기능 1', desc: '설명 텍스트', reverse: false },
    { title: '기능 2', desc: '설명 텍스트', reverse: true },
    { title: '기능 3', desc: '설명 텍스트', reverse: false },
  ].map((item, i) => (
    <div
      key={i}
      className={`flex flex-col lg:flex-row items-center gap-8 py-12 px-6 ${
        item.reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="flex-1 w-full">
        <div className="aspect-video bg-muted rounded-lg" />
      </div>

      {/* Text */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
        <p className="text-muted-foreground mb-6">{item.desc}</p>
        <Button variant="outline">자세히 보기</Button>
      </div>
    </div>
  ))}
</section>
```

---

### S3. Stats Bar (통계 바)

**특징**: 핵심 수치를 가로로 나열.

```
┌──────────────────────────────────────┐
│  100+     │   50K    │   99%   │ #1  │
│ Customers │  Users   │ Uptime  │Rated│
└──────────────────────────────────────┘
```

```tsx
<section className="py-12 px-6 bg-muted">
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: '100+', label: '고객사' },
        { value: '50K', label: '사용자' },
        { value: '99.9%', label: '가동률' },
        { value: '#1', label: '만족도' },
      ].map((stat, i) => (
        <div key={i}>
          <p className="text-4xl font-bold text-primary">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### S4. Testimonial Grid (후기 그리드)

**특징**: 고객 후기를 그리드로 배치.

```
┌─────────────────┬─────────────────┐
│  "Quote..."     │  "Quote..."     │
│  - Name, Role   │  - Name, Role   │
├─────────────────┼─────────────────┤
│  "Quote..."     │  "Quote..."     │
│  - Name, Role   │  - Name, Role   │
└─────────────────┴─────────────────┘
```

```tsx
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { quote: '정말 훌륭한 제품입니다. 팀 생산성이 크게 향상되었습니다.', name: '김철수', role: 'CTO, Tech Corp' },
        { quote: '도입 후 개발 속도가 2배 빨라졌습니다.', name: '이영희', role: 'Lead Dev, Startup' },
        { quote: '고객 지원이 매우 빠르고 친절합니다.', name: '박민수', role: 'PM, Enterprise' },
        { quote: '우리 팀에 꼭 필요한 도구였습니다.', name: '정수진', role: 'Designer, Agency' },
      ].map((item, i) => (
        <div key={i} className="bg-muted rounded-lg p-6">
          <p className="text-lg mb-4">&ldquo;{item.quote}&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20" />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### S5. CTA Banner (콜투액션 배너)

**특징**: 전체 너비 배경 + 중앙 CTA.

```
┌──────────────────────────────────────┐
│ ████████████████████████████████████ │
│ ██                                ██ │
│ ██   Title + Description + BTN   ██ │
│ ██                                ██ │
│ ████████████████████████████████████ │
└──────────────────────────────────────┘
```

```tsx
<section className="py-16 px-6 bg-primary text-primary-foreground">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">
      지금 시작하세요
    </h2>
    <p className="text-lg opacity-90 mb-8">
      14일 무료 체험. 신용카드 필요 없음.
    </p>
    <div className="flex justify-center gap-4">
      <Button size="lg" variant="secondary">
        무료로 시작
      </Button>
      <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
        데모 요청
      </Button>
    </div>
  </div>
</section>
```

---

### S6. Comparison Table (비교 테이블)

**특징**: 기능/가격 비교.

```
┌──────────┬──────────┬──────────┐
│          │  Basic   │   Pro    │
├──────────┼──────────┼──────────┤
│ Feature1 │    ✓     │    ✓     │
│ Feature2 │    -     │    ✓     │
│ Feature3 │    -     │    ✓     │
├──────────┼──────────┼──────────┤
│ Price    │  $9/mo   │  $29/mo  │
└──────────┴──────────┴──────────┘
```

```tsx
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">요금제 비교</h2>

    <div className="border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-muted">
            <th className="p-4 text-left">기능</th>
            <th className="p-4 text-center">Basic</th>
            <th className="p-4 text-center bg-primary/10">Pro</th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: '사용자 수', basic: '5명', pro: '무제한' },
            { feature: '저장공간', basic: '10GB', pro: '100GB' },
            { feature: 'API 액세스', basic: false, pro: true },
            { feature: '우선 지원', basic: false, pro: true },
          ].map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-4">{row.feature}</td>
              <td className="p-4 text-center">
                {typeof row.basic === 'boolean'
                  ? (row.basic ? <CheckIcon className="w-5 h-5 mx-auto text-primary" /> : <span className="text-muted-foreground">-</span>)
                  : row.basic
                }
              </td>
              <td className="p-4 text-center bg-primary/5">
                {typeof row.pro === 'boolean'
                  ? (row.pro ? <CheckIcon className="w-5 h-5 mx-auto text-primary" /> : <span className="text-muted-foreground">-</span>)
                  : row.pro
                }
              </td>
            </tr>
          ))}
          <tr className="border-t border-border bg-muted">
            <td className="p-4 font-semibold">가격</td>
            <td className="p-4 text-center">
              <span className="text-2xl font-bold">$9</span>
              <span className="text-muted-foreground">/월</span>
            </td>
            <td className="p-4 text-center bg-primary/10">
              <span className="text-2xl font-bold">$29</span>
              <span className="text-muted-foreground">/월</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

---

### S7. FAQ Accordion (FAQ 아코디언)

**특징**: 질문-답변 접기/펼치기.

```
┌──────────────────────────────────────┐
│  Q: Question 1                   [▼] │
├──────────────────────────────────────┤
│  Q: Question 2                   [▶] │
│     Answer text here...              │
├──────────────────────────────────────┤
│  Q: Question 3                   [▶] │
└──────────────────────────────────────┘
```

```tsx
<section className="py-16 px-6">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>

    <Accordion type="single" collapsible className="space-y-2">
      {[
        { q: '무료 체험은 어떻게 시작하나요?', a: '회원가입 후 14일간 모든 기능을 무료로 사용할 수 있습니다.' },
        { q: '결제 방법은 무엇이 있나요?', a: '신용카드, 계좌이체, PayPal을 지원합니다.' },
        { q: '환불 정책은 어떻게 되나요?', a: '결제 후 30일 이내 전액 환불 가능합니다.' },
        { q: '팀원 초대는 어떻게 하나요?', a: '설정 > 팀 관리에서 이메일로 초대할 수 있습니다.' },
      ].map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-4">
          <AccordionTrigger className="py-4 hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>
```

---

### S8. Logo Cloud (로고 클라우드)

**특징**: 파트너/고객 로고 나열.

```
┌──────────────────────────────────────┐
│  "Trusted by leading companies"      │
│                                      │
│  [Logo] [Logo] [Logo] [Logo] [Logo]  │
└──────────────────────────────────────┘
```

```tsx
<section className="py-12 px-6 bg-muted">
  <div className="max-w-6xl mx-auto">
    <p className="text-center text-sm text-muted-foreground mb-8">
      세계 최고의 기업들이 신뢰합니다
    </p>

    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div
          key={i}
          className="w-24 h-12 bg-background rounded flex items-center justify-center text-muted-foreground"
        >
          Logo {i}
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### S9. Card Carousel (카드 캐러셀)

**특징**: 가로 스크롤 카드.

```
┌──────────────────────────────────────┐
│ ◀  [Card] [Card] [Card] [Card...]  ▶ │
└──────────────────────────────────────┘
```

```tsx
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">프로젝트</h2>
  </div>

  <div className="overflow-x-auto pb-4">
    <div className="flex gap-6 px-6 min-w-max">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="w-72 shrink-0">
          <div className="aspect-video bg-muted rounded-lg mb-4" />
          <h3 className="font-semibold mb-1">프로젝트 {i}</h3>
          <p className="text-sm text-muted-foreground">카테고리</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### S10. Split Content (분할 콘텐츠)

**특징**: 좁은 텍스트 + 넓은 이미지 (또는 반대).

```
┌────────┬─────────────────────────────┐
│  Text  │                             │
│  +     │         Large Image         │
│  CTA   │                             │
└────────┴─────────────────────────────┘
```

```tsx
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
    {/* Narrow text column */}
    <div className="lg:col-span-1">
      <span className="text-sm text-primary font-medium">새로운 기능</span>
      <h2 className="text-3xl font-bold mt-2 mb-4">
        더 빠르고 강력해진 에디터
      </h2>
      <p className="text-muted-foreground mb-6">
        완전히 새로워진 에디터로 작업 효율을 높이세요.
      </p>
      <Button>체험하기</Button>
    </div>

    {/* Wide image column */}
    <div className="lg:col-span-2">
      <div className="aspect-video bg-muted rounded-lg" />
    </div>
  </div>
</section>
```

---

## Part 3: 사용 프로토콜

### 레이아웃 선택 프로세스

```
1. 사용자가 UI 요청
   ↓
2. AI가 적합한 레이아웃 2-3개 제시
   "다음 레이아웃 중 어떤 것을 원하시나요?
    - P1. Split Hero: 좌우 분할, 랜딩에 적합
    - P2. Centered Hero: 중앙 집중, 제품 소개에 적합
    - P3. Bento Grid: 대시보드에 적합"
   ↓
3. 사용자 선택
   ↓
4. 선택된 레이아웃 코드 기반으로 구현
```

### 조합 예시

| 페이지 유형 | 추천 레이아웃 조합 |
|------------|-------------------|
| 랜딩 페이지 | P1 + S1 + S3 + S4 + S5 |
| 제품 페이지 | P2 + S2 + S6 + S7 |
| 대시보드 | P3 또는 P8 |
| 블로그 | P4 + S9 |
| 문서 사이트 | P6 + S7 |
| 포트폴리오 | P5 + S10 |
| 회사 소개 | P7 + S1 + S8 |

---

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|------|------|-----------|
| 2026-02-03 | v1.0 | 초기 버전: 페이지 레이아웃 8종, 섹션 레이아웃 10종 |
