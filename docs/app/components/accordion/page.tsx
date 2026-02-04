"use client";

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@components/accordion';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Accordion"
        description="접을 수 있는 콘텐츠 섹션을 제공하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 아코디언 사용법입니다. 한 번에 하나의 항목만 열립니다.
        </p>
        <Container>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
        <CodeBlock
          code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Multiple</h2>
        <p className="text-muted-foreground">
          여러 항목을 동시에 열 수 있습니다.
        </p>
        <Container>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>First Section</AccordionTrigger>
              <AccordionContent>
                This is the first section content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Second Section</AccordionTrigger>
              <AccordionContent>
                This is the second section content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
        <CodeBlock
          code={`<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Section</AccordionTrigger>
    <AccordionContent>
      This is the first section content.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Section</AccordionTrigger>
    <AccordionContent>
      This is the second section content.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@design-geniefy/ui';

function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section Title</AccordionTrigger>
        <AccordionContent>
          Section content goes here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
