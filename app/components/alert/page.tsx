import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Alert, AlertTitle, AlertDescription } from '@components/alert';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Terminal, AlertCircle } from 'lucide-react';

export default function AlertPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Alert"
        description="사용자에게 중요한 메시지를 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 알림 메시지를 표시합니다.
        </p>
        <Container className="flex-col">
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </Container>
        <CodeBlock
          code={`<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Destructive</h2>
        <p className="text-muted-foreground">
          에러나 위험한 상황을 알릴 때 사용합니다.
        </p>
        <Container className="flex-col">
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </Container>
        <CodeBlock
          code={`<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Without Icon</h2>
        <p className="text-muted-foreground">
          아이콘 없이 텍스트만 표시할 수 있습니다.
        </p>
        <Container className="flex-col">
          <Alert>
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              This is a simple alert without an icon.
            </AlertDescription>
          </Alert>
        </Container>
        <CodeBlock
          code={`<Alert>
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    This is a simple alert without an icon.
  </AlertDescription>
</Alert>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from '@gpters-internal/ui';

function Example() {
  return (
    <Alert variant="default">
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>
        Description text goes here.
      </AlertDescription>
    </Alert>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
