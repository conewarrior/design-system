import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../../components/Card';
import { Button } from '../../../../components/Button';
import { ComponentVersionHistory } from '../../../ui/ComponentVersionHistory';

export default function CardPage() {
  return (
    <div>
      <h1 className="page-title">Card</h1>
      <p className="page-description">
        콘텐츠를 그룹화하여 표시하는 컨테이너 컴포넌트입니다.
      </p>

      <section>
        <h2 className="section-title">Variants</h2>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
          <Card variant="default" style={{ width: '280px' }}>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>기본 카드 스타일입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>카드 내용이 여기에 들어갑니다.</p>
            </CardContent>
          </Card>
          <Card variant="outline" style={{ width: '280px' }}>
            <CardHeader>
              <CardTitle>Outline Card</CardTitle>
              <CardDescription>테두리만 있는 카드입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>카드 내용이 여기에 들어갑니다.</p>
            </CardContent>
          </Card>
          <Card variant="elevated" style={{ width: '280px' }}>
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>그림자가 있는 카드입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>카드 내용이 여기에 들어갑니다.</p>
            </CardContent>
          </Card>
        </div>
        <pre><code>{`<Card variant="default">...</Card>
<Card variant="outline">...</Card>
<Card variant="elevated">...</Card>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">With Footer</h2>
        <Card style={{ maxWidth: '400px' }}>
          <CardHeader>
            <CardTitle>프로젝트 설정</CardTitle>
            <CardDescription>프로젝트의 기본 설정을 변경합니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>설정 내용이 여기에 표시됩니다.</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">저장</Button>
            <Button variant="outline" size="sm">취소</Button>
          </CardFooter>
        </Card>
        <pre><code>{`<Card>
  <CardHeader>
    <CardTitle>프로젝트 설정</CardTitle>
    <CardDescription>프로젝트의 기본 설정을 변경합니다.</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>
    <Button variant="primary">저장</Button>
    <Button variant="outline">취소</Button>
  </CardFooter>
</Card>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Padding</h2>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap', alignItems: 'start' }}>
          <Card padding="sm" style={{ width: '200px' }}>
            <p style={{ margin: 0 }}>Small padding</p>
          </Card>
          <Card padding="md" style={{ width: '200px' }}>
            <p style={{ margin: 0 }}>Medium padding</p>
          </Card>
          <Card padding="lg" style={{ width: '200px' }}>
            <p style={{ margin: 0 }}>Large padding</p>
          </Card>
        </div>
        <pre><code>{`<Card padding="sm">...</Card>
<Card padding="md">...</Card>
<Card padding="lg">...</Card>`}</code></pre>
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
              <td style={{ padding: 'var(--spacing-2)' }}><code>default | outline | elevated</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>default</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              <td style={{ padding: 'var(--spacing-2)' }}><code>padding</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>none | sm | md | lg</code></td>
              <td style={{ padding: 'var(--spacing-2)' }}><code>md</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <ComponentVersionHistory componentName="Card" />
    </div>
  );
}
