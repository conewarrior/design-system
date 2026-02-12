import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Skeleton } from '@components/skeleton';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Skeleton"
        description="콘텐츠가 로딩되는 동안 표시되는 플레이스홀더"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          콘텐츠 로딩 중 레이아웃을 유지하며 로딩 상태를 표시합니다.
        </p>
        <Container className="flex-col">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </Container>
        <CodeBlock
          code={`<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-4 w-[150px]" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Card Skeleton</h2>
        <p className="text-muted-foreground">
          카드 형태의 스켈레톤을 구성할 수 있습니다.
        </p>
        <Container>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Skeleton } from '@gpters-internal/ui';

function LoadingCard() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
