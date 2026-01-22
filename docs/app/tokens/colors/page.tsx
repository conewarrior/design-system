export default function ColorsPage() {
  // 디자인 시스템별 Color 네이밍 비교
  const dsComparison = [
    { system: 'IBM Carbon', approach: '용도 기반', tokens: 'text-primary, text-secondary, background, layer-01, border-subtle, interactive' },
    { system: 'Atlassian', approach: '의미+상태', tokens: 'color.text.default, color.background.neutral, color.border.focused' },
    { system: 'Material Design', approach: '역할+컨테이너', tokens: 'primary, on-primary, surface, on-surface, outline' },
    { system: 'Shopify Polaris', approach: '용도+변형', tokens: 'color-bg, color-bg-surface, color-text, color-text-secondary' },
    { system: 'Adobe Spectrum', approach: '역할+강도', tokens: 'background-layer-1, gray-100~900, semantic-positive' },
    { system: 'Chakra UI', approach: '팔레트+레벨', tokens: 'gray.50~900, blue.500, colors.text, colors.bg' },
  ];

  const neutralShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  // 시맨틱 Background 토큰
  const semanticBgTokens = [
    {
      category: 'Canvas',
      description: '페이지 전체 배경. 가장 기본적인 레이어.',
      tokens: [
        { name: '--bg-canvas', primitive: '--neutral-50', usage: '페이지 배경' },
        { name: '--bg-canvas-alt', primitive: '--neutral-100', usage: '대체 배경, 섹션 구분' },
      ],
      rationale: 'IBM Carbon의 background, Atlassian의 color.background.neutral 개념. 모든 콘텐츠가 올라가는 기본 캔버스입니다.'
    },
    {
      category: 'Surface',
      description: '콘텐츠를 담는 컨테이너. 카드, 패널, 모달 등.',
      tokens: [
        { name: '--bg-surface', primitive: '--white', usage: '카드, 모달 배경' },
        { name: '--bg-surface-secondary', primitive: '--neutral-50', usage: '중첩 컨테이너, 서브 패널' },
        { name: '--bg-surface-hover', primitive: '--neutral-100', usage: '카드 호버 상태' },
        { name: '--bg-surface-active', primitive: '--neutral-200', usage: '선택된 카드, 활성 항목' },
      ],
      rationale: 'Material Design의 surface 개념. 캔버스 위에 떠있는 컨테이너로, 깊이감을 표현합니다.'
    },
    {
      category: 'Interactive',
      description: '사용자 상호작용 요소의 배경.',
      tokens: [
        { name: '--bg-interactive', primitive: '--primary-500', usage: '기본 버튼, CTA' },
        { name: '--bg-interactive-hover', primitive: '--primary-600', usage: '버튼 호버' },
        { name: '--bg-interactive-active', primitive: '--primary-700', usage: '버튼 누름' },
        { name: '--bg-interactive-disabled', primitive: '--neutral-200', usage: '비활성 버튼' },
      ],
      rationale: 'IBM Carbon의 interactive 개념. 클릭 가능한 요소임을 시각적으로 표현합니다.'
    },
    {
      category: 'Inverse',
      description: '반전 배경. 다크 영역.',
      tokens: [
        { name: '--bg-inverse', primitive: '--neutral-900', usage: '다크 헤더, 푸터' },
        { name: '--bg-inverse-hover', primitive: '--neutral-800', usage: '다크 영역 호버' },
      ],
      rationale: 'Atlassian, Carbon 모두 inverse 컨셉을 사용. 라이트 테마에서 부분적 다크 영역을 표현합니다.'
    },
  ];

  // 시맨틱 Text 토큰
  const semanticTextTokens = [
    {
      category: 'Primary',
      description: '주요 텍스트. 가장 높은 대비.',
      tokens: [
        { name: '--text-default', primitive: '--neutral-900', usage: '본문, 제목' },
        { name: '--text-secondary', primitive: '--neutral-600', usage: '보조 설명, 메타 정보' },
        { name: '--text-tertiary', primitive: '--neutral-500', usage: '힌트, 캡션' },
      ],
      rationale: 'Material Design의 on-surface 개념. 텍스트 계층을 대비로 표현합니다.'
    },
    {
      category: 'Interactive',
      description: '상호작용 텍스트.',
      tokens: [
        { name: '--text-link', primitive: '--primary-600', usage: '링크' },
        { name: '--text-link-hover', primitive: '--primary-700', usage: '링크 호버' },
        { name: '--text-link-visited', primitive: '--primary-800', usage: '방문한 링크' },
      ],
      rationale: '웹 접근성 기준, 링크는 본문과 구분되어야 합니다.'
    },
    {
      category: 'Inverse',
      description: '다크 배경 위 텍스트.',
      tokens: [
        { name: '--text-on-inverse', primitive: '--white', usage: '다크 배경의 텍스트' },
        { name: '--text-on-inverse-secondary', primitive: '--neutral-300', usage: '다크 배경의 보조 텍스트' },
      ],
      rationale: 'Material Design의 on-{surface} 패턴. 배경과 충분한 대비를 보장합니다.'
    },
    {
      category: 'On Interactive',
      description: '상호작용 요소 위 텍스트.',
      tokens: [
        { name: '--text-on-interactive', primitive: '--white', usage: '버튼 텍스트' },
        { name: '--text-on-interactive-disabled', primitive: '--neutral-400', usage: '비활성 버튼 텍스트' },
      ],
      rationale: 'on-primary, on-secondary 패턴의 단순화. 버튼 색상에 상관없이 가독성을 보장합니다.'
    },
  ];

  // 시맨틱 상태 색상
  const semanticStatusTokens = [
    {
      name: 'Success',
      description: '성공, 완료, 긍정적 상태',
      tokens: [
        { name: '--status-success', usage: '성공 아이콘, 텍스트' },
        { name: '--status-success-bg', usage: '성공 배너 배경' },
        { name: '--status-success-border', usage: '성공 테두리' },
      ],
      color: 'success'
    },
    {
      name: 'Warning',
      description: '경고, 주의가 필요한 상태',
      tokens: [
        { name: '--status-warning', usage: '경고 아이콘, 텍스트' },
        { name: '--status-warning-bg', usage: '경고 배너 배경' },
        { name: '--status-warning-border', usage: '경고 테두리' },
      ],
      color: 'warning'
    },
    {
      name: 'Error',
      description: '오류, 실패, 부정적 상태',
      tokens: [
        { name: '--status-error', usage: '오류 아이콘, 텍스트' },
        { name: '--status-error-bg', usage: '오류 배너 배경' },
        { name: '--status-error-border', usage: '오류 테두리' },
      ],
      color: 'error'
    },
    {
      name: 'Info',
      description: '정보, 안내',
      tokens: [
        { name: '--status-info', usage: '정보 아이콘, 텍스트' },
        { name: '--status-info-bg', usage: '정보 배너 배경' },
        { name: '--status-info-border', usage: '정보 테두리' },
      ],
      color: 'info'
    },
  ];

  return (
    <div>
      <h1 className="page-title">Colors</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Color 토큰은 <strong>용도(bg, text, border)</strong>와 <strong>컨텍스트(surface, interactive, inverse)</strong>의 조합으로 명명합니다.
          <code>--neutral-600</code>이 무엇을 의미하는지 알 수 없지만,
          <code>--text-secondary</code>는 "보조 텍스트 색상"임을 명확히 알 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 이런 분류를 사용하는가?</h3>
          <p>
            대부분의 성숙한 디자인 시스템은 색상을 <strong>3계층</strong>으로 분리합니다:
          </p>
          <ul>
            <li>
              <strong>Primitive</strong>: 실제 색상값. <code>--neutral-600</code>, <code>--primary-500</code>.
              직접 사용하지 않고 Semantic 토큰이 참조합니다.
            </li>
            <li>
              <strong>Semantic</strong>: 용도를 담은 이름. <code>--text-secondary</code>, <code>--bg-surface</code>.
              컴포넌트에서 직접 사용합니다.
            </li>
            <li>
              <strong>Component</strong>: 특정 컴포넌트 전용. <code>--button-bg</code>.
              필요할 때만 정의합니다.
            </li>
          </ul>
          <p>
            이 구조는 IBM Carbon, Atlassian, Material Design 모두가 채택한 방식입니다.
            테마를 변경하거나 다크모드를 적용할 때, Primitive만 수정하면 전체 UI가 일관되게 변경됩니다.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Color 토큰 네이밍을 비교했습니다.
        </p>
        <div className="ds-comparison-table">
          <table>
            <thead>
              <tr>
                <th>디자인 시스템</th>
                <th>접근 방식</th>
                <th>토큰 네이밍</th>
              </tr>
            </thead>
            <tbody>
              {dsComparison.map((ds) => (
                <tr key={ds.system}>
                  <td><strong>{ds.system}</strong></td>
                  <td>{ds.approach}</td>
                  <td><code>{ds.tokens}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primitive Colors</h2>
        <p className="section-desc">
          원시 색상 팔레트. <strong>직접 사용하지 않고</strong> Semantic 토큰을 통해 참조합니다.
        </p>

        <h3 className="subsection-title">Neutral</h3>
        <p className="category-desc">
          대부분의 UI 요소에 사용되는 무채색 스케일. 50(밝음) → 950(어두움).
        </p>
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

        <h3 className="subsection-title">Primary</h3>
        <p className="category-desc">
          브랜드 색상. 주요 액션, CTA, 링크에 사용됩니다.
        </p>
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

        <h3 className="subsection-title">Status</h3>
        <p className="category-desc">
          의미를 전달하는 색상. Success(초록), Warning(노랑), Error(빨강), Info(파랑).
        </p>
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
        <p className="section-desc">
          배경 용도에 따른 색상 토큰. 컴포넌트에서 직접 사용합니다.
        </p>

        {semanticBgTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <p className="category-rationale"><em>{category.rationale}</em></p>
            <div className="semantic-color-grid">
              {category.tokens.map((token) => (
                <div key={token.name} className="semantic-color-item">
                  <div
                    className="semantic-color-swatch"
                    style={{
                      background: `var(${token.primitive.replace('--', '--')})`,
                      border: '1px solid var(--neutral-200)'
                    }}
                  />
                  <div className="semantic-color-info">
                    <code className="semantic-color-name">{token.name}</code>
                    <span className="semantic-color-primitive">← {token.primitive}</span>
                    <span className="semantic-color-desc">{token.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Semantic Text</h2>
        <p className="section-desc">
          텍스트 용도에 따른 색상 토큰. 가독성과 계층을 보장합니다.
        </p>

        {semanticTextTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <p className="category-rationale"><em>{category.rationale}</em></p>
            <div className="text-color-list">
              {category.tokens.map((token) => (
                <div key={token.name} className="text-color-item">
                  <span
                    className="text-color-sample"
                    style={{ color: `var(${token.primitive.replace('--', '--')})` }}
                  >
                    가나다 ABC 123
                  </span>
                  <div className="text-color-info">
                    <code>{token.name}</code>
                    <span className="text-color-primitive">← {token.primitive}</span>
                    <span className="text-color-usage">{token.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Semantic Status</h2>
        <p className="section-desc">
          상태를 전달하는 색상 토큰. 각 상태는 foreground, background, border 세트로 구성됩니다.
        </p>

        <div className="status-color-grid">
          {semanticStatusTokens.map((status) => (
            <div key={status.name} className="status-color-card">
              <div
                className="status-color-header"
                style={{ background: `var(--${status.color}-500)` }}
              >
                <span className="status-name">{status.name}</span>
              </div>
              <div className="status-color-body">
                <p className="status-desc">{status.description}</p>
                <div className="status-tokens">
                  {status.tokens.map((token) => (
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
        <h2 className="section-title">사용 패턴</h2>
        <div className="usage-guidelines">
          <div className="guideline-item">
            <h3>카드</h3>
            <pre className="code-block"><code>{`.card {
  background: var(--bg-surface);
  color: var(--text-default);
}
.card:hover {
  background: var(--bg-surface-hover);
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>버튼</h3>
            <pre className="code-block"><code>{`.button-primary {
  background: var(--bg-interactive);
  color: var(--text-on-interactive);
}
.button-primary:hover {
  background: var(--bg-interactive-hover);
}
.button-primary:disabled {
  background: var(--bg-interactive-disabled);
  color: var(--text-on-interactive-disabled);
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>알림 배너</h3>
            <pre className="code-block"><code>{`.alert-success {
  background: var(--status-success-bg);
  border: 1px solid var(--status-success-border);
  color: var(--status-success);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <pre className="code-block"><code>{`/* Primitive (색상 스케일) */
--neutral-50: #fafafa;
--neutral-600: #525252;
--neutral-900: #171717;
--primary-500: #3b82f6;
--primary-600: #2563eb;

/* Semantic Background (용도 포함) */
--bg-canvas: var(--neutral-50);
--bg-surface: var(--white);
--bg-surface-hover: var(--neutral-100);
--bg-interactive: var(--primary-500);
--bg-interactive-hover: var(--primary-600);
--bg-inverse: var(--neutral-900);

/* Semantic Text (용도 포함) */
--text-default: var(--neutral-900);
--text-secondary: var(--neutral-600);
--text-tertiary: var(--neutral-500);
--text-link: var(--primary-600);
--text-on-interactive: var(--white);
--text-on-inverse: var(--white);

/* Semantic Status (의미 포함) */
--status-success: var(--success-600);
--status-success-bg: var(--success-50);
--status-success-border: var(--success-200);
--status-error: var(--error-600);
--status-error-bg: var(--error-50);`}</code></pre>
      </section>
    </div>
  );
}
