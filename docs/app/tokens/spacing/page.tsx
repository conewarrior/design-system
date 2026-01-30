export default function SpacingPage() {
  // 4px 기준 Spacing 토큰 (tokens.css 실제 값)
  const spacingTokens = [
    { name: '--spacing-0', value: '0', px: 0, usage: '간격 없음' },
    { name: '--spacing-px', value: '1px', px: 1, usage: '미세 조정, 보더 보정' },
    { name: '--spacing-0-5', value: '2px', px: 2, usage: '0.5 × 4px' },
    { name: '--spacing-1', value: '4px', px: 4, usage: '아이콘과 텍스트 사이 등 미세 간격' },
    { name: '--spacing-1-5', value: '6px', px: 6, usage: '1.5 × 4px' },
    { name: '--spacing-2', value: '8px', px: 8, usage: '인라인 요소 간격' },
    { name: '--spacing-2-5', value: '10px', px: 10, usage: '2.5 × 4px' },
    { name: '--spacing-3', value: '12px', px: 12, usage: '컴포넌트 내부 패딩' },
    { name: '--spacing-3-5', value: '14px', px: 14, usage: '3.5 × 4px' },
    { name: '--spacing-4', value: '16px', px: 16, usage: '기본 패딩' },
    { name: '--spacing-5', value: '20px', px: 20, usage: '5 × 4px' },
    { name: '--spacing-6', value: '24px', px: 24, usage: '카드 패딩' },
    { name: '--spacing-7', value: '28px', px: 28, usage: '7 × 4px' },
    { name: '--spacing-8', value: '32px', px: 32, usage: '섹션 간격' },
    { name: '--spacing-9', value: '36px', px: 36, usage: '9 × 4px' },
    { name: '--spacing-10', value: '40px', px: 40, usage: '10 × 4px' },
    { name: '--spacing-11', value: '44px', px: 44, usage: '11 × 4px' },
    { name: '--spacing-12', value: '48px', px: 48, usage: '큰 섹션 간격' },
    { name: '--spacing-14', value: '56px', px: 56, usage: '14 × 4px' },
    { name: '--spacing-16', value: '64px', px: 64, usage: '16 × 4px' },
    { name: '--spacing-20', value: '80px', px: 80, usage: '20 × 4px' },
    { name: '--spacing-24', value: '96px', px: 96, usage: '페이지 섹션' },
    { name: '--spacing-28', value: '112px', px: 28, usage: '28 × 4px' },
    { name: '--spacing-32', value: '128px', px: 128, usage: '32 × 4px' },
    { name: '--spacing-36', value: '144px', px: 144, usage: '36 × 4px' },
    { name: '--spacing-40', value: '160px', px: 160, usage: '40 × 4px' },
    { name: '--spacing-44', value: '176px', px: 176, usage: '44 × 4px' },
    { name: '--spacing-48', value: '192px', px: 192, usage: '48 × 4px' },
    { name: '--spacing-52', value: '208px', px: 208, usage: '52 × 4px' },
    { name: '--spacing-56', value: '224px', px: 224, usage: '56 × 4px' },
    { name: '--spacing-60', value: '240px', px: 240, usage: '60 × 4px' },
    { name: '--spacing-64', value: '256px', px: 256, usage: '64 × 4px' },
    { name: '--spacing-72', value: '288px', px: 288, usage: '72 × 4px' },
    { name: '--spacing-80', value: '320px', px: 320, usage: '80 × 4px' },
    { name: '--spacing-96', value: '384px', px: 384, usage: '96 × 4px' },
  ];

  // 자주 사용하는 토큰
  const commonTokens = spacingTokens.filter((t) =>
    ['--spacing-0', '--spacing-1', '--spacing-2', '--spacing-3', '--spacing-4', '--spacing-6', '--spacing-8', '--spacing-12', '--spacing-16', '--spacing-24'].includes(t.name)
  );

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Spacing</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">개요</h2>
        <p className="text-muted-foreground">
          Spacing 토큰은 <strong>4px 기준 단위</strong>로 정의됩니다.
          숫자는 4px의 배수를 나타냅니다: <code>--spacing-4</code> = 4 × 4px = 16px.
          임의의 px 값 대신 토큰을 사용하면 일관된 간격 시스템을 유지할 수 있습니다.
        </p>

        <div className="naming-rationale">
          <h3>왜 4px 기준인가?</h3>
          <p>
            4px는 업계 표준 베이스 유닛입니다. 대부분의 디스플레이에서 깔끔하게 렌더링되며,
            8px 그리드 시스템의 절반 단위로 세밀한 조정이 가능합니다.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">자주 사용하는 토큰</h2>
        <p className="text-muted-foreground">
          대부분의 UI에서 사용하는 핵심 간격 토큰입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도 예시</th>
                <th style={{ width: '200px' }}>시각화</th>
              </tr>
            </thead>
            <tbody>
              {commonTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                  <td className="p-2 border-b text-sm">
                    <div
                      className="spacing-visual"
                      style={{
                        width: Math.min(token.px, 200),
                        height: '8px',
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
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">전체 Spacing 토큰</h2>
        <p className="text-muted-foreground">
          tokens.css에 정의된 모든 spacing 토큰입니다. 스케일: 4px × n
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">계산</th>
              </tr>
            </thead>
            <tbody>
              {spacingTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td style={{ color: 'var(--color-text-secondary)' }}>
                    {token.px > 0 && token.name !== '--spacing-px' ? `${token.px / 4} × 4px` : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">사용 가이드</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3>컴포넌트 내부 패딩</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.button {
  padding: var(--spacing-2) var(--spacing-4); /* 8px 16px */
}
.card {
  padding: var(--spacing-6); /* 24px */
}`}</code></pre>
          </div>
          <div className="space-y-2">
            <h3>요소 간 간격</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.stack > * + * {
  margin-top: var(--spacing-4); /* 16px */
}
.button-group {
  gap: var(--spacing-2); /* 8px */
}`}</code></pre>
          </div>
          <div className="space-y-2">
            <h3>섹션 간격</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.section {
  padding: var(--spacing-16) 0; /* 64px */
}
.section + .section {
  margin-top: var(--spacing-24); /* 96px */
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">CSS 사용 예시</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* tokens.css에서 import */
@import '@design-geniefy/ui/tokens.css';

/* 또는 CDN */
@import url('https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css');

/* 사용 */
.container {
  padding: var(--spacing-4);           /* 16px */
  gap: var(--spacing-2);               /* 8px */
  margin-bottom: var(--spacing-8);     /* 32px */
}`}</code></pre>
      </section>
    </div>
  );
}
