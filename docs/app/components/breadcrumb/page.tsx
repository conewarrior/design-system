import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage as BreadcrumbPageItem,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@components/breadcrumb';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function BreadcrumbDocPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Breadcrumb"
        description="현재 페이지의 위치를 계층 구조로 표시하는 네비게이션 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 breadcrumb 구조입니다.
        </p>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
        <CodeBlock
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Ellipsis</h2>
        <p className="text-muted-foreground">
          긴 경로는 생략 기호로 축약할 수 있습니다.
        </p>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
        <CodeBlock
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Custom Separator</h2>
        <p className="text-muted-foreground">
          구분자를 커스텀할 수 있습니다.
        </p>
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPageItem>Details</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
        <CodeBlock
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPageItem>Details</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPageItem>Current Page</BreadcrumbPageItem>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
