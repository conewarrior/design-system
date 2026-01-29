export default function HomePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">@design-geniefy/ui</h1>
        <p className="text-lg text-muted-foreground">
          Geniefy 제품을 위한 디자인 토큰과 React 컴포넌트 라이브러리
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">설치</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">npm 패키지</h3>
          <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>npm install @design-geniefy/ui</code></pre>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">CDN (토큰만)</h3>
          <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
/>`}</code></pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">빠른 시작</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`import { Button, Input } from '@design-geniefy/ui';

function App() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}`}</code></pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="text-4xl">🎨</div>
            <h3 className="text-lg font-semibold">Design Tokens</h3>
            <p className="text-sm text-muted-foreground">
              색상, 간격, 타이포그래피 등 일관된 디자인 토큰
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="text-4xl">⚛️</div>
            <h3 className="text-lg font-semibold">React Components</h3>
            <p className="text-sm text-muted-foreground">
              TypeScript로 작성된 재사용 가능한 컴포넌트
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="text-4xl">🌙</div>
            <h3 className="text-lg font-semibold">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">
              .dark 클래스로 간편하게 다크 모드 적용
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 space-y-2">
            <div className="text-4xl">📦</div>
            <h3 className="text-lg font-semibold">Tree Shakable</h3>
            <p className="text-sm text-muted-foreground">
              필요한 컴포넌트만 번들에 포함
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">현재 컴포넌트</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="/components/button/" className="block rounded-lg border bg-card p-6 hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-1">Button</h3>
            <p className="text-sm text-muted-foreground">5 variants, 3 sizes</p>
          </a>
          <a href="/components/input/" className="block rounded-lg border bg-card p-6 hover:bg-accent transition-colors">
            <h3 className="text-lg font-semibold mb-1">Input</h3>
            <p className="text-sm text-muted-foreground">3 sizes, error state</p>
          </a>
        </div>
      </section>
    </div>
  );
}
