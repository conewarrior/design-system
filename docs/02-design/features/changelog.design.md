# Component Changelog - Design Document

- **Feature**: changelog
- **Created**: 2026-01-21
- **Status**: 📐 Design
- **Plan**: [changelog.plan.md](../../01-plan/features/changelog.plan.md)

---

## 1. 개요

`/changelog` 페이지에서 컴포넌트 변경 이력을 날짜별로 그룹화하여 표시한다.

---

## 2. 페이지 구조

```
/changelog
├── PageHeader         # 제목 + 필터 (선택)
└── ChangelogList      # 날짜별 그룹
    └── DateGroup      # 날짜 헤더 + 항목들
        └── ChangeItem # 개별 변경 항목
```

---

## 3. 컴포넌트 설계

### 3.1 ChangeItem

```tsx
interface ChangeItem {
  id: string;
  type: 'add' | 'modify' | 'delete' | 'token' | 'docs';
  title: string;
  author: string;
  timestamp: string;
  files: string[];
  commitUrl: string;
}
```

### 3.2 타입별 아이콘

```tsx
const typeIcons = {
  add: '🆕',
  modify: '✏️',
  delete: '🗑️',
  token: '🎨',
  docs: '📝',
};
```

---

## 4. 데이터 (MVP: 하드코딩)

```typescript
const sampleChangelog = [
  {
    date: '2026-01-21',
    items: [
      {
        id: 'abc123',
        type: 'add',
        title: 'Card 컴포넌트 추가',
        author: 'hskim',
        timestamp: '14:30',
        files: ['components/Card/index.tsx'],
        commitUrl: 'https://github.com/...',
      },
    ],
  },
];
```

---

## 5. 스타일

```css
.changelog-date {
  font-size: var(--font-size-sm);
  color: var(--color-muted);
  padding: var(--spacing-2) 0;
  border-bottom: 1px solid var(--color-border);
}

.changelog-item {
  padding: var(--spacing-2);
  display: flex;
  gap: var(--spacing-2);
}

.changelog-icon {
  font-size: var(--font-size-lg);
}

.changelog-meta {
  font-size: var(--font-size-sm);
  color: var(--color-muted);
}
```
