import { Blockquote } from '../../../../components/Blockquote';

export default function BlockquotePage() {
  return (
    <div>
      <h1 className="page-title">Blockquote</h1>
      <p className="page-description">
        인용문을 시각적으로 강조하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Blockquote variant="default">
            기본 인용문입니다. 단순하고 깔끔한 스타일로 텍스트를 강조합니다.
          </Blockquote>
          <Blockquote variant="accent">
            강조 인용문입니다. 핵심 메시지나 중요한 내용을 표시할 때 사용합니다.
          </Blockquote>
        </div>
        <pre><code>{`<Blockquote variant="default">...</Blockquote>
<Blockquote variant="accent">...</Blockquote>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">With Citation</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Blockquote cite="Steve Jobs">
            Design is not just what it looks like and feels like. Design is how it works.
          </Blockquote>
          <Blockquote variant="accent" cite="Dieter Rams">
            Good design is as little design as possible.
          </Blockquote>
        </div>
        <pre><code>{`<Blockquote cite="Steve Jobs">
  Design is not just what it looks like...
</Blockquote>

<Blockquote variant="accent" cite="Dieter Rams">
  Good design is as little design as possible.
</Blockquote>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Props</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)', textAlign: 'left' }}>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Prop</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Type</th>
              <th style={{ padding: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>variant</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default | accent</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>cite</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>children</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>ReactNode</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
