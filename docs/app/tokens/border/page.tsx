export default function BorderPage() {
  // tokens.css 실제 Border Width 토큰
  const borderWidthTokens = [
    { name: '--border-width-0', value: '0', usage: '보더 없음' },
    { name: '--border-width-1', value: '1px', usage: '기본 보더 (입력 필드, 카드)' },
    { name: '--border-width-2', value: '2px', usage: '강조 보더 (포커스, 선택)' },
    { name: '--border-width-4', value: '4px', usage: '두꺼운 보더 (강조 영역)' },
    { name: '--border-width-8', value: '8px', usage: '매우 두꺼운 보더' },
  ];

  // tokens.css 실제 Border Color 토큰 (color-border-* 참조)
  const borderColorTokens = [
    { name: '--color-border-default', value: 'var(--neutral-200)', usage: '기본 테두리' },
    { name: '--color-border-secondary', value: 'var(--neutral-300)', usage: '강조 테두리' },
    { name: '--color-border-hover', value: 'var(--neutral-400)', usage: '호버 테두리' },
    { name: '--color-border-focus', value: 'var(--primary-500)', usage: '포커스 링' },
    { name: '--color-border-disabled', value: 'var(--neutral-200)', usage: '비활성 테두리' },
  ];

  // Legacy alias
  const legacyTokens = [
    { name: '--color-border', value: 'var(--color-border-default)', note: 'deprecated' },
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Border</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">개요</h2>
        <p className="text-muted-foreground">
          Border 토큰은 <strong>두께(width)</strong>와 <strong>색상(color)</strong>으로 구성됩니다.
          두께는 <code>--border-width-*</code>, 색상은 <code>--color-border-*</code> 토큰을 사용합니다.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Border Width</h2>
        <p className="text-muted-foreground">
          테두리 두께 토큰입니다. 0, 1, 2, 4, 8px의 5단계 스케일을 제공합니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
                <th style={{ width: '80px' }}>시각화</th>
              </tr>
            </thead>
            <tbody>
              {borderWidthTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm">{token.value}</td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                  <td className="p-2 border-b text-sm">
                    {token.value !== '0' && (
                      <div
                        style={{
                          width: '60px',
                          height: '24px',
                          borderWidth: token.value,
                          borderStyle: 'solid',
                          borderColor: 'var(--color-border-default)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Border Color</h2>
        <p className="text-muted-foreground">
          테두리 색상 토큰입니다. 상태별로 적절한 색상을 사용합니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">값</th>
                <th className="text-left p-2 border-b font-medium text-sm">용도</th>
                <th style={{ width: '80px' }}>시각화</th>
              </tr>
            </thead>
            <tbody>
              {borderColorTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code>{token.name}</code></td>
                  <td className="p-2 border-b text-sm"><code>{token.value}</code></td>
                  <td className="p-2 border-b text-sm">{token.usage}</td>
                  <td className="p-2 border-b text-sm">
                    <div
                      style={{
                        width: '60px',
                        height: '24px',
                        border: `2px solid var(${token.name})`,
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-bg-surface)',
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
        <h2 className="text-2xl font-semibold">컴포넌트별 Border 패턴</h2>
        <p className="text-muted-foreground">
          실제 컴포넌트에서 Border 토큰이 어떻게 사용되는지 보여줍니다.
        </p>
        <div className="border-patterns">
          <div className="pattern-item">
            <h3>Input Field</h3>
            <div className="pattern-states">
              <div className="pattern-demo" style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Default
              </div>
              <div className="pattern-demo" style={{
                border: '2px solid var(--color-border-focus)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Focused
              </div>
              <div className="pattern-demo" style={{
                border: '1px solid var(--color-error)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}>
                Error
              </div>
            </div>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.input {
  border: var(--border-width-1) solid var(--color-border-default);
  border-radius: var(--radius-md);
}
.input:focus {
  border: var(--border-width-2) solid var(--color-border-focus);
}
.input.error {
  border-color: var(--color-error);
}`}</code></pre>
          </div>

          <div className="pattern-item">
            <h3>Card</h3>
            <div className="pattern-demo" style={{
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)'
            }}>
              카드 콘텐츠
            </div>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.card {
  border: var(--border-width-1) solid var(--color-border-default);
  border-radius: var(--radius-lg);
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
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`.divider {
  border-bottom: var(--border-width-1) solid var(--color-border-secondary);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Legacy Aliases (하위 호환)</h2>
        <p className="text-muted-foreground">
          기존 프로젝트 호환을 위해 유지되는 토큰. <strong>새 코드에서는 사용하지 마세요.</strong>
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b font-medium text-sm">Legacy 토큰</th>
                <th className="text-left p-2 border-b font-medium text-sm">실제 매핑</th>
                <th className="text-left p-2 border-b font-medium text-sm">상태</th>
              </tr>
            </thead>
            <tbody>
              {legacyTokens.map((token) => (
                <tr key={token.name}>
                  <td className="p-2 border-b text-sm"><code style={{ textDecoration: 'line-through' }}>{token.name}</code></td>
                  <td className="p-2 border-b text-sm"><code>{token.value}</code></td>
                  <td className="p-2 border-b text-sm"><span className="inline-block px-2 py-1 rounded-full bg-warning/10 text-warning text-xs font-medium">{token.note}</span></td>
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
            <h3>기본 사용</h3>
            <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* tokens.css에서 import */
@import '@design-geniefy/ui/tokens.css';

/* 또는 CDN */
@import url('https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css');

/* 사용 */
.element {
  border: var(--border-width-1) solid var(--color-border-default);
}
.element:hover {
  border-color: var(--color-border-hover);
}
.element:focus {
  border-width: var(--border-width-2);
  border-color: var(--color-border-focus);
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Dark Mode</h2>
        <p className="text-muted-foreground">
          <code>.dark</code> 클래스가 적용되면 border 색상이 자동으로 다크모드용으로 전환됩니다.
        </p>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`/* 다크모드에서 자동 전환 */
--color-border-default: var(--neutral-200) → var(--neutral-700)
--color-border-secondary: var(--neutral-300) → var(--neutral-600)
--color-border-hover: var(--neutral-400) → var(--neutral-500)
--color-border-focus: var(--primary-500) → var(--primary-400)`}</code></pre>
      </section>
    </div>
  );
}
