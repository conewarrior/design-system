# Version Adoption Dashboard - Design Document

- **Feature**: update-dashboard
- **Created**: 2026-01-21
- **Status**: 📐 Design
- **Plan**: [update-dashboard.plan.md](../../01-plan/features/update-dashboard.plan.md)

---

## 1. 개요

`/updates` 페이지에서 조직 내 프로젝트들의 @design-geniefy/ui 버전 채택 현황을 시각화한다.

---

## 2. 페이지 구조

```
/updates
├── LatestVersion      # 최신 버전 배지
├── VersionChart       # 버전 분포 바 차트
└── ProjectList        # 프로젝트별 상태 목록
```

---

## 3. 컴포넌트 설계

### 3.1 LatestVersion

```tsx
interface LatestVersionProps {
  version: string;
  publishedAt: string;
}
```

### 3.2 VersionChart

```tsx
interface VersionChartProps {
  data: {
    version: string;
    count: number;
    percentage: number;
  }[];
}
```

### 3.3 ProjectList

```tsx
interface Project {
  name: string;
  version: string;
  status: 'latest' | 'pending' | 'outdated' | 'failed';
  prUrl?: string;
}
```

---

## 4. 데이터 (MVP: 하드코딩)

Phase 1에서는 샘플 데이터를 사용하고, Phase 2에서 GitHub API 연동.

```typescript
const sampleData = {
  latestVersion: '0.0.3',
  projects: [
    { name: 'edu-platform', version: '0.0.3', status: 'latest' },
    { name: 'admin-dashboard', version: '0.0.2', status: 'pending', prUrl: '#' },
  ],
};
```

---

## 5. 스타일

tokens.css 변수 사용:
- 배경: `var(--color-secondary)`
- 텍스트: `var(--color-foreground)`
- 성공: `var(--color-success)` 또는 녹색 계열
- 경고: `var(--color-warning)` 또는 노란 계열
