import Link from 'next/link';

export default function TokensPage() {
  const tokenCategories = [
    {
      name: 'Colors',
      href: '/tokens/colors/',
      description: 'Primitive(원시)와 Semantic(의미) 두 계층의 색상 시스템. 용도에 따라 배경, 텍스트, 테두리, 상태 색상을 정의합니다.',
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
      description: '용도 기반 타이포그래피. body, heading, label, caption 등 역할에 따른 텍스트 스타일을 정의합니다.',
      preview: (
        <div className="token-preview-typography">
          <span style={{ fontSize: '12px' }}>caption</span>
          <span style={{ fontSize: '14px' }}>body</span>
          <span style={{ fontSize: '20px', fontWeight: 600 }}>heading</span>
        </div>
      ),
    },
    {
      name: 'Spacing',
      href: '/tokens/spacing/',
      description: '컨텍스트 기반 간격 시스템. inset(내부 여백), stack(수직 간격), inline(수평 간격)으로 분류합니다.',
      preview: (
        <div className="token-preview-spacing">
          {[1, 2, 3, 4, 6].map((n) => (
            <div key={n} className="preview-spacing-bar" style={{ width: `var(--spacing-${n})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Radius',
      href: '/tokens/radius/',
      description: '컴포넌트 크기 기반 모서리 둥글기. control(버튼/입력), container(카드/모달), pill(태그) 등으로 분류합니다.',
      preview: (
        <div className="token-preview-radius">
          {['sm', 'md', 'lg', 'full'].map((size) => (
            <div key={size} className="preview-radius-box" style={{ borderRadius: `var(--radius-${size})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Border',
      href: '/tokens/border/',
      description: '테두리 두께와 스타일. 기본선, 강조선, 구분선 등 용도에 따라 분류합니다.',
      preview: (
        <div className="token-preview-border">
          {[1, 2, 4].map((w) => (
            <div key={w} className="preview-border-box" style={{ borderWidth: `var(--border-width-${w})` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'Effects',
      href: '/tokens/effects/',
      description: '엘리베이션 기반 시각 효과. raised, floating, overlay 등 UI 레이어에 따른 그림자와 모션을 정의합니다.',
      preview: (
        <div className="token-preview-effects">
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size} className="preview-shadow-box" style={{ boxShadow: `var(--shadow-${size})` }} />
          ))}
        </div>
      ),
    },
  ];

  const designSystems = [
    { name: 'IBM Carbon', approach: '용도 기반', example: 'heading-01, body-long-01, label-01' },
    { name: 'Shopify Polaris', approach: '카테고리+크기', example: 'headingLg, bodyMd, space-400' },
    { name: 'Microsoft Fluent', approach: '컴포넌트 기반', example: 'controlCornerRadius, layerCornerRadius' },
    { name: 'Adobe Spectrum', approach: '컨텍스트+스케일', example: 'font-size-100, corner-radius-100' },
    { name: 'Atlassian', approach: '의미+상태', example: 'color.background.neutral, space.100' },
    { name: 'Salesforce Lightning', approach: '용도+크기', example: 'spacingSmall, borderRadiusMedium' },
    { name: 'GitHub Primer', approach: '역할 기반', example: 'text-body, control-medium' },
    { name: 'Ant Design', approach: '시드+맵+별칭', example: 'borderRadius, colorPrimary' },
    { name: 'Chakra UI', approach: '의미+스케일', example: 'heading.xl, space.4, radii.md' },
    { name: 'Material Design', approach: '타입+역할', example: 'headline-large, body-medium' },
  ];

  return (
    <div>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-description">
        디자인 토큰은 디자인 시스템의 시각적 속성을 CSS 변수로 정의한 것입니다.
        하드코딩 대신 토큰을 사용하면 일관성 유지와 전역 변경이 쉬워집니다.
      </p>

      <section className="naming-philosophy">
        <h2 className="section-title">토큰 네이밍 철학</h2>
        <p className="section-desc">
          우리의 토큰 네이밍은 <strong>3계층 구조</strong>를 따릅니다: Primitive → Semantic → Component.
          이 구조는 IBM Carbon, Atlassian, Adobe Spectrum 등 성숙한 디자인 시스템들이 채택한 방식입니다.
        </p>

        <div className="token-layers">
          <div className="layer-item">
            <div className="layer-badge primitive">Primitive</div>
            <div className="layer-content">
              <h4>원시 토큰</h4>
              <p>실제 값을 담은 기초 토큰. 색상 스케일, 숫자 기반 간격 등.</p>
              <code>--neutral-500, --spacing-4, --primary-600</code>
            </div>
          </div>
          <div className="layer-arrow">↓</div>
          <div className="layer-item">
            <div className="layer-badge semantic">Semantic</div>
            <div className="layer-content">
              <h4>의미 토큰</h4>
              <p>용도와 역할을 설명하는 토큰. UI에서 직접 사용.</p>
              <code>--color-text-secondary, --space-inset-md, --radius-control</code>
            </div>
          </div>
          <div className="layer-arrow">↓</div>
          <div className="layer-item">
            <div className="layer-badge component">Component</div>
            <div className="layer-content">
              <h4>컴포넌트 토큰</h4>
              <p>특정 컴포넌트에 한정된 토큰. 필요시에만 정의.</p>
              <code>--button-padding-x, --input-border-radius</code>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">업계 디자인 시스템 비교</h2>
        <p className="section-desc">
          10개 주요 디자인 시스템의 토큰 네이밍 접근 방식을 분석하여 우리의 체계를 설계했습니다.
        </p>
        <div className="ds-comparison-table">
          <table>
            <thead>
              <tr>
                <th>디자인 시스템</th>
                <th>접근 방식</th>
                <th>네이밍 예시</th>
              </tr>
            </thead>
            <tbody>
              {designSystems.map((ds) => (
                <tr key={ds.name}>
                  <td><strong>{ds.name}</strong></td>
                  <td>{ds.approach}</td>
                  <td><code>{ds.example}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <h2 className="section-title">핵심 원칙</h2>
        <div className="why-tokens-grid">
          <div className="why-token-item">
            <h3>용도가 이름에 드러나야 한다</h3>
            <p><code>--font-size-sm</code> 대신 <code>--text-body</code>처럼 어디에 쓰이는지 알 수 있어야 합니다.</p>
          </div>
          <div className="why-token-item">
            <h3>컴포넌트 크기와 연동</h3>
            <p>버튼의 radius는 버튼 크기에 따라 달라집니다. <code>--radius-control-sm</code>, <code>--radius-control-lg</code>처럼 맥락을 포함합니다.</p>
          </div>
          <div className="why-token-item">
            <h3>테마 변경에 유연</h3>
            <p>Primitive가 바뀌어도 Semantic 토큰의 의미는 유지됩니다. 다크모드 전환이 자연스럽습니다.</p>
          </div>
          <div className="why-token-item">
            <h3>AI 협업 최적화</h3>
            <p>명확한 이름은 AI가 올바른 토큰을 선택하도록 돕습니다. 모호함은 오류의 원인입니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
