import { Button } from '../../../components/Button';

export default function ButtonPage() {
  return (
    <div>
      <h1 className="page-title">Button</h1>
      <p className="page-description">
        클릭 가능한 버튼 컴포넌트. 다양한 변형과 크기를 지원합니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <pre><code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <pre><code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
        <pre><code>{`<Button disabled>Disabled</Button>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>primary | secondary | outline | ghost | destructive</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>primary</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
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
