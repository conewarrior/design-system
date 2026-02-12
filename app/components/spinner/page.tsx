import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Spinner } from '@components/spinner';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Spinner"
        description="로딩 상태를 표시하는 회전 아이콘"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          로딩 중임을 나타내는 애니메이션 스피너입니다.
        </p>
        <Container>
          <Spinner />
        </Container>
        <CodeBlock
          code={`<Spinner />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          className으로 크기를 조절할 수 있습니다.
        </p>
        <Container>
          <Spinner className="size-3" />
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </Container>
        <CodeBlock
          code={`<Spinner className="size-3" />
<Spinner className="size-4" />
<Spinner className="size-6" />
<Spinner className="size-8" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Text</h2>
        <p className="text-muted-foreground">
          스피너와 텍스트를 함께 사용할 수 있습니다.
        </p>
        <Container>
          <div className="flex items-center gap-2">
            <Spinner />
            <span className="text-sm text-muted-foreground">로딩 중...</span>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Spinner />
  <span>로딩 중...</span>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Custom Color</h2>
        <p className="text-muted-foreground">
          className으로 색상을 변경할 수 있습니다.
        </p>
        <Container>
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
          <Spinner className="text-muted-foreground" />
        </Container>
        <CodeBlock
          code={`<Spinner className="text-primary" />
<Spinner className="text-destructive" />
<Spinner className="text-muted-foreground" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Spinner } from '@gpters-internal/ui';

function LoadingState() {
  return (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>데이터를 불러오는 중...</span>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
