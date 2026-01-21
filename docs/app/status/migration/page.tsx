// Migration Guide - 버전별 마이그레이션 가이드

export default function MigrationPage() {
  const migrations = [
    {
      version: '0.1.0',
      date: '예정',
      breaking: [
        {
          title: 'Button variant prop 변경',
          before: 'type="primary"',
          after: 'variant="primary"',
          description: 'type prop이 variant로 변경됩니다.',
        },
      ],
      features: [
        'Select, Checkbox, Radio 컴포넌트 추가',
        'Typography 토큰 추가',
      ],
    },
    {
      version: '0.0.1',
      date: '2025-01-20',
      breaking: [],
      features: [
        'Button 컴포넌트 초기 버전',
        'Input 컴포넌트 초기 버전',
        '기본 디자인 토큰 (colors, spacing, radius)',
      ],
    },
  ];

  return (
    <div className="migration-page">
      <h1 className="page-title">Migration Guide</h1>
      <p className="page-description">
        버전별 변경 사항 및 마이그레이션 가이드
      </p>

      <div className="migration-list">
        {migrations.map((migration) => (
          <div key={migration.version} className="migration-version">
            <div className="migration-header">
              <h2 className="migration-version-title">
                v{migration.version}
              </h2>
              <span className="migration-date">{migration.date}</span>
            </div>

            {migration.breaking.length > 0 && (
              <div className="migration-breaking">
                <h3 className="migration-section-title">
                  ⚠️ Breaking Changes
                </h3>
                {migration.breaking.map((item, idx) => (
                  <div key={idx} className="migration-item">
                    <h4 className="migration-item-title">{item.title}</h4>
                    <p className="migration-item-description">
                      {item.description}
                    </p>
                    <div className="migration-code">
                      <div className="migration-before">
                        <span className="migration-label">Before:</span>
                        <code>{item.before}</code>
                      </div>
                      <div className="migration-after">
                        <span className="migration-label">After:</span>
                        <code>{item.after}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {migration.features.length > 0 && (
              <div className="migration-features">
                <h3 className="migration-section-title">
                  ✨ New Features
                </h3>
                <ul className="migration-feature-list">
                  {migration.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="migration-note">
        <p>
          <strong>도움이 필요하세요?</strong>
          <br />
          마이그레이션 관련 문의는 Slack #design-system 채널로 연락주세요.
        </p>
      </div>
    </div>
  );
}
