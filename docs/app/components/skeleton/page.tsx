import { Skeleton } from '../../../../components/Skeleton';

export default function SkeletonPage() {
  return (
    <div>
      <h1 className="page-title">Skeleton</h1>
      <p className="page-description">
        로딩 중 콘텐츠를 표시하는 플레이스홀더 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <p style={{ margin: 0, marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Text</p>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" style={{ marginTop: 'var(--spacing-1)' }} />
            <Skeleton variant="text" width="60%" style={{ marginTop: 'var(--spacing-1)' }} />
          </div>
          <div>
            <p style={{ margin: 0, marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Circular</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={48} height={48} />
            </div>
          </div>
          <div>
            <p style={{ margin: 0, marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Rectangular</p>
            <Skeleton variant="rectangular" height={120} />
          </div>
        </div>
        <pre><code>{`<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" height={120} />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Card Example</h2>
        <div className="card" style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center', marginBottom: 'var(--spacing-3)' }}>
            <Skeleton variant="circular" width={40} height={40} />
            <div style={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" style={{ marginTop: 'var(--spacing-1)' }} />
            </div>
          </div>
          <Skeleton variant="rectangular" height={160} />
        </div>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>text | circular | rectangular</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>text</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>width</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string | number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>height</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string | number</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
