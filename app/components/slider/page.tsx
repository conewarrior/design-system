'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Slider } from '@components/slider';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SliderPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Slider"
        description="범위 내에서 값을 선택하는 슬라이더"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          드래그하여 값을 조절할 수 있는 슬라이더입니다.
        </p>
        <Container className="flex-col">
          <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />
        </Container>
        <CodeBlock
          code={`<Slider defaultValue={[50]} max={100} step={1} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Range Selection</h2>
        <p className="text-muted-foreground">
          두 개의 핸들을 사용하여 범위를 선택할 수 있습니다.
        </p>
        <Container className="flex-col">
          <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[300px]" />
        </Container>
        <CodeBlock
          code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Step</h2>
        <p className="text-muted-foreground">
          step 값을 조절하여 이동 단위를 설정할 수 있습니다.
        </p>
        <Container className="flex-col">
          <Slider defaultValue={[50]} max={100} step={10} className="w-[300px]" />
        </Container>
        <CodeBlock
          code={`<Slider defaultValue={[50]} max={100} step={10} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled</h2>
        <p className="text-muted-foreground">
          비활성화 상태의 슬라이더입니다.
        </p>
        <Container className="flex-col">
          <Slider defaultValue={[50]} max={100} disabled className="w-[300px]" />
        </Container>
        <CodeBlock
          code={`<Slider defaultValue={[50]} max={100} disabled />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Slider } from '@gpters-internal/ui';

function Example() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      onValueChange={(value) => console.log(value)}
    />
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
