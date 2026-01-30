import Link from 'next/link';
import { PageHeader } from '../../ui/PageHeader';
import { Card, CardContent, CardTitle, CardDescription } from '@components/card';

const tokenCategories = [
  {
    href: '/tokens/colors/',
    title: 'Colors',
    description: '19개 시맨틱 색상 토큰 (background, foreground, primary 등)',
    count: '19',
  },
  {
    href: '/tokens/radius/',
    title: 'Radius',
    description: '7개 border-radius 토큰 (sm, md, lg, xl 등)',
    count: '7',
  },
  {
    href: '/tokens/typography/',
    title: 'Typography',
    description: '폰트 패밀리, 크기, 굵기, 행간 토큰',
    count: '20+',
  },
];

export default function TokensPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Design Tokens"
        description="shadcn/ui 디자인 토큰 레퍼런스"
      />

      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          디자인 토큰은 색상, 간격, 타이포그래피 등의 디자인 결정을 CSS 변수로 정의한 것입니다.
          토큰을 사용하면 일관된 디자인을 유지하고, 라이트/다크 모드를 쉽게 지원할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">카테고리</h2>
        <div className="grid gap-4">
          {tokenCategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <Card className="transition-colors hover:bg-accent">
                <CardContent className="flex items-center justify-between pt-6">
                  <div>
                    <CardTitle className="text-base mb-1">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                  <div className="text-section-title text-muted-foreground">
                    {category.count}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
