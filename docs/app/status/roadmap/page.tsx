// Roadmap - 디자인 시스템 로드맵

export default function RoadmapPage() {
  const roadmapData = [
    {
      quarter: 'Q1 2025',
      status: 'current',
      items: [
        { title: 'Button, Input 컴포넌트 v1', status: 'done' },
        { title: 'Design Tokens 기반 구조', status: 'done' },
        { title: '문서 사이트 기본 구조', status: 'done' },
        { title: 'Select, Checkbox, Radio 컴포넌트', status: 'in-progress' },
        { title: 'Typography 시스템', status: 'planned' },
      ],
    },
    {
      quarter: 'Q2 2025',
      status: 'upcoming',
      items: [
        { title: 'Modal, Dialog 컴포넌트', status: 'planned' },
        { title: 'Toast, Alert 컴포넌트', status: 'planned' },
        { title: 'Form 컴포넌트 세트', status: 'planned' },
        { title: '접근성 개선', status: 'planned' },
      ],
    },
    {
      quarter: 'Q3 2025',
      status: 'future',
      items: [
        { title: 'Layout 컴포넌트', status: 'planned' },
        { title: 'Navigation 컴포넌트', status: 'planned' },
        { title: 'Data Display 컴포넌트', status: 'planned' },
        { title: 'Figma 연동', status: 'planned' },
      ],
    },
  ];

  const statusIcons: Record<string, string> = {
    done: '✅',
    'in-progress': '🔄',
    planned: '📋',
  };

  const quarterStatus: Record<string, { label: string; color: string }> = {
    current: { label: '진행 중', color: 'var(--color-primary)' },
    upcoming: { label: '예정', color: '#f59e0b' },
    future: { label: '계획', color: 'var(--color-muted)' },
  };

  return (
    <div className="roadmap-page">
      <h1 className="text-page-title mb-2">Roadmap</h1>
      <p className="text-page-description">
        디자인 시스템 개발 로드맵
      </p>

      <div className="roadmap-timeline">
        {roadmapData.map((quarter) => {
          const qStatus = quarterStatus[quarter.status];
          return (
            <div key={quarter.quarter} className="roadmap-quarter">
              <div className="roadmap-quarter-header">
                <h2 className="roadmap-quarter-title">{quarter.quarter}</h2>
                <span
                  className="roadmap-quarter-status"
                  style={{ color: qStatus.color }}
                >
                  {qStatus.label}
                </span>
              </div>
              <div className="roadmap-items">
                {quarter.items.map((item, idx) => (
                  <div key={idx} className="roadmap-item">
                    <span className="roadmap-item-icon">
                      {statusIcons[item.status]}
                    </span>
                    <span className="roadmap-item-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="roadmap-note">
        <p>
          <strong>참고:</strong> 로드맵은 우선순위에 따라 변경될 수 있습니다.
          <br />
          피드백이나 요청은 GitHub Issues에 남겨주세요.
        </p>
      </div>
    </div>
  );
}
