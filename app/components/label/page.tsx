import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Label } from '@components/label';
import { Input } from '@components/input';
import { Checkbox } from '@components/checkbox';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Label"
        description="폼 요소에 대한 접근 가능한 레이블"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          Label은 폼 요소와 연결하여 접근성을 높입니다.
        </p>
        <Container>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="you@example.com" />
          </div>
        </Container>
        <CodeBlock
          code={`<Label htmlFor="email">Email</Label>
<Input type="email" id="email" placeholder="you@example.com" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Checkbox</h2>
        <p className="text-muted-foreground">
          체크박스와 함께 사용하는 예시입니다.
        </p>
        <Container>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Required Field</h2>
        <p className="text-muted-foreground">
          필수 필드를 표시하는 예시입니다.
        </p>
        <Container>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="username">
              Username
              <span className="text-destructive">*</span>
            </Label>
            <Input type="text" id="username" placeholder="Enter username" required />
          </div>
        </Container>
        <CodeBlock
          code={`<Label htmlFor="username">
  Username
  <span className="text-destructive">*</span>
</Label>
<Input type="text" id="username" placeholder="Enter username" required />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled State</h2>
        <p className="text-muted-foreground">
          비활성화된 필드의 Label은 흐리게 표시됩니다.
        </p>
        <Container>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled-input" className="peer-disabled:opacity-50">
              Disabled Field
            </Label>
            <Input type="text" id="disabled-input" placeholder="Disabled" disabled className="peer" />
          </div>
        </Container>
        <CodeBlock
          code={`<Label htmlFor="disabled-input" className="peer-disabled:opacity-50">
  Disabled Field
</Label>
<Input
  type="text"
  id="disabled-input"
  placeholder="Disabled"
  disabled
  className="peer"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Label } from '@gpters-internal/ui';

function Example() {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="you@example.com" />
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
