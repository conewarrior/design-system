'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Switch } from '@components/switch';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Switch"
        description="켜기/끄기 상태를 전환하는 토글 스위치"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          두 가지 상태 사이를 전환하는 스위치입니다.
        </p>
        <Container>
          <Switch />
        </Container>
        <CodeBlock
          code={`<Switch />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          두 가지 크기를 제공합니다.
        </p>
        <Container>
          <div className="flex items-center gap-2">
            <Switch size="sm" id="size-sm" />
            <Label htmlFor="size-sm">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="default" id="size-default" />
            <Label htmlFor="size-default">Default</Label>
          </div>
        </Container>
        <CodeBlock
          code={`<Switch size="sm" />
<Switch size="default" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Label</h2>
        <p className="text-muted-foreground">
          Label 컴포넌트와 함께 사용할 수 있습니다.
        </p>
        <Container className="flex-col">
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">비행기 모드</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">알림 받기</Label>
          </div>
        </Container>
        <CodeBlock
          code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">비행기 모드</Label>
</div>
<div className="flex items-center gap-2">
  <Switch id="notifications" defaultChecked />
  <Label htmlFor="notifications">알림 받기</Label>
</div>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled</h2>
        <p className="text-muted-foreground">
          비활성화 상태의 스위치입니다.
        </p>
        <Container>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Container>
        <CodeBlock
          code={`<Switch disabled />
<Switch disabled defaultChecked />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Switch } from '@design-geniefy/ui';

function Example() {
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="dark-mode"
        onCheckedChange={(checked) => console.log(checked)}
      />
      <label htmlFor="dark-mode">다크 모드</label>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
