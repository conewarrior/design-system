import Link from 'next/link';

export default function TokensPage() {
  const tokenCategories = [
    {
      name: 'Colors',
      href: '/tokens/colors/',
      description: 'Primitive 색상(neutral, primary, status)과 Semantic 색상(bg, text, border). 다크모드 자동 지원.',
      preview: (
        <div className="flex gap-2">
          {['--primary-500', '--success-500', '--warning-500', '--error-500', '--info-500'].map((color) => (
            <div key={color} className="w-8 h-8 rounded" style={{ background: `var(${color})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Typography',
      href: '/tokens/typography/',
      description: '폰트 패밀리, 크기(xs~9xl), 두께, 줄간격, 자간 토큰.',
      preview: (
        <div className="flex items-center gap-3">
          <span style={{ fontSize: 'var(--font-size-xs)' }}>xs</span>
          <span style={{ fontSize: 'var(--font-size-sm)' }}>sm</span>
          <span style={{ fontSize: 'var(--font-size-base)' }}>base</span>
          <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>lg</span>
        </div>
      ),
    },
    {
      name: 'Spacing',
      href: '/tokens/spacing/',
      description: '4px 기준 간격 시스템. --spacing-0 ~ --spacing-96 (0~384px).',
      preview: (
        <div className="space-y-1">
          {[1, 2, 4, 6, 8].map((n) => (
            <div key={n} className="h-2 bg-primary rounded" style={{ width: `var(--spacing-${n * 4})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Radius',
      href: '/tokens/radius/',
      description: '모서리 둥글기. none(0)부터 full(9999px)까지.',
      preview: (
        <div className="flex gap-2">
          {['sm', 'md', 'lg', 'full'].map((size) => (
            <div key={size} className="w-8 h-8 bg-primary" style={{ borderRadius: `var(--radius-${size})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Effects',
      href: '/tokens/effects/',
      description: '그림자, z-index, 애니메이션 duration/easing, 보더 두께, 투명도.',
      preview: (
        <div className="flex gap-2">
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size} className="w-8 h-8 bg-card rounded" style={{ boxShadow: `var(--shadow-${size})` }} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Design Tokens</h1>
        <p className="text-lg text-muted-foreground">
          디자인 토큰은 디자인 시스템의 시각적 속성을 CSS 변수로 정의한 것입니다.
          하드코딩 대신 토큰을 사용하면 일관성 유지와 전역 변경이 쉬워집니다.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">토큰 구조</h2>
        <p className="text-muted-foreground">
          토큰은 <strong>2계층 구조</strong>를 따릅니다: Primitive → Semantic.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Primitive</div>
            <div className="space-y-2">
              <h4 className="font-semibold">원시 토큰</h4>
              <p className="text-sm text-muted-foreground">실제 값을 담은 기초 토큰. 색상 스케일, 숫자 기반 간격/크기 등.</p>
              <code className="text-sm bg-muted px-2 py-1 rounded">--neutral-500, --spacing-4, --font-size-lg, --shadow-md</code>
            </div>
          </div>
          <div className="text-center text-2xl text-muted-foreground">↓</div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Semantic</div>
            <div className="space-y-2">
              <h4 className="font-semibold">의미 토큰</h4>
              <p className="text-sm text-muted-foreground">용도와 역할을 설명하는 토큰. 다크모드 전환 시 이 토큰들이 변경됨.</p>
              <code className="text-sm bg-muted px-2 py-1 rounded">--color-bg-default, --color-text-primary, --color-border-default</code>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Token Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tokenCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block rounded-lg border bg-card p-6 hover:bg-accent transition-colors space-y-4"
            >
              <div className="flex items-center justify-center p-4 bg-muted rounded-md">
                {category.preview}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">사용 방법</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* npm 패키지 */
npm install @design-geniefy/ui

/* CSS에서 import */
@import '@design-geniefy/ui/tokens.css';

/* 또는 CDN */
@import url('https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css');

/* 사용 */
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-sm);
}`}</code></pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">다크모드</h2>
        <p className="text-muted-foreground">
          <code className="bg-muted px-2 py-1 rounded">&lt;html class="dark"&gt;</code> 또는 부모 요소에 <code className="bg-muted px-2 py-1 rounded">.dark</code> 클래스를 추가하면
          Semantic 토큰이 자동으로 다크모드 값으로 전환됩니다.
        </p>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* 라이트모드 (기본) */
--color-bg-default: var(--neutral-50);    /* #fafafa */
--color-text-default: var(--neutral-900); /* #171717 */

/* 다크모드 (.dark) */
--color-bg-default: var(--neutral-900);   /* #171717 */
--color-text-default: var(--neutral-50);  /* #fafafa */`}</code></pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">핵심 원칙</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <h3 className="font-semibold">하드코딩 금지</h3>
            <p className="text-sm text-muted-foreground"><code className="bg-muted px-1 rounded">#fff</code>, <code className="bg-muted px-1 rounded">16px</code> 대신 <code className="bg-muted px-1 rounded">var(--color-bg-surface)</code>, <code className="bg-muted px-1 rounded">var(--spacing-4)</code>를 사용합니다.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <h3 className="font-semibold">Semantic 토큰 우선</h3>
            <p className="text-sm text-muted-foreground">가능하면 <code className="bg-muted px-1 rounded">--neutral-500</code>보다 <code className="bg-muted px-1 rounded">--color-text-secondary</code>처럼 용도가 명확한 토큰을 사용합니다.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <h3 className="font-semibold">테마 자동 지원</h3>
            <p className="text-sm text-muted-foreground">Semantic 토큰은 다크모드에서 자동 전환됩니다. 추가 작업 없이 테마 지원이 가능합니다.</p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <h3 className="font-semibold">AI 협업 최적화</h3>
            <p className="text-sm text-muted-foreground">명확한 토큰 이름은 AI가 올바른 스타일을 선택하도록 돕습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
