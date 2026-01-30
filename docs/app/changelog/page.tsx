// Component Changelog
// Git 로그 기반 컴포넌트 변경 이력

import { promises as fs } from 'fs';
import path from 'path';

// ISR: 10분마다 재생성
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

// 데이터 로드 함수
async function getChangelogData(): Promise<ChangelogData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'changelog.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // 파일이 없으면 빈 데이터 반환
    console.error('Changelog 데이터 로드 실패:', error);
    return {
      generatedAt: new Date().toISOString(),
      totalChanges: 0,
      data: [],
    };
  }
}

function ChangeItemCard({ item }: { item: ChangeItem }) {
  const config = typeConfig[item.type];

  return (
    <div className="rounded-lg border bg-card p-4 space-y-2">
      <div className="text-2xl">{config.icon}</div>
      <div className="flex-1">
        <div className="font-semibold">{item.title}</div>
        <div className="text-sm text-muted-foreground flex gap-2">
          <span className="changelog-author">@{item.author}</span>
          <span className="changelog-time">{item.time}</span>
        </div>
        <div className="changelog-files">
          {item.files.map((file) => (
            <code key={file} className="bg-muted px-2 py-1 rounded text-xs font-mono">
              {file}
            </code>
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
    </div>
  );
}

function DateGroupSection({ group }: { group: DateGroup }) {
  // 날짜 포맷팅
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

export default async function ChangelogPage() {
  const changelog = await getChangelogData();
  const { totalChanges, data: changelogData, generatedAt } = changelog;

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">변경 로그</h1>
      <p className="text-lg text-muted-foreground">
        컴포넌트 및 토큰 변경 이력 ({totalChanges}개)
      </p>

      <div className="changelog-legend">
        {Object.entries(typeConfig).map(([type, config]) => (
          <span key={type} className="legend-item">
            {config.icon} {config.label}
          </span>
        ))}
      </div>

      {changelogData.length > 0 ? (
        <div className="changelog-list">
          {changelogData.map((group) => (
            <DateGroupSection key={group.date} group={group} />
          ))}
        </div>
      ) : (
        <div className="changelog-empty">
          <p>변경 이력이 없습니다.</p>
        </div>
      )}

      <div className="changelog-note">
        <p>
          <strong>자동 생성:</strong> Git 커밋 로그에서 추출된 데이터입니다.
          <br />
          <span className="changelog-generated">
            마지막 업데이트: {new Date(generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>
    </div>
  );
}
