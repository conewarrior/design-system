// Tokens Changes
// 토큰 관련 변경만 필터링

import { promises as fs } from 'fs';
import path from 'path';
import { Card, CardContent } from '@components/card';
import { Badge } from '@components/badge';

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

const typeConfig: Record<ChangeType, { icon: string; label: string }> = {
  add: { icon: '🆕', label: '추가' },
  modify: { icon: '✏️', label: '수정' },
  delete: { icon: '🗑️', label: '삭제' },
  token: { icon: '🎨', label: '토큰' },
  docs: { icon: '📝', label: '문서' },
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

// 토큰 관련 변경만 필터링
function filterTokenChanges(data: DateGroup[]): DateGroup[] {
  return data
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.type === 'token' ||
          item.files.some((f) => f.includes('tokens'))
      ),
    }))
    .filter((group) => group.items.length > 0);
}

function ChangeItemCard({ item }: { item: ChangeItem }) {
  const config = typeConfig[item.type];

  return (
    <Card className="py-3">
      <CardContent className="space-y-2">
        <div className="text-2xl">{config.icon}</div>
        <div className="flex-1">
          <div className="font-semibold">{item.title}</div>
          <div className="text-sm text-muted-foreground flex gap-2">
            <span className="changelog-author">@{item.author}</span>
            <span className="changelog-time">{item.time}</span>
          </div>
          <div className="changelog-files flex flex-wrap gap-1 mt-2">
            {item.files.map((file) => (
              <Badge key={file} variant="secondary" className="font-mono text-xs">
                {file}
              </Badge>
            ))}
          </div>
          <a
            href={item.commitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="changelog-link"
          >
            커밋 보기 →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function DateGroupSection({ group }: { group: DateGroup }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateStr === today.toISOString().split('T')[0]) {
      return '오늘';
    }
    if (dateStr === yesterday.toISOString().split('T')[0]) {
      return '어제';
    }

    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold text-muted-foreground">{formatDate(group.date)}</div>
      <div className="space-y-3">
        {group.items.map((item) => (
          <ChangeItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default async function TokensChangesPage() {
  const changelog = await getChangelogData();
  const filteredData = filterTokenChanges(changelog.data);
  const totalFiltered = filteredData.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="space-y-12">
      <h1 className="text-page-title mb-2">Tokens Changes</h1>
      <p className="text-page-description">
        디자인 토큰 변경 이력 ({totalFiltered}개)
      </p>

      <div className="changelog-legend">
        <span className="legend-item">
          {typeConfig.token.icon} {typeConfig.token.label}
        </span>
      </div>

      {filteredData.length > 0 ? (
        <div className="changelog-list">
          {filteredData.map((group) => (
            <DateGroupSection key={group.date} group={group} />
          ))}
        </div>
      ) : (
        <div className="changelog-empty">
          <p>토큰 변경 이력이 없습니다.</p>
        </div>
      )}

      <div className="changelog-note">
        <p>
          <span className="changelog-generated">
            마지막 업데이트: {new Date(changelog.generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>
    </div>
  );
}
