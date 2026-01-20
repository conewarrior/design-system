# Install Page - Design Document

- **Feature**: install-page
- **Created**: 2026-01-20
- **Status**: 📐 Design
- **Plan**: [install-page.plan.md](../../01-plan/features/install-page.plan.md)

---

## 1. 개요

`/install` 페이지의 UI/UX 상세 설계. 3가지 설치 방법(npm, CDN, Claude Command)을 탭으로 구분하고, 단계별 가이드를 제공한다.

---

## 2. 페이지 레이아웃

```
┌─────────────────────────────────────────────────────────┐
│ Sidebar │                 Main Content                  │
│         │                                               │
│ 시작하기 │  ┌─────────────────────────────────────────┐ │
│ > 설치   │  │           설치 가이드                    │ │
│   토큰   │  │  3가지 방법으로 시작하세요               │ │
│   컴포넌트│  └─────────────────────────────────────────┘ │
│          │                                               │
│          │  ┌──────┬──────┬──────────────┐              │
│          │  │ npm  │ CDN  │ Claude Code  │              │
│          │  └──────┴──────┴──────────────┘              │
│          │  ┌─────────────────────────────────────────┐ │
│          │  │                                         │ │
│          │  │  Step 1: ...                            │ │
│          │  │  ┌─────────────────────────┐            │ │
│          │  │  │ code block        [복사] │            │ │
│          │  │  └─────────────────────────┘            │ │
│          │  │                                         │ │
│          │  │  Step 2: ...                            │ │
│          │  │  ...                                    │ │
│          │  │                                         │ │
│          │  └─────────────────────────────────────────┘ │
│          │                                               │
│          │  ┌─────────────────────────────────────────┐ │
│          │  │  설치 확인                               │ │
│          │  │  ☐ 컴포넌트 import 성공                  │ │
│          │  │  ☐ 토큰 CSS 적용됨                       │ │
│          │  └─────────────────────────────────────────┘ │
│          │                                               │
│          │  ┌─────────────────────────────────────────┐ │
│          │  │  자동 업데이트                           │ │
│          │  │  Dependabot으로 자동 업데이트...         │ │
│          │  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 3. 컴포넌트 설계

### 3.1 Tabs 컴포넌트

```tsx
// docs/ui/Tabs.tsx

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    icon?: string;
  }[];
  activeTab: string;
  onChange: (tabId: string) => void;
  children: React.ReactNode;
}

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
}
```

**스타일:**
```css
.tabs-list {
  display: flex;
  gap: var(--spacing-1);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-3);
}

.tab-trigger {
  padding: var(--spacing-2) var(--spacing-3);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--color-muted);
  cursor: pointer;
  font-weight: 500;
}

