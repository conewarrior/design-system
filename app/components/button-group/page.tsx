import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@components/button-group';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export default function ButtonGroupPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Button Group"
        description="관련된 버튼들을 그룹으로 묶어 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          여러 버튼을 하나의 그룹으로 묶습니다.
        </p>
        <Container>
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </Container>
        <CodeBlock
          code={`<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Icon Buttons</h2>
        <p className="text-muted-foreground">
          아이콘 버튼을 그룹으로 묶어 툴바처럼 사용합니다.
        </p>
        <Container>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <Bold className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Italic className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Underline className="size-4" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <AlignLeft className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <AlignCenter className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <AlignRight className="size-4" />
            </Button>
          </ButtonGroup>
        </Container>
        <CodeBlock
          code={`<ButtonGroup>
  <Button variant="outline" size="icon">
    <Bold className="size-4" />
  </Button>
  <Button variant="outline" size="icon">
    <Italic className="size-4" />
  </Button>
  <Button variant="outline" size="icon">
    <Underline className="size-4" />
  </Button>
</ButtonGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Vertical Orientation</h2>
        <p className="text-muted-foreground">
          세로 방향으로 버튼을 배치합니다.
        </p>
        <Container>
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Top</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Bottom</Button>
          </ButtonGroup>
        </Container>
        <CodeBlock
          code={`<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Text</h2>
        <p className="text-muted-foreground">
          ButtonGroupText를 사용하여 텍스트 라벨을 추가할 수 있습니다.
        </p>
        <Container>
          <ButtonGroup>
            <ButtonGroupText>Page</ButtonGroupText>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
          </ButtonGroup>
        </Container>
        <CodeBlock
          code={`<ButtonGroup>
  <ButtonGroupText>Page</ButtonGroupText>
  <Button variant="outline">1</Button>
  <Button variant="outline">2</Button>
  <Button variant="outline">3</Button>
</ButtonGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Separator</h2>
        <p className="text-muted-foreground">
          구분선으로 버튼 그룹을 나눌 수 있습니다.
        </p>
        <Container>
          <ButtonGroup>
            <Button variant="outline">Cut</Button>
            <Button variant="outline">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Paste</Button>
          </ButtonGroup>
        </Container>
        <CodeBlock
          code={`<ButtonGroup>
  <Button variant="outline">Cut</Button>
  <Button variant="outline">Copy</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Paste</Button>
</ButtonGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { ButtonGroup } from '@gpters-internal/ui';
import { Button } from '@gpters-internal/ui';

function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline">Option 1</Button>
      <Button variant="outline">Option 2</Button>
      <Button variant="outline">Option 3</Button>
    </ButtonGroup>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
