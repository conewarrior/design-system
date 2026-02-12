import { PageHeader } from '../../../ui/PageHeader';
import { Badge } from '@components/badge';
import { Separator } from '@components/separator';

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
    <div className="space-y-8">
      <PageHeader
        title="Design Rules Changelog"
        description="design-rules.md의 버전별 변경 이력입니다."
      />

      <div className="space-y-6">
        {versions.map((version, index) => (
          <article key={version.version}>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="secondary" className="font-mono">
                {version.version}
              </Badge>
              <time className="text-sm text-muted-foreground">
                {version.date}
              </time>
            </div>
            <ul className="space-y-2 pl-4">
              {version.changes.map((change, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
            {index < versions.length - 1 && <Separator className="mt-6" />}
          </article>
        ))}
      </div>
    </div>
  );
}
