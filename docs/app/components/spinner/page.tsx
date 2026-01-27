import { Spinner } from '../../../../components/Spinner';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function SpinnerPage() {
  return (
    <div>
      <h1 className="page-title">Spinner</h1>
      <p className="page-description">
        로딩 상태를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
          <Spinner />
        </div>
        <pre><code>{`<Spinner />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
        <pre><code>{`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Custom Color</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
          <Spinner color="var(--color-success)" />
          <Spinner color="var(--color-warning)" />
          <Spinner color="var(--color-error)" />
          <Spinner color="var(--color-info)" />
        </div>
        <pre><code>{`<Spinner color="var(--color-success)" />
<Spinner color="var(--color-warning)" />
<Spinner color="var(--color-error)" />
<Spinner color="var(--color-info)" />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>color</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>var(--color-primary)</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Spinner" />
    </div>
  );
}
