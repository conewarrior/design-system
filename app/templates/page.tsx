import Link from 'next/link';
import { PageHeader } from '../../ui/PageHeader';
import { AspectRatio } from '@components/aspect-ratio';

const templates = [
  {
    id: 'gpters-brand',
    name: 'GPTers Brand',
    description: 'GPTers 브랜드 아이덴티티 기반 디자인. 오렌지 포인트 컬러와 깔끔한 레이아웃.',
    href: '/templates/gpters-brand/',
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: '흰 배경, 충분한 여백, 심플한 타이포. 가장 무난하고 깔끔한 스타일.',
    href: '/templates/minimal-clean/',
  },
  {
    id: 'dark-modern',
    name: 'Dark Modern',
    description: '다크 배경 + 포인트 컬러. 개발자 도구, 대시보드에 잘 어울리는 스타일.',
    href: '/templates/dark-modern/',
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: '반투명 블러 효과, 그라데이션 배경. 트렌디하고 세련된 느낌.',
    href: '/templates/glassmorphism/',
  },
  {
    id: 'soft-gradient',
    name: 'Soft Gradient',
    description: '부드러운 파스텔 그라데이션. 친근하고 따뜻한 느낌의 SaaS에 적합.',
    href: '/templates/soft-gradient/',
  },
  {
    id: 'bold-vibrant',
    name: 'Bold & Vibrant',
    description: '강렬한 컬러, 큰 타이포, 대비 강한 디자인. 임팩트 있는 랜딩페이지용.',
    href: '/templates/bold-vibrant/',
  },
  {
    id: 'corporate-pro',
    name: 'Corporate Pro',
    description: '신뢰감 있는 비즈니스 스타일. 블루 계열, 정돈된 그리드, 전문적인 느낌.',
    href: '/templates/corporate-pro/',
  },
  {
    id: 'futuristic',
    name: 'Futuristic',
    description: '사이버펑크/SF 느낌. 네온 글로우, 기하학적 요소, 테크 무드.',
    href: '/templates/futuristic/',
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Templates"
        description="바이브코딩을 위한 디자인 템플릿 컬렉션입니다. 원하는 컨셉을 선택하면 프롬프트, 토큰, 컬러팔레트를 제공합니다."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Link
            key={template.id}
            href={template.href}
            className="group rounded-md border p-4 transition-colors hover:bg-accent"
          >
            <div className="rounded-md mb-3 overflow-hidden bg-muted">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={`/thumbnails/${template.id}.png`}
                  alt={`${template.name} preview`}
                  className="w-full h-full object-cover object-top"
                />
              </AspectRatio>
            </div>
            <h3 className="text-subsection-title group-hover:text-primary transition-colors">
              {template.name}
            </h3>
            <p className="text-caption mt-2">{template.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
