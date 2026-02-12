'use client';

import { useState } from 'react';
import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Checkbox } from '@components/checkbox';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function CheckboxPage() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Checkbox"
        description="선택 또는 선택 해제할 수 있는 체크박스 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 체크박스입니다.
        </p>
        <Container>
          <Checkbox id="basic" />
          <Label htmlFor="basic">Accept terms</Label>
        </Container>
        <CodeBlock
          code={`<Checkbox id="basic" />
<Label htmlFor="basic">Accept terms</Label>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">States</h2>
        <p className="text-muted-foreground">
          체크박스의 다양한 상태입니다.
        </p>
        <Container className="gap-6">
          <div className="flex items-center gap-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="opacity-50">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <Label htmlFor="disabled-checked" className="opacity-50">Disabled Checked</Label>
          </div>
        </Container>
        <CodeBlock
          code={`<Checkbox id="unchecked" />
<Checkbox id="checked" defaultChecked />
<Checkbox id="disabled" disabled />
<Checkbox id="disabled-checked" disabled defaultChecked />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Controlled</h2>
        <p className="text-muted-foreground">
          checked와 onCheckedChange를 사용하여 제어합니다.
        </p>
        <Container>
          <Checkbox
            id="controlled"
            checked={checked === true}
            onCheckedChange={(value) => setChecked(value)}
          />
          <Label htmlFor="controlled">
            {checked ? 'Checked' : 'Unchecked'}
          </Label>
        </Container>
        <CodeBlock
          code={`const [checked, setChecked] = useState(false);

<Checkbox
  id="controlled"
  checked={checked}
  onCheckedChange={setChecked}
/>
<Label htmlFor="controlled">
  {checked ? 'Checked' : 'Unchecked'}
</Label>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Form</h2>
        <p className="text-muted-foreground">
          폼에서 체크박스를 사용하는 예시입니다.
        </p>
        <Container>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-0.5" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="terms">Accept terms and conditions</Label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="newsletter" className="mt-0.5" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about new features and promotions.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex items-start gap-2">
  <Checkbox id="terms" className="mt-0.5" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms">Accept terms and conditions</Label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Checkbox } from '@gpters-internal/ui';

function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="example" />
      <label htmlFor="example">Check me</label>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
