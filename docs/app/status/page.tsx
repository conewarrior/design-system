// Status Overview Dashboard
// Changes + Adoption 요약 대시보드

import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

// ISR: 10분마다 재생성
export const revalidate = 600;

interface ChangelogData {
  generatedAt: string;
  totalChanges: number;
}

interface UpdatesData {
  generatedAt: string;
  latestVersion: string;
  adoptionRate: number;
  projects: { name: string; status: string }[];
}

async function getChangelogSummary(): Promise<ChangelogData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'changelog.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return {
      generatedAt: data.generatedAt,
      totalChanges: data.totalChanges,
    };
  } catch {
    return { generatedAt: new Date().toISOString(), totalChanges: 0 };
  }
}

async function getUpdatesSummary(): Promise<UpdatesData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'updates.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return {
      generatedAt: new Date().toISOString(),
      latestVersion: '0.0.1',
      adoptionRate: 0,
      projects: [],
    };
  }
}

export default async function StatusPage() {
  const [changelog, updates] = await Promise.all([
    getChangelogSummary(),
    getUpdatesSummary(),
  ]);

  const pendingCount = updates.projects.filter(p => p.status === 'pending').length;
  const outdatedCount = updates.projects.filter(p => p.status === 'outdated').length;

  return (
    <div className="status-page">
      <h1 className="text-page-title mb-2">Status Dashboard</h1>
      <p className="text-page-description">
        디자인 시스템 변경 이력 및 채택 현황 요약
      </p>

      <div className="status-grid">
        {/* Changes Summary */}
        <Link href="/status/changes/" className="status-card">
          <div className="status-card-header">
            <span className="status-card-icon">📋</span>
            <h2 className="status-card-title">Changes</h2>
          </div>
          <div className="status-card-value">{changelog.totalChanges}</div>
          <div className="status-card-label">총 변경 이력</div>
          <div className="status-card-links">
            <span>Components</span>
            <span>Tokens</span>
          </div>
        </Link>

        {/* Adoption Summary */}
        <Link href="/status/adoption/" className="status-card">
          <div className="status-card-header">
            <span className="status-card-icon">📊</span>
            <h2 className="status-card-title">Adoption</h2>
          </div>
          <div className="status-card-value">{updates.adoptionRate}%</div>
          <div className="status-card-label">v{updates.latestVersion} 채택률</div>
          <div className="status-card-links">
            <span>{pendingCount} PR 대기</span>
            <span>{outdatedCount} 업데이트 필요</span>
          </div>
        </Link>

        {/* Roadmap */}
        <Link href="/status/roadmap/" className="status-card">
          <div className="status-card-header">
            <span className="status-card-icon">🗺️</span>
            <h2 className="status-card-title">Roadmap</h2>
          </div>
          <div className="status-card-value">Q1 2025</div>
          <div className="status-card-label">현재 분기</div>
          <div className="status-card-links">
            <span>계획된 기능 보기</span>
          </div>
        </Link>

        {/* Migration */}
        <Link href="/status/migration/" className="status-card">
          <div className="status-card-header">
            <span className="status-card-icon">📖</span>
            <h2 className="status-card-title">Migration</h2>
          </div>
          <div className="status-card-value">Guide</div>
          <div className="status-card-label">마이그레이션 가이드</div>
          <div className="status-card-links">
            <span>버전별 가이드</span>
          </div>
        </Link>
      </div>

      <div className="status-note">
        <p>
          <span className="status-generated">
            마지막 업데이트: {new Date(updates.generatedAt).toLocaleString('ko-KR')}
          </span>
        </p>
      </div>
    </div>
  );
}
