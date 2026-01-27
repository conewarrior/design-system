import { Avatar } from '../../../../components/Avatar';

export default function AvatarPage() {
  return (
    <div>
      <h1 className="page-title">Avatar</h1>
      <p className="page-description">
        사용자 프로필 이미지를 표시하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Avatar fallback="김" />
          <Avatar fallback="이" />
          <Avatar fallback="박" />
        </div>
        <pre><code>{`<Avatar fallback="김" />
<Avatar fallback="이" />
<Avatar fallback="박" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Sizes</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Avatar size="xs" fallback="A" />
          <Avatar size="sm" fallback="A" />
          <Avatar size="md" fallback="A" />
          <Avatar size="lg" fallback="A" />
          <Avatar size="xl" fallback="A" />
        </div>
        <pre><code>{`<Avatar size="xs" fallback="A" />
<Avatar size="sm" fallback="A" />
<Avatar size="md" fallback="A" />
<Avatar size="lg" fallback="A" />
<Avatar size="xl" fallback="A" />`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">With Image</h2>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Avatar src="/avatar.png" alt="User" fallback="U" />
          <Avatar alt="John Doe" />
          <Avatar />
        </div>
        <pre><code>{`<Avatar src="/avatar.png" alt="User" />
<Avatar alt="John Doe" />  // Shows "J"
<Avatar />                 // Shows "?"`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>size</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>xs | sm | md | lg | xl</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>src</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>fallback</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
