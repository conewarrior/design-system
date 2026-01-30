// Adoption Dashboard
// GitHub API 기반 조직 내 프로젝트들의 @design-geniefy/ui 버전 채택 현황

import { promises as fs } from 'fs';
import path from 'path';
import { PageHeader } from '../../../ui/PageHeader';
import { PageNav } from '../../../ui/PageNav';
import { VersionChart } from '../../../ui/VersionChart';
import { ProjectList, type Project } from '../../../ui/ProjectList';
import { Badge } from '@components/badge';

export const revalidate = 600;

interface VersionData {
  version: string;
  count: number;
  percentage: number;
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

      <VersionChart data={versionData} />
      <ProjectList projects={projects} />

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

      <PageNav
        prev={{ href: '/status/changes/tokens/', title: 'Token Changes' }}
        next={{ href: '/status/adoption/projects/', title: 'By Project' }}
      />
    </div>
  );
}
