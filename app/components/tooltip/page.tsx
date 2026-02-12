'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@components/tooltip';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Plus, Settings, HelpCircle } from 'lucide-react';

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Tooltip"
        description="요소에 호버하면 추가 정보를 표시하는 툴팁"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          요소에 마우스를 올리면 툴팁이 표시됩니다.
        </p>
        <Container>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>새로 추가하기</p>
            </TooltipContent>
          </Tooltip>
        </Container>
        <CodeBlock
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Plus className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>새로 추가하기</p>
  </TooltipContent>
</Tooltip>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Positions</h2>
        <p className="text-muted-foreground">
          side 속성으로 툴팁의 위치를 지정할 수 있습니다.
        </p>
        <Container>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>상단에 표시</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>하단에 표시</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>좌측에 표시</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>우측에 표시</p>
            </TooltipContent>
          </Tooltip>
        </Container>
        <CodeBlock
          code={`<TooltipContent side="top">상단에 표시</TooltipContent>
<TooltipContent side="bottom">하단에 표시</TooltipContent>
<TooltipContent side="left">좌측에 표시</TooltipContent>
<TooltipContent side="right">우측에 표시</TooltipContent>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Icons</h2>
        <p className="text-muted-foreground">
          아이콘 버튼에 설명을 추가할 때 유용합니다.
        </p>
        <Container>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>설정</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>도움말</p>
            </TooltipContent>
          </Tooltip>
        </Container>
        <CodeBlock
          code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Settings className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>설정</p>
  </TooltipContent>
</Tooltip>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Multiple Tooltips</h2>
        <p className="text-muted-foreground">
          TooltipProvider로 여러 툴팁을 감싸면 지연 시간을 공유합니다.
        </p>
        <Container>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">첫 번째</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>첫 번째 툴팁</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">두 번째</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>두 번째 툴팁</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Container>
        <CodeBlock
          code={`<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger>첫 번째</TooltipTrigger>
    <TooltipContent>첫 번째 툴팁</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger>두 번째</TooltipTrigger>
    <TooltipContent>두 번째 툴팁</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button>Hover me</button>
      </TooltipTrigger>
      <TooltipContent>
        <p>추가 정보가 여기에 표시됩니다</p>
      </TooltipContent>
    </Tooltip>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
