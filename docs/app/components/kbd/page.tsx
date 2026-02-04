import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Kbd, KbdGroup } from '@components/kbd';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Command } from 'lucide-react';

export default function KbdPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Kbd"
        description="키보드 키 또는 단축키를 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          키보드 키를 시각적으로 표시합니다.
        </p>
        <Container>
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
        </Container>
        <CodeBlock
          code={`<Kbd>Enter</Kbd>
<Kbd>Esc</Kbd>
<Kbd>Tab</Kbd>
<Kbd>Space</Kbd>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Modifier Keys</h2>
        <p className="text-muted-foreground">
          수정자 키를 표시할 수 있습니다.
        </p>
        <Container>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>
            <Command className="size-3" />
          </Kbd>
        </Container>
        <CodeBlock
          code={`<Kbd>Ctrl</Kbd>
<Kbd>Alt</Kbd>
<Kbd>Shift</Kbd>
<Kbd>
  <Command className="size-3" />
</Kbd>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Kbd Group (Shortcuts)</h2>
        <p className="text-muted-foreground">
          KbdGroup으로 키 조합을 표시할 수 있습니다.
        </p>
        <Container className="gap-6">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>C</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>V</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>
              <Command className="size-3" />
            </Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Container>
        <CodeBlock
          code={`<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>C</Kbd>
</KbdGroup>

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>V</Kbd>
</KbdGroup>

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>

<KbdGroup>
  <Kbd>
    <Command className="size-3" />
  </Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">In Context</h2>
        <p className="text-muted-foreground">
          텍스트와 함께 사용하는 예시입니다.
        </p>
        <Container className="flex-col">
          <p className="text-sm">
            Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save
          </p>
          <p className="text-sm">
            Use <Kbd>Tab</Kbd> to navigate between fields
          </p>
          <p className="text-sm">
            Press <Kbd>Esc</Kbd> to close the dialog
          </p>
        </Container>
        <CodeBlock
          code={`<p>Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save</p>
<p>Use <Kbd>Tab</Kbd> to navigate between fields</p>
<p>Press <Kbd>Esc</Kbd> to close the dialog</p>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Kbd, KbdGroup } from '@design-geniefy/ui';

function Example() {
  return (
    <div>
      <p>
        Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open search
      </p>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
