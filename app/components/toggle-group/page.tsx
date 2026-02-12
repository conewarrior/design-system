'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { ToggleGroup, ToggleGroupItem } from '@components/toggle-group';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function ToggleGroupPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Toggle Group"
        description="여러 토글 버튼을 그룹으로 묶어 관리하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Single Selection</h2>
        <p className="text-muted-foreground">
          하나만 선택 가능한 토글 그룹입니다.
        </p>
        <Container>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>
        <CodeBlock
          code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Multiple Selection</h2>
        <p className="text-muted-foreground">
          여러 개를 선택할 수 있는 토글 그룹입니다.
        </p>
        <Container>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>
        <CodeBlock
          code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Variants</h2>
        <p className="text-muted-foreground">
          두 가지 variant를 제공합니다.
        </p>
        <Container className="flex-col items-start">
          <ToggleGroup type="single" variant="default">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>
        <CodeBlock
          code={`<ToggleGroup type="single" variant="default">
  ...
</ToggleGroup>
<ToggleGroup type="single" variant="outline">
  ...
</ToggleGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          세 가지 크기를 제공합니다.
        </p>
        <Container className="flex-col items-start">
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="default">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>
        <CodeBlock
          code={`<ToggleGroup type="single" size="sm">...</ToggleGroup>
<ToggleGroup type="single" size="default">...</ToggleGroup>
<ToggleGroup type="single" size="lg">...</ToggleGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled</h2>
        <p className="text-muted-foreground">
          개별 항목 또는 전체를 비활성화할 수 있습니다.
        </p>
        <Container>
          <ToggleGroup type="single" disabled>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Container>
        <CodeBlock
          code={`<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { ToggleGroup, ToggleGroupItem } from '@gpters-internal/ui';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

function Example() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="center"
      onValueChange={(value) => console.log(value)}
    >
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
