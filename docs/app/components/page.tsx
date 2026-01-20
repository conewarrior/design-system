import Link from 'next/link';

const components = [
  {
    name: 'Button',
    href: '/components/button/',
    description: '클릭 가능한 버튼 컴포넌트',
    variants: '5 variants',
    sizes: '3 sizes',
  },
  {
    name: 'Input',
    href: '/components/input/',
    description: '텍스트 입력 필드',
    variants: 'default, error',
    sizes: '3 sizes',
  },
];

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="page-title">Components</h1>
      <p className="page-description">
        @geniefy/ui에서 제공하는 React 컴포넌트 목록입니다.
      </p>

      <div className="card-grid">
        {components.map((component) => (
          <Link key={component.name} href={component.href} className="card">
            <div className="feature-title">{component.name}</div>
            <p className="feature-description">{component.description}</p>
            <div style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-muted)' }}>
              {component.variants} · {component.sizes}
            </div>
          </Link>
        ))}
      </div>

      <section style={{ marginTop: 'var(--spacing-6)' }}>
        <h2 className="section-title">Installation</h2>
        <pre><code>npm install @geniefy/ui</code></pre>

        <h2 className="section-title">Usage</h2>
        <pre><code>{`import { Button, Input } from '@geniefy/ui';

function MyComponent() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Type here..." />
    </>
  );
}`}</code></pre>
      </section>
    </div>
  );
}
