# Navigation Restructure Design

## 1. 개요

문서 사이트 네비게이션을 탑바 + 섹션별 사이드바 구조로 변경.

**관련 Plan**: [navigation-restructure.plan.md](../../01-plan/features/navigation-restructure.plan.md)

## 2. 컴포넌트 설계

### 2.1 TopNav

```tsx
// ui/TopNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Section = 'docs' | 'status';

interface TopNavProps {
  currentSection: Section;
}

const sections = [
  { id: 'docs', label: 'Docs', href: '/' },
  { id: 'status', label: 'Status', href: '/status/' },
] as const;

export function TopNav({ currentSection }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="top-nav-logo">
        <Link href="/">@design-geniefy/ui</Link>
      </div>
      <nav className="top-nav-menu">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className={`top-nav-link ${currentSection === section.id ? 'active' : ''}`}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
```

### 2.2 Sidebar

```tsx
// ui/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Section = 'docs' | 'status';

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  title: string;
  links: NavLink[];
}

// Docs 네비게이션
const docsNavigation: NavGroup[] = [
  {
    title: 'Getting Started',
    links: [
      { href: '/', label: 'Introduction' },
      { href: '/install/', label: 'Install' },
    ],
  },
  {
    title: 'Foundations',
    links: [
      { href: '/tokens/', label: 'Design Tokens' },
    ],
  },
  {
    title: 'Components',
    links: [
      { href: '/components/', label: 'Overview' },
      { href: '/components/button/', label: 'Button' },
      { href: '/components/input/', label: 'Input' },
    ],
  },
];

// Status 네비게이션
const statusNavigation: NavGroup[] = [
  {
    title: 'Overview',
    links: [
      { href: '/status/', label: 'Dashboard' },
    ],
  },
  {
    title: 'Changes',
    links: [
      { href: '/status/changes/', label: 'All Changes' },
      { href: '/status/changes/components/', label: 'Components' },
      { href: '/status/changes/tokens/', label: 'Tokens' },
    ],
  },
  {
    title: 'Adoption',
    links: [
      { href: '/status/adoption/', label: 'Dashboard' },
      { href: '/status/adoption/projects/', label: 'By Project' },
      { href: '/status/adoption/pending/', label: 'Pending PRs' },
    ],
  },
  {
    title: 'Planning',
    links: [
      { href: '/status/roadmap/', label: 'Roadmap' },
      { href: '/status/migration/', label: 'Migration Guide' },
    ],
  },
];

interface SidebarProps {
  section: Section;
}

export function Sidebar({ section }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = section === 'docs' ? docsNavigation : statusNavigation;

  return (
    <>
      {/* Mobile Toggle (TopNav에서 제어) */}

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        {navigation.map((group) => (
          <div key={group.title} className="sidebar-section">
            <div className="sidebar-section-title">{group.title}</div>
            <nav className="sidebar-nav">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sidebar-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </aside>
    </>
  );
}
```

### 2.3 Layout

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { TopNav } from '../ui/TopNav';
import { Sidebar } from '../ui/Sidebar';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '@design-geniefy/ui - Design System',
  description: 'Design tokens and React components for Geniefy products',
};

// pathname으로 섹션 판별
function getSection(pathname: string): 'docs' | 'status' {
  if (pathname.startsWith('/status')) {
    return 'status';
  }
  return 'docs';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Note: 서버 컴포넌트에서는 pathname 직접 접근 불가
  // 클라이언트 래퍼 필요
  return (
    <html lang="ko">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
```

### 2.4 LayoutClient (클라이언트 래퍼)

```tsx
// ui/LayoutClient.tsx
'use client';

import { usePathname } from 'next/navigation';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

function getSection(pathname: string): 'docs' | 'status' {
  if (pathname.startsWith('/status')) {
    return 'status';
  }
  return 'docs';
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = getSection(pathname);

  return (
    <div className="layout">
      <TopNav currentSection={section} />
      <div className="layout-body">
        <Sidebar section={section} />
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
```

## 3. 라우트 구조

### 3.1 파일 구조

```
app/
├── layout.tsx                    # 루트 레이아웃
├── page.tsx                      # / (Introduction)
├── install/page.tsx              # /install
├── tokens/page.tsx               # /tokens
├── components/
│   ├── page.tsx                  # /components
│   ├── button/page.tsx           # /components/button
│   └── input/page.tsx            # /components/input
└── status/
    ├── page.tsx                  # /status (Overview Dashboard)
    ├── changes/
    │   ├── page.tsx              # /status/changes (All)
    │   ├── components/page.tsx   # /status/changes/components
    │   └── tokens/page.tsx       # /status/changes/tokens
    ├── adoption/
    │   ├── page.tsx              # /status/adoption (Dashboard)
    │   ├── projects/page.tsx     # /status/adoption/projects
    │   └── pending/page.tsx      # /status/adoption/pending
    ├── roadmap/page.tsx          # /status/roadmap
    └── migration/page.tsx        # /status/migration
```

### 3.2 페이지 이동 매핑

| 현재 경로 | 새 경로 | 비고 |
|----------|---------|------|
| `/changelog/` | `/status/changes/` | 리다이렉트 필요 |
| `/updates/` | `/status/adoption/` | 리다이렉트 필요 |

## 4. 스타일 설계

### 4.1 TopNav 스타일

```css
/* TopNav */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-4);
  z-index: var(--z-index-sticky);
}

.top-nav-logo a {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-foreground);
  text-decoration: none;
}

.top-nav-menu {
  display: flex;
  gap: var(--spacing-1);
}

.top-nav-link {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-muted);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all 0.15s ease;
}

