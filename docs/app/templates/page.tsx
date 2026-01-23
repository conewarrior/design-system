const templates = [
  {
    id: 'gpters-brand',
    name: 'GPTers Brand',
    description: 'GPTers 브랜드 아이덴티티 기반 디자인. 오렌지 포인트 컬러와 깔끔한 레이아웃.',
    href: '/templates/gpters-brand/',
    colors: { primary: '#FF6900', bg: '#FFFFFF', accent: '#FFF0D3' },
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: '흰 배경, 충분한 여백, 심플한 타이포. 가장 무난하고 깔끔한 스타일.',
    href: '/templates/minimal-clean/',
    colors: { primary: '#18181B', bg: '#FFFFFF', accent: '#F4F4F5' },
  },
  {
    id: 'dark-modern',
    name: 'Dark Modern',
    description: '다크 배경 + 포인트 컬러. 개발자 도구, 대시보드에 잘 어울리는 스타일.',
    href: '/templates/dark-modern/',
    colors: { primary: '#8B5CF6', bg: '#0F0F0F', accent: '#1A1A1A' },
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: '반투명 블러 효과, 그라데이션 배경. 트렌디하고 세련된 느낌.',
    href: '/templates/glassmorphism/',
    colors: { primary: '#EC4899', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', accent: 'rgba(255,255,255,0.2)' },
  },
  {
    id: 'soft-gradient',
    name: 'Soft Gradient',
    description: '부드러운 파스텔 그라데이션. 친근하고 따뜻한 느낌의 SaaS에 적합.',
    href: '/templates/soft-gradient/',
    colors: { primary: '#F472B6', bg: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', accent: '#FDF2F8' },
  },
  {
    id: 'bold-vibrant',
    name: 'Bold & Vibrant',
    description: '강렬한 컬러, 큰 타이포, 대비 강한 디자인. 임팩트 있는 랜딩페이지용.',
    href: '/templates/bold-vibrant/',
    colors: { primary: '#EF4444', bg: '#FEF2F2', accent: '#FBBF24' },
  },
  {
    id: 'corporate-pro',
    name: 'Corporate Pro',
    description: '신뢰감 있는 비즈니스 스타일. 블루 계열, 정돈된 그리드, 전문적인 느낌.',
    href: '/templates/corporate-pro/',
    colors: { primary: '#2563EB', bg: '#FFFFFF', accent: '#DBEAFE' },
  },
  {
    id: 'futuristic',
    name: 'Futuristic',
    description: '사이버펑크/SF 느낌. 네온 글로우, 기하학적 요소, 테크 무드.',
    href: '/templates/futuristic/',
    colors: { primary: '#00F5FF', bg: '#0A0A0F', accent: '#1A1A2E' },
  },
];

function TemplateThumbnail({ id }: { id: string }) {
  return (
    <div
      style={{
        height: '160px',
        borderRadius: 'var(--radius-md)',
        marginBottom: 'var(--spacing-12)',
        overflow: 'hidden',
        position: 'relative',
        background: '#F4F4F5',
      }}
    >
      <img
        src={`/thumbnails/${id}.png`}
        alt={`${id} template preview`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
      />
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="page-title">Templates</h1>
      <p className="page-description">
        바이브코딩을 위한 디자인 템플릿 컬렉션입니다. 원하는 컨셉을 선택하면 프롬프트, 토큰, 컬러팔레트를 제공합니다.
      </p>

      <div className="card-grid">
        {templates.map((template) => (
          <div key={template.id} className="card template-card">
            <TemplateThumbnail id={template.id} />
            <div className="feature-title">{template.name}</div>
            <p className="feature-description">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
