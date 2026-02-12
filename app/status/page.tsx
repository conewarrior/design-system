// Status Overview Dashboard
// Changes + Adoption 요약 대시보드

import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { FileText, BarChart3, Map, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@components/card';
import { Badge } from '@components/badge';
import { Separator } from '@components/separator';

// ISR: 10분마다 재생성
export const revalidate = 600;

interface ChangelogData {
  generatedAt: string;
  totalChanges: number;
}

interface UpdatesData {
  generatedAt: string;
  latestVersion: string;
  adoptionRate: number;
  projects: { name: string; status: string }[];
}

async function getChangelogSummary(): Promise<ChangelogData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'changelog.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return {
      generatedAt: data.generatedAt,
      totalChanges: data.totalChanges,
    };
  } catch {
    return { generatedAt: new Date().toISOString(), totalChanges: 0 };
  }
}

async function getUpdatesSummary(): Promise<UpdatesData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'updates.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return {
      generatedAt: new Date().toISOString(),
      latestVersion: '0.0.1',
      adoptionRate: 0,
      projects: [],
    };
  }
}

export default async function StatusPage() {
  const [changelog, updates] = await Promise.all([
    getChangelogSummary(),
    getUpdatesSummary(),
  ]);

  const pendingCount = updates.projects.filter(p => p.status === 'pending').length;
  const outdatedCount = updates.projects.filter(p => p.status === 'outdated').length;

  const dashboardCards = [
    {
      href: '/status/changes/',
      icon: FileText,
      title: 'Changes',
      value: changelog.totalChanges.toString(),
      label: '총 변경 이력',
      badges: ['Components', 'Tokens'],
    },
    {
      href: '/status/adoption/',
      icon: BarChart3,
      title: 'Adoption',
      value: `${updates.adoptionRate}%`,
      label: `v${updates.latestVersion} 채택률`,
      badges: [`${pendingCount} PR 대기`, `${outdatedCount} 업데이트 필요`],
    },
    {
      href: '/status/roadmap/',
      icon: Map,
      title: 'Roadmap',
      value: 'Q1 2025',
      label: '현재 분기',
      badges: ['계획된 기능 보기'],
    },
    {
      href: '/status/migration/',
      icon: BookOpen,
      title: 'Migration',
      value: 'Guide',
      label: '마이그레이션 가이드',
      badges: ['버전별 가이드'],
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-page-title mb-2">Status Dashboard</h1>
        <p className="text-page-description">
          디자인 시스템 변경 이력 및 채택 현황 요약
        </p>
      </header>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.href} href={card.href} className="group">
              <Card className="h-full transition-colors hover:border-primary/50 shadow-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-foreground">{card.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{card.label}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="font-normal">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <footer className="pt-4">
        <p className="text-caption">
          마지막 업데이트: {new Date(updates.generatedAt).toLocaleString('ko-KR')}
        </p>
      </footer>
    </div>
  );
}
