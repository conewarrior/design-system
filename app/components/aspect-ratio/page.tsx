import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { AspectRatio } from '@components/aspect-ratio';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function AspectRatioPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Aspect Ratio"
        description="고정된 비율로 콘텐츠를 표시하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">16:9 Ratio</h2>
        <p className="text-muted-foreground">
          가장 일반적인 비디오 비율입니다.
        </p>
        <Container>
          <div className="w-[450px] max-w-full">
            <AspectRatio ratio={16 / 9}>
              <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
                <span className="text-muted-foreground">16:9</span>
              </div>
            </AspectRatio>
          </div>
        </Container>
        <CodeBlock
          code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://example.com/image.jpg"
    alt="Photo"
    className="h-full w-full object-cover rounded-md"
  />
</AspectRatio>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">4:3 Ratio</h2>
        <p className="text-muted-foreground">
          전통적인 TV 및 사진 비율입니다.
        </p>
        <Container>
          <div className="w-[300px] max-w-full">
            <AspectRatio ratio={4 / 3}>
              <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
                <span className="text-muted-foreground">4:3</span>
              </div>
            </AspectRatio>
          </div>
        </Container>
        <CodeBlock
          code={`<AspectRatio ratio={4 / 3}>
  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
    4:3 Content
  </div>
</AspectRatio>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">1:1 (Square)</h2>
        <p className="text-muted-foreground">
          정사각형 비율로 프로필 이미지나 썸네일에 적합합니다.
        </p>
        <Container>
          <div className="w-[200px] max-w-full">
            <AspectRatio ratio={1}>
              <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
                <span className="text-muted-foreground">1:1</span>
              </div>
            </AspectRatio>
          </div>
        </Container>
        <CodeBlock
          code={`<AspectRatio ratio={1}>
  <img
    src="https://example.com/avatar.jpg"
    alt="Avatar"
    className="h-full w-full object-cover rounded-md"
  />
</AspectRatio>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { AspectRatio } from '@gpters-internal/ui';

function Example() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="..."
          alt="Image"
          className="h-full w-full object-cover rounded-md"
        />
      </AspectRatio>
    </div>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
