import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function InputPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Input"
        description="텍스트 입력을 받는 기본 폼 요소"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 텍스트 입력 필드입니다.
        </p>
        <Container>
          <Input type="text" placeholder="Enter your text" className="max-w-sm" />
        </Container>
        <CodeBlock
          code={`<Input type="text" placeholder="Enter your text" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Input Types</h2>
        <p className="text-muted-foreground">
          다양한 input type을 지원합니다.
        </p>
        <Container className="flex-col max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="input-text">Text</Label>
            <Input id="input-text" type="text" placeholder="Text input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-email">Email</Label>
            <Input id="input-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-password">Password</Label>
            <Input id="input-password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-number">Number</Label>
            <Input id="input-number" type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-file">File</Label>
            <Input id="input-file" type="file" />
          </div>
        </Container>
        <CodeBlock
          code={`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="0" />
<Input type="file" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">States</h2>
        <p className="text-muted-foreground">
          Input의 다양한 상태를 표현할 수 있습니다.
        </p>
        <Container className="flex-col max-w-sm">
          <div className="space-y-2">
            <Label>Default</Label>
            <Input placeholder="Default state" />
          </div>
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Input placeholder="Disabled" disabled />
          </div>
          <div className="space-y-2">
            <Label>Invalid</Label>
            <Input placeholder="Invalid input" aria-invalid="true" />
          </div>
        </Container>
        <CodeBlock
          code={`<Input placeholder="Default state" />
<Input placeholder="Disabled" disabled />
<Input placeholder="Invalid input" aria-invalid="true" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Label</h2>
        <p className="text-muted-foreground">
          Label 컴포넌트와 함께 사용하여 접근성을 높입니다.
        </p>
        <Container>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="you@example.com" />
          </div>
        </Container>
        <CodeBlock
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="you@example.com" />
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Input } from '@gpters-internal/ui';

function Example() {
  return (
    <Input
      type="email"
      placeholder="you@example.com"
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
