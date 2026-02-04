// Migration Guide - 버전별 마이그레이션 가이드

import { PageHeader } from '../../../ui/PageHeader';
import { Callout } from '../../../ui/Callout';
import { Badge } from '@components/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@components/card';
import { Kbd } from '@components/kbd';
import { Separator } from '@components/separator';

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
    <div className="space-y-8">
      <PageHeader
        title="Migration Guide"
        description="버전별 변경 사항 및 마이그레이션 가이드"
      />

      <div className="space-y-6">
        {migrations.map((migration) => (
          <Card key={migration.version}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">v{migration.version}</CardTitle>
                <Badge variant="outline">{migration.date}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {migration.breaking.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-card-title text-destructive">Breaking Changes</h3>
                  {migration.breaking.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-body-sm">{item.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Before:</span>
                          <Kbd>{item.before}</Kbd>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">After:</span>
                          <Kbd>{item.after}</Kbd>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {migration.breaking.length > 0 && migration.features.length > 0 && (
                <Separator />
              )}

              {migration.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-card-title text-primary">New Features</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside text-muted-foreground">
                    {migration.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Callout variant="info">
        <p>
          <strong>도움이 필요하세요?</strong>
          <br />
          마이그레이션 관련 문의는 Slack #design-system 채널로 연락주세요.
        </p>
      </Callout>
    </div>
  );
}
