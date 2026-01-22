export default function RadiusPage() {
  // 디자인 시스템별 Radius 네이밍 비교
  const dsComparison = [
    { system: 'Microsoft Fluent', approach: '컴포넌트 기반', tokens: 'borderRadiusNone, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, borderRadiusXLarge, borderRadiusCircular' },
    { system: 'IBM Carbon', approach: '크기 기반', tokens: 'border-radius-0~8 (0~24px)' },
    { system: 'Atlassian', approach: '용도 기반', tokens: 'border.radius.050~400 (2~16px)' },
    { system: 'Shopify Polaris', approach: '100 단위', tokens: 'border-radius-100~full (4px~9999px)' },
    { system: 'Adobe Spectrum', approach: '컨텍스트', tokens: 'corner-radius-75~300 (3~12px)' },
    { system: 'Chakra UI', approach: '명명 기반', tokens: 'radii.none~full (0~9999px)' },
  ];

  // 컴포넌트 기반 Radius 토큰
  const semanticTokens = [
    {
      category: 'Control',
      description: '사용자 인터랙션 요소. 버튼, 입력 필드, 셀렉트 등.',
      tokens: [
        { name: '--radius-control-sm', value: '4px', primitive: '--radius-sm', usage: '소형 버튼, 입력 필드' },
        { name: '--radius-control-md', value: '6px', primitive: '--radius-md', usage: '기본 버튼, 드롭다운' },
        { name: '--radius-control-lg', value: '8px', primitive: '--radius-lg', usage: '대형 버튼, 검색 바' },
      ],
      rationale: 'Microsoft Fluent의 controlCornerRadius 개념을 채택. 컨트롤 요소는 눌러야 하므로 적당한 둥글기가 필요합니다.'
    },
    {
      category: 'Container',
      description: '콘텐츠를 담는 컨테이너. 카드, 모달, 패널 등.',
      tokens: [
        { name: '--radius-container-sm', value: '8px', primitive: '--radius-md', usage: '작은 카드, 툴팁' },
        { name: '--radius-container-md', value: '12px', primitive: '--radius-lg', usage: '카드, 드롭다운 메뉴' },
        { name: '--radius-container-lg', value: '16px', primitive: '--radius-xl', usage: '모달, 대화상자' },
        { name: '--radius-container-xl', value: '24px', primitive: '--radius-2xl', usage: '대형 패널, 풀스크린 시트' },
      ],
      rationale: 'Fluent의 layerCornerRadius에서 영감. 컨테이너는 콘텐츠를 감싸므로 컨트롤보다 부드러운 모서리가 적합합니다.'
    },
    {
      category: 'Badge',
      description: '작은 인라인 요소. 태그, 뱃지, 칩 등.',
      tokens: [
        { name: '--radius-badge-sm', value: '4px', primitive: '--radius-sm', usage: '직사각형 뱃지' },
        { name: '--radius-badge-md', value: '6px', primitive: '--radius-md', usage: '기본 태그' },
        { name: '--radius-badge-pill', value: '9999px', primitive: '--radius-full', usage: '알약형 칩, 카운트 뱃지' },
      ],
      rationale: '작은 요소는 전체적인 비율을 고려해야 합니다. pill 형태는 높이에 상관없이 완전한 곡선을 만듭니다.'
    },
    {
      category: 'Media',
      description: '미디어 콘텐츠. 이미지, 아바타, 썸네일 등.',
      tokens: [
        { name: '--radius-media-sm', value: '4px', primitive: '--radius-sm', usage: '썸네일, 작은 이미지' },
        { name: '--radius-media-md', value: '8px', primitive: '--radius-md', usage: '카드 이미지, 미디어 플레이어' },
        { name: '--radius-media-circle', value: '50%', primitive: '50%', usage: '아바타, 프로필 이미지' },
      ],
      rationale: '미디어 요소는 콘텐츠를 자르지 않으면서 부드러움을 유지해야 합니다.'
    },
  ];

  return (
    <div>
      <h1 className="page-title">Border Radius</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Radius 토큰은 <strong>컴포넌트 유형(control, container, badge)</strong>과 <strong>크기(sm~xl)</strong>의 조합으로 명명합니다.
          <code>--radius-md</code>(8px)는 버튼에 쓸지 카드에 쓸지 모호하지만,
          <code>--radius-control-md</code>는 "중간 크기 버튼"에, <code>--radius-container-md</code>는 "카드"에 사용함이 명확합니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 컴포넌트 기반 분류를 사용하는가?</h3>
          <p>
            Microsoft Fluent UI는 <code>controlCornerRadius</code>와 <code>layerCornerRadius</code>를 구분합니다.
            같은 8px라도 버튼(control)과 카드(layer/container)에서 다른 의미를 갖기 때문입니다.
          </p>
          <p>
            또한 컴포넌트 크기에 따라 radius가 비례해야 합니다:
          </p>
          <ul>
            <li>32px 높이 버튼 → 4px radius (비율: 12.5%)</li>
            <li>40px 높이 버튼 → 6px radius (비율: 15%)</li>
            <li>48px 높이 버튼 → 8px radius (비율: 16.7%)</li>
          </ul>
          <p>
            이 비례 관계를 토큰에 녹이면, 디자이너와 개발자가 일관된 결정을 내릴 수 있습니다.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Radius 토큰 네이밍을 비교했습니다.
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
        <h2 className="section-title">Semantic Radius Tokens</h2>
        <p className="section-desc">
          컴포넌트 유형별로 적절한 radius를 정의합니다.
        </p>

        {semanticTokens.map((category) => (
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
                    <th style={{ width: '60px' }}>시각화</th>
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
                          className="radius-visual"
                          style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--color-primary)',
                            borderRadius: token.value,
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
        <h2 className="section-title">컴포넌트 크기와 Radius 관계</h2>
        <p className="section-desc">
          버튼 크기에 따른 radius 매핑 예시입니다.
        </p>
        <div className="size-radius-mapping">
          <table>
            <thead>
              <tr>
                <th>컴포넌트 크기</th>
                <th>높이</th>
                <th>Radius 토큰</th>
                <th>값</th>
                <th>시각화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>32px</td>
                <td><code>--radius-control-sm</code></td>
                <td>4px</td>
                <td>
                  <div style={{ width: '60px', height: '32px', background: 'var(--color-primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>Button</div>
                </td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>40px</td>
                <td><code>--radius-control-md</code></td>
                <td>6px</td>
                <td>
                  <div style={{ width: '70px', height: '40px', background: 'var(--color-primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>Button</div>
                </td>
              </tr>
              <tr>
                <td>Large</td>
                <td>48px</td>
                <td><code>--radius-control-lg</code></td>
                <td>8px</td>
                <td>
                  <div style={{ width: '80px', height: '48px', background: 'var(--color-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px' }}>Button</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <pre className="code-block"><code>{`/* Primitive (크기만) */
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;

/* Semantic (용도 포함) */
--radius-control-sm: var(--radius-sm);     /* 4px - 소형 버튼 */
--radius-control-md: 6px;                  /* 6px - 기본 버튼 */
--radius-control-lg: var(--radius-md);     /* 8px - 대형 버튼 */

--radius-container-sm: var(--radius-md);   /* 8px - 작은 카드 */
--radius-container-md: var(--radius-lg);   /* 12px - 카드 */
--radius-container-lg: var(--radius-xl);   /* 16px - 모달 */

--radius-badge-pill: var(--radius-full);   /* 9999px - 알약형 */
--radius-media-circle: 50%;                /* 원형 아바타 */`}</code></pre>
      </section>
    </div>
  );
}
