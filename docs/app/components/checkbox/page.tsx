import { Checkbox } from '../../../../components/Checkbox';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function CheckboxPage() {
  return (
    <div>
      <h1 className="page-title">Checkbox</h1>
      <p className="page-description">
        선택 가능한 체크박스 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox label="동의합니다" />
          <Checkbox label="알림 받기" defaultChecked />
        </div>
        <pre><code>{`<Checkbox label="동의합니다" />
<Checkbox label="알림 받기" defaultChecked />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox checkboxSize="sm" label="Small" />
          <Checkbox checkboxSize="md" label="Medium" />
          <Checkbox checkboxSize="lg" label="Large" />
        </div>
        <pre><code>{`<Checkbox checkboxSize="sm" label="Small" />
<Checkbox checkboxSize="md" label="Medium" />
<Checkbox checkboxSize="lg" label="Large" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox disabled label="Disabled" />
          <Checkbox disabled defaultChecked label="Disabled checked" />
        </div>
        <pre><code>{`<Checkbox disabled label="Disabled" />
<Checkbox disabled defaultChecked label="Disabled checked" />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>checkboxSize</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>label</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>disabled</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>boolean</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>false</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Checkbox" />
    </div>
  );
}
