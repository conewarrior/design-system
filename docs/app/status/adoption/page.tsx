// Adoption Dashboard
// GitHub API 기반 조직 내 프로젝트들의 @design-geniefy/ui 버전 채택 현황

import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import { PageHeader } from '../../../ui/PageHeader';
import { Badge } from '@components/badge';
import { Progress } from '@components/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';

export const revalidate = 600;

type ProjectStatus = 'latest' | 'pending' | 'outdated' | 'failed' | 'not-installed';

interface VersionData {
  version: string;
  count: number;
  percentage: number;
}

interface Project {
  name: string;
  repo: string;
  description: string;
  version: string | null;
  status: ProjectStatus;
  prNumber?: number;
  prUrl?: string;
}

interface UpdatesData {
  generatedAt: string;
  latestVersion: string;
  publishedAt: string;
  adoptionRate: number;
  versionData: VersionData[];
  projects: Project[];
  error?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  latest: { label: '최신', variant: 'default' },
  pending: { label: 'PR 대기', variant: 'secondary' },
  outdated: { label: '업데이트 필요', variant: 'destructive' },
  failed: { label: 'CI 실패', variant: 'destructive' },
  'not-installed': { label: '미설치', variant: 'outline' },
};

async function getUpdatesData(): Promise<UpdatesData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'updates.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return {
      generatedAt: new Date().toISOString(),
      latestVersion: '0.0.1',
      publishedAt: new Date().toISOString().split('T')[0],
      adoptionRate: 0,
      versionData: [],
      projects: [],
    };
  }
}

export default async function AdoptionPage() {
  const data = await getUpdatesData();
  const {
    latestVersion,
    publishedAt,
    adoptionRate,
    versionData,
    projects,
    generatedAt,
    error,
  } = data;

  const installedCount = projects.filter(p => p.version).length;
  const totalCount = projects.length;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Adoption Dashboard"
        description="조직 내 프로젝트들의 @design-geniefy/ui 버전 현황"
      />

      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm">
          데이터 로드 중 오류 발생: {error}
        </div>
      )}

      {/* Summary Card */}
      <div className="rounded-md border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">최신 버전</div>
            <div className="text-2xl font-bold">v{latestVersion}</div>
          </div>
          <Badge variant="default">{adoptionRate}% 채택</Badge>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>배포일: {publishedAt}</span>
          <span>{installedCount}/{totalCount} 프로젝트</span>
        </div>
      </div>

      {/* Version Chart */}
      <div className="space-y-3">
        <h3 className="text-label-base">버전 분포</h3>
        {versionData.length > 0 ? (
          <div className="space-y-2">
            {versionData.map((item) => (
              <div key={item.version} className="flex items-center gap-3 text-sm">
                <span className="w-16 font-mono text-muted-foreground">{item.version}</span>
                <Progress value={item.percentage} className="flex-1 h-2" />
                <span className="w-12 text-right text-muted-foreground">{item.percentage}%</span>
                <span className="w-12 text-right text-muted-foreground">({item.count})</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">버전 데이터가 없습니다.</p>
        )}
      </div>

      {/* Project List */}
      <div className="space-y-3">
        <h3 className="text-label-base">프로젝트 현황</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>프로젝트</TableHead>
                <TableHead className="w-20">버전</TableHead>
                <TableHead className="w-28">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => {
                const config = statusConfig[project.status];
                return (
                  <TableRow key={project.name}>
                    <TableCell>
                      <div className="text-sm font-medium">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.description}</div>
                    </TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      {project.version || '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant={config.variant} className="text-xs">
                          {config.label}
                        </Badge>
                        {project.status === 'pending' && project.prNumber && (
                          <Link
                            href={project.prUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                          >
                            #{project.prNumber}
                          </Link>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Metadata */}
      <div className="rounded-md bg-muted/50 p-4 text-body-sm">
        마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
      </div>

      {/* Opt-in Section */}
      <section className="space-y-4">
        <h3 className="font-medium">프로젝트 등록 (Opt-in)</h3>
        <p className="text-sm text-muted-foreground">
          패키지 설치 시 자동으로 채택 현황을 보고하려면 다음 중 하나를 설정하세요:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border p-3 space-y-1">
            <div className="text-sm font-medium">환경변수</div>
            <code className="text-xs bg-muted px-1 py-0.5 rounded block">
              DESIGN_SYSTEM_REPORT=true
            </code>
          </div>
          <div className="rounded-md border p-3 space-y-1">
            <div className="text-sm font-medium">.designrc</div>
            <code className="text-xs bg-muted px-1 py-0.5 rounded block">
              {`{ "report": true }`}
            </code>
          </div>
          <div className="rounded-md border p-3 space-y-1">
            <div className="text-sm font-medium">package.json</div>
            <code className="text-xs bg-muted px-1 py-0.5 rounded block">
              {`"designSystem": { "report": true }`}
            </code>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          보고되는 정보: 프로젝트명, 저장소 URL, 설치된 버전
        </p>
      </section>

    </div>
  );
}
