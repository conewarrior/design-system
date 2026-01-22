export default function BorderPage() {
  // 디자인 시스템별 Border 네이밍 비교
  const dsComparison = [
    { system: 'IBM Carbon', approach: '용도 기반', tokens: 'border-subtle, border-strong, border-inverse, border-interactive' },
    { system: 'Atlassian', approach: '의미 기반', tokens: 'border.default, border.bold, border.subtle, border.disabled' },
    { system: 'Shopify Polaris', approach: '크기+용도', tokens: 'border-width-025~100, border-radius-100~full' },
    { system: 'Microsoft Fluent', approach: '두께+스타일', tokens: 'strokeWidthThin, strokeWidthThick, borderRadiusCircular' },
    { system: 'Chakra UI', approach: '스케일 기반', tokens: 'borders.none~8px, borderStyles.solid/dashed' },
    { system: 'Material Design', approach: '컨텍스트', tokens: 'outline, outlineVariant' },
  ];

  // 용도 기반 Border Width 토큰
  const semanticWidthTokens = [
    {
      category: 'Divider',
      description: '콘텐츠를 시각적으로 구분하는 선.',
      tokens: [
        { name: '--border-divider', value: '1px', primitive: '--border-width-1', usage: '리스트 아이템 구분, 섹션 분리' },
        { name: '--border-divider-bold', value: '2px', primitive: '--border-width-2', usage: '강조된 섹션 구분' },
      ],
      rationale: 'Atlassian, Carbon 모두 divider를 별도로 정의합니다. 단순히 "1px"가 아닌 "구분선"이라는 용도를 담습니다.'
    },
    {
      category: 'Control',
      description: '사용자 입력 요소의 테두리. 버튼, 입력 필드, 체크박스 등.',
      tokens: [
        { name: '--border-control-default', value: '1px', primitive: '--border-width-1', usage: '기본 입력 필드, 셀렉트박스' },
        { name: '--border-control-focus', value: '2px', primitive: '--border-width-2', usage: '포커스 상태 강조' },
        { name: '--border-control-active', value: '2px', primitive: '--border-width-2', usage: '선택된 체크박스, 토글' },
      ],
      rationale: 'Microsoft Fluent의 strokeWidth 개념을 채택. 포커스 시 두께가 증가하는 것은 접근성(WCAG) 요구사항입니다.'
    },
    {
      category: 'Container',
      description: '카드, 모달, 패널 등 컨테이너 요소의 테두리.',
      tokens: [
        { name: '--border-container-subtle', value: '1px', primitive: '--border-width-1', usage: '카드, 드롭다운 메뉴' },
        { name: '--border-container-bold', value: '2px', primitive: '--border-width-2', usage: '강조 카드, 선택된 항목' },
      ],
      rationale: 'IBM Carbon의 border-subtle/strong 개념을 채택. 컨테이너는 콘텐츠를 담는 역할이므로 subtle이 기본입니다.'
    },
  ];

  // 용도 기반 Border Color 토큰
  const semanticColorTokens = [
    {
      category: 'Default',
      description: '기본 상태의 테두리 색상.',
      tokens: [
        { name: '--border-default', usage: '기본 테두리, 카드 경계', color: 'var(--color-border-default)' },
        { name: '--border-subtle', usage: '구분선, 약한 경계', color: 'var(--color-border-secondary)' },
        { name: '--border-bold', usage: '강조 테두리, 헤더 하단', color: 'var(--neutral-400)' },
      ]
    },
    {
      category: 'Interactive',
      description: '사용자 상호작용에 따른 테두리 색상.',
      tokens: [
        { name: '--border-hover', usage: '호버 상태', color: 'var(--color-border-hover)' },
        { name: '--border-focus', usage: '포커스 링', color: 'var(--color-border-focus)' },
        { name: '--border-active', usage: '선택/활성 상태', color: 'var(--color-primary)' },
        { name: '--border-disabled', usage: '비활성 상태', color: 'var(--color-border-disabled)' },
      ]
    },
    {
      category: 'Semantic',
      description: '의미를 전달하는 테두리 색상.',
      tokens: [
        { name: '--border-success', usage: '성공, 유효한 입력', color: 'var(--color-success)' },
        { name: '--border-warning', usage: '경고, 주의 필요', color: 'var(--color-warning)' },
        { name: '--border-error', usage: '오류, 유효하지 않은 입력', color: 'var(--color-error)' },
        { name: '--border-info', usage: '정보성 강조', color: 'var(--color-info)' },
      ]
    },
  ];

  return (
    <div>
      <h1 className="page-title">Border</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Border 토큰은 <strong>용도(divider, control, container)</strong>와 <strong>강도(default, subtle, bold)</strong>의 조합으로 명명합니다.
          <code>--border-width-1</code>은 1px가 어디에 쓰이는지 알 수 없지만,
          <code>--border-control-default</code>는 "입력 필드의 기본 테두리"임을 명확히 알 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 이런 분류를 사용하는가?</h3>
          <ul>
            <li>
              <strong>Divider</strong>: 콘텐츠 영역을 구분하는 선. IBM Carbon은 <code>border-subtle</code>을
              구분선에, Atlassian은 별도의 <code>border.default</code>를 정의합니다.
            </li>
            <li>
              <strong>Control</strong>: 사용자 입력 요소. 포커스 시 테두리 두께가 증가하는 것은
              WCAG 접근성 가이드라인의 권장 사항입니다. Microsoft Fluent의 stroke 개념을 채택했습니다.
            </li>
            <li>
              <strong>Container</strong>: 콘텐츠를 담는 요소. Atlassian은 <code>subtle</code>과 <code>bold</code>를
              구분하여 시각적 강도를 표현합니다.
            </li>
          </ul>
          <p>
            색상의 경우 <strong>상태(hover, focus, active)</strong>와 <strong>의미(success, error)</strong>를 명확히 구분합니다.
            이는 IBM Carbon의 <code>border-interactive</code> 개념과 Atlassian의 상태별 색상 체계를 참고했습니다.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Border 토큰 네이밍을 비교했습니다.
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
        <h2 className="section-title">Semantic Border Width</h2>
        <p className="section-desc">
          요소 유형별 적절한 테두리 두께를 정의합니다.
        </p>

        {semanticWidthTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <p className="category-rationale"><em>{category.rationale}</em></p>
            <div className="semantic-token-table">
              <table>
                <thead>
                  <tr>
                    <th>토큰</th>
                    <th>값</th>
                    <th>Primitive</th>
                    <th>용도</th>
                    <th style={{ width: '80px' }}>시각화</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tokens.map((token) => (
                    <tr key={token.name}>
                      <td><code>{token.name}</code></td>
                      <td>{token.value}</td>
                      <td><code>{token.primitive}</code></td>
                      <td>{token.usage}</td>
                      <td>
                        <div
                          className="border-visual"
                          style={{
                            width: '60px',
                            height: '24px',
                            borderWidth: token.value,
                            borderStyle: 'solid',
                            borderColor: 'var(--color-border-default)',
                            borderRadius: '4px',
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Semantic Border Color</h2>
        <p className="section-desc">
          상태와 의미에 따른 테두리 색상을 정의합니다.
        </p>

        {semanticColorTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <div className="semantic-token-table">
              <table>
                <thead>
                  <tr>
                    <th>토큰</th>
                    <th>용도</th>
                    <th style={{ width: '80px' }}>시각화</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tokens.map((token) => (
                    <tr key={token.name}>
                      <td><code>{token.name}</code></td>
                      <td>{token.usage}</td>
                      <td>
                        <div
                          className="border-color-visual"
                          style={{
                            width: '60px',
                            height: '24px',
                            border: `2px solid ${token.color}`,
                            borderRadius: '4px',
                            background: 'var(--color-bg-surface)',
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">컴포넌트별 Border 패턴</h2>
        <p className="section-desc">
          실제 컴포넌트에서 Border 토큰이 어떻게 사용되는지 보여줍니다.
        </p>
        <div className="border-patterns">
          <div className="pattern-item">
            <h3>Input Field</h3>
            <div className="pattern-states">
              <div className="pattern-demo" style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-control-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Default
              </div>
              <div className="pattern-demo" style={{
                border: '2px solid var(--color-border-focus)',
                borderRadius: 'var(--radius-control-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Focused
              </div>
              <div className="pattern-demo" style={{
                border: '1px solid var(--color-error)',
                borderRadius: 'var(--radius-control-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Error
              </div>
            </div>
            <pre className="code-block"><code>{`.input {
  border: var(--border-control-default) solid var(--border-default);
}
.input:focus {
  border: var(--border-control-focus) solid var(--border-focus);
}
.input.error {
  border-color: var(--border-error);
}`}</code></pre>
          </div>

          <div className="pattern-item">
            <h3>Card</h3>
            <div className="pattern-demo" style={{
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 'var(--radius-container-md)',
              padding: 'var(--spacing-4)'
            }}>
              카드 콘텐츠
            </div>
            <pre className="code-block"><code>{`.card {
  border: var(--border-container-subtle) solid var(--border-subtle);
  border-radius: var(--radius-container-md);
}`}</code></pre>
          </div>

          <div className="pattern-item">
            <h3>Divider</h3>
            <div className="pattern-demo">
              <div style={{ padding: 'var(--spacing-2)' }}>항목 1</div>
              <div style={{
                borderBottom: '1px solid var(--color-border-secondary)',
                margin: '0 calc(var(--spacing-2) * -1)'
              }} />
              <div style={{ padding: 'var(--spacing-2)' }}>항목 2</div>
            </div>
            <pre className="code-block"><code>{`.divider {
  border-bottom: var(--border-divider) solid var(--border-subtle);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <pre className="code-block"><code>{`/* Primitive (크기만) */
--border-width-0: 0;
--border-width-1: 1px;
--border-width-2: 2px;
--border-width-4: 4px;

/* Semantic Width (용도 포함) */
--border-divider: var(--border-width-1);         /* 1px - 구분선 */
--border-divider-bold: var(--border-width-2);    /* 2px - 강조 구분선 */
--border-control-default: var(--border-width-1); /* 1px - 입력 필드 */
--border-control-focus: var(--border-width-2);   /* 2px - 포커스 */
--border-container-subtle: var(--border-width-1);/* 1px - 카드 */
--border-container-bold: var(--border-width-2);  /* 2px - 강조 카드 */

/* Semantic Color (상태/의미 포함) */
--border-default: var(--neutral-300);
--border-subtle: var(--neutral-200);
--border-bold: var(--neutral-400);
--border-focus: var(--primary-500);
--border-error: var(--error-500);
--border-success: var(--success-500);`}</code></pre>
      </section>
    </div>
  );
}
