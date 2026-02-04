import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Separator } from '@components/separator';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SeparatorPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Separator"
        description="콘텐츠를 시각적으로 구분하는 구분선"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Horizontal</h2>
        <p className="text-muted-foreground">
          기본적인 가로 구분선입니다.
        </p>
        <Container className="flex-col items-stretch">
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </Container>
        <CodeBlock
          code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Vertical</h2>
        <p className="text-muted-foreground">
          세로 구분선은 인라인 요소 사이에서 사용합니다.
        </p>
        <Container>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Home</div>
            <Separator orientation="vertical" />
            <div>Products</div>
            <Separator orientation="vertical" />
            <div>About</div>
            <Separator orientation="vertical" />
            <div>Contact</div>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Home</div>
  <Separator orientation="vertical" />
  <div>Products</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Separator } from '@design-geniefy/ui';

function Example() {
  return (
    <div>
      <p>Content above</p>
      <Separator className="my-4" />
      <p>Content below</p>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
