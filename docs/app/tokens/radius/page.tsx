export default function RadiusPage() {
  // tokens.css 실제 Border Radius 토큰
  const radiusTokens = [
    { name: '--radius-none', value: '0', usage: '직각 모서리, 테이블 셀' },
    { name: '--radius-sm', value: '2px', usage: '미세 라운드: 태그, 뱃지, 인라인 요소' },
    { name: '--radius-md', value: '4px', usage: '기본값: 버튼, 인풋, 작은 카드' },
    { name: '--radius-lg', value: '6px', usage: '카드, 모달, 드롭다운' },
    { name: '--radius-xl', value: '8px', usage: '큰 카드, 다이얼로그' },
    { name: '--radius-2xl', value: '12px', usage: '매우 큰 컨테이너, 히어로 섹션' },
    { name: '--radius-full', value: '9999px', usage: '원형: 아바타, 토글, pill 버튼' },
  ];

  return (
    <div>
      <h1 className="page-title">Border Radius</h1>

      <section className="naming-intro">
        <h2 className="section-title">개요</h2>
        <p className="section-desc">
          Border Radius 토큰은 모서리 둥글기를 정의합니다.
          임의의 px 값 대신 토큰을 사용하면 UI 전체에서 일관된 모서리 스타일을 유지할 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>디자인 철학</h3>
          <ul>
            <li>6px 이하의 subtle radius가 더 세련되고 professional한 인상을 줌</li>
            <li>8px 이상은 "친근한/playful" 느낌으로, B2C 앱에 적합하나 범용성 낮음</li>
            <li>Apple HIG, Linear, Vercel 등 모던 디자인 시스템은 4-6px 기본값 사용</li>
            <li>과도한 radius는 요소를 "뭉툭하게" 보이게 하여 시각적 긴장감 저하</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">Radius 토큰</h2>
        <p className="section-desc">
          tokens.css에 정의된 모든 radius 토큰입니다.
        </p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
                <th style={{ width: '60px' }}>시각화</th>
              </tr>
            </thead>
            <tbody>
              {radiusTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td>{token.value}</td>
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
      </section>

      <section>
        <h2 className="section-title">컴포넌트 크기와 Radius 관계</h2>
        <p className="section-desc">
          컴포넌트 크기에 따라 적절한 radius를 선택합니다.
        </p>
        <div className="size-radius-mapping">
          <table>
            <thead>
              <tr>
                <th>컴포넌트</th>
                <th>크기</th>
                <th>권장 토큰</th>
                <th>시각화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소형 버튼</td>
                <td>32px</td>
                <td><code>--radius-sm</code></td>
                <td>
                  <div style={{ width: '60px', height: '32px', background: 'var(--color-primary)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>Button</div>
                </td>
              </tr>
              <tr>
                <td>기본 버튼</td>
                <td>40px</td>
                <td><code>--radius-md</code></td>
                <td>
                  <div style={{ width: '70px', height: '40px', background: 'var(--color-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>Button</div>
                </td>
              </tr>
              <tr>
                <td>대형 버튼</td>
                <td>48px</td>
                <td><code>--radius-lg</code></td>
                <td>
                  <div style={{ width: '80px', height: '48px', background: 'var(--color-primary)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px' }}>Button</div>
                </td>
              </tr>
              <tr>
                <td>카드</td>
                <td>-</td>
                <td><code>--radius-lg</code></td>
                <td>
                  <div style={{ width: '80px', height: '50px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)' }} />
                </td>
              </tr>
              <tr>
                <td>모달</td>
                <td>-</td>
                <td><code>--radius-xl</code></td>
                <td>
                  <div style={{ width: '80px', height: '50px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
                </td>
              </tr>
              <tr>
                <td>아바타</td>
                <td>-</td>
                <td><code>--radius-full</code></td>
                <td>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: 'var(--radius-full)' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">사용 가이드</h2>
        <div className="usage-guidelines">
          <div className="guideline-item">
            <h3>버튼</h3>
            <pre className="code-block"><code>{`.button {
  border-radius: var(--radius-md); /* 4px - 기본 */
}
.button-sm {
  border-radius: var(--radius-sm); /* 2px */
}
.button-lg {
  border-radius: var(--radius-lg); /* 6px */
}
.button-pill {
  border-radius: var(--radius-full); /* pill 형태 */
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>카드 & 컨테이너</h3>
            <pre className="code-block"><code>{`.card {
  border-radius: var(--radius-lg); /* 6px */
}
.modal {
  border-radius: var(--radius-xl); /* 8px */
}
.tooltip {
  border-radius: var(--radius-md); /* 4px */
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>인풋 & 셀렉트</h3>
            <pre className="code-block"><code>{`.input {
  border-radius: var(--radius-md); /* 4px */
}
.select-dropdown {
  border-radius: var(--radius-lg); /* 6px */
}`}</code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">CSS 사용 예시</h2>
        <pre className="code-block"><code>{`/* tokens.css에서 import */
@import '@design-geniefy/ui/tokens.css';

/* 또는 CDN */
@import url('https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css');

/* 사용 */
.card {
  border-radius: var(--radius-lg);        /* 6px */
}
.avatar {
  border-radius: var(--radius-full);      /* 원형 */
}
.table {
  border-radius: var(--radius-none);      /* 직각 */
}`}</code></pre>
      </section>
    </div>
  );
}
