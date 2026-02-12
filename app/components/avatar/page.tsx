import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from '@components/avatar';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Avatar"
        description="사용자 프로필 이미지를 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          이미지가 로드되지 않으면 Fallback이 표시됩니다.
        </p>
        <Container>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Container>
        <CodeBlock
          code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          3가지 크기를 제공합니다: sm, default, lg
        </p>
        <Container>
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </Container>
        <CodeBlock
          code={`<Avatar size="sm">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
<Avatar size="default">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Badge</h2>
        <p className="text-muted-foreground">
          온라인 상태 등을 나타내는 뱃지를 추가할 수 있습니다.
        </p>
        <Container>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-500" />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>JD</AvatarFallback>
            <AvatarBadge className="bg-red-500" />
          </Avatar>
        </Container>
        <CodeBlock
          code={`<Avatar>
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge className="bg-green-500" />
</Avatar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Avatar Group</h2>
        <p className="text-muted-foreground">
          여러 아바타를 겹쳐서 그룹으로 표시합니다.
        </p>
        <Container>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </Container>
        <CodeBlock
          code={`<AvatarGroup>
  <Avatar>
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>C</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Avatar, AvatarImage, AvatarFallback } from '@gpters-internal/ui';

function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
