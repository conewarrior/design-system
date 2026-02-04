import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { ChevronRight, Mail, Loader2 } from 'lucide-react';

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Button"
        description="클릭 가능한 인터랙티브 요소"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Variants</h2>
        <p className="text-muted-foreground">
          6가지 variant를 제공합니다. 용도에 맞게 선택하세요.
        </p>
        <Container>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </Container>
        <CodeBlock
          code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          4가지 크기를 제공합니다.
        </p>
        <Container>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </Container>
        <CodeBlock
          code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Icon</h2>
        <p className="text-muted-foreground">
          버튼 내부에 아이콘을 함께 사용할 수 있습니다.
        </p>
        <Container>
          <Button>
            <Mail />
            Login with Email
          </Button>
          <Button variant="outline">
            Next
            <ChevronRight />
          </Button>
        </Container>
        <CodeBlock
          code={`<Button>
  <Mail />
  Login with Email
</Button>
<Button variant="outline">
  Next
  <ChevronRight />
</Button>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Icon Only</h2>
        <p className="text-muted-foreground">
          아이콘만 있는 버튼은 icon 사이즈를 사용합니다.
        </p>
        <Container>
          <Button size="icon-xs" variant="ghost">
            <ChevronRight />
          </Button>
          <Button size="icon-sm" variant="ghost">
            <ChevronRight />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight />
          </Button>
          <Button size="icon-lg" variant="outline">
            <ChevronRight />
          </Button>
        </Container>
        <CodeBlock
          code={`<Button size="icon-xs" variant="ghost">
  <ChevronRight />
</Button>
<Button size="icon-sm" variant="ghost">
  <ChevronRight />
</Button>
<Button size="icon" variant="outline">
  <ChevronRight />
</Button>
<Button size="icon-lg" variant="outline">
  <ChevronRight />
</Button>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">States</h2>
        <p className="text-muted-foreground">
          버튼의 다양한 상태를 표현할 수 있습니다.
        </p>
        <Container>
          <Button disabled>Disabled</Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
          </Button>
        </Container>
        <CodeBlock
          code={`<Button disabled>Disabled</Button>
<Button disabled>
  <Loader2 className="animate-spin" />
  Loading...
</Button>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Button } from '@design-geniefy/ui';

function Example() {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
