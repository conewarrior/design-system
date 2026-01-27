import { Radio } from '../../../../components/Radio';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function RadioPage() {
  return (
    <div>
      <h1 className="page-title">Radio</h1>
      <p className="page-description">
        단일 선택 라디오 버튼 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Radio name="option" label="옵션 1" defaultChecked />
          <Radio name="option" label="옵션 2" />
          <Radio name="option" label="옵션 3" />
        </div>
        <pre><code>{`<Radio name="option" label="옵션 1" defaultChecked />
<Radio name="option" label="옵션 2" />
<Radio name="option" label="옵션 3" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Radio radioSize="sm" name="size" label="Small" />
          <Radio radioSize="md" name="size" label="Medium" defaultChecked />
          <Radio radioSize="lg" name="size" label="Large" />
        </div>
        <pre><code>{`<Radio radioSize="sm" label="Small" />
<Radio radioSize="md" label="Medium" />
<Radio radioSize="lg" label="Large" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Radio disabled name="disabled" label="Disabled" />
          <Radio disabled defaultChecked name="disabled2" label="Disabled checked" />
        </div>
        <pre><code>{`<Radio disabled label="Disabled" />
<Radio disabled defaultChecked label="Disabled checked" />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>radioSize</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>label</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>name</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Radio" />
    </div>
  );
}
