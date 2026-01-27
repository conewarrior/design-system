'use client';

interface DiffLine {
  type: 'added' | 'removed' | 'unchanged';
  content: string;
  lineNumber?: number;
}

interface CodeDiffProps {
  oldCode: string;
  newCode: string;
  oldLabel?: string;
  newLabel?: string;
}

/**
 * 두 코드 간의 diff 계산 (간단한 라인 비교)
 */
function computeDiff(oldCode: string, newCode: string): DiffLine[] {
  const oldLines = oldCode.split('\n');
  const newLines = newCode.split('\n');
  const result: DiffLine[] = [];

  // 간단한 LCS 기반 diff
  const oldSet = new Set(oldLines);
  const newSet = new Set(newLines);

  let oldIdx = 0;
  let newIdx = 0;

  while (oldIdx < oldLines.length || newIdx < newLines.length) {
    const oldLine = oldLines[oldIdx];
    const newLine = newLines[newIdx];

    if (oldIdx >= oldLines.length) {
      // 새 코드에만 있음
      result.push({ type: 'added', content: newLine, lineNumber: newIdx + 1 });
      newIdx++;
    } else if (newIdx >= newLines.length) {
      // 이전 코드에만 있음
      result.push({ type: 'removed', content: oldLine, lineNumber: oldIdx + 1 });
      oldIdx++;
    } else if (oldLine === newLine) {
      // 동일
      result.push({ type: 'unchanged', content: oldLine, lineNumber: newIdx + 1 });
      oldIdx++;
      newIdx++;
    } else if (!newSet.has(oldLine)) {
      // 삭제된 라인
      result.push({ type: 'removed', content: oldLine, lineNumber: oldIdx + 1 });
      oldIdx++;
    } else if (!oldSet.has(newLine)) {
      // 추가된 라인
      result.push({ type: 'added', content: newLine, lineNumber: newIdx + 1 });
      newIdx++;
    } else {
      // 변경된 라인 (삭제 후 추가로 처리)
      result.push({ type: 'removed', content: oldLine, lineNumber: oldIdx + 1 });
      result.push({ type: 'added', content: newLine, lineNumber: newIdx + 1 });
      oldIdx++;
      newIdx++;
    }
  }

  return result;
}

export function CodeDiff({ oldCode, newCode, oldLabel, newLabel }: CodeDiffProps) {
  const diffLines = computeDiff(oldCode, newCode);

  // 변경점이 없으면
  const hasChanges = diffLines.some(line => line.type !== 'unchanged');

  if (!hasChanges) {
    return (
      <div className="code-diff code-diff--no-changes">
        <p>변경 사항 없음</p>
      </div>
    );
  }

  return (
    <div className="code-diff">
      {(oldLabel || newLabel) && (
        <div className="code-diff-header">
          {oldLabel && <span className="code-diff-label code-diff-label--old">{oldLabel}</span>}
          {newLabel && <span className="code-diff-label code-diff-label--new">{newLabel}</span>}
        </div>
      )}
      <pre className="code-diff-content">
        {diffLines.map((line, index) => (
          <div
            key={index}
            className={`code-diff-line code-diff-line--${line.type}`}
          >
            <span className="code-diff-prefix">
              {line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}
            </span>
            <code>{line.content || ' '}</code>
          </div>
        ))}
      </pre>
    </div>
  );
}
