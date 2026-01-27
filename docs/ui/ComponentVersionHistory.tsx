'use client';

import { VersionHistory } from './VersionHistory';
import componentVersionsData from '../data/component-versions.json';
import versionCodesData from '../data/version-codes.json';

interface ComponentVersionHistoryProps {
  componentName: string;
}

export function ComponentVersionHistory({ componentName }: ComponentVersionHistoryProps) {
  const componentData = (componentVersionsData.data as Record<string, { versions: Array<{ version: string; tag: string; date: string; changes: string[] }> }>)[componentName];
  const versionCodes = (versionCodesData.data as Record<string, Record<string, string>>)[componentName] || {};

  if (!componentData || componentData.versions.length === 0) {
    return null;
  }

  // 실제 코드 변경이 있는 버전만 필터링
  const versionsWithChanges = componentData.versions.filter((v, index) => {
    // 첫 번째 버전은 항상 포함
    if (index === 0) return true;

    // 이전 버전과 코드가 다른 경우만 포함
    const prevVersion = componentData.versions[index - 1];
    const currentCode = versionCodes[v.version] || '';
    const prevCode = versionCodes[prevVersion.version] || '';

    return currentCode !== prevCode;
  });

  // 변경된 버전이 1개 이하면 (초기 버전만 있으면) 표시하지 않음
  if (versionsWithChanges.length <= 1) {
    return null;
  }

  return (
    <VersionHistory
      componentName={componentName}
      versions={versionsWithChanges}
      versionCodes={versionCodes}
    />
  );
}
