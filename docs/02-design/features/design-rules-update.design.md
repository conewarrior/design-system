# Design Rules Update - Design Document

- **Feature**: design-rules-update
- **Created**: 2026-01-21
- **Status**: ✅ Done
- **Plan**: [design-rules-update.plan.md](../../01-plan/features/design-rules-update.plan.md)

---

## 1. 개요

문서 사이트에서 design-rules.md 전문을 확인할 수 있는 `/rules` 페이지 설계. 빌드 시 자동 복사를 통해 원본과 동기화를 유지한다.

---

## 2. 아키텍처

### 2.1 빌드 시 파일 흐름

```
┌─────────────────────────────────────────────────────────────┐
│                      빌드 프로세스                           │
│                                                             │
│  .claude/skills/design-rules.md                             │
│           │                                                 │
│           │ prebuild (copy-design-rules.js)                 │
│           ↓                                                 │
│  docs/content/design-rules.md                               │
│           │                                                 │
│           │ Next.js import (raw-loader)                     │
│           ↓                                                 │
│  docs/app/rules/page.tsx                                    │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 파일 구조

```
design-system/
├── .claude/skills/
│   └── design-rules.md         # 원본 (양방향 동기화 대상)
└── docs/
    ├── content/
    │   └── design-rules.md     # 복사본 (빌드용, .gitignore)
    ├── app/rules/
    │   └── page.tsx            # 페이지
    └── scripts/
        └── copy-design-rules.js # 복사 스크립트
```

---

## 3. 페이지 레이아웃

```
┌─────────────────────────────────────────────────────────────┐
│ Sidebar │                 Main Content                      │
│         │                                                   │
│ Getting │  Design Rules                                     │
│ Started │  ─────────────────────────────────────────        │
│         │  UI/컴포넌트 생성 시 자동 적용되는 규칙입니다.      │
│ Found-  │                                                   │
│ ations  │  ┌─────────────────────────────────────────┐      │
│ > Tokens│  │ 1. 필수 제약                             │      │
│ > Rules │  │                                         │      │
│         │  │ 1.1 색상 (Colors)                       │      │
│ Compo-  │  │ tokens.css 변수만 사용. 하드코딩 금지.  │      │
│ nents   │  │                                         │      │
│         │  │ ┌───────────────────────────────────┐   │      │
│         │  │ │ /* ✅ 올바른 사용 */               │   │      │
│         │  │ │ color: var(--color-foreground);   │   │      │
│         │  │ └───────────────────────────────────┘   │      │
│         │  │ ...                                     │      │
│         │  └─────────────────────────────────────────┘      │
│         │                                                   │
│         │  ┌─────────────────────────────────────────┐      │
│         │  │ Changelog                               │      │
│         │  │ ─────────────────────                   │      │
│         │  │ 2026-01-21: Generation Protocol 추가    │      │
│         │  │ 2026-01-20: 초기 버전                   │      │
│         │  └─────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. 구현 상세

### 4.1 prebuild 스크립트

```javascript
// docs/scripts/copy-design-rules.js

const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '../../.claude/skills/design-rules.md');
const DEST_DIR = path.join(__dirname, '../content');
const DEST = path.join(DEST_DIR, 'design-rules.md');

// content 폴더 생성
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// 파일 복사
if (fs.existsSync(SOURCE)) {
  fs.copyFileSync(SOURCE, DEST);
  console.log('✅ design-rules.md copied to docs/content/');
} else {
  console.warn('⚠️ design-rules.md not found at', SOURCE);
}
```

### 4.2 package.json 수정

```json
{
  "scripts": {
    "prebuild": "node scripts/generate-changelog.js && node scripts/generate-updates.js && node scripts/copy-design-rules.js"
  }
}
```

### 4.3 .gitignore 추가

```
# docs/.gitignore
content/design-rules.md
```

### 4.4 페이지 구현

```tsx
// docs/app/rules/page.tsx

import fs from 'fs';
import path from 'path';

export default function RulesPage() {
  // 빌드 시점에 파일 읽기
  const filePath = path.join(process.cwd(), 'content/design-rules.md');
  const content = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf-8')
    : '# Design Rules\n\n규칙 파일을 찾을 수 없습니다.';

  return (
    <div className="rules-page">
      <article className="markdown-content">
        {/* Markdown 렌더링 */}
        <MarkdownRenderer content={content} />
      </article>

      {/* Changelog 섹션 */}
      <section className="rules-changelog">
        <h2>Changelog</h2>
        <ul>
          <li><strong>2026-01-21</strong>: Generation Protocol 4단계 추가</li>
          <li><strong>2026-01-20</strong>: 초기 버전 - 토큰 규칙 정의</li>
        </ul>
      </section>
    </div>
  );
}
```

