import { Toast } from '../../../../components/Toast';

export default function ToastPage() {
  return (
    <div>
      <h1 className="page-title">Toast</h1>
      <p className="page-description">
        알림 메시지를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Toast variant="default" title="알림" description="기본 알림 메시지입니다." duration={0} />
          <Toast variant="success" title="성공" description="작업이 완료되었습니다." duration={0} />
          <Toast variant="warning" title="주의" description="확인이 필요합니다." duration={0} />
          <Toast variant="error" title="오류" description="문제가 발생했습니다." duration={0} />
          <Toast variant="info" title="정보" description="참고하세요." duration={0} />
        </div>
        <pre><code>{`<Toast variant="default" title="알림" description="..." />
<Toast variant="success" title="성공" description="..." />
<Toast variant="warning" title="주의" description="..." />
<Toast variant="error" title="오류" description="..." />
<Toast variant="info" title="정보" description="..." />`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>default | success | warning | error | info</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>title</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>description</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>duration</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>5000</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>onClose</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>() =&gt; void</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