.top-nav-link:hover {
  color: var(--color-foreground);
  background: var(--color-secondary);
}

.top-nav-link.active {
  color: var(--color-primary);
  background: var(--color-primary-light, rgba(234, 88, 12, 0.1));
}
```

### 4.2 Layout 조정

```css
/* Layout */
.layout {
  min-height: 100vh;
}

.layout-body {
  display: flex;
  padding-top: 56px; /* TopNav 높이 */
}

/* Sidebar 위치 조정 */
.sidebar {
  position: fixed;
  top: 56px; /* TopNav 아래 */
  left: 0;
  bottom: 0;
  width: 260px;
  /* ... 기존 스타일 유지 */
}

/* Main 영역 조정 */
.main {
  margin-left: 260px;
  margin-top: 0; /* padding-top으로 대체됨 */
  /* ... 기존 스타일 유지 */
}
```

### 4.3 모바일 반응형

```css
@media (max-width: 768px) {
  /* TopNav 모바일 */
  .top-nav {
    padding: 0 var(--spacing-3);
  }

  .top-nav-menu {
    /* 햄버거 메뉴로 전환 또는 숨김 */
  }

  /* 기존 모바일 헤더와 통합 필요 */
  .mobile-header {
    display: none; /* TopNav로 대체 */
  }

  /* Sidebar */
  .sidebar {
    top: 56px;
  }

  /* Main */
  .main {
    margin-top: 0;
  }
}
```

## 5. 상태 관리

### 5.1 현재 섹션 판별

```tsx
// utils/navigation.ts
export type Section = 'docs' | 'status';

export function getSection(pathname: string): Section {
  if (pathname.startsWith('/status')) {
    return 'status';
  }
  return 'docs';
}

export function isActiveLink(pathname: string, href: string): boolean {
  // 정확히 일치하거나
  if (pathname === href) return true;
  // trailing slash 처리
  if (pathname === href.replace(/\/$/, '')) return true;
  if (pathname + '/' === href) return true;
  return false;
}
```

### 5.2 모바일 메뉴 상태

```tsx
// MobileNav에서 관리
const [isOpen, setIsOpen] = useState(false);

// 페이지 이동 시 자동 닫기
useEffect(() => {
  setIsOpen(false);
}, [pathname]);
```

## 6. 데이터 흐름

### 6.1 Changes 필터 페이지

```tsx
// status/changes/components/page.tsx
// 기존 changelog 데이터에서 type === 'add' || type === 'modify' 필터

async function getComponentChanges() {
  const data = await getChangelogData();
  return {
    ...data,
    data: data.data.map(group => ({
      ...group,
      items: group.items.filter(item =>
        item.type === 'add' || item.type === 'modify'
      )
    })).filter(group => group.items.length > 0)
  };
}
```

### 6.2 Adoption 세부 페이지

```tsx
// status/adoption/projects/page.tsx
// 기존 updates 데이터를 다른 뷰로 표시

// status/adoption/pending/page.tsx
// projects에서 status === 'pending' 필터
async function getPendingProjects() {
  const data = await getUpdatesData();
  return {
    ...data,
    projects: data.projects.filter(p => p.status === 'pending')
  };
}
```

## 7. 마이그레이션

### 7.1 next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/changelog',
        destination: '/status/changes',
        permanent: true,
      },
      {
        source: '/changelog/',
        destination: '/status/changes/',
        permanent: true,
      },
      {
        source: '/updates',
        destination: '/status/adoption',
        permanent: true,
      },
      {
        source: '/updates/',
        destination: '/status/adoption/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

## 8. 구현 순서

### Phase 1: 구조 변경
1. `ui/TopNav.tsx` 생성
2. `ui/LayoutClient.tsx` 생성
3. `ui/Sidebar.tsx` 수정 (section prop 추가)
4. `app/layout.tsx` 수정
5. `styles/globals.css` TopNav 스타일 추가
6. 기존 페이지 동작 확인

### Phase 2: 라우트 이동
1. `app/status/` 폴더 구조 생성
2. 기존 changelog → `status/changes/` 이동
3. 기존 updates → `status/adoption/` 이동
4. `next.config.js` 리다이렉트 추가

### Phase 3: 신규 페이지
1. `/status/` Overview 페이지
2. `/status/changes/components/` 페이지
3. `/status/changes/tokens/` 페이지
4. `/status/adoption/projects/` 페이지
5. `/status/adoption/pending/` 페이지
6. `/status/roadmap/` 페이지 (placeholder)
7. `/status/migration/` 페이지 (placeholder)

## 9. 검증 체크리스트

- [ ] TopNav 렌더링 및 섹션 하이라이트
- [ ] Docs ↔ Status 전환 시 사이드바 변경
- [ ] 모든 링크 정상 동작
- [ ] 리다이렉트 동작 (/changelog → /status/changes)
- [ ] 모바일 반응형
- [ ] 브라우저 뒤로가기/앞으로가기

---

*Created: 2026-01-21*
*Status: 📐 Design*
