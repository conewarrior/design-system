export default function TypographyPage() {
  // 디자인 시스템별 Typography 네이밍 비교
  const dsComparison = [
    { system: 'IBM Carbon', tokens: 'heading-01~07, body-short-01, body-long-01, label-01, caption-01, helper-text-01' },
    { system: 'Material Design', tokens: 'display-large/medium/small, headline-large/medium/small, body-large/medium/small, label-large/medium/small' },
    { system: 'Shopify Polaris', tokens: 'heading3xl~headingXs, bodyLg~bodyXs' },
    { system: 'Atlassian', tokens: 'font.heading.xxlarge~xsmall, font.body.large~small' },
    { system: 'GitHub Primer', tokens: 'text-title-size-large~small, text-body-size-large~small' },
    { system: 'Microsoft Fluent', tokens: 'fontSizeHero900~100, fontSizeBase500~100' },
  ];

  // 시맨틱 Typography 토큰 (용도 기반)
  const semanticTokens = [
    {
      category: 'Display',
      description: '히어로 섹션, 랜딩 페이지의 대형 타이틀',
      tokens: [
        { name: '--text-display-lg', size: '48px (3rem)', weight: '700', lineHeight: '1.1', usage: '메인 히어로 타이틀' },
        { name: '--text-display-md', size: '36px (2.25rem)', weight: '700', lineHeight: '1.2', usage: '서브 히어로, 대형 섹션 타이틀' },
        { name: '--text-display-sm', size: '30px (1.875rem)', weight: '600', lineHeight: '1.25', usage: '중형 섹션 타이틀' },
      ]
    },
    {
      category: 'Heading',
      description: '페이지, 카드, 모달의 제목',
      tokens: [
        { name: '--text-heading-lg', size: '24px (1.5rem)', weight: '600', lineHeight: '1.3', usage: '페이지 제목, 모달 헤더' },
        { name: '--text-heading-md', size: '20px (1.25rem)', weight: '600', lineHeight: '1.4', usage: '카드 제목, 섹션 헤더' },
        { name: '--text-heading-sm', size: '16px (1rem)', weight: '600', lineHeight: '1.5', usage: '서브섹션 제목, 리스트 그룹 헤더' },
      ]
    },
    {
      category: 'Body',
      description: '본문 텍스트, 설명, 문단',
      tokens: [
        { name: '--text-body-lg', size: '18px (1.125rem)', weight: '400', lineHeight: '1.6', usage: '강조 본문, 인트로 텍스트' },
        { name: '--text-body-md', size: '16px (1rem)', weight: '400', lineHeight: '1.6', usage: '기본 본문, 문단 텍스트' },
        { name: '--text-body-sm', size: '14px (0.875rem)', weight: '400', lineHeight: '1.5', usage: '보조 본문, 긴 설명 텍스트' },
      ]
    },
    {
      category: 'Label',
      description: '폼 라벨, 버튼 텍스트, 네비게이션',
      tokens: [
        { name: '--text-label-lg', size: '16px (1rem)', weight: '500', lineHeight: '1.4', usage: '대형 버튼, 주요 네비게이션' },
        { name: '--text-label-md', size: '14px (0.875rem)', weight: '500', lineHeight: '1.4', usage: '기본 버튼, 폼 라벨, 탭' },
        { name: '--text-label-sm', size: '12px (0.75rem)', weight: '500', lineHeight: '1.4', usage: '소형 버튼, 태그, 뱃지' },
      ]
    },
    {
      category: 'Caption',
      description: '보조 정보, 타임스탬프, 메타데이터',
      tokens: [
        { name: '--text-caption-md', size: '12px (0.75rem)', weight: '400', lineHeight: '1.4', usage: '이미지 캡션, 테이블 푸터' },
        { name: '--text-caption-sm', size: '11px (0.6875rem)', weight: '400', lineHeight: '1.4', usage: '타임스탬프, 메타 정보' },
      ]
    },
    {
      category: 'Code',
      description: '코드 블록, 인라인 코드',
      tokens: [
        { name: '--text-code-lg', size: '16px (1rem)', weight: '400', lineHeight: '1.6', usage: '코드 블록' },
        { name: '--text-code-md', size: '14px (0.875rem)', weight: '400', lineHeight: '1.5', usage: '인라인 코드, 터미널' },
        { name: '--text-code-sm', size: '12px (0.75rem)', weight: '400', lineHeight: '1.4', usage: '작은 코드 스니펫' },
      ]
    },
  ];

  return (
    <div>
      <h1 className="page-title">Typography</h1>

      <section className="naming-intro">
        <h2 className="section-title">네이밍 철학</h2>
        <p className="section-desc">
          Typography 토큰은 <strong>크기가 아닌 역할</strong>로 명명합니다.
          <code>--font-size-sm</code>(14px)이 어디에 쓰이는지는 알 수 없지만,
          <code>--text-body-sm</code>은 "보조 본문에 사용하는 작은 텍스트"임을 명확히 알 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 이런 분류를 사용하는가?</h3>
          <ul>
            <li>
              <strong>Display</strong>: 시선을 사로잡는 대형 타이틀. IBM Carbon의 <code>display-01~04</code>,
              Material의 <code>display-large/medium/small</code>에서 채택한 개념.
            </li>
            <li>
              <strong>Heading</strong>: 콘텐츠 계층을 나타내는 제목. 모든 주요 디자인 시스템이
              heading 카테고리를 사용합니다.
            </li>
            <li>
              <strong>Body</strong>: 읽기 위한 텍스트. IBM Carbon은 <code>body-short</code>(짧은 문장)과
              <code>body-long</code>(긴 문단)을 구분하지만, 우리는 크기로 단순화했습니다.
            </li>
            <li>
              <strong>Label</strong>: 액션과 연결된 텍스트. 버튼, 폼, 네비게이션 등
              사용자 인터랙션과 관련된 요소에 사용합니다.
            </li>
            <li>
              <strong>Caption</strong>: 보조 정보. Atlassian, Carbon 모두 caption 카테고리를
              메타데이터, 타임스탬프, 보조 설명에 사용합니다.
            </li>
            <li>
              <strong>Code</strong>: 기술 콘텐츠. 모노스페이스 폰트를 사용하며,
              개발자 도구나 문서에서 자주 필요합니다.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">디자인 시스템 비교</h2>
        <p className="section-desc">
          주요 디자인 시스템들의 Typography 토큰 네이밍을 비교했습니다.
        </p>
        <div className="ds-comparison-table">
          <table>
            <thead>
              <tr>
                <th>디자인 시스템</th>
                <th>Typography 토큰 네이밍</th>
              </tr>
            </thead>
            <tbody>
              {dsComparison.map((ds) => (
                <tr key={ds.system}>
                  <td><strong>{ds.system}</strong></td>
                  <td><code>{ds.tokens}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Semantic Typography Tokens</h2>
        <p className="section-desc">
          각 토큰은 용도를 이름에 담고 있어, 어디에 사용해야 하는지 명확합니다.
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
                    <th>크기</th>
                    <th>두께</th>
                    <th>줄높이</th>
                    <th>용도</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tokens.map((token) => (
                    <tr key={token.name}>
                      <td><code>{token.name}</code></td>
                      <td>{token.size}</td>
                      <td>{token.weight}</td>
                      <td>{token.lineHeight}</td>
                      <td>{token.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">Font Family</h2>
        <p className="section-desc">
          기본 폰트는 Pretendard, 코드용 폰트는 시스템 모노스페이스를 사용합니다.
        </p>
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

      <section>
        <h2 className="section-title">Primitive → Semantic 매핑</h2>
        <p className="section-desc">
          기존 Primitive 토큰(<code>--font-size-*</code>)과 새로운 Semantic 토큰의 관계입니다.
        </p>
        <pre className="code-block"><code>{`/* Primitive (크기만) */
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */

/* Semantic (역할 포함) */
--text-caption-md: var(--font-size-xs);   /* 12px - 메타데이터 */
--text-body-sm: var(--font-size-sm);      /* 14px - 보조 본문 */
--text-body-md: var(--font-size-base);    /* 16px - 기본 본문 */
--text-body-lg: var(--font-size-lg);      /* 18px - 강조 본문 */
--text-label-md: var(--font-size-sm);     /* 14px - 버튼, 라벨 */
--text-heading-sm: var(--font-size-base); /* 16px - 서브섹션 제목 */`}</code></pre>
      </section>
    </div>
  );
}
