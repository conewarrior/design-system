import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@components/card';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function CardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Card"
        description="관련 콘텐츠를 그룹화하여 표시하는 컨테이너 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 카드 구조입니다.
        </p>
        <Container>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. You can put any content inside.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </Container>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. You can put any content inside.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Action</h2>
        <p className="text-muted-foreground">
          헤더에 액션 버튼을 추가할 수 있습니다.
        </p>
        <Container>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
              <CardAction>
                <Button variant="outline" size="sm">View All</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Your recent notifications will appear here.</p>
            </CardContent>
          </Card>
        </Container>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
    <CardAction>
      <Button variant="outline" size="sm">View All</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Your recent notifications will appear here.</p>
  </CardContent>
</Card>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Simple Card</h2>
        <p className="text-muted-foreground">
          헤더 없이 콘텐츠만 있는 간단한 카드입니다.
        </p>
        <Container>
          <Card className="w-[350px]">
            <CardContent className="pt-6">
              <p>This is a simple card with just content.</p>
            </CardContent>
          </Card>
        </Container>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardContent className="pt-6">
    <p>This is a simple card with just content.</p>
  </CardContent>
</Card>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Card with Footer Actions</h2>
        <p className="text-muted-foreground">
          푸터에 여러 액션 버튼을 배치할 수 있습니다.
        </p>
        <Container>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create Project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fill in the project details to get started.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </Container>
        <CodeBlock
          code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Fill in the project details to get started.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        Content goes here.
      </CardContent>
      <CardFooter>
        Footer content
      </CardFooter>
    </Card>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
