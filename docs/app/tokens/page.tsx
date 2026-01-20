export default function TokensPage() {
  const neutralShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const primaryShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  const spacingScale = [
    { name: '--spacing-0', value: '0px' },
    { name: '--spacing-0-5', value: '4px' },
    { name: '--spacing-1', value: '8px' },
    { name: '--spacing-1-5', value: '12px' },
    { name: '--spacing-2', value: '16px' },
    { name: '--spacing-2-5', value: '20px' },
    { name: '--spacing-3', value: '24px' },
    { name: '--spacing-4', value: '32px' },
    { name: '--spacing-5', value: '40px' },
    { name: '--spacing-6', value: '48px' },
    { name: '--spacing-8', value: '64px' },
    { name: '--spacing-10', value: '80px' },
    { name: '--spacing-12', value: '96px' },
  ];

  const radiusScale = [
    { name: '--radius-none', value: '0px' },
    { name: '--radius-sm', value: '4px' },
    { name: '--radius-md', value: '8px' },
    { name: '--radius-lg', value: '12px' },
    { name: '--radius-xl', value: '16px' },
    { name: '--radius-2xl', value: '24px' },
    { name: '--radius-full', value: '9999px' },
  ];

  const typographyScale = [
    { name: '--font-size-xs', value: '12px' },
    { name: '--font-size-sm', value: '14px' },
    { name: '--font-size-base', value: '16px' },
    { name: '--font-size-lg', value: '18px' },
    { name: '--font-size-xl', value: '20px' },
    { name: '--font-size-2xl', value: '24px' },
    { name: '--font-size-3xl', value: '30px' },
    { name: '--font-size-4xl', value: '36px' },
  ];

  return (
    <div>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-description">
        디자인 시스템의 기반이 되는 토큰들. 모든 값은 CSS 변수로 정의되어 있습니다.
      </p>

      {/* Colors Section */}
      <section>
        <h2 className="section-title">Colors</h2>

        <h3 className="subsection-title">Neutral</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">neutral</span>
            <div className="color-swatches">
              {neutralShades.map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--neutral-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Primary</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">primary</span>
            <div className="color-swatches">
              {primaryShades.map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--primary-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Semantic</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">success</span>
            <div className="color-swatches">
              {['50', '500', '600', '700'].map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--success-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
          <div className="color-row">
            <span className="color-label">warning</span>
            <div className="color-swatches">
              {['50', '500', '600', '700'].map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--warning-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
          <div className="color-row">
            <span className="color-label">error</span>
            <div className="color-swatches">
              {['50', '500', '600', '700'].map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--error-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
          <div className="color-row">
            <span className="color-label">info</span>
            <div className="color-swatches">
              {['50', '500', '600', '700'].map((shade) => (
                <div
                  key={shade}
                  className={`color-swatch ${parseInt(shade) >= 500 ? 'light-text' : 'dark-text'}`}
                  style={{ background: `var(--info-${shade})` }}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section>
        <h2 className="section-title">Spacing</h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--spacing-3)' }}>
          8px 단위 기반의 간격 시스템. 모든 여백과 간격에 사용합니다.
        </p>
        <div className="spacing-scale">
          {spacingScale.map((item) => (
            <div key={item.name} className="spacing-item">
              <code className="spacing-label">{item.name}</code>
              <div
                className="spacing-bar"
                style={{ width: item.value }}
              />
              <span className="spacing-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Radius Section */}
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

      {/* Typography Section */}
      <section>
        <h2 className="section-title">Typography</h2>
        <div className="typography-scale">
          {typographyScale.map((item) => (
            <div key={item.name} className="typography-item">
              <code className="typography-label">{item.name.replace('--font-size-', '')}</code>
              <span
                className="typography-sample"
                style={{ fontSize: `var(${item.name})` }}
              >
                The quick brown fox ({item.value})
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
