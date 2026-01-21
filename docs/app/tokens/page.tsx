export default function TokensPage() {
  const neutralShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const primaryShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const semanticShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  const spacingScale = [
    { name: '--spacing-0', value: '0' },
    { name: '--spacing-px', value: '1px' },
    { name: '--spacing-0-5', value: '2px' },
    { name: '--spacing-1', value: '4px' },
    { name: '--spacing-1-5', value: '6px' },
    { name: '--spacing-2', value: '8px' },
    { name: '--spacing-3', value: '12px' },
    { name: '--spacing-4', value: '16px' },
    { name: '--spacing-5', value: '20px' },
    { name: '--spacing-6', value: '24px' },
    { name: '--spacing-8', value: '32px' },
    { name: '--spacing-10', value: '40px' },
    { name: '--spacing-12', value: '48px' },
    { name: '--spacing-16', value: '64px' },
    { name: '--spacing-20', value: '80px' },
    { name: '--spacing-24', value: '96px' },
  ];

  const radiusScale = [
    { name: '--radius-none', value: '0' },
    { name: '--radius-sm', value: '4px' },
    { name: '--radius-md', value: '8px' },
    { name: '--radius-lg', value: '12px' },
    { name: '--radius-xl', value: '16px' },
    { name: '--radius-2xl', value: '24px' },
    { name: '--radius-full', value: '9999px' },
  ];

  const borderWidthScale = [
    { name: '--border-width-0', value: '0' },
    { name: '--border-width-1', value: '1px' },
    { name: '--border-width-2', value: '2px' },
    { name: '--border-width-4', value: '4px' },
    { name: '--border-width-8', value: '8px' },
  ];

  const shadowScale = [
    { name: '--shadow-xs', value: '0 1px 2px 0 rgba(0,0,0,0.05)' },
    { name: '--shadow-sm', value: '0 1px 3px 0 rgba(0,0,0,0.1)' },
    { name: '--shadow-md', value: '0 4px 6px -1px rgba(0,0,0,0.1)' },
    { name: '--shadow-lg', value: '0 10px 15px -3px rgba(0,0,0,0.1)' },
    { name: '--shadow-xl', value: '0 20px 25px -5px rgba(0,0,0,0.1)' },
    { name: '--shadow-2xl', value: '0 25px 50px -12px rgba(0,0,0,0.25)' },
    { name: '--shadow-inner', value: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)' },
  ];

  const zIndexScale = [
    { name: '--z-index-hide', value: '-1' },
    { name: '--z-index-base', value: '0' },
    { name: '--z-index-dropdown', value: '100' },
    { name: '--z-index-sticky', value: '200' },
    { name: '--z-index-fixed', value: '300' },
    { name: '--z-index-modal-backdrop', value: '400' },
    { name: '--z-index-modal', value: '500' },
    { name: '--z-index-popover', value: '600' },
    { name: '--z-index-tooltip', value: '700' },
    { name: '--z-index-toast', value: '800' },
  ];

  const durationScale = [
    { name: '--duration-fastest', value: '50ms' },
    { name: '--duration-faster', value: '100ms' },
    { name: '--duration-fast', value: '150ms' },
    { name: '--duration-normal', value: '200ms' },
    { name: '--duration-slow', value: '300ms' },
    { name: '--duration-slower', value: '400ms' },
    { name: '--duration-slowest', value: '500ms' },
  ];

  const easingScale = [
    { name: '--easing-linear', value: 'linear' },
    { name: '--easing-in', value: 'cubic-bezier(0.4, 0, 1, 1)' },
    { name: '--easing-out', value: 'cubic-bezier(0, 0, 0.2, 1)' },
    { name: '--easing-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    { name: '--easing-bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
  ];

  const typographyScale = [
    { name: '--font-size-xs', value: '0.75rem (12px)' },
    { name: '--font-size-sm', value: '0.875rem (14px)' },
    { name: '--font-size-base', value: '1rem (16px)' },
    { name: '--font-size-lg', value: '1.125rem (18px)' },
    { name: '--font-size-xl', value: '1.25rem (20px)' },
    { name: '--font-size-2xl', value: '1.5rem (24px)' },
    { name: '--font-size-3xl', value: '1.875rem (30px)' },
    { name: '--font-size-4xl', value: '2.25rem (36px)' },
    { name: '--font-size-5xl', value: '3rem (48px)' },
  ];

  const fontWeightScale = [
    { name: '--font-weight-thin', value: '100' },
    { name: '--font-weight-light', value: '300' },
    { name: '--font-weight-normal', value: '400' },
    { name: '--font-weight-medium', value: '500' },
    { name: '--font-weight-semibold', value: '600' },
    { name: '--font-weight-bold', value: '700' },
    { name: '--font-weight-extrabold', value: '800' },
    { name: '--font-weight-black', value: '900' },
  ];

  const lineHeightScale = [
    { name: '--line-height-none', value: '1' },
    { name: '--line-height-tight', value: '1.25' },
    { name: '--line-height-snug', value: '1.375' },
    { name: '--line-height-normal', value: '1.5' },
    { name: '--line-height-relaxed', value: '1.625' },
    { name: '--line-height-loose', value: '2' },
  ];

  const semanticBgColors = [
    { name: '--color-bg-default', desc: '기본 배경' },
    { name: '--color-bg-surface', desc: '카드/패널' },
    { name: '--color-bg-surface-secondary', desc: '2차 표면' },
    { name: '--color-bg-surface-hover', desc: '호버 상태' },
    { name: '--color-bg-inverse', desc: '반전 배경' },
    { name: '--color-bg-disabled', desc: '비활성' },
  ];

  const semanticTextColors = [
    { name: '--color-text-default', desc: '기본 텍스트' },
    { name: '--color-text-secondary', desc: '보조 텍스트' },
    { name: '--color-text-tertiary', desc: '3차 텍스트' },
    { name: '--color-text-placeholder', desc: '플레이스홀더' },
    { name: '--color-text-inverse', desc: '반전 텍스트' },
    { name: '--color-text-disabled', desc: '비활성' },
  ];

  const semanticBorderColors = [
    { name: '--color-border-default', desc: '기본 테두리' },
    { name: '--color-border-secondary', desc: '2차 테두리' },
    { name: '--color-border-hover', desc: '호버 상태' },
    { name: '--color-border-focus', desc: '포커스 상태' },
    { name: '--color-border-disabled', desc: '비활성' },
  ];

  const stateColors = [
    {
      name: 'primary',
      tokens: ['--color-primary', '--color-primary-hover', '--color-primary-active', '--color-primary-disabled', '--color-primary-bg', '--color-on-primary']
    },
    {
      name: 'success',
      tokens: ['--color-success', '--color-success-hover', '--color-success-active', '--color-success-bg', '--color-on-success']
    },
    {
      name: 'warning',
      tokens: ['--color-warning', '--color-warning-hover', '--color-warning-active', '--color-warning-bg', '--color-on-warning']
    },
    {
      name: 'error',
      tokens: ['--color-error', '--color-error-hover', '--color-error-active', '--color-error-bg', '--color-on-error']
    },
    {
      name: 'info',
      tokens: ['--color-info', '--color-info-hover', '--color-info-active', '--color-info-bg', '--color-on-info']
    },
  ];

  return (
    <div>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-description">
        디자인 시스템의 기반이 되는 토큰들. 모든 값은 CSS 변수로 정의되어 있습니다.
      </p>

      {/* Font Family Section */}
      <section>
        <h2 className="section-title">Font Family</h2>
        <div className="token-table">
          <div className="token-row">
            <code className="token-name">--font-family-sans</code>
            <span className="token-preview" style={{ fontFamily: 'var(--font-family-sans)' }}>
              Pretendard 가나다 ABC 123
            </span>
          </div>
          <div className="token-row">
            <code className="token-name">--font-family-mono</code>
            <span className="token-preview" style={{ fontFamily: 'var(--font-family-mono)' }}>
              const code = true;
            </span>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section>
        <h2 className="section-title">Colors</h2>

        <h3 className="subsection-title">Primitive - Neutral</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">neutral</span>
            <div className="color-swatches">
              {neutralShades.map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--neutral-${shade})` }}
                  title={`--neutral-${shade}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Primitive - Primary</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">primary</span>
            <div className="color-swatches">
              {primaryShades.map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--primary-${shade})` }}
                  title={`--primary-${shade}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Primitive - Status</h3>
        <div className="color-section">
          {['success', 'warning', 'error', 'info'].map((color) => (
            <div key={color} className="color-row">
              <span className="color-label">{color}</span>
              <div className="color-swatches">
                {semanticShades.map((shade) => (
                  <div
                    key={shade}
                    className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                    style={{ background: `var(--${color}-${shade})` }}
                    title={`--${color}-${shade}`}
                  >
                    {shade}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Semantic - Background</h3>
        <div className="semantic-color-grid">
          {semanticBgColors.map((item) => (
            <div key={item.name} className="semantic-color-item">
              <div
                className="semantic-color-swatch"
                style={{ background: `var(${item.name})`, border: '1px solid var(--color-border-default)' }}
              />
              <div className="semantic-color-info">
                <code className="semantic-color-name">{item.name}</code>
                <span className="semantic-color-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Semantic - Text</h3>
        <div className="semantic-color-grid">
          {semanticTextColors.map((item) => (
            <div key={item.name} className="semantic-color-item">
              <div
                className="semantic-color-swatch text-swatch"
                style={{ color: `var(${item.name})` }}
              >
                Aa
              </div>
              <div className="semantic-color-info">
                <code className="semantic-color-name">{item.name}</code>
                <span className="semantic-color-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Semantic - Border</h3>
        <div className="semantic-color-grid">
          {semanticBorderColors.map((item) => (
            <div key={item.name} className="semantic-color-item">
              <div
                className="semantic-color-swatch border-swatch"
                style={{ border: `2px solid var(${item.name})` }}
              />
              <div className="semantic-color-info">
                <code className="semantic-color-name">{item.name}</code>
                <span className="semantic-color-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Semantic - State Colors</h3>
        <p className="section-desc">각 상태별 기본, 호버, 활성, 배경 컬러</p>
        <div className="state-color-section">
          {stateColors.map((group) => (
            <div key={group.name} className="state-color-group">
              <span className="state-color-label">{group.name}</span>
              <div className="state-color-swatches">
                {group.tokens.map((token) => (
                  <div
                    key={token}
                    className="state-color-swatch"
                    style={{ background: `var(${token})` }}
                    title={token}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Section */}
      <section>
        <h2 className="section-title">Spacing</h2>
        <p className="section-desc">
          4px 단위 기반의 간격 시스템. 모든 여백과 간격에 사용합니다.
        </p>
        <div className="spacing-scale">
          {spacingScale.map((item) => (
            <div key={item.name} className="spacing-item">
              <code className="spacing-label">{item.name}</code>
              <div
                className="spacing-bar"
                style={{ width: item.value === '0' ? '2px' : item.value }}
              />
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section>
        <h2 className="section-title">Border Radius</h2>
        <div className="radius-grid">
          {radiusScale.map((item) => (
            <div key={item.name} className="radius-item">
              <div
                className="radius-demo"
                style={{ borderRadius: `var(${item.name})` }}
              />
              <code className="radius-label">{item.name.replace('--', '')}</code>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Width Section */}
      <section>
        <h2 className="section-title">Border Width</h2>
        <div className="border-width-scale">
          {borderWidthScale.map((item) => (
            <div key={item.name} className="border-width-item">
              <code className="token-label">{item.name}</code>
              <div
                className="border-width-demo"
                style={{ borderWidth: `var(${item.name})` }}
              />
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Shadow Section */}
      <section>
        <h2 className="section-title">Shadow</h2>
        <div className="shadow-grid">
          {shadowScale.map((item) => (
            <div key={item.name} className="shadow-item">
              <div
                className="shadow-demo"
                style={{ boxShadow: `var(${item.name})` }}
              />
              <code className="shadow-label">{item.name.replace('--', '')}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Z-Index Section */}
      <section>
        <h2 className="section-title">Z-Index</h2>
        <p className="section-desc">레이어 스택 순서를 위한 z-index 스케일</p>
        <div className="z-index-scale">
          {zIndexScale.map((item, index) => (
            <div key={item.name} className="z-index-item">
              <code className="token-label">{item.name}</code>
              <div className="z-index-bar-container">
                <div
                  className="z-index-bar"
                  style={{
                    width: `${Math.max(10, (index / zIndexScale.length) * 100)}%`,
                    zIndex: item.value
                  }}
                />
              </div>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Motion Section */}
      <section>
        <h2 className="section-title">Motion</h2>

        <h3 className="subsection-title">Duration</h3>
        <div className="duration-scale">
          {durationScale.map((item) => (
            <div key={item.name} className="duration-item">
              <code className="token-label">{item.name}</code>
              <div className="duration-demo-container">
                <div
                  className="duration-demo"
                  style={{ animationDuration: `var(${item.name})` }}
                />
              </div>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Easing</h3>
        <div className="easing-scale">
          {easingScale.map((item) => (
            <div key={item.name} className="easing-item">
              <code className="token-label">{item.name}</code>
              <div className="easing-demo-container">
                <div
                  className="easing-demo"
                  style={{ animationTimingFunction: `var(${item.name})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section>
        <h2 className="section-title">Typography</h2>

        <h3 className="subsection-title">Font Size</h3>
        <div className="typography-scale">
          {typographyScale.map((item) => (
            <div key={item.name} className="typography-item">
              <code className="typography-label">{item.name.replace('--font-size-', '')}</code>
              <span
                className="typography-sample"
                style={{ fontSize: `var(${item.name})` }}
              >
                The quick brown fox
              </span>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Font Weight</h3>
        <div className="font-weight-scale">
          {fontWeightScale.map((item) => (
            <div key={item.name} className="font-weight-item">
              <code className="token-label">{item.name.replace('--font-weight-', '')}</code>
              <span
                className="font-weight-sample"
                style={{ fontWeight: `var(${item.name})` }}
              >
                가나다 ABC 123
              </span>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Line Height</h3>
        <div className="line-height-scale">
          {lineHeightScale.map((item) => (
            <div key={item.name} className="line-height-item">
              <code className="token-label">{item.name.replace('--line-height-', '')}</code>
              <div
                className="line-height-sample"
                style={{ lineHeight: `var(${item.name})` }}
              >
                Line 1<br />Line 2
              </div>
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
