import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@components/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { CalendarDays } from 'lucide-react';

export default function HoverCardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Hover Card"
        description="마우스 호버 시 추가 정보를 보여주는 팝오버"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          사용자가 요소 위에 마우스를 올리면 추가 정보를 표시합니다.
        </p>
        <Container>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework - created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Container>
        <CodeBlock
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework - created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Simple Example</h2>
        <p className="text-muted-foreground">
          텍스트에 호버하여 간단한 설명을 표시할 수 있습니다.
        </p>
        <Container>
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="underline decoration-dotted cursor-help">
                React
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">
                A JavaScript library for building user interfaces.
              </p>
            </HoverCardContent>
          </HoverCard>
        </Container>
        <CodeBlock
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <span className="underline decoration-dotted cursor-help">
      React
    </span>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">
      A JavaScript library for building user interfaces.
    </p>
  </HoverCardContent>
</HoverCard>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@gpters-internal/ui';

function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>
        Additional information here.
      </HoverCardContent>
    </HoverCard>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
