// By Project - 프로젝트별 상세 현황

import { promises as fs } from 'fs';
import path from 'path';
import { PageHeader } from '../../../../ui/PageHeader';
import { PageNav } from '../../../../ui/PageNav';
import { ProjectCard, type Project, type ProjectStatus } from '../../../../ui/ProjectCard';
import { Badge } from '@components/badge';

export const revalidate = 600;

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
        description="프로젝트별 @design-geniefy/ui 버전 상세 현황"
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
              {statusProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  latestVersion={latestVersion}
                />
              ))}
            </div>
          </section>
        );
      })}

      {projects.length === 0 && (
        <div className="rounded-md border border-dashed p-8 text-center text-muted-foreground">
          프로젝트 데이터가 없습니다.
        </div>
      )}

      <div className="rounded-md bg-muted/50 p-4 text-body-sm">
        마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
      </div>

      <PageNav
        prev={{ href: '/status/adoption/', title: 'Adoption Dashboard' }}
        next={{ href: '/status/adoption/pending/', title: 'Pending PRs' }}
      />
    </div>
  );
}
