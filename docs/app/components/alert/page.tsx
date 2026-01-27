import { Alert } from '../../../../components/Alert';

export default function AlertPage() {
  return (
    <div>
      <h1 className="page-title">Alert</h1>
      <p className="page-description">
        인라인 알림 메시지를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Alert variant="default" title="알림">기본 알림 메시지입니다.</Alert>
          <Alert variant="success" title="성공">작업이 완료되었습니다.</Alert>
          <Alert variant="warning" title="주의">확인이 필요한 사항입니다.</Alert>
          <Alert variant="error" title="오류">문제가 발생했습니다.</Alert>
          <Alert variant="info" title="정보">참고할 정보입니다.</Alert>
        </div>
        <pre><code>{`<Alert variant="default" title="알림">...</Alert>
<Alert variant="success" title="성공">...</Alert>
<Alert variant="warning" title="주의">...</Alert>
<Alert variant="error" title="오류">...</Alert>
<Alert variant="info" title="정보">...</Alert>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Title Only</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Alert variant="success" title="저장되었습니다" />
          <Alert variant="error" title="삭제할 수 없습니다" />
        </div>
        <pre><code>{`<Alert variant="success" title="저장되었습니다" />
<Alert variant="error" title="삭제할 수 없습니다" />`}</code></pre>
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
          </tbody>
        </table>
      </section>

    </div>
  );
}
