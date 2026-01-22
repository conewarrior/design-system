export default function EffectsPage() {
  // 디자인 시스템별 Effects 네이밍 비교
  const dsComparison = [
    { system: 'IBM Carbon', approach: '엘리베이션', tokens: 'shadow-container, shadow-raised, shadow-floating, shadow-sticky-nav' },
    { system: 'Material Design', approach: '레벨', tokens: 'elevation-level-0~5, surface1~5' },
    { system: 'Atlassian', approach: '용도 기반', tokens: 'elevation.shadow.raised, elevation.shadow.overlay, elevation.shadow.overflow' },
    { system: 'Shopify Polaris', approach: '컨텍스트', tokens: 'shadow-card, shadow-button, shadow-popover, shadow-modal' },
    { system: 'Microsoft Fluent', approach: '깊이 + 브랜드', tokens: 'shadow2~64, shadowBrand' },
    { system: 'Chakra UI', approach: '크기 기반', tokens: 'shadows.xs~2xl, shadows.outline, shadows.inner' },
  ];

  // 엘리베이션 기반 Shadow 토큰
  const semanticShadowTokens = [
    {
      category: 'Surface',
      description: '정적인 컨테이너 요소의 깊이감.',
      tokens: [
        { name: '--shadow-surface-raised', value: '0 1px 2px rgba(0,0,0,0.05)', usage: '카드, 타일', elevation: 1 },
        { name: '--shadow-surface-overlay', value: '0 4px 8px rgba(0,0,0,0.1)', usage: '드롭다운, 팝오버', elevation: 2 },
        { name: '--shadow-surface-modal', value: '0 16px 48px rgba(0,0,0,0.15)', usage: '모달, 다이얼로그', elevation: 3 },
      ],
      rationale: 'IBM Carbon과 Atlassian의 elevation 개념을 채택. raised(살짝 떠있음) → overlay(덮음) → modal(최상위) 순으로 깊이가 증가합니다.'
    },
    {
      category: 'Interactive',
      description: '상호작용 요소의 시각적 피드백.',
      tokens: [
        { name: '--shadow-interactive-hover', value: '0 4px 12px rgba(0,0,0,0.1)', usage: '카드/버튼 호버', elevation: 2 },
        { name: '--shadow-interactive-pressed', value: '0 1px 2px rgba(0,0,0,0.1)', usage: '버튼 누름', elevation: 0.5 },
        { name: '--shadow-interactive-focus', value: '0 0 0 3px var(--primary-200)', usage: '포커스 링', elevation: 0 },
      ],
      rationale: 'Shopify Polaris의 shadow-button 개념을 확장. 호버 시 떠오르고, 누를 때 눌리는 자연스러운 피드백을 표현합니다.'
    },
    {
      category: 'Utility',
      description: '특수 용도의 그림자.',
      tokens: [
        { name: '--shadow-inset', value: 'inset 0 2px 4px rgba(0,0,0,0.05)', usage: '입력 필드 내부, 눌린 상태', elevation: -1 },
        { name: '--shadow-border', value: '0 0 0 1px rgba(0,0,0,0.05)', usage: '미세한 경계선 대체', elevation: 0 },
      ],
      rationale: 'inset shadow는 움푹 들어간 느낌을 주어 입력 가능한 영역을 암시합니다. border 대신 shadow로 경계를 표현하면 레이아웃에 영향을 주지 않습니다.'
    },
  ];

  // 레이어 기반 Z-Index 토큰
  const semanticZIndexTokens = [
    {
      category: 'Page',
      description: '페이지 레벨 레이어.',
      tokens: [
        { name: '--layer-base', value: '0', usage: '기본 콘텐츠' },
        { name: '--layer-sticky', value: '100', usage: '스티키 헤더, 플로팅 버튼' },
        { name: '--layer-fixed', value: '200', usage: '고정 네비게이션' },
      ]
    },
    {
      category: 'Overlay',
      description: '오버레이 레이어. 페이지 위에 덮이는 요소.',
      tokens: [
        { name: '--layer-dropdown', value: '300', usage: '드롭다운 메뉴, 셀렉트' },
        { name: '--layer-popover', value: '400', usage: '팝오버, 호버 카드' },
        { name: '--layer-modal-backdrop', value: '500', usage: '모달 배경 딤' },
        { name: '--layer-modal', value: '600', usage: '모달, 다이얼로그' },
      ]
    },
    {
      category: 'Top',
      description: '최상위 레이어. 항상 보여야 하는 요소.',
      tokens: [
        { name: '--layer-tooltip', value: '700', usage: '툴팁' },
        { name: '--layer-toast', value: '800', usage: '토스트 알림' },
        { name: '--layer-max', value: '9999', usage: '개발용, 디버그' },
      ]
    },
  ];

  // 모션 토큰
  const motionDurationTokens = [
    {
      category: 'Instant',
      description: '즉각적인 피드백. 사용자가 지연을 느끼지 못함.',
      tokens: [
        { name: '--motion-instant', value: '50ms', usage: '버튼 색상 변화, 토글' },
        { name: '--motion-quick', value: '100ms', usage: '호버 효과, 체크박스' },
      ]
    },
    {
      category: 'Normal',
      description: '일반적인 전환. 자연스럽게 인지됨.',
      tokens: [
        { name: '--motion-normal', value: '200ms', usage: '드롭다운, 아코디언' },
        { name: '--motion-moderate', value: '300ms', usage: '모달 열기, 슬라이드' },
      ]
    },
    {
      category: 'Slow',
      description: '강조된 전환. 주의를 끌거나 복잡한 애니메이션.',
      tokens: [
        { name: '--motion-slow', value: '400ms', usage: '페이지 전환, 대형 요소' },
        { name: '--motion-deliberate', value: '500ms', usage: '강조 애니메이션, 온보딩' },
      ]
    },
  ];

  const motionEasingTokens = [
    { name: '--ease-linear', value: 'linear', usage: '진행 바, 로딩 스피너' },
    { name: '--ease-in', value: 'cubic-bezier(0.4, 0, 1, 1)', usage: '사라지는 요소, exit' },
    { name: '--ease-out', value: 'cubic-bezier(0, 0, 0.2, 1)', usage: '나타나는 요소, enter' },
    { name: '--ease-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: '상태 전환, 일반적 애니메이션' },
    { name: '--ease-spring', value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', usage: '바운스 효과, 강조' },
  ];

  return (
    <div>
      <h1 className="page-title">Effects</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Effects 토큰은 <strong>엘리베이션(elevation)</strong>과 <strong>용도</strong>를 기반으로 명명합니다.
          <code>--shadow-lg</code>가 무엇을 의미하는지 알 수 없지만,
          <code>--shadow-surface-modal</code>은 "모달의 그림자"임을 명확히 알 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 엘리베이션 기반 분류를 사용하는가?</h3>
          <p>
            Material Design과 IBM Carbon은 그림자를 <strong>elevation(높이)</strong> 개념으로 설명합니다.
            높이가 높을수록 그림자가 커지고 퍼집니다. 이는 현실 세계의 물리적 원리를 반영합니다.
          </p>
          <ul>
            <li>
              <strong>Surface</strong>: 정적인 컨테이너. Atlassian의 <code>elevation.shadow.raised</code>,
              <code>overlay</code> 개념을 채택. 카드 → 드롭다운 → 모달 순으로 높이가 증가합니다.
            </li>
            <li>
              <strong>Interactive</strong>: 상호작용 요소. Shopify Polaris의 <code>shadow-button</code>처럼
              호버 시 떠오르고 누를 때 눌리는 피드백을 표현합니다.
            </li>
            <li>
              <strong>Layer</strong>: z-index를 의미 있는 이름으로 정의. "z-index: 100"이 아닌
              "layer-sticky"로 명명하면 용도가 명확해집니다.
            </li>
            <li>
              <strong>Motion</strong>: 시간(duration)보다 <strong>의도</strong>를 표현.
              "200ms"가 아닌 "normal"로 명명하면, 어떤 애니메이션에 적합한지 알 수 있습니다.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Effects(Shadow, Elevation) 토큰 네이밍을 비교했습니다.
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
        <h2 className="section-title">Semantic Shadow Tokens</h2>
        <p className="section-desc">
          엘리베이션과 용도에 따른 그림자를 정의합니다.
        </p>

        {semanticShadowTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <p className="category-rationale"><em>{category.rationale}</em></p>
            <div className="shadow-token-grid">
              {category.tokens.map((token) => (
                <div key={token.name} className="shadow-token-item">
                  <div
                    className="shadow-demo-box"
                    style={{ boxShadow: token.value }}
                  />
                  <div className="shadow-token-info">
                    <code>{token.name}</code>
                    <span className="token-usage">{token.usage}</span>
                    <span className="token-elevation">elevation: {token.elevation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Semantic Layer (Z-Index) Tokens</h2>
        <p className="section-desc">
          UI 레이어 스택을 의미 있는 이름으로 정의합니다. 숫자 대신 용도로 명명하면 관리가 쉬워집니다.
        </p>

        {semanticZIndexTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <div className="layer-stack">
              {category.tokens.map((token, index) => (
                <div
                  key={token.name}
                  className="layer-item"
                  style={{
                    transform: `translateY(${-index * 4}px)`,
                    zIndex: parseInt(token.value) || 0,
                  }}
                >
                  <div className="layer-visual" />
                  <div className="layer-info">
                    <code>{token.name}</code>
                    <span className="layer-value">{token.value}</span>
                    <span className="layer-usage">{token.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Motion Tokens</h2>
        <p className="section-desc">
          애니메이션 지속 시간과 이징을 의도에 따라 분류합니다.
        </p>

        <h3 className="subsection-title">Duration (의도 기반)</h3>
        <p className="category-desc">
          밀리초가 아닌 의도로 명명합니다. "50ms"가 무엇에 적합한지 매번 생각할 필요가 없습니다.
        </p>
        {motionDurationTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h4 className="category-label">{category.category}</h4>
            <p className="category-desc">{category.description}</p>
            <div className="motion-token-list">
              {category.tokens.map((token) => (
                <div key={token.name} className="motion-token-item">
                  <code>{token.name}</code>
                  <span className="motion-value">{token.value}</span>
                  <span className="motion-usage">{token.usage}</span>
                  <div className="motion-demo-container">
                    <div
                      className="motion-demo-bar"
                      style={{ animationDuration: token.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3 className="subsection-title">Easing (방향 기반)</h3>
        <p className="category-desc">
          요소가 나타나는지(enter) 사라지는지(exit)에 따라 적절한 easing을 선택합니다.
        </p>
        <div className="easing-token-list">
          {motionEasingTokens.map((token) => (
            <div key={token.name} className="easing-token-item">
              <code>{token.name}</code>
              <span className="easing-usage">{token.usage}</span>
              <div className="easing-demo-container">
                <div
                  className="easing-demo-ball"
                  style={{ animationTimingFunction: token.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">사용 패턴</h2>
        <div className="usage-patterns">
          <div className="pattern-item">
            <h3>카드 호버</h3>
            <pre className="code-block"><code>{`.card {
  box-shadow: var(--shadow-surface-raised);
  transition: box-shadow var(--motion-quick) var(--ease-out);
}
.card:hover {
  box-shadow: var(--shadow-interactive-hover);
}`}</code></pre>
          </div>

          <div className="pattern-item">
            <h3>모달</h3>
            <pre className="code-block"><code>{`.modal-backdrop {
  z-index: var(--layer-modal-backdrop);
}
.modal {
  z-index: var(--layer-modal);
  box-shadow: var(--shadow-surface-modal);
  animation: fadeIn var(--motion-normal) var(--ease-out);
}`}</code></pre>
          </div>

          <div className="pattern-item">
            <h3>버튼 피드백</h3>
            <pre className="code-block"><code>{`.button {
  transition: all var(--motion-instant) var(--ease-in-out);
}
.button:hover {
  box-shadow: var(--shadow-interactive-hover);
}
.button:active {
  box-shadow: var(--shadow-interactive-pressed);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <pre className="code-block"><code>{`/* Primitive Shadow (크기만) */
--shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1);

/* Semantic Shadow (용도 포함) */
--shadow-surface-raised: var(--shadow-xs);      /* 카드 */
--shadow-surface-overlay: var(--shadow-md);     /* 드롭다운 */
--shadow-surface-modal: var(--shadow-xl);       /* 모달 */
--shadow-interactive-hover: var(--shadow-md);   /* 호버 */
--shadow-interactive-pressed: var(--shadow-xs); /* 누름 */

/* Primitive Duration (숫자) */
--duration-50: 50ms;
--duration-100: 100ms;
--duration-200: 200ms;

/* Semantic Duration (의도) */
--motion-instant: var(--duration-50);   /* 즉각 피드백 */
--motion-quick: var(--duration-100);    /* 호버 */
--motion-normal: var(--duration-200);   /* 전환 */

/* Layer (z-index) */
--layer-base: 0;
--layer-sticky: 100;
--layer-dropdown: 300;
--layer-modal: 600;
--layer-toast: 800;`}</code></pre>
      </section>
    </div>
  );
}
