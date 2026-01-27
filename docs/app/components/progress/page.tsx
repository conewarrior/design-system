import { Progress } from '../../../../components/Progress';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function ProgressPage() {
  return (
    <div>
      <h1 className="page-title">Progress</h1>
      <p className="page-description">
        진행률을 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Progress value={30} />
          <Progress value={60} />
          <Progress value={90} />
        </div>
        <pre><code>{`<Progress value={30} />
<Progress value={60} />
<Progress value={90} />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Progress value={60} variant="default" />
          <Progress value={60} variant="success" />
          <Progress value={60} variant="warning" />
          <Progress value={60} variant="error" />
        </div>
        <pre><code>{`<Progress value={60} variant="default" />
<Progress value={60} variant="success" />
<Progress value={60} variant="warning" />
<Progress value={60} variant="error" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Progress value={50} size="sm" />
          <Progress value={50} size="md" />
          <Progress value={50} size="lg" />
        </div>
        <pre><code>{`<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">With Label</h2>
        <div className="card">
          <Progress value={75} showLabel />
        </div>
        <pre><code>{`<Progress value={75} showLabel />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>value</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>max</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>100</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>variant</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default | success | warning | error</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>showLabel</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Progress" />
    </div>
  );
}
