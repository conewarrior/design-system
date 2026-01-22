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
  {
    name: 'Badge',
    href: '/components/badge/',
    description: '상태/카테고리 표시 라벨',
    variants: '7 variants',
    sizes: '3 sizes',
  },
  {
    name: 'Card',
    href: '/components/card/',
    description: '콘텐츠 그룹화 컨테이너',
    variants: '3 variants',
    sizes: '4 paddings',
  },
  {
    name: 'Checkbox',
    href: '/components/checkbox/',
    description: '선택 가능한 체크박스',
    variants: 'default',
    sizes: '3 sizes',
  },
  {
    name: 'Radio',
    href: '/components/radio/',
    description: '단일 선택 라디오 버튼',
    variants: 'default',
    sizes: '3 sizes',
  },
  {
    name: 'Select',
    href: '/components/select/',
    description: '드롭다운 선택',
    variants: 'default, error',
    sizes: '3 sizes',
  },
  {
    name: 'Textarea',
    href: '/components/textarea/',
    description: '여러 줄 텍스트 입력',
    variants: 'default, error',
    sizes: '3 sizes',
  },
  {
    name: 'Switch',
    href: '/components/switch/',
    description: 'ON/OFF 토글 스위치',
    variants: 'default',
    sizes: '3 sizes',
  },
  {
    name: 'Avatar',
    href: '/components/avatar/',
    description: '사용자 프로필 이미지',
    variants: 'image, fallback',
    sizes: '5 sizes',
  },
  {
    name: 'Modal',
    href: '/components/modal/',
    description: '오버레이 다이얼로그',
    variants: 'default',
    sizes: '4 sizes',
  },
  {
    name: 'Toast',
    href: '/components/toast/',
    description: '알림 메시지',
    variants: '5 variants',
    sizes: 'default',
  },
  {
    name: 'Tooltip',
    href: '/components/tooltip/',
    description: '호버 시 추가 정보 표시',
    variants: '4 positions',
    sizes: 'default',
  },
  {
    name: 'Tabs',
    href: '/components/tabs/',
    description: '탭 콘텐츠 전환',
    variants: 'default',
    sizes: 'default',
  },
  {
    name: 'Accordion',
    href: '/components/accordion/',
    description: '접이식 콘텐츠',
    variants: 'single, multiple',
    sizes: 'default',
  },
  {
    name: 'Skeleton',
    href: '/components/skeleton/',
    description: '로딩 플레이스홀더',
    variants: 'text, circular, rectangular',
    sizes: 'custom',
  },
  {
    name: 'Progress',
    href: '/components/progress/',
    description: '진행률 바',
    variants: '4 variants',
    sizes: '3 sizes',
  },
  {
    name: 'Spinner',
    href: '/components/spinner/',
    description: '로딩 스피너',
    variants: 'default',
    sizes: '3 sizes',
  },
  {
    name: 'Alert',
    href: '/components/alert/',
    description: '인라인 알림 메시지',
    variants: '5 variants',
    sizes: 'default',
  },
  {
    name: 'Dropdown',
    href: '/components/dropdown/',
    description: '클릭 시 메뉴 표시',
    variants: '3 alignments',
    sizes: 'default',
  },
];

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="page-title">Components</h1>
      <p className="page-description">
        @geniefy/ui에서 제공하는 React 컴포넌트 목록입니다. 총 {components.length}개의 컴포넌트를 제공합니다.
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
        <pre><code>{`import { Button, Input, Card, Badge } from '@geniefy/ui';

function MyComponent() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Type here..." />
      <Badge variant="success">Active</Badge>
    </>
  );
}`}</code></pre>
      </section>
    </div>
  );
}
