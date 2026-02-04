import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Textarea } from '@components/textarea';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Textarea"
        description="여러 줄의 텍스트를 입력하는 텍스트 영역"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          긴 텍스트를 입력받는 기본 텍스트 영역입니다.
        </p>
        <Container className="flex-col max-w-md">
          <Textarea placeholder="메시지를 입력하세요..." />
        </Container>
        <CodeBlock
          code={`<Textarea placeholder="메시지를 입력하세요..." />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Label</h2>
        <p className="text-muted-foreground">
          Label 컴포넌트와 함께 사용할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">메시지</Label>
            <Textarea placeholder="여기에 메시지를 입력하세요" id="message" />
          </div>
        </Container>
        <CodeBlock
          code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">메시지</Label>
  <Textarea placeholder="여기에 메시지를 입력하세요" id="message" />
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Default Value</h2>
        <p className="text-muted-foreground">
          기본값이 있는 텍스트 영역입니다.
        </p>
        <Container className="flex-col max-w-md">
          <Textarea defaultValue="기본 텍스트가 여기에 표시됩니다." />
        </Container>
        <CodeBlock
          code={`<Textarea defaultValue="기본 텍스트가 여기에 표시됩니다." />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled</h2>
        <p className="text-muted-foreground">
          비활성화된 텍스트 영역입니다.
        </p>
        <Container className="flex-col max-w-md">
          <Textarea disabled placeholder="비활성화된 텍스트 영역" />
        </Container>
        <CodeBlock
          code={`<Textarea disabled placeholder="비활성화된 텍스트 영역" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Rows</h2>
        <p className="text-muted-foreground">
          rows 속성으로 높이를 조절할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <Textarea placeholder="작은 텍스트 영역" rows={2} />
          <Textarea placeholder="큰 텍스트 영역" rows={6} />
        </Container>
        <CodeBlock
          code={`<Textarea placeholder="작은 텍스트 영역" rows={2} />
<Textarea placeholder="큰 텍스트 영역" rows={6} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Textarea } from '@design-geniefy/ui';

function Example() {
  return (
    <Textarea
      placeholder="내용을 입력하세요"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
