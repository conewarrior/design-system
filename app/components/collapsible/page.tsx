'use client';

import { useState } from 'react';
import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@components/collapsible';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { ChevronsUpDown } from 'lucide-react';

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Collapsible"
        description="접거나 펼칠 수 있는 콘텐츠 영역"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 Collapsible 컴포넌트입니다.
        </p>
        <Container>
          <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Container>
        <CodeBlock
          code={`<Collapsible className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      @peduarte starred 3 repositories
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon-sm">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-2 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Controlled</h2>
        <p className="text-muted-foreground">
          open과 onOpenChange로 상태를 제어할 수 있습니다.
        </p>
        <Container>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                {isOpen ? 'Click to collapse' : 'Click to expand'}
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm">
                This content can be shown or hidden by controlling the open state.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Container>
        <CodeBlock
          code={`const [isOpen, setIsOpen] = useState(false);

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      {isOpen ? 'Click to collapse' : 'Click to expand'}
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon-sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">
      This content can be shown or hidden.
    </div>
  </CollapsibleContent>
</Collapsible>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Default Open</h2>
        <p className="text-muted-foreground">
          defaultOpen prop으로 초기 상태를 열린 상태로 설정할 수 있습니다.
        </p>
        <Container>
          <Collapsible defaultOpen className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">Default Open Section</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 text-sm">
                This section is open by default.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Container>
        <CodeBlock
          code={`<Collapsible defaultOpen className="w-[350px] space-y-2">
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="icon-sm">
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="rounded-md border px-4 py-3 text-sm">
      This section is open by default.
    </div>
  </CollapsibleContent>
</Collapsible>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>
        Hidden content here
      </CollapsibleContent>
    </Collapsible>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
