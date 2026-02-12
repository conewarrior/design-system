// Pending PRs - PR 대기 중인 프로젝트

import { promises as fs } from 'fs';
import path from 'path';
import { ExternalLink, GitPullRequest, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/card';
import { Badge } from '@components/badge';
import { Button } from '@components/button';
import { Separator } from '@components/separator';

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
    <div className="space-y-8">
      <header>
        <h1 className="text-page-title mb-2">Pending PRs</h1>
        <p className="text-page-description">
          버전 업데이트 PR이 대기 중인 프로젝트 ({pendingProjects.length}개)
        </p>
      </header>

      <Separator />

      {pendingProjects.length > 0 ? (
        <div className="space-y-4">
          {pendingProjects.map((project) => (
            <Card key={project.name} className="shadow-none">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  {project.prUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        PR #{project.prNumber}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="font-mono">
                    {project.version || '-'}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="default" className="font-mono">
                    v{latestVersion}
                  </Badge>
                  <span className="text-sm text-muted-foreground ml-2">
                    업데이트 대기 중
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="shadow-none">
          <CardContent className="py-12 text-center">
            <GitPullRequest className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground mb-2">
              대기 중인 PR이 없습니다
            </p>
            <p className="text-sm text-muted-foreground">
              모든 프로젝트가 최신 버전이거나 업데이트가 필요합니다.
            </p>
          </CardContent>
        </Card>
      )}

      <footer className="pt-4">
        <p className="text-caption">
          마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
        </p>
      </footer>
    </div>
  );
}
