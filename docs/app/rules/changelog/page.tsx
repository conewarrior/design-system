export default function RulesChangelogPage() {
  const versions = [
    {
      version: 'v1.1',
      date: '2026-01-21',
      changes: [
        'Generation Protocol 4단계 추가',
        '컴포넌트 사용 규칙 명시',
        '모호한 표현 금지 규칙 추가',
      ],
    },
    {
      version: 'v1.0',
      date: '2026-01-20',
      changes: [
        '초기 버전 - 토큰 규칙 정의',
        '색상, 간격, 폰트, 반경 규칙 추가',
      ],
    },
  ];

  return (
    <div className="rules-changelog-page">
      <header className="page-header">
        <h1>Design Rules Changelog</h1>
        <p>design-rules.md의 버전별 변경 이력입니다.</p>
      </header>

      <div className="changelog-timeline">
        {versions.map((version) => (
          <article key={version.version} className="changelog-version">
            <div className="version-header">
              <span className="version-badge">{version.version}</span>
              <time className="version-date">{version.date}</time>
            </div>
            <ul className="version-changes">
              {version.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
