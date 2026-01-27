import { Badge } from '../../../../components/Badge';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function BadgePage() {
  return (
    <div>
      <h1 className="page-title">Badge</h1>
      <p className="page-description">
        상태나 카테고리를 표시하는 작은 라벨 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <pre><code>{`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
        <pre><code>{`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>default | primary | secondary | success | warning | error | info</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Badge" />
    </div>
  );
}
