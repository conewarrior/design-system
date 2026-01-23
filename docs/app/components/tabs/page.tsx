'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/Tabs';

export default function TabsPage() {
  return (
    <div>
      <h1 className="page-title">Tabs</h1>
      <p className="page-description">
        탭으로 콘텐츠를 전환하는 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Default</h2>
        <div className="card">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">계정</TabsTrigger>
              <TabsTrigger value="tab2">비밀번호</TabsTrigger>
              <TabsTrigger value="tab3">알림</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                계정 설정 내용이 여기에 표시됩니다.
              </p>
            </TabsContent>
            <TabsContent value="tab2">
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                비밀번호 변경 내용이 여기에 표시됩니다.
              </p>
            </TabsContent>
            <TabsContent value="tab3">
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                알림 설정 내용이 여기에 표시됩니다.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        <pre><code>{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">계정</TabsTrigger>
    <TabsTrigger value="tab2">비밀번호</TabsTrigger>
    <TabsTrigger value="tab3">알림</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">계정 설정 내용</TabsContent>
  <TabsContent value="tab2">비밀번호 변경 내용</TabsContent>
  <TabsContent value="tab3">알림 설정 내용</TabsContent>
</Tabs>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Props</h2>
        <h3 style={{ fontSize: 'var(--font-size-base)', marginTop: 'var(--spacing-4)' }}>Tabs</h3>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>defaultValue</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>onValueChange</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>(value: string) =&gt; void</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ fontSize: 'var(--font-size-base)', marginTop: 'var(--spacing-4)' }}>TabsTrigger</h3>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>value</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ fontSize: 'var(--font-size-base)', marginTop: 'var(--spacing-4)' }}>TabsContent</h3>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>value</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>string</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>-</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
