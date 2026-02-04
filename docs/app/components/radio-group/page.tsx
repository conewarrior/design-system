import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { RadioGroup, RadioGroupItem } from '@components/radio-group';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Radio Group"
        description="여러 옵션 중 하나를 선택하는 라디오 버튼 그룹"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 라디오 그룹 예시입니다.
        </p>
        <Container>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option Three</Label>
            </div>
          </RadioGroup>
        </Container>
        <CodeBlock
          code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled State</h2>
        <p className="text-muted-foreground">
          비활성화된 라디오 버튼 예시입니다.
        </p>
        <Container>
          <RadioGroup defaultValue="enabled">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enabled" id="enabled" />
              <Label htmlFor="enabled">Enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled" id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
            </div>
          </RadioGroup>
        </Container>
        <CodeBlock
          code={`<RadioGroup defaultValue="enabled">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="enabled" id="enabled" />
    <Label htmlFor="enabled">Enabled</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="disabled" id="disabled" disabled />
    <Label htmlFor="disabled">Disabled</Label>
  </div>
</RadioGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { RadioGroup, RadioGroupItem } from '@design-geniefy/ui';
import { Label } from '@design-geniefy/ui';

function Example() {
  return (
    <RadioGroup defaultValue="option-one" onValueChange={(value) => console.log(value)}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r1" />
        <Label htmlFor="r1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r2" />
        <Label htmlFor="r2">Option Two</Label>
      </div>
    </RadioGroup>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
