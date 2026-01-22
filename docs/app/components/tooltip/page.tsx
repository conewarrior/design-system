import { Tooltip } from '../../../../components/Tooltip';
import { Button } from '../../../../components/Button';

export default function TooltipPage() {
  return (
    <div>
      <h1 className="page-title">Tooltip</h1>
      <p className="page-description">
        마우스 호버 시 추가 정보를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <Tooltip content="툴팁 내용입니다">
            <Button variant="outline">마우스를 올려보세요</Button>
          </Tooltip>
        </div>
        <pre><code>{`<Tooltip content="툴팁 내용입니다">
  <Button>마우스를 올려보세요</Button>
</Tooltip>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Positions</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap', padding: 'var(--spacing-8)' }}>
          <Tooltip content="위쪽" position="top">
            <Button variant="outline" size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="아래쪽" position="bottom">
            <Button variant="outline" size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="왼쪽" position="left">
            <Button variant="outline" size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="오른쪽" position="right">
            <Button variant="outline" size="sm">Right</Button>
          </Tooltip>
        </div>
        <pre><code>{`<Tooltip content="위쪽" position="top">...</Tooltip>
<Tooltip content="아래쪽" position="bottom">...</Tooltip>
<Tooltip content="왼쪽" position="left">...</Tooltip>
<Tooltip content="오른쪽" position="right">...</Tooltip>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>content</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>position</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>top | bottom | left | right</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>top</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>delay</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>200</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
