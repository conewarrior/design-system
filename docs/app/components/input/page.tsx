import { Input } from '../../../components/Input';

export default function InputPage() {
  return (
    <div>
      <h1 className="page-title">Input</h1>
      <p className="page-description">
        텍스트 입력 필드 컴포넌트. 다양한 크기와 에러 상태를 지원합니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Input placeholder="Enter your email..." />
        </div>
        <pre><code>{`<Input placeholder="Enter your email..." />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', maxWidth: '400px' }}>
          <Input inputSize="sm" placeholder="Small" />
          <Input inputSize="md" placeholder="Medium (default)" />
          <Input inputSize="lg" placeholder="Large" />
        </div>
        <pre><code>{`<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium" />
<Input inputSize="lg" placeholder="Large" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Error State</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Input error placeholder="Invalid input" />
        </div>
        <pre><code>{`<Input error placeholder="Invalid input" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ maxWidth: '400px' }}>
          <Input disabled placeholder="Disabled input" />
        </div>
        <pre><code>{`<Input disabled placeholder="Disabled input" />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>inputSize</code></td>
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
