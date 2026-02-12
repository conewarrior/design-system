import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { ScrollArea, ScrollBar } from '@components/scroll-area';
import { Separator } from '@components/separator';
import { CodeBlock } from '../../../ui/CodeBlock';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Scroll Area"
        description="스크롤 가능한 영역을 위한 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Vertical Scroll</h2>
        <p className="text-muted-foreground">
          세로 스크롤이 가능한 영역입니다.
        </p>
        <Container>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </Container>
        <CodeBlock
          code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <div key={tag}>
        <div className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Horizontal Scroll</h2>
        <p className="text-muted-foreground">
          가로 스크롤이 가능한 영역입니다.
        </p>
        <Container>
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md border bg-muted"
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Container>
        <CodeBlock
          code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {items.map((item, i) => (
      <div
        key={i}
        className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md border bg-muted"
      >
        Item {i + 1}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { ScrollArea, ScrollBar } from '@gpters-internal/ui';

function Example() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      {/* Content that overflows */}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
