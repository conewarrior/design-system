import { Textarea } from '../../../../components/Textarea';

export default function TextareaPage() {
  return (
    <div>
      <h1 className="page-title">Textarea</h1>
      <p className="page-description">
        여러 줄 텍스트 입력 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Textarea placeholder="내용을 입력하세요..." />
        </div>
        <pre><code>{`<Textarea placeholder="내용을 입력하세요..." />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
          <Textarea textareaSize="sm" placeholder="Small" />
          <Textarea textareaSize="md" placeholder="Medium (default)" />
          <Textarea textareaSize="lg" placeholder="Large" />
        </div>
        <pre><code>{`<Textarea textareaSize="sm" placeholder="Small" />
<Textarea textareaSize="md" placeholder="Medium" />
<Textarea textareaSize="lg" placeholder="Large" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Error State</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Textarea error placeholder="필수 입력 항목입니다" />
        </div>
        <pre><code>{`<Textarea error placeholder="필수 입력 항목입니다" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Textarea disabled placeholder="비활성화" />
        </div>
        <pre><code>{`<Textarea disabled placeholder="비활성화" />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>textareaSize</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>error</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>disabled</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
