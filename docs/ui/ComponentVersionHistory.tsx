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

  return (
    <VersionHistory
      componentName={componentName}
      versions={componentData.versions}
      versionCodes={versionCodes}
    />
  );
}
