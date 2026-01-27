export default function ColorsPage() {
  const neutralShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  // 실제 tokens.css의 Semantic Background 토큰
  const semanticBgTokens = [
    { name: '--color-bg-default', value: 'var(--neutral-50)', usage: '페이지 배경' },
    { name: '--color-bg-surface', value: '#ffffff', usage: '카드, 모달 배경' },
    { name: '--color-bg-surface-secondary', value: 'var(--neutral-100)', usage: '중첩 컨테이너' },
    { name: '--color-bg-surface-tertiary', value: 'var(--neutral-200)', usage: '3차 배경' },
    { name: '--color-bg-surface-hover', value: 'var(--neutral-100)', usage: '호버 상태' },
    { name: '--color-bg-surface-active', value: 'var(--neutral-200)', usage: '활성 상태' },
    { name: '--color-bg-inverse', value: 'var(--neutral-900)', usage: '다크 영역' },
    { name: '--color-bg-disabled', value: 'var(--neutral-100)', usage: '비활성 배경' },
  ];

  // 실제 tokens.css의 Semantic Text 토큰
  const semanticTextTokens = [
    { name: '--color-text-default', value: 'var(--neutral-900)', usage: '기본 텍스트' },
    { name: '--color-text-secondary', value: 'var(--neutral-600)', usage: '보조 텍스트' },
    { name: '--color-text-tertiary', value: 'var(--neutral-500)', usage: '힌트, 캡션' },
    { name: '--color-text-placeholder', value: 'var(--neutral-400)', usage: '플레이스홀더' },
    { name: '--color-text-inverse', value: '#ffffff', usage: '다크 배경 텍스트' },
    { name: '--color-text-disabled', value: 'var(--neutral-400)', usage: '비활성 텍스트' },
  ];

  // 실제 tokens.css의 Semantic Border 토큰
  const semanticBorderTokens = [
    { name: '--color-border-default', value: 'var(--neutral-200)', usage: '기본 테두리' },
    { name: '--color-border-secondary', value: 'var(--neutral-300)', usage: '강조 테두리' },
    { name: '--color-border-hover', value: 'var(--neutral-400)', usage: '호버 테두리' },
    { name: '--color-border-focus', value: 'var(--primary-500)', usage: '포커스 링' },
    { name: '--color-border-disabled', value: 'var(--neutral-200)', usage: '비활성 테두리' },
  ];

  // 실제 tokens.css의 Primary 토큰
  const primaryTokens = [
    { name: '--color-primary', value: 'var(--primary-500)', usage: '기본 primary' },
    { name: '--color-primary-hover', value: 'var(--primary-600)', usage: '호버' },
    { name: '--color-primary-active', value: 'var(--primary-700)', usage: '활성' },
    { name: '--color-primary-disabled', value: 'var(--primary-300)', usage: '비활성' },
    { name: '--color-primary-bg', value: 'var(--primary-50)', usage: 'primary 배경' },
    { name: '--color-primary-bg-hover', value: 'var(--primary-100)', usage: 'primary 배경 호버' },
    { name: '--color-primary-text', value: 'var(--primary-600)', usage: 'primary 텍스트' },
    { name: '--color-on-primary', value: '#ffffff', usage: 'primary 위 텍스트' },
  ];

  // Status 토큰 (success, warning, error, info)
  const statusTokenGroups = [
    {
      name: 'Success',
      color: 'success',
      tokens: [
        { name: '--color-success', usage: '기본' },
        { name: '--color-success-hover', usage: '호버' },
        { name: '--color-success-active', usage: '활성' },
        { name: '--color-success-bg', usage: '배경' },
        { name: '--color-success-text', usage: '텍스트' },
        { name: '--color-on-success', usage: 'success 위 텍스트' },
      ]
    },
    {
      name: 'Warning',
      color: 'warning',
      tokens: [
        { name: '--color-warning', usage: '기본' },
        { name: '--color-warning-hover', usage: '호버' },
        { name: '--color-warning-active', usage: '활성' },
        { name: '--color-warning-bg', usage: '배경' },
        { name: '--color-warning-text', usage: '텍스트' },
        { name: '--color-on-warning', usage: 'warning 위 텍스트' },
      ]
    },
    {
      name: 'Error',
      color: 'error',
      tokens: [
        { name: '--color-error', usage: '기본' },
        { name: '--color-error-hover', usage: '호버' },
        { name: '--color-error-active', usage: '활성' },
        { name: '--color-error-bg', usage: '배경' },
        { name: '--color-error-text', usage: '텍스트' },
        { name: '--color-on-error', usage: 'error 위 텍스트' },
      ]
    },
    {
      name: 'Info',
      color: 'info',
      tokens: [
        { name: '--color-info', usage: '기본' },
        { name: '--color-info-hover', usage: '호버' },
        { name: '--color-info-active', usage: '활성' },
        { name: '--color-info-bg', usage: '배경' },
        { name: '--color-info-text', usage: '텍스트' },
        { name: '--color-on-info', usage: 'info 위 텍스트' },
      ]
    },
  ];

  // Legacy aliases (하위 호환)
  const legacyAliases = [
    { name: '--color-background', maps: '--color-bg-default', note: 'deprecated' },
    { name: '--color-foreground', maps: '--color-text-default', note: 'deprecated' },
    { name: '--color-muted', maps: '--neutral-500', note: 'deprecated' },
    { name: '--color-border', maps: '--color-border-default', note: 'deprecated' },
    { name: '--color-secondary', maps: '--neutral-100', note: 'deprecated' },
    { name: '--color-destructive', maps: '--error-500', note: 'deprecated' },
  ];

  return (
    <div>
      <h1 className="page-title">Colors</h1>

      <section className="naming-intro">
        <h2 className="section-title">토큰 구조</h2>
        <p className="section-desc">
          Color 토큰은 <strong>3계층 구조</strong>로 구성됩니다:
        </p>
        <ul style={{ marginTop: 'var(--spacing-3)', marginLeft: 'var(--spacing-4)' }}>
          <li><strong>Primitive</strong>: 실제 색상값 (<code>--neutral-600</code>, <code>--primary-500</code>)</li>
          <li><strong>Semantic</strong>: 용도 기반 (<code>--color-text-default</code>, <code>--color-bg-surface</code>)</li>
          <li><strong>Component</strong>: 컴포넌트 전용 (필요시 정의)</li>
        </ul>
        <p style={{ marginTop: 'var(--spacing-3)' }}>
          컴포넌트에서는 <strong>Semantic 토큰</strong>을 우선 사용합니다. Primitive 토큰은 직접 사용하지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="section-title">Primitive Colors</h2>
        <p className="section-desc">
          원시 색상 팔레트. 50(밝음) → 950(어두움). <strong>직접 사용하지 않고</strong> Semantic 토큰을 통해 참조합니다.
        </p>

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
                  title={`--neutral-${shade}`}
                >
                  {shade}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Primary (Orange)</h3>
        <div className="color-section">
          <div className="color-row">
            <span className="color-label">primary</span>
            <div className="color-swatches">
              {neutralShades.map((shade) => (
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

        <h3 className="subsection-title">Status Colors</h3>
        <div className="color-section">
          {['success', 'warning', 'error', 'info'].map((color) => (
            <div key={color} className="color-row">
              <span className="color-label">{color}</span>
              <div className="color-swatches">
                {neutralShades.map((shade) => (
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
      </section>

      <section>
        <h2 className="section-title">Semantic Background</h2>
        <p className="section-desc">배경 용도의 토큰. 컴포넌트에서 직접 사용합니다.</p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              {semanticBgTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td><code>{token.value}</code></td>
                  <td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Semantic Text</h2>
        <p className="section-desc">텍스트 용도의 토큰. 가독성과 계층을 보장합니다.</p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              {semanticTextTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td><code>{token.value}</code></td>
                  <td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Semantic Border</h2>
        <p className="section-desc">테두리 용도의 토큰.</p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              {semanticBorderTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td><code>{token.value}</code></td>
                  <td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primary</h2>
        <p className="section-desc">브랜드/주요 액션 색상 토큰.</p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
              </tr>
            </thead>
            <tbody>
              {primaryTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td><code>{token.value}</code></td>
                  <td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Status Colors</h2>
        <p className="section-desc">상태를 전달하는 색상 세트 (Success, Warning, Error, Info).</p>

        <div className="status-color-grid">
          {statusTokenGroups.map((group) => (
            <div key={group.name} className="status-color-card">
              <div
                className="status-color-header"
                style={{ background: `var(--${group.color}-500)` }}
              >
                <span className="status-name">{group.name}</span>
              </div>
              <div className="status-color-body">
                <div className="status-tokens">
                  {group.tokens.map((token) => (
                    <div key={token.name} className="status-token-row">
                      <code>{token.name}</code>
                      <span>{token.usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Legacy Aliases (하위 호환)</h2>
        <p className="section-desc">
          기존 프로젝트 호환을 위해 유지되는 토큰. <strong>새 코드에서는 사용하지 마세요.</strong>
        </p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>Legacy 토큰</th>
                <th>실제 매핑</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {legacyAliases.map((token) => (
                <tr key={token.name}>
                  <td><code style={{ textDecoration: 'line-through' }}>{token.name}</code></td>
                  <td><code>{token.maps}</code></td>
                  <td><span className="tag warning">{token.note}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Dark Mode</h2>
        <p className="section-desc">
          <code>.dark</code> 클래스를 html 또는 부모 요소에 추가하면 다크모드가 적용됩니다.
          Semantic 토큰의 값이 자동으로 다크모드용으로 전환됩니다.
        </p>
        <pre className="code-block"><code>{`/* 다크모드 적용 */
<html class="dark">

/* 다크모드에서 자동 전환되는 예시 */
--color-bg-default: var(--neutral-50)  → var(--neutral-900)
--color-text-default: var(--neutral-900) → var(--neutral-50)
--color-border-default: var(--neutral-200) → var(--neutral-700)`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">사용 예시</h2>
        <div className="usage-guidelines">
          <div className="guideline-item">
            <h3>카드</h3>
            <pre className="code-block"><code>{`.card {
  background: var(--color-bg-surface);
  color: var(--color-text-default);
  border: 1px solid var(--color-border-default);
}
.card:hover {
  background: var(--color-bg-surface-hover);
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>버튼</h3>
            <pre className="code-block"><code>{`.button-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
.button-primary:hover {
  background: var(--color-primary-hover);
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>알림</h3>
            <pre className="code-block"><code>{`.alert-error {
  background: var(--color-error-bg);
  color: var(--color-error-text);
  border: 1px solid var(--color-error);
}`}</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}
