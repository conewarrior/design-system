'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Toggle } from '@components/toggle';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Bold, Italic, Underline } from 'lucide-react';

export default function TogglePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Toggle"
        description="켜기/끄기 상태를 전환하는 토글 버튼"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          클릭하여 상태를 전환하는 토글 버튼입니다.
        </p>
        <Container>
          <Toggle aria-label="Toggle bold">
            <Bold className="size-4" />
          </Toggle>
        </Container>
        <CodeBlock
          code={`<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Variants</h2>
        <p className="text-muted-foreground">
          두 가지 variant를 제공합니다.
        </p>
        <Container>
          <Toggle variant="default" aria-label="Toggle default">
            <Bold className="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle outline">
            <Italic className="size-4" />
          </Toggle>
        </Container>
        <CodeBlock
          code={`<Toggle variant="default" aria-label="Toggle default">
  <Bold className="size-4" />
</Toggle>
<Toggle variant="outline" aria-label="Toggle outline">
  <Italic className="size-4" />
</Toggle>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          세 가지 크기를 제공합니다.
        </p>
        <Container>
          <Toggle size="sm" aria-label="Toggle small">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Bold className="size-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Bold className="size-4" />
          </Toggle>
        </Container>
        <CodeBlock
          code={`<Toggle size="sm" aria-label="Toggle small">
  <Bold className="size-4" />
</Toggle>
<Toggle size="default" aria-label="Toggle default">
  <Bold className="size-4" />
</Toggle>
<Toggle size="lg" aria-label="Toggle large">
  <Bold className="size-4" />
</Toggle>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Text</h2>
        <p className="text-muted-foreground">
          아이콘과 텍스트를 함께 사용할 수 있습니다.
        </p>
        <Container>
          <Toggle aria-label="Toggle italic">
            <Italic className="size-4" />
            Italic
          </Toggle>
        </Container>
        <CodeBlock
          code={`<Toggle aria-label="Toggle italic">
  <Italic className="size-4" />
  Italic
</Toggle>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled</h2>
        <p className="text-muted-foreground">
          비활성화 상태의 토글입니다.
        </p>
        <Container>
          <Toggle disabled aria-label="Toggle disabled">
            <Underline className="size-4" />
          </Toggle>
        </Container>
        <CodeBlock
          code={`<Toggle disabled aria-label="Toggle disabled">
  <Underline className="size-4" />
</Toggle>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Toggle } from '@gpters-internal/ui';
import { Bold } from 'lucide-react';

function Example() {
  return (
    <Toggle
      aria-label="Toggle bold"
      onPressedChange={(pressed) => console.log(pressed)}
    >
      <Bold className="size-4" />
    </Toggle>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
