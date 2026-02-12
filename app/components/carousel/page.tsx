'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@components/carousel';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Carousel"
        description="슬라이드 형태로 콘텐츠를 탐색할 수 있는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 캐러셀입니다. 좌우 화살표로 이동할 수 있습니다.
        </p>
        <Container className="justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <CarouselItem key={num}>
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center rounded-lg border bg-background p-6">
                      <span className="text-3xl font-semibold">{num}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
        <CodeBlock
          code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num}>
        <div className="p-1">
          <div className="flex aspect-square items-center justify-center rounded-lg border bg-background p-6">
            <span className="text-3xl font-semibold">{num}</span>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Multiple Items</h2>
        <p className="text-muted-foreground">
          basis 클래스를 사용하여 한 번에 여러 아이템을 표시할 수 있습니다.
        </p>
        <Container className="justify-center">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <CarouselItem key={num} className="pl-2 basis-1/3">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center rounded-lg border bg-background">
                      <span className="text-xl font-semibold">{num}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
        <CodeBlock
          code={`<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-2">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <CarouselItem key={num} className="pl-2 basis-1/3">
        <div className="p-1">
          <div className="flex aspect-square items-center justify-center rounded-lg border bg-background">
            <span className="text-xl font-semibold">{num}</span>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Orientation</h2>
        <p className="text-muted-foreground">
          orientation prop으로 세로 방향 캐러셀을 만들 수 있습니다.
        </p>
        <Container className="justify-center">
          <Carousel orientation="vertical" className="w-full max-w-xs">
            <CarouselContent className="-mt-2 h-[200px]">
              {[1, 2, 3, 4, 5].map((num) => (
                <CarouselItem key={num} className="pt-2 basis-1/2">
                  <div className="p-1">
                    <div className="flex items-center justify-center rounded-lg border bg-background p-4">
                      <span className="text-2xl font-semibold">{num}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
        <CodeBlock
          code={`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-2 h-[200px]">
    {[1, 2, 3, 4, 5].map((num) => (
      <CarouselItem key={num} className="pt-2 basis-1/2">
        <div className="p-1">
          <div className="flex items-center justify-center rounded-lg border bg-background p-4">
            <span className="text-2xl font-semibold">{num}</span>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
