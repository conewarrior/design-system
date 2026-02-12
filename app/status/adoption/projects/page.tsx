// By Project - 프로젝트별 상세 현황

import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import { PageHeader } from '../../../../ui/PageHeader';
import { Callout } from '../../../../ui/Callout';
import { Badge } from '@components/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@components/card';
import { ExternalLink } from 'lucide-react';

export const revalidate = 600;

type ProjectStatus = 'latest' | 'pending' | 'outdated' | 'failed' | 'not-installed';

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
  projects: Project[];
}

const statusLabels: Record<ProjectStatus, string> = {
  latest: '최신',
  pending: 'PR 대기',
  outdated: '업데이트 필요',
  failed: 'CI 실패',
  'not-installed': '미설치',
};

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
      projects: [],
    };
  }
}

export default async function ProjectsPage() {
  const data = await getUpdatesData();
  const { projects, latestVersion, generatedAt } = data;

  // 상태별로 그룹화
  const groupedProjects = {
    latest: projects.filter(p => p.status === 'latest'),
    pending: projects.filter(p => p.status === 'pending'),
    outdated: projects.filter(p => p.status === 'outdated'),
    failed: projects.filter(p => p.status === 'failed'),
    'not-installed': projects.filter(p => p.status === 'not-installed'),
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="By Project"
        description="프로젝트별 @gpters-internal/ui 버전 상세 현황"
      />

      {Object.entries(groupedProjects).map(([status, statusProjects]) => {
        if (statusProjects.length === 0) return null;

        return (
          <section key={status} className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="font-medium">{statusLabels[status as ProjectStatus]}</h2>
              <Badge variant="secondary">{statusProjects.length}</Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {statusProjects.map((project) => {
                const config = statusConfig[project.status];
                return (
                  <Card key={project.name} className="py-4">
                    <CardHeader className="pb-0">
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <CardAction>
                        <Badge variant={config.variant}>{config.label}</Badge>
                      </CardAction>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="text-sm">
                      <div className="flex gap-6">
                        <div>
                          <span className="text-muted-foreground">현재: </span>
                          <span className="font-mono">{project.version || '미설치'}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">최신: </span>
                          <span className="font-mono">v{latestVersion}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="gap-3 pt-0">
                      {project.status === 'pending' && project.prUrl && (
                        <Link
                          href={project.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          PR #{project.prNumber}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                      {project.repo && (
                        <Link
                          href={`https://github.com/${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                        >
                          GitHub
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}

      {projects.length === 0 && (
        <div className="rounded-md border border-dashed p-8 text-center text-muted-foreground">
          프로젝트 데이터가 없습니다.
        </div>
      )}

      <Callout>
        마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
      </Callout>

    </div>
  );
}
