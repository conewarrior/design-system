export default function SpacingPage() {
  // 디자인 시스템별 Spacing 네이밍 비교
  const dsComparison = [
    { system: 'IBM Carbon', approach: '스케일 + 용도', tokens: 'spacing-01~13, layout-01~07, container-01~05' },
    { system: 'Atlassian', approach: '스케일 기반', tokens: 'space.0~space.1000 (0~80px)' },
    { system: 'Shopify Polaris', approach: '100 단위 스케일', tokens: 'space-100~space-3200 (4px~128px)' },
    { system: 'Microsoft Fluent', approach: '용도 + 크기', tokens: 'spacingHorizontalXXS~XXXL, spacingVerticalXXS~XXXL' },
    { system: 'Salesforce Lightning', approach: '크기 기반', tokens: 'spacingXxSmall~spacingXxLarge' },
    { system: 'Chakra UI', approach: '숫자 스케일', tokens: 'space.1~space.96 (4px~384px)' },
  ];

  // 컨텍스트 기반 Spacing 토큰
  const semanticTokens = [
    {
      category: 'Inset',
      description: '컨테이너 내부 패딩. 버튼, 카드, 모달 등의 내부 여백.',
      tokens: [
        { name: '--space-inset-xs', value: '4px', usage: '태그, 뱃지 내부' },
        { name: '--space-inset-sm', value: '8px', usage: '소형 버튼, 칩 내부' },
        { name: '--space-inset-md', value: '12px', usage: '기본 버튼, 입력 필드 내부' },
        { name: '--space-inset-lg', value: '16px', usage: '카드, 드롭다운 내부' },
        { name: '--space-inset-xl', value: '24px', usage: '모달, 패널 내부' },
        { name: '--space-inset-2xl', value: '32px', usage: '대형 컨테이너 내부' },
      ]
    },
    {
      category: 'Stack',
      description: '수직 간격. 요소들이 쌓이는 방향의 간격.',
      tokens: [
        { name: '--space-stack-xs', value: '4px', usage: '인라인 요소 사이 (아이콘-텍스트)' },
        { name: '--space-stack-sm', value: '8px', usage: '관련 요소 그룹 내 간격' },
        { name: '--space-stack-md', value: '16px', usage: '문단 사이, 폼 필드 사이' },
        { name: '--space-stack-lg', value: '24px', usage: '섹션 내 블록 사이' },
        { name: '--space-stack-xl', value: '32px', usage: '카드 사이, 주요 섹션 구분' },
        { name: '--space-stack-2xl', value: '48px', usage: '페이지 섹션 사이' },
        { name: '--space-stack-3xl', value: '64px', usage: '대형 섹션 구분' },
      ]
    },
    {
      category: 'Inline',
      description: '수평 간격. 요소들이 나란히 배치될 때의 간격.',
      tokens: [
        { name: '--space-inline-xs', value: '4px', usage: '아이콘과 텍스트 사이' },
        { name: '--space-inline-sm', value: '8px', usage: '버튼 그룹 내 간격' },
        { name: '--space-inline-md', value: '12px', usage: '탭, 네비게이션 아이템 사이' },
        { name: '--space-inline-lg', value: '16px', usage: '카드 그리드 간격' },
        { name: '--space-inline-xl', value: '24px', usage: '컬럼 사이 간격' },
      ]
    },
    {
      category: 'Squish',
      description: '비대칭 패딩. 수평이 수직보다 넓은 경우.',
      tokens: [
        { name: '--space-squish-sm', value: '4px 8px', usage: '태그, 라벨' },
        { name: '--space-squish-md', value: '8px 16px', usage: '버튼, 칩' },
        { name: '--space-squish-lg', value: '12px 24px', usage: '헤더 영역, 탭 바' },
      ]
    },
  ];

  return (
    <div>
      <h1 className="page-title">Spacing</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Spacing 토큰은 <strong>컨텍스트(inset, stack, inline)</strong>와 <strong>크기(xs~3xl)</strong>의 조합으로 명명합니다.
          <code>--spacing-4</code>(16px)는 어디에 쓰이는지 알 수 없지만,
          <code>--space-inset-lg</code>는 "카드 내부 패딩"임을 명확히 알 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 이런 분류를 사용하는가?</h3>
          <ul>
            <li>
              <strong>Inset</strong>: Nathan Curtis(EightShapes)가 제안한 개념으로,
              컨테이너 내부의 사방 패딩을 의미합니다. IBM Carbon의 <code>container</code> 토큰과 유사.
            </li>
            <li>
              <strong>Stack</strong>: 수직으로 쌓이는 요소 사이의 간격.
              대부분의 UI는 위에서 아래로 흐르므로, stack이 가장 자주 사용됩니다.
            </li>
            <li>
              <strong>Inline</strong>: 수평으로 나란히 배치되는 요소 사이의 간격.
              Microsoft Fluent의 <code>spacingHorizontal</code>과 동일한 개념.
            </li>
            <li>
              <strong>Squish</strong>: 수평이 수직보다 넓은 비대칭 패딩.
              버튼처럼 좌우가 상하보다 넓어야 하는 요소에 사용합니다.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Spacing 토큰 네이밍을 비교했습니다.
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
        <h2 className="section-title">Semantic Spacing Tokens</h2>
        <p className="section-desc">
          컨텍스트 기반 토큰을 사용하면, 어디에 어떤 간격을 적용해야 하는지 명확해집니다.
        </p>

        {semanticTokens.map((category) => (
          <div key={category.category} className="token-category-section">
            <h3 className="subsection-title">{category.category}</h3>
            <p className="category-desc">{category.description}</p>
            <div className="semantic-token-table">
              <table>
                <thead>
                  <tr>
                    <th>토큰</th>
                    <th>값</th>
                    <th>용도</th>
                    <th style={{ width: '120px' }}>시각화</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tokens.map((token) => (
                    <tr key={token.name}>
                      <td><code>{token.name}</code></td>
                      <td>{token.value}</td>
                      <td>{token.usage}</td>
                      <td>
                        <div
                          className="spacing-visual"
                          style={{
                            width: token.value.includes(' ') ? token.value.split(' ')[1] : token.value,
                            height: token.value.includes(' ') ? token.value.split(' ')[0] : '8px',
                            background: 'var(--color-primary)',
                            borderRadius: '2px',
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
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <p className="section-desc">
          기존 Primitive 토큰(<code>--spacing-*</code>)과 새로운 Semantic 토큰의 관계입니다.
        </p>
        <pre className="code-block"><code>{`/* Primitive (숫자만) */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-6: 24px;
--spacing-8: 32px;

/* Semantic (컨텍스트 포함) */
--space-inset-xs: var(--spacing-1);    /* 4px - 태그 내부 */
--space-inset-sm: var(--spacing-2);    /* 8px - 버튼 내부 */
--space-inset-md: var(--spacing-3);    /* 12px - 입력 필드 */
--space-inset-lg: var(--spacing-4);    /* 16px - 카드 */
--space-inset-xl: var(--spacing-6);    /* 24px - 모달 */

--space-stack-md: var(--spacing-4);    /* 16px - 문단 사이 */
--space-stack-lg: var(--spacing-6);    /* 24px - 섹션 내 */
--space-stack-xl: var(--spacing-8);    /* 32px - 카드 사이 */`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">사용 가이드</h2>
        <div className="usage-guidelines">
          <div className="guideline-item">
            <h3>버튼 패딩</h3>
            <pre className="code-block"><code>{`.button {
  padding: var(--space-squish-md); /* 8px 16px */
}
.button-sm {
  padding: var(--space-squish-sm); /* 4px 8px */
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>카드 내부</h3>
            <pre className="code-block"><code>{`.card {
  padding: var(--space-inset-lg); /* 16px */
}
.card-body > * + * {
  margin-top: var(--space-stack-md); /* 16px */
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>폼 레이아웃</h3>
            <pre className="code-block"><code>{`.form-field + .form-field {
  margin-top: var(--space-stack-md); /* 16px */
}
.button-group {
  gap: var(--space-inline-sm); /* 8px */
}`}</code></pre>
          </div>
        </div>
      </section>
    </div>
  );
}