### 4.5 Markdown 렌더링

design-rules.md는 코드 블록이 많으므로 기존 CodeBlock 컴포넌트와 통합:

```tsx
// docs/ui/MarkdownRenderer.tsx

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // 간단한 마크다운 파싱
  // - # → h1, ## → h2, ### → h3
  // - ``` → CodeBlock 컴포넌트
  // - | table | → 테이블
  // - - list → ul/li

  const sections = parseMarkdown(content);

  return (
    <div className="markdown-content">
      {sections.map((section, i) => (
        <RenderSection key={i} section={section} />
      ))}
    </div>
  );
}
```

---

## 5. 스타일

```css
/* docs/styles/globals.css 추가 */

/* Rules Page */
.rules-page {
  max-width: 800px;
}

.markdown-content h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  border-bottom: 1px solid var(--color-border);
}

.markdown-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: var(--spacing-4);
  margin-bottom: var(--spacing-2);
}

.markdown-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: var(--spacing-3);
  margin-bottom: var(--spacing-1);
}

.markdown-content p {
  margin-bottom: var(--spacing-2);
  line-height: 1.7;
}

.markdown-content ul {
  margin-bottom: var(--spacing-2);
  padding-left: var(--spacing-3);
}

.markdown-content li {
  margin-bottom: var(--spacing-1);
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-3);
}

.markdown-content th,
.markdown-content td {
  padding: var(--spacing-1) var(--spacing-2);
  border: 1px solid var(--color-border);
  text-align: left;
}

.markdown-content th {
  background: var(--color-secondary);
  font-weight: 600;
}

/* Rules Changelog */
.rules-changelog {
  margin-top: var(--spacing-4);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border);
}

.rules-changelog h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.rules-changelog ul {
  list-style: none;
  padding: 0;
}

.rules-changelog li {
  padding: var(--spacing-1) 0;
  border-bottom: 1px solid var(--color-border);
}

.rules-changelog li:last-child {
  border-bottom: none;
}
```

---

## 6. Sidebar 업데이트

```tsx
// docs/ui/Sidebar.tsx 수정

const docsNavigation: NavGroup[] = [
  {
    title: 'Getting Started',
    links: [
      { href: '/', label: 'Introduction' },
      { href: '/install/', label: 'Install' },
      { href: '/install/how-it-works/', label: 'How it Works' },
    ],
  },
  {
    title: 'Foundations',
    links: [
      { href: '/tokens/', label: 'Design Tokens' },
      { href: '/rules/', label: 'Design Rules' },  // 추가
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
```

---

## 7. 대안 검토

| 방식 | 장점 | 단점 | 선택 |
|------|------|------|------|
| prebuild 복사 | 단순, 원본 유지 | 빌드마다 실행 | ✅ |
| symlink | 실시간 반영 | Vercel 지원 안됨 | ❌ |
| GitHub raw fetch | 원본 직접 참조 | 빌드 시 네트워크 필요 | ❌ |
| 수동 복사 | 간단 | 동기화 누락 위험 | ❌ |

---

## 8. 구현 순서

1. `docs/scripts/copy-design-rules.js` - 복사 스크립트
2. `docs/package.json` - prebuild에 스크립트 추가
3. `docs/.gitignore` - content/design-rules.md 제외
4. `docs/ui/MarkdownRenderer.tsx` - 마크다운 렌더러
5. `docs/app/rules/page.tsx` - 페이지 구현
6. `docs/ui/Sidebar.tsx` - 네비게이션 추가
7. `docs/styles/globals.css` - 스타일 추가

---

## 9. 검증 체크리스트

- [ ] prebuild 시 design-rules.md 복사됨
- [ ] `/rules` 페이지 접근 가능
- [ ] 마크다운 제대로 렌더링
- [ ] 코드 블록 스타일 적용
- [ ] 테이블 렌더링
- [ ] Changelog 섹션 표시
- [ ] Sidebar에서 접근 가능
- [ ] 빌드 성공

---

*Created: 2026-01-21*
