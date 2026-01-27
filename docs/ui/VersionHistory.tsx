'use client';

import { useState, ReactNode } from 'react';
import { Tabs, TabPanel } from './Tabs';
import { CodeBlock } from './CodeBlock';
import { CodeDiff } from './CodeDiff';

interface VersionData {
  version: string;
  tag: string;
  date: string;
  changes: string[];
}

interface VersionHistoryProps {
  componentName: string;
  versions: VersionData[];
  versionCodes: Record<string, string>;
  renderComponent?: (code: string, version: string) => ReactNode;
}

export function VersionHistory({
  componentName,
  versions,
  versionCodes,
  renderComponent,
}: VersionHistoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(
    versions[versions.length - 1]?.version || ''
  );
  const [viewMode, setViewMode] = useState<'code' | 'diff'>('code');

  if (versions.length === 0) {
    return null;
  }

  const selectedIndex = versions.findIndex(v => v.version === selectedVersion);
  const selectedVersionData = versions[selectedIndex];
  const currentCode = versionCodes[selectedVersion] || '';
  const previousVersion = selectedIndex > 0 ? versions[selectedIndex - 1] : null;
  const previousCode = previousVersion ? versionCodes[previousVersion.version] || '' : '';

  const tabs = versions.map(v => ({
    id: v.version,
    label: `v${v.version}`,
  }));

  return (
    <div className="version-history">
      <button
        className="version-history-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="version-history-chevron" data-open={isOpen}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M4 3L8 6L4 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Version History ({versions.length})</span>
      </button>

      {isOpen && (
        <div className="version-history-content">
          {/* 버전 탭 */}
          <Tabs
            tabs={tabs}
            activeTab={selectedVersion}
            onChange={setSelectedVersion}
          >
            {versions.map(v => (
              <TabPanel key={v.version} id={v.version}>
                <div className="version-info">
                  <span className="version-date">{v.date}</span>
                  <span className="version-tag">{v.tag}</span>
                </div>

                {/* 변경 사항 */}
                {v.changes.length > 0 && (
                  <div className="version-changes">
                    <strong>Changes:</strong>
                    <ul>
                      {v.changes.map((change, i) => (
                        <li key={i}>{change}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 컴포넌트 렌더링 (옵션) */}
                {renderComponent && (
                  <div className="version-preview">
                    <strong>Preview:</strong>
                    <div className="version-preview-box">
                      {renderComponent(versionCodes[v.version] || '', v.version)}
                    </div>
                  </div>
                )}
              </TabPanel>
            ))}
          </Tabs>

          {/* Code / Diff 토글 */}
          <div className="version-view-toggle">
            <button
              className="version-view-btn"
              data-active={viewMode === 'code'}
              onClick={() => setViewMode('code')}
            >
              Code
            </button>
            <button
              className="version-view-btn"
              data-active={viewMode === 'diff'}
              onClick={() => setViewMode('diff')}
              disabled={!previousVersion}
            >
              Diff
            </button>
          </div>

          {/* 코드 또는 Diff */}
          <div className="version-code-area">
            {viewMode === 'code' ? (
              <CodeBlock language="tsx" filename={`${componentName}/index.tsx`}>
                {currentCode}
              </CodeBlock>
            ) : previousVersion ? (
              <CodeDiff
                oldCode={previousCode}
                newCode={currentCode}
                oldLabel={`v${previousVersion.version}`}
                newLabel={`v${selectedVersion}`}
              />
            ) : (
              <p className="version-no-diff">첫 번째 버전입니다. 비교할 이전 버전이 없습니다.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
