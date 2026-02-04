import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Badge } from '@components/badge';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Badge"
        description="상태나 카테고리를 나타내는 작은 라벨 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Variants</h2>
        <p className="text-muted-foreground">
          6가지 variant를 제공합니다.
        </p>
        <Container>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </Container>
        <CodeBlock
          code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">As Link</h2>
        <p className="text-muted-foreground">
          asChild prop을 사용하여 링크로 사용할 수 있습니다.
        </p>
        <Container>
          <Badge asChild>
            <a href="#">Clickable Badge</a>
          </Badge>
          <Badge variant="outline" asChild>
            <a href="#">Outline Link</a>
          </Badge>
        </Container>
        <CodeBlock
          code={`<Badge asChild>
  <a href="#">Clickable Badge</a>
</Badge>
<Badge variant="outline" asChild>
  <a href="#">Outline Link</a>
</Badge>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Use Cases</h2>
        <p className="text-muted-foreground">
          상태 표시, 태그, 알림 카운트 등에 활용합니다.
        </p>
        <Container>
          <Badge variant="default">New</Badge>
          <Badge variant="secondary">In Progress</Badge>
          <Badge variant="destructive">Urgent</Badge>
          <Badge variant="outline">Draft</Badge>
        </Container>
        <CodeBlock
          code={`{/* Status indicators */}
<Badge variant="default">New</Badge>
<Badge variant="secondary">In Progress</Badge>
<Badge variant="destructive">Urgent</Badge>
<Badge variant="outline">Draft</Badge>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Badge } from '@design-geniefy/ui';

function Example() {
  return (
    <Badge variant="default">
      Label
    </Badge>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
