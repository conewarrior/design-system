import Link from 'next/link';
import { CodeBlock } from '../ui/CodeBlock';
import { PageHeader } from '../ui/PageHeader';
import { Card, CardContent, CardTitle, CardDescription } from '@components/card';
import { Badge } from '@components/badge';

const features = [
  {
    title: 'Design Tokens',
    description: '색상, 간격, 타이포그래피 등 일관된 디자인 토큰',
  },
  {
    title: 'React Components',
    description: 'TypeScript로 작성된 재사용 가능한 컴포넌트',
  },
  {
    title: 'Dark Mode',
    description: '.dark 클래스로 간편하게 다크 모드 적용',
  },
  {
    title: 'Tree Shakable',
    description: '필요한 컴포넌트만 번들에 포함',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="@gpters-internal/ui"
        description="Geniefy 제품을 위한 디자인 토큰과 React 컴포넌트 라이브러리"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">설치</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-body-sm">npm 패키지</h3>
            <CodeBlock language="bash">npm install @gpters-internal/ui</CodeBlock>
          </div>
          <div className="space-y-2">
            <h3 className="text-body-sm">CDN (토큰만)</h3>
            <CodeBlock language="html">{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
/>`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">빠른 시작</h2>
        <CodeBlock language="tsx">{`import { Button, Input } from '@gpters-internal/ui';

function App() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-1">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-subsection-title">컴포넌트</h2>
          <Badge variant="secondary">52개</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          shadcn/ui 기반의 React 컴포넌트 라이브러리입니다. Button, Input, Dialog 등
          52개의 컴포넌트를 제공합니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/install/">
            <Card className="transition-colors hover:bg-accent">
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-1">Install</CardTitle>
                <CardDescription>패키지 설치 방법</CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tokens/">
            <Card className="transition-colors hover:bg-accent">
              <CardContent className="pt-6">
                <CardTitle className="text-base mb-1">Tokens</CardTitle>
                <CardDescription>디자인 토큰 레퍼런스</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

    </div>
  );
}
