export default function HomePage() {
  return (
    <div>
      <h1 className="page-title">@design-geniefy/ui</h1>
      <p className="page-description">
        Geniefy 제품을 위한 디자인 토큰과 React 컴포넌트 라이브러리
      </p>

      <section>
        <h2 className="section-title">설치</h2>

        <h3 className="subsection-title">npm 패키지</h3>
        <pre><code>npm install @design-geniefy/ui</code></pre>

        <h3 className="subsection-title">CDN (토큰만)</h3>
        <pre><code>{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
/>`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">빠른 시작</h2>
        <pre><code>{`import { Button, Input } from '@design-geniefy/ui';

function App() {
  return (
    <div>
      <Input placeholder="Enter your email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}`}</code></pre>
      </section>

      <section>
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <div className="feature-title">Design Tokens</div>
            <p className="feature-description">
              색상, 간격, 타이포그래피 등 일관된 디자인 토큰
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <div className="feature-title">React Components</div>
            <p className="feature-description">
              TypeScript로 작성된 재사용 가능한 컴포넌트
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌙</div>
            <div className="feature-title">Dark Mode</div>
            <p className="feature-description">
              .dark 클래스로 간편하게 다크 모드 적용
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <div className="feature-title">Tree Shakable</div>
            <p className="feature-description">
              필요한 컴포넌트만 번들에 포함
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">현재 컴포넌트</h2>
        <div className="card-grid">
          <a href="/components/button/" className="card">
            <div className="feature-title">Button</div>
            <p className="feature-description">5 variants, 3 sizes</p>
          </a>
          <a href="/components/input/" className="card">
            <div className="feature-title">Input</div>
            <p className="feature-description">3 sizes, error state</p>
          </a>
        </div>
      </section>
    </div>
  );
}
