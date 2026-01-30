// Pending PRs - PR 대기 중인 프로젝트

import { promises as fs } from 'fs';
import path from 'path';

export const revalidate = 600;

interface Project {
  name: string;
  repo: string;
  description: string;
  version: string | null;
  status: string;
  prNumber?: number;
  prUrl?: string;
}

interface UpdatesData {
  generatedAt: string;
  latestVersion: string;
  projects: Project[];
}

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

export default async function PendingPRsPage() {
  const data = await getUpdatesData();
  const { projects, latestVersion, generatedAt } = data;

  const pendingProjects = projects.filter(p => p.status === 'pending');

  return (
    <div className="pending-page">
      <h1 className="text-page-title mb-2">Pending PRs</h1>
      <p className="text-page-description">
        버전 업데이트 PR이 대기 중인 프로젝트 ({pendingProjects.length}개)
      </p>

      {pendingProjects.length > 0 ? (
        <div className="pending-list">
          {pendingProjects.map((project) => (
            <div key={project.name} className="pending-item">
              <div className="pending-info">
                <h3 className="pending-name">{project.name}</h3>
                <p className="pending-description">{project.description}</p>
              </div>
              <div className="pending-versions">
                <span className="pending-current">
                  현재: {project.version || '-'}
                </span>
                <span className="pending-arrow">→</span>
                <span className="pending-target">
                  목표: v{latestVersion}
                </span>
              </div>
              {project.prUrl && (
                <a
                  href={project.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pending-link"
                >
                  ⏳ PR #{project.prNumber} 리뷰하기 →
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="pending-empty">
          <p>🎉 대기 중인 PR이 없습니다!</p>
          <p className="pending-empty-sub">모든 프로젝트가 최신 버전이거나 업데이트가 필요합니다.</p>
        </div>
      )}

      <div className="pending-note">
        <p>
          <span className="pending-generated">
            마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>
    </div>
  );
}
