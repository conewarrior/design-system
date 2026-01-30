// By Project - 프로젝트별 상세 현황

import { promises as fs } from 'fs';
import path from 'path';

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

const statusConfig: Record<ProjectStatus, { icon: string; label: string; color: string }> = {
  latest: { icon: '✅', label: '최신', color: 'var(--color-foreground)' },
  pending: { icon: '⏳', label: 'PR 대기', color: '#f59e0b' },
  outdated: { icon: '⚠️', label: '업데이트 필요', color: '#ef4444' },
  failed: { icon: '🔴', label: 'CI 실패', color: '#ef4444' },
  'not-installed': { icon: '➖', label: '미설치', color: 'var(--color-muted)' },
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

function ProjectCard({ project, latestVersion }: { project: Project; latestVersion: string }) {
  const config = statusConfig[project.status];

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-name">{project.name}</h3>
        <span className="project-card-status" style={{ color: config.color }}>
          {config.icon} {config.label}
        </span>
      </div>
      <p className="project-card-description">{project.description}</p>
      <div className="project-card-meta">
        <div className="project-card-version">
          <span className="label">현재 버전:</span>
          <span className="value">{project.version || '미설치'}</span>
        </div>
        <div className="project-card-version">
          <span className="label">최신 버전:</span>
          <span className="value">v{latestVersion}</span>
        </div>
      </div>
      {project.status === 'pending' && project.prUrl && (
        <a
          href={project.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          PR #{project.prNumber} 보기 →
        </a>
      )}
      {project.repo && (
        <a
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-repo"
        >
          GitHub →
        </a>
      )}
    </div>
  );
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
    <div className="projects-page">
      <h1 className="text-4xl font-bold tracking-tight mb-2">By Project</h1>
      <p className="text-lg text-muted-foreground">
        프로젝트별 @design-geniefy/ui 버전 상세 현황
      </p>

      {Object.entries(groupedProjects).map(([status, statusProjects]) => {
        if (statusProjects.length === 0) return null;
        const config = statusConfig[status as ProjectStatus];

        return (
          <div key={status} className="project-group">
            <h2 className="project-group-title">
              {config.icon} {config.label} ({statusProjects.length})
            </h2>
            <div className="project-cards">
              {statusProjects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  latestVersion={latestVersion}
                />
              ))}
            </div>
          </div>
        );
      })}

      {projects.length === 0 && (
        <div className="projects-empty">
          <p>프로젝트 데이터가 없습니다.</p>
        </div>
      )}

      <div className="projects-note">
        <p>
          <span className="projects-generated">
            마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>
    </div>
  );
}
