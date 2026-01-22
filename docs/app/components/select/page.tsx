import { Select } from '../../../../components/Select';

export default function SelectPage() {
  return (
    <div>
      <h1 className="page-title">Select</h1>
      <p className="page-description">
        드롭다운 선택 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ maxWidth: '300px' }}>
          <Select>
            <option value="">선택하세요</option>
            <option value="1">옵션 1</option>
            <option value="2">옵션 2</option>
            <option value="3">옵션 3</option>
          </Select>
        </div>
        <pre><code>{`<Select>
  <option value="">선택하세요</option>
  <option value="1">옵션 1</option>
  <option value="2">옵션 2</option>
</Select>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '300px' }}>
          <Select selectSize="sm">
            <option>Small</option>
          </Select>
          <Select selectSize="md">
            <option>Medium (default)</option>
          </Select>
          <Select selectSize="lg">
            <option>Large</option>
          </Select>
        </div>
        <pre><code>{`<Select selectSize="sm">...</Select>
<Select selectSize="md">...</Select>
<Select selectSize="lg">...</Select>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Error State</h2>
        <div className="card" style={{ maxWidth: '300px' }}>
          <Select error>
            <option value="">필수 선택</option>
          </Select>
        </div>
        <pre><code>{`<Select error>...</Select>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Disabled</h2>
        <div className="card" style={{ maxWidth: '300px' }}>
          <Select disabled>
            <option>Disabled</option>
          </Select>
        </div>
        <pre><code>{`<Select disabled>...</Select>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>selectSize</code></td>
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
