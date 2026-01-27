// Adoption Dashboard
// GitHub API 기반 조직 내 프로젝트들의 @design-geniefy/ui 버전 채택 현황 (기존 updates에서 이전)

import { promises as fs } from 'fs';
import path from 'path';

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
      publishedAt: new Date().toISOString().split('T')[0],
      adoptionRate: 0,
      versionData: [],
      projects: [],
    };
  }
}

function VersionChart({ data }: { data: VersionData[] }) {
  if (data.length === 0) {
    return (
      <div className="version-chart">
        <h3 className="chart-title">버전 분포</h3>
        <p className="chart-empty">버전 데이터가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="version-chart">
      <h3 className="chart-title">버전 분포</h3>
      <div className="chart-bars">
        {data.map((item) => (
          <div key={item.version} className="chart-row">
            <span className="chart-version">{item.version}</span>
            <div className="chart-bar-container">
              <div
                className="chart-bar"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="chart-percentage">{item.percentage}%</span>
            <span className="chart-count">({item.count}개)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-list">
      <h3 className="list-title">프로젝트 현황</h3>
      <div className="list-header">
        <span>프로젝트</span>
        <span>버전</span>
        <span>상태</span>
      </div>
      <div className="list-items">
        {projects.map((project) => {
          const config = statusConfig[project.status];
          return (
            <div key={project.name} className="list-item">
              <div className="project-info">
                <span className="project-name">{project.name}</span>
                <span className="project-description">{project.description}</span>
              </div>
              <span className="project-version">
                {project.version || '-'}
              </span>
              <span className="project-status" style={{ color: config.color }}>
                {config.icon} {config.label}
                {project.status === 'pending' && project.prNumber && (
                  <a
                    href={project.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-link"
                  >
                    {' '}(#{project.prNumber})
                  </a>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
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
    <div className="updates-page">
      <h1 className="page-title">Adoption Dashboard</h1>
      <p className="page-description">
        조직 내 프로젝트들의 @design-geniefy/ui 버전 현황
      </p>

      {error && (
        <div className="updates-error">
          <p>⚠️ 데이터 로드 중 오류 발생: {error}</p>
        </div>
      )}

      <div className="latest-version-card">
        <div className="latest-info">
          <span className="latest-label">최신 버전</span>
          <span className="latest-value">v{latestVersion}</span>
        </div>
        <div className="latest-meta">
          <span>배포일: {publishedAt}</span>
          <span className="adoption-rate">
            채택률: {adoptionRate}% ({installedCount}/{totalCount} 프로젝트)
          </span>
        </div>
      </div>

      <VersionChart data={versionData} />
      <ProjectList projects={projects} />

      <div className="updates-note">
        <p>
          <strong>자동 생성:</strong> GitHub API에서 조회된 데이터입니다.
          <br />
          <span className="updates-generated">
            마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>

      <div className="optin-section">
        <h3>프로젝트 등록 (Opt-in)</h3>
        <p>
          패키지 설치 시 자동으로 채택 현황을 보고하려면 다음 중 하나를 설정하세요:
        </p>
        <div className="optin-methods">
          <div className="optin-method">
            <strong>1. 환경변수</strong>
            <code>DESIGN_SYSTEM_REPORT=true npm install</code>
          </div>
          <div className="optin-method">
            <strong>2. .designrc 파일</strong>
            <code>{`{ "report": true }`}</code>
          </div>
          <div className="optin-method">
            <strong>3. package.json</strong>
            <code>{`"designSystem": { "report": true }`}</code>
          </div>
        </div>
        <p className="optin-note">
          보고되는 정보: 프로젝트명, 저장소 URL, 설치된 버전
        </p>
      </div>
    </div>
  );
}
