import { CodeBlock } from '../ui/CodeBlock';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/card';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-page-title mb-2">@design-geniefy/ui</h1>
        <p className="text-page-description">
          Geniefy 제품을 위한 디자인 토큰과 React 컴포넌트 라이브러리
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-section-title">설치</h2>

        <div className="space-y-3">
          <h3 className="text-card-title">npm 패키지</h3>
          <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>
        </div>

        <div className="space-y-3">
          <h3 className="text-card-title">CDN (토큰만)</h3>
          <CodeBlock language="html">{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
/>`}</CodeBlock>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-section-title">빠른 시작</h2>
        <CodeBlock language="tsx">{`import { Button, Input } from '@design-geniefy/ui';

function App() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}`}</CodeBlock>
      </section>

      <section className="space-y-6">
        <h2 className="text-section-title">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="py-4">
            <CardContent className="space-y-2">
              <div className="text-4xl">🎨</div>
              <CardTitle>Design Tokens</CardTitle>
              <CardDescription>
                색상, 간격, 타이포그래피 등 일관된 디자인 토큰
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardContent className="space-y-2">
              <div className="text-4xl">⚛️</div>
              <CardTitle>React Components</CardTitle>
              <CardDescription>
                TypeScript로 작성된 재사용 가능한 컴포넌트
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardContent className="space-y-2">
              <div className="text-4xl">🌙</div>
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>
                .dark 클래스로 간편하게 다크 모드 적용
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardContent className="space-y-2">
              <div className="text-4xl">📦</div>
              <CardTitle>Tree Shakable</CardTitle>
              <CardDescription>
                필요한 컴포넌트만 번들에 포함
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-section-title">현재 컴포넌트</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="/components/button/">
            <Card className="py-4 transition-colors hover:bg-accent">
              <CardContent>
                <CardTitle className="mb-1">Button</CardTitle>
                <CardDescription>5 variants, 3 sizes</CardDescription>
              </CardContent>
            </Card>
          </a>
          <a href="/components/input/">
            <Card className="py-4 transition-colors hover:bg-accent">
              <CardContent>
                <CardTitle className="mb-1">Input</CardTitle>
                <CardDescription>3 sizes, error state</CardDescription>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
}
