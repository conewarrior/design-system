export default function TypographyPage() {
  // tokens.css 실제 Font Family 토큰
  const fontFamilyTokens = [
    {
      name: '--font-family-sans',
      value: "'Pretendard Variable', Pretendard, -apple-system, ...",
      usage: '기본 UI 텍스트',
    },
    {
      name: '--font-family-mono',
      value: "'Fira Code', 'JetBrains Mono', Consolas, ...",
      usage: '코드, 터미널',
    },
  ];

  // tokens.css 실제 Font Size 토큰
  const fontSizeTokens = [
    { name: '--font-size-xs', value: '0.75rem', px: '12px', usage: '캡션, 메타데이터' },
    { name: '--font-size-2xs', value: '0.8125rem', px: '13px', usage: '버튼 sm 등 컴팩트 UI' },
    { name: '--font-size-sm', value: '0.875rem', px: '14px', usage: '보조 본문' },
    { name: '--font-size-base', value: '1rem', px: '16px', usage: '기본 본문' },
    { name: '--font-size-lg', value: '1.125rem', px: '18px', usage: '강조 본문' },
    { name: '--font-size-xl', value: '1.25rem', px: '20px', usage: '서브헤딩' },
    { name: '--font-size-2xl', value: '1.5rem', px: '24px', usage: '페이지 제목' },
    { name: '--font-size-3xl', value: '1.875rem', px: '30px', usage: '대형 제목' },
    { name: '--font-size-4xl', value: '2.25rem', px: '36px', usage: '히어로 제목' },
    { name: '--font-size-5xl', value: '3rem', px: '48px', usage: '디스플레이' },
    { name: '--font-size-6xl', value: '3.75rem', px: '60px', usage: '대형 디스플레이' },
    { name: '--font-size-7xl', value: '4.5rem', px: '72px', usage: '초대형' },
    { name: '--font-size-8xl', value: '6rem', px: '96px', usage: '배너' },
    { name: '--font-size-9xl', value: '8rem', px: '128px', usage: '히어로 배너' },
  ];

  // tokens.css 실제 Line Height 토큰
  const lineHeightTokens = [
    { name: '--line-height-none', value: '1', usage: '한 줄 텍스트, 버튼' },
    { name: '--line-height-tight', value: '1.25', usage: '제목, 헤딩' },
    { name: '--line-height-snug', value: '1.375', usage: '짧은 문단' },
    { name: '--line-height-normal', value: '1.5', usage: '기본 본문' },
    { name: '--line-height-relaxed', value: '1.625', usage: '긴 문단' },
    { name: '--line-height-loose', value: '2', usage: '넉넉한 줄간격' },
  ];

  // tokens.css 실제 Font Weight 토큰
  const fontWeightTokens = [
    { name: '--font-weight-thin', value: '100', usage: '매우 얇음' },
    { name: '--font-weight-extralight', value: '200', usage: '얇음' },
    { name: '--font-weight-light', value: '300', usage: '가벼움' },
    { name: '--font-weight-normal', value: '400', usage: '기본' },
    { name: '--font-weight-medium', value: '500', usage: '중간' },
    { name: '--font-weight-semibold', value: '600', usage: '세미볼드' },
    { name: '--font-weight-bold', value: '700', usage: '볼드' },
    { name: '--font-weight-extrabold', value: '800', usage: '매우 굵음' },
    { name: '--font-weight-black', value: '900', usage: '가장 굵음' },
  ];

  // tokens.css 실제 Letter Spacing 토큰
  const letterSpacingTokens = [
    { name: '--letter-spacing-tighter', value: '-0.05em', usage: '대형 제목' },
    { name: '--letter-spacing-tight', value: '-0.025em', usage: '제목' },
    { name: '--letter-spacing-normal', value: '0em', usage: '기본' },
    { name: '--letter-spacing-wide', value: '0.025em', usage: '소형 대문자' },
    { name: '--letter-spacing-wider', value: '0.05em', usage: '대문자' },
    { name: '--letter-spacing-widest', value: '0.1em', usage: '넓은 간격' },
  ];

  return (
    <div>
      <h1 className="page-title">Typography</h1>

      <section className="naming-intro">
        <h2 className="section-title">개요</h2>
        <p className="section-desc">
          Typography 토큰은 폰트 패밀리, 크기, 두께, 줄간격, 자간을 정의합니다.
          임의의 값 대신 토큰을 사용하면 일관된 타이포그래피 시스템을 유지할 수 있습니다.
        </p>
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
        <h2 className="section-title">Font Size</h2>
        <p className="section-desc">
          rem 기반의 폰트 크기 스케일입니다. 1rem = 16px 기준.
        </p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>px</th>
                <th>용도</th>
                <th>미리보기</th>
              </tr>
            </thead>
            <tbody>
              {fontSizeTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td>{token.value}</td>
                  <td>{token.px}</td>
                  <td>{token.usage}</td>
                  <td style={{ fontSize: token.value }}>Aa</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Line Height</h2>
        <p className="section-desc">
          줄간격 토큰입니다. 단위 없는 배수 값으로 정의됩니다.
        </p>
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
              {lineHeightTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td>{token.value}</td>
                  <td>{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Font Weight</h2>
        <p className="section-desc">
          폰트 두께 토큰입니다.
        </p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>미리보기</th>
              </tr>
            </thead>
            <tbody>
              {fontWeightTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td>{token.value}</td>
                  <td style={{ fontWeight: parseInt(token.value) }}>가나다 ABC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Letter Spacing</h2>
        <p className="section-desc">
          자간(글자 간격) 토큰입니다.
        </p>
        <div className="semantic-token-table">
          <table>
            <thead>
              <tr>
                <th>토큰</th>
                <th>값</th>
                <th>용도</th>
                <th>미리보기</th>
              </tr>
            </thead>
            <tbody>
              {letterSpacingTokens.map((token) => (
                <tr key={token.name}>
                  <td><code>{token.name}</code></td>
                  <td>{token.value}</td>
                  <td>{token.usage}</td>
                  <td style={{ letterSpacing: token.value }}>TYPOGRAPHY</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">사용 가이드</h2>
        <div className="usage-guidelines">
          <div className="guideline-item">
            <h3>제목 스타일</h3>
            <pre className="code-block"><code>{`h1 {
  font-size: var(--font-size-3xl);      /* 30px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
h2 {
  font-size: var(--font-size-2xl);      /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>본문 스타일</h3>
            <pre className="code-block"><code>{`body {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);     /* 16px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}
.small-text {
  font-size: var(--font-size-sm);       /* 14px */
}`}</code></pre>
          </div>
          <div className="guideline-item">
            <h3>코드 스타일</h3>
            <pre className="code-block"><code>{`code, pre {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);       /* 14px */
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
.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}
.body {
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
}`}</code></pre>
      </section>
    </div>
  );
}
