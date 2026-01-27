import Link from 'next/link';

export default function TokensPage() {
  const tokenCategories = [
    {
      name: 'Colors',
      href: '/tokens/colors/',
      description: 'Primitive 색상(neutral, primary, status)과 Semantic 색상(bg, text, border). 다크모드 자동 지원.',
      preview: (
        <div className="token-preview-colors">
          {['--primary-500', '--success-500', '--warning-500', '--error-500', '--info-500'].map((color) => (
            <div key={color} className="preview-color" style={{ background: `var(${color})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Typography',
      href: '/tokens/typography/',
      description: '폰트 패밀리, 크기(xs~9xl), 두께, 줄간격, 자간 토큰.',
      preview: (
        <div className="token-preview-typography">
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
        <div className="token-preview-spacing">
          {[1, 2, 4, 6, 8].map((n) => (
            <div key={n} className="preview-spacing-bar" style={{ width: `var(--spacing-${n})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Radius',
      href: '/tokens/radius/',
      description: '모서리 둥글기. none(0)부터 full(9999px)까지.',
      preview: (
        <div className="token-preview-radius">
          {['sm', 'md', 'lg', 'full'].map((size) => (
            <div key={size} className="preview-radius-box" style={{ borderRadius: `var(--radius-${size})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Effects',
      href: '/tokens/effects/',
      description: '그림자, z-index, 애니메이션 duration/easing, 보더 두께, 투명도.',
      preview: (
        <div className="token-preview-effects">
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size} className="preview-shadow-box" style={{ boxShadow: `var(--shadow-${size})` }} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-description">
        디자인 토큰은 디자인 시스템의 시각적 속성을 CSS 변수로 정의한 것입니다.
        하드코딩 대신 토큰을 사용하면 일관성 유지와 전역 변경이 쉬워집니다.
      </p>

      <section className="naming-philosophy">
        <h2 className="section-title">토큰 구조</h2>
        <p className="section-desc">
          토큰은 <strong>2계층 구조</strong>를 따릅니다: Primitive → Semantic.
        </p>

        <div className="token-layers">
          <div className="layer-item">
            <div className="layer-badge primitive">Primitive</div>
            <div className="layer-content">
              <h4>원시 토큰</h4>
              <p>실제 값을 담은 기초 토큰. 색상 스케일, 숫자 기반 간격/크기 등.</p>
              <code>--neutral-500, --spacing-4, --font-size-lg, --shadow-md</code>
            </div>
          </div>
          <div className="layer-arrow">↓</div>
          <div className="layer-item">
            <div className="layer-badge semantic">Semantic</div>
            <div className="layer-content">
              <h4>의미 토큰</h4>
              <p>용도와 역할을 설명하는 토큰. 다크모드 전환 시 이 토큰들이 변경됨.</p>
              <code>--color-bg-default, --color-text-primary, --color-border-default</code>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Token Categories</h2>
        <div className="token-category-grid">
          {tokenCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="token-category-card"
            >
              <div className="category-preview">
                {category.preview}
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">사용 방법</h2>
        <pre className="code-block"><code>{`/* npm 패키지 */
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

      <section>
        <h2 className="section-title">다크모드</h2>
        <p className="section-desc">
          <code>&lt;html class="dark"&gt;</code> 또는 부모 요소에 <code>.dark</code> 클래스를 추가하면
          Semantic 토큰이 자동으로 다크모드 값으로 전환됩니다.
        </p>
        <pre className="code-block"><code>{`/* 라이트모드 (기본) */
--color-bg-default: var(--neutral-50);    /* #fafafa */
--color-text-default: var(--neutral-900); /* #171717 */

/* 다크모드 (.dark) */
--color-bg-default: var(--neutral-900);   /* #171717 */
--color-text-default: var(--neutral-50);  /* #fafafa */`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">핵심 원칙</h2>
        <div className="why-tokens-grid">
          <div className="why-token-item">
            <h3>하드코딩 금지</h3>
            <p><code>#fff</code>, <code>16px</code> 대신 <code>var(--color-bg-surface)</code>, <code>var(--spacing-4)</code>를 사용합니다.</p>
          </div>
          <div className="why-token-item">
            <h3>Semantic 토큰 우선</h3>
            <p>가능하면 <code>--neutral-500</code>보다 <code>--color-text-secondary</code>처럼 용도가 명확한 토큰을 사용합니다.</p>
          </div>
          <div className="why-token-item">
            <h3>테마 자동 지원</h3>
            <p>Semantic 토큰은 다크모드에서 자동 전환됩니다. 추가 작업 없이 테마 지원이 가능합니다.</p>
          </div>
          <div className="why-token-item">
            <h3>AI 협업 최적화</h3>
            <p>명확한 토큰 이름은 AI가 올바른 스타일을 선택하도록 돕습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
