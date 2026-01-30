import Link from 'next/link';

const tokenCategories = [
  {
    href: '/tokens/colors/',
    title: 'Colors',
    description: '19개 시맨틱 색상 토큰 (background, foreground, primary 등)',
  },
  {
    href: '/tokens/radius/',
    title: 'Radius',
    description: '8개 border-radius 토큰 (sm, md, lg, xl 등)',
  },
  {
    href: '/tokens/typography/',
    title: 'Typography',
    description: '2개 폰트 토큰 (sans, mono)',
  },
];

export default function TokensPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Design Tokens</h1>
      <p className="text-lg text-muted-foreground mb-8">
        shadcn/ui 디자인 토큰 레퍼런스
      </p>

      <div className="space-y-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            디자인 토큰은 색상, 간격, 타이포그래피 등의 디자인 결정을 CSS 변수로 정의한 것입니다.
            토큰을 사용하면 일관된 디자인을 유지하고, 라이트/다크 모드를 쉽게 지원할 수 있습니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tokenCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <h2 className="font-semibold mb-2">{category.title}</h2>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