.tab-trigger[data-active="true"] {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-trigger:hover {
  color: var(--color-foreground);
}
```

**인터랙션:**
- 클릭 시 탭 전환
- 키보드: 좌/우 화살표로 이동, Enter로 선택
- URL hash로 상태 유지 (`/install#cdn`)

---

### 3.2 CodeBlock 컴포넌트

```tsx
// docs/ui/CodeBlock.tsx

interface CodeBlockProps {
  children: string;
  language?: 'bash' | 'tsx' | 'html' | 'css' | 'json';
  filename?: string;
  showLineNumbers?: boolean;
}
```

**레이아웃:**
```
┌─────────────────────────────────────────┐
│ app/layout.tsx                    [복사] │  ← 헤더 (선택)
├─────────────────────────────────────────┤
│ 1  import '@geniefy/ui/tokens.css';     │
│ 2                                       │
│ 3  export default function Layout() {   │
│ 4    return <html>...</html>;           │
│ 5  }                                    │
└─────────────────────────────────────────┘
```

**스타일:**
```css
.code-block {
  background: var(--color-secondary);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.code-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-2);
  background: var(--color-muted-background);
  border-bottom: 1px solid var(--color-border);
}

.code-block-filename {
  font-size: 0.875rem;
  color: var(--color-muted);
}

.code-block-copy {
  padding: var(--spacing-1);
  background: transparent;
  border: none;
  color: var(--color-muted);
  cursor: pointer;
}

.code-block-copy:hover {
  color: var(--color-foreground);
}

.code-block-copy[data-copied="true"] {
  color: var(--color-success);
}

.code-block pre {
  padding: var(--spacing-2);
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}
```

**복사 기능:**
```tsx
const handleCopy = async () => {
  await navigator.clipboard.writeText(code);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
```

---

### 3.3 Step 컴포넌트

```tsx
// docs/ui/Step.tsx

interface StepProps {
  number: number;
  title: string;
  description?: string;
  children: React.ReactNode;  // CodeBlock 등
}
```

**레이아웃:**
```
┌─────────────────────────────────────────┐
│  ①  패키지 설치                          │
│                                         │
│      npm을 사용하여 설치합니다.           │
│                                         │
│      ┌─────────────────────────────┐    │
│      │ npm install @geniefy/ui     │    │
│      └─────────────────────────────┘    │
└─────────────────────────────────────────┘
```

**스타일:**
```css
.step {
  display: flex;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.step-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border-radius: var(--radius-full);
  font-weight: 600;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-1);
}

.step-description {
  color: var(--color-muted);
  margin-bottom: var(--spacing-2);
}
```

---

### 3.4 Checklist 컴포넌트

```tsx
// docs/ui/Checklist.tsx

interface ChecklistProps {
  items: {
    id: string;
    label: string;
  }[];
  storageKey?: string;  // localStorage 키
}
```

**레이아웃:**
```
┌─────────────────────────────────────────┐
│  설치 확인                               │
│                                         │
│  ☑ 컴포넌트 import 성공                  │
│  ☐ 토큰 CSS 적용됨                       │
│  ☐ 버튼 렌더링 확인                      │
└─────────────────────────────────────────┘
```

**스타일:**
```css
.checklist {
  background: var(--color-secondary);
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
}

.checklist-title {
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-1) 0;
}

.checklist-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-primary);
}

.checklist-item[data-checked="true"] label {
  color: var(--color-muted);
  text-decoration: line-through;
}
```

---

## 4. 페이지 구현

### 4.1 파일 구조

```
docs/
├── app/
│   └── install/
│       └── page.tsx      # 메인 페이지
├── ui/
│   ├── Tabs.tsx          # 탭 컴포넌트
│   ├── CodeBlock.tsx     # 코드 블록
│   ├── Step.tsx          # 단계 컴포넌트
│   └── Checklist.tsx     # 체크리스트
└── styles/
    └── globals.css       # 스타일 추가
```

### 4.2 페이지 코드 구조

```tsx
// docs/app/install/page.tsx

'use client';

import { useState } from 'react';
import { Tabs, TabPanel } from '../../ui/Tabs';
import { CodeBlock } from '../../ui/CodeBlock';
import { Step } from '../../ui/Step';
import { Checklist } from '../../ui/Checklist';

const tabs = [
  { id: 'npm', label: 'npm', icon: '📦' },
  { id: 'cdn', label: 'CDN', icon: '🌐' },
  { id: 'claude', label: 'Claude Code', icon: '🤖' },
];

export default function InstallPage() {
  const [activeTab, setActiveTab] = useState('npm');

  return (
    <div>
      {/* Hero */}
      <h1 className="page-title">설치 가이드</h1>
      <p className="page-description">3가지 방법으로 시작하세요</p>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab}>
        <TabPanel id="npm">
          <NpmGuide />
        </TabPanel>
        <TabPanel id="cdn">
          <CdnGuide />
        </TabPanel>
        <TabPanel id="claude">
          <ClaudeGuide />
        </TabPanel>
      </Tabs>

      {/* Checklist */}
      <Checklist
        title="설치 확인"
        items={[
          { id: 'import', label: '컴포넌트 import 성공' },
          { id: 'tokens', label: '토큰 CSS 적용됨' },
          { id: 'render', label: '버튼 렌더링 확인' },
        ]}
        storageKey="install-checklist"
      />

      {/* Auto Update */}
      <AutoUpdateSection />
    </div>
  );
}
```

---

## 5. 사이드바 업데이트

```tsx
// docs/ui/Sidebar.tsx 수정

const navigation = [
  {
    title: '시작하기',
    items: [
      { name: '소개', href: '/' },
      { name: '설치', href: '/install' },  // 추가
    ],
  },
  {
    title: '기초',
    items: [
      { name: '토큰', href: '/tokens' },
    ],
  },
  // ...
];
```

---

## 6. 반응형 디자인

### 6.1 모바일 (< 768px)

```css
@media (max-width: 768px) {
  /* 탭 → 세로 버튼 */
  .tabs-list {
    flex-direction: column;
  }

  .tab-trigger {
    width: 100%;
    text-align: left;
    border-bottom: none;
    border-left: 2px solid transparent;
  }

  .tab-trigger[data-active="true"] {
    border-left-color: var(--color-primary);
    background: var(--color-secondary);
  }

  /* Step 번호 작게 */
  .step-number {
    width: 24px;
    height: 24px;
    font-size: 0.875rem;
  }
}
```

---

## 7. 접근성

| 요소 | 구현 |
|------|------|
| 탭 | `role="tablist"`, `aria-selected`, 키보드 탐색 |
| 코드 블록 | 복사 버튼 `aria-label="코드 복사"` |
| 체크박스 | `<label>` 연결, 포커스 스타일 |

---

## 8. 구현 순서

1. **ui/CodeBlock.tsx** - 복사 버튼 포함
2. **ui/Tabs.tsx** - 탭 전환
3. **ui/Step.tsx** - 단계별 가이드
4. **ui/Checklist.tsx** - 체크리스트
5. **app/install/page.tsx** - 페이지 조합
6. **ui/Sidebar.tsx** - 네비게이션 추가
7. **styles/globals.css** - 스타일 추가

---

## 9. 검증 체크리스트

- [ ] 탭 전환 동작
- [ ] URL hash 유지 (`/install#cdn`)
- [ ] 코드 복사 버튼 동작
- [ ] 체크리스트 localStorage 저장
- [ ] 모바일 반응형
- [ ] 키보드 탐색

---

*Created: 2026-01-20*
