'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@components/popover';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function PopoverPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Popover"
        description="트리거 요소 위에 떠있는 팝오버 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 팝오버 예시입니다. 버튼을 클릭하면 팝오버가 나타납니다.
        </p>
        <Container>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Popover Title</PopoverTitle>
                <PopoverDescription>
                  팝오버에 대한 설명을 여기에 작성합니다.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Container>
        <CodeBlock
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover Title</PopoverTitle>
      <PopoverDescription>
        팝오버에 대한 설명을 여기에 작성합니다.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Custom Content</h2>
        <p className="text-muted-foreground">
          팝오버 내부에 커스텀 컨텐츠를 넣을 수 있습니다.
        </p>
        <Container>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Settings</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <PopoverHeader>
                <PopoverTitle>Settings</PopoverTitle>
                <PopoverDescription>
                  애플리케이션 설정을 관리합니다.
                </PopoverDescription>
              </PopoverHeader>
              <div className="grid gap-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notifications</span>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Privacy</span>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Container>
        <CodeBlock
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <PopoverHeader>
      <PopoverTitle>Settings</PopoverTitle>
      <PopoverDescription>
        애플리케이션 설정을 관리합니다.
      </PopoverDescription>
    </PopoverHeader>
    <div className="grid gap-2 pt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Notifications</span>
        <Button variant="outline" size="sm">Configure</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
