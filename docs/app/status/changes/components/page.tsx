import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import { PageHeader } from '../../../../ui/PageHeader';
import { Badge } from '@components/badge';
import { ExternalLink } from 'lucide-react';

export const revalidate = 600;

type ChangeType = 'add' | 'modify' | 'delete' | 'token' | 'docs';

interface ChangeItem {
  id: string;
  type: ChangeType;
  title: string;
  author: string;
  date: string;
  time: string;
  files: string[];
  commitUrl: string;
}

interface DateGroup {
  date: string;
  items: ChangeItem[];
}

interface ChangelogData {
  generatedAt: string;
  totalChanges: number;
  data: DateGroup[];
}

const typeConfig: Record<ChangeType, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  add: { label: '추가', variant: 'default' },
  modify: { label: '수정', variant: 'secondary' },
  delete: { label: '삭제', variant: 'destructive' },
  token: { label: '토큰', variant: 'outline' },
  docs: { label: '문서', variant: 'outline' },
};

async function getChangelogData(): Promise<ChangelogData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'changelog.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return {
      generatedAt: new Date().toISOString(),
      totalChanges: 0,
      data: [],
    };
  }
}

function filterComponentChanges(data: DateGroup[]): DateGroup[] {
  return data
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.type === 'add' ||
          item.type === 'modify' ||
          item.type === 'delete' ||
          item.files.some((f) => f.includes('components/'))
      ),
    }))
    .filter((group) => group.items.length > 0);
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateStr === today.toISOString().split('T')[0]) return '오늘';
  if (dateStr === yesterday.toISOString().split('T')[0]) return '어제';

  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ComponentsChangesPage() {
  const changelog = await getChangelogData();
  const filteredData = filterComponentChanges(changelog.data);
  const totalFiltered = filteredData.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Components Changes"
        description={`컴포넌트 변경 이력만 표시 (${totalFiltered}개)`}
      >
        <div className="flex flex-wrap gap-2">
          {['add', 'modify', 'delete'].map((type) => {
            const config = typeConfig[type as ChangeType];
            return (
              <Badge key={type} variant={config.variant}>
                {config.label}
              </Badge>
            );
          })}
        </div>
      </PageHeader>

      {filteredData.length > 0 ? (
        <div className="space-y-8">
          {filteredData.map((group) => (
            <section key={group.date} className="space-y-4">
              <h2 className="text-card-title text-muted-foreground sticky top-14 bg-background py-2 -mx-2 px-2">
                {formatDate(group.date)}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const config = typeConfig[item.type];
                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 rounded-md border p-4"
                    >
                      <Badge variant={config.variant} className="shrink-0">
                        {config.label}
                      </Badge>
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-body-sm flex flex-wrap gap-x-3 gap-y-1">
                          <span>@{item.author}</span>
                          <span>{item.time}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.files.map((file) => (
                            <Badge key={file} variant="secondary" className="text-code">
                              {file}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={item.commitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed p-8 text-center text-muted-foreground">
          컴포넌트 변경 이력이 없습니다.
        </div>
      )}

      <div className="rounded-md bg-muted/50 p-4 text-body-sm">
        마지막 업데이트: {new Date(changelog.generatedAt).toLocaleString('ko-KR')}
      </div>

    </div>
  );
}
