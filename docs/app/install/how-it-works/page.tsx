'use client';

import { useState } from 'react';
import { CodeBlock } from '../../../ui/CodeBlock';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="hw-accordion">
      <button
        className={`hw-accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="hw-accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="hw-accordion-content">{children}</div>}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="how-it-works">
      <h1 className="page-title">How it Works</h1>
      <p className="page-description">
        디자인 시스템의 양방향 동기화 구조
      </p>

      {/* Section 1: Overview */}
      <section className="hw-section">
        <h2>Overview</h2>
        <p>
          이 디자인 시스템은 <strong>중앙 저장소</strong>와 <strong>사용자 프로젝트</strong> 간에
          양방향으로 동기화됩니다.
        </p>
        <ul>
          <li><strong>일관성</strong> — 모든 프로젝트가 동일한 디자인 토큰과 컴포넌트를 사용</li>
          <li><strong>자동 동기화</strong> — 수동 업데이트 없이 항상 최신 버전 유지</li>
          <li><strong>협업</strong> — 어느 프로젝트에서든 컴포넌트를 만들면 전체에 공유</li>
        </ul>

        <div className="hw-diagram">
          <pre>{`
┌─────────────────────────────────────────────────────────────┐
│                 geniefy/design-system (중앙)                 │
│                                                             │
│   components/    tokens.css    docs/                        │
│       │              │                                      │
│       ▼              ▼                                      │
│   npm publish    CDN (jsDelivr)                             │
│   @design-geniefy/ui    즉시 반영                                   │
└───────────────────────┬─────────────────────────────────────┘
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▲
     Downstream                   Upstream
   (자동 업데이트)               (자동 기여)
          │                           │
┌─────────┴───────────────────────────┴───────────────────────┐
│                      사용자 프로젝트                          │
│                                                             │
│  Dependabot → PR → Auto-merge        Write → Hook → GitHub  │
│  (새 버전 감지)                       (components/ 생성 시)   │
└─────────────────────────────────────────────────────────────┘
`}</pre>
        </div>
      </section>

      <hr className="hw-divider" />

      {/* Section 2: Distribution */}
      <section className="hw-section">
        <h2>배포 채널</h2>

        <h3>npm 패키지 (@design-geniefy/ui)</h3>
        <p>Node.js 프로젝트 (Next.js, React, Vue 등)에서 사용합니다.</p>
        <ul>
          <li>React 컴포넌트 (Button, Input 등)</li>
          <li>tokens.css (CSS 변수)</li>
          <li>TypeScript 타입 정의</li>
        </ul>
        <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>

        <h3>CDN (jsDelivr)</h3>
        <p>HTML/CSS 프로젝트, 빠른 프로토타이핑에서 사용합니다. tokens.css만 제공됩니다.</p>
        <CodeBlock language="html">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css">`}</CodeBlock>
      </section>

      <hr className="hw-divider" />

      {/* Section 3: Downstream */}
      <section className="hw-section">
        <h2>Downstream: 중앙 → 프로젝트</h2>
        <p>새 버전이 배포되면 자동으로 사용자 프로젝트에 반영됩니다.</p>

        <ol>
          <li>
            <strong>npm publish</strong><br />
            main 브랜치에 push되면 GitHub Actions가 자동으로 npm에 배포
          </li>
          <li>
            <strong>Dependabot 감지</strong><br />
            매일 09:00 (KST)에 새 버전을 체크하고 PR 생성
          </li>
          <li>
            <strong>Auto-merge</strong><br />
            CI 통과 시 minor/patch는 자동 머지, major는 수동 리뷰
          </li>
        </ol>

        <Accordion title="dependabot.yml 보기">
          <CodeBlock language="yaml">{`version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      timezone: "Asia/Seoul"
    allow:
      - dependency-name: "@design-geniefy/ui"`}</CodeBlock>
        </Accordion>
      </section>

      <hr className="hw-divider" />

      {/* Section 4: Upstream */}
      <section className="hw-section">
        <h2>Upstream: 프로젝트 → 중앙</h2>
        <p>프로젝트에서 컴포넌트를 만들면 자동으로 중앙 저장소에 기여됩니다.</p>

        <ol>
          <li>
            <strong>Write/Edit 감지</strong><br />
            Claude Code가 components/ 폴더에 파일을 생성하면 Hook 트리거
          </li>
          <li>
            <strong>auto-contribute.sh</strong><br />
            GitHub API를 사용하여 design-system 저장소에 직접 커밋
          </li>
          <li>
            <strong>npm 배포</strong><br />
            커밋이 main에 반영되면 자동으로 새 버전 배포
          </li>
        </ol>

        <p className="hw-note">
          GITHUB_TOKEN 환경변수가 설정되어 있어야 합니다.
        </p>
      </section>

      <hr className="hw-divider" />

      {/* Section 5: Hook System */}
      <section className="hw-section">
        <h2>Hook 시스템</h2>

        <h3>UserPromptSubmit</h3>
        <p>
          UI 관련 키워드(버튼, 카드, 폼 등)를 입력하면
          자동으로 design-rules가 로딩되어 토큰 사용을 강제합니다.
        </p>
        <CodeBlock language="json">{`{
  "hooks": {
    "UserPromptSubmit": [{
      "matcher": "UI|컴포넌트|버튼|카드|폼|레이아웃|스타일|CSS|디자인",
      "command": "cat ~/.claude/skills/design-rules.md"
    }]
  }
}`}</CodeBlock>

        <h3>PostToolUse</h3>
        <p>
          components/ 폴더에 파일을 생성/수정하면 자동으로 design-system 저장소에 커밋됩니다.
        </p>
        <CodeBlock language="json">{`{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "command": "if [[ \\"$CLAUDE_TOOL_ARG_file_path\\" == *\\"components/\\"* ]]; then ~/.claude/scripts/auto-contribute.sh \\"$CLAUDE_TOOL_ARG_file_path\\"; fi"
    }]
  }
}`}</CodeBlock>
      </section>

      <hr className="hw-divider" />

      {/* Section 6: npm Pipeline */}
      <section className="hw-section">
        <h2>npm 배포 파이프라인</h2>
        <p>GitHub Actions를 통해 자동으로 npm에 배포됩니다.</p>

        <p className="hw-flow">
          코드 변경 → main push → GitHub Actions → npm publish
        </p>

        <Accordion title="publish.yml 보기">
          <CodeBlock language="yaml">{`name: Publish to npm

on:
  push:
    branches: [main]
    paths:
      - 'components/**'
      - 'package.json'
      - 'index.ts'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}`}</CodeBlock>
        </Accordion>
      </section>

      <hr className="hw-divider" />

      {/* Section 7: Troubleshooting */}
      <section className="hw-section">
        <h2>트러블슈팅</h2>

        <Accordion title="자동 업데이트가 안 될 때">
          <ol>
            <li>
              <strong>Dependabot 설정 확인</strong>
              <p><code>.github/dependabot.yml</code> 파일이 있는지 확인</p>
            </li>
            <li>
              <strong>GitHub Actions 권한 확인</strong>
              <p>Settings → Actions → General → Workflow permissions에서 "Read and write permissions" 활성화</p>
            </li>
          </ol>
        </Accordion>

        <Accordion title="자동 기여가 안 될 때">
          <ol>
            <li>
              <strong>GITHUB_TOKEN 확인</strong>
              <CodeBlock language="bash">echo $GITHUB_TOKEN</CodeBlock>
              <p>값이 출력되지 않으면 토큰 설정 필요</p>
            </li>
            <li>
              <strong>토큰 권한 확인</strong>
              <p>repo (Full control of private repositories) 권한 필요</p>
            </li>
          </ol>
        </Accordion>

        <Accordion title="Hook이 작동하지 않을 때">
          <ol>
            <li><code>.claude/settings.local.json</code> 파일 확인</li>
            <li><code>~/.claude/skills/design-rules.md</code> 파일 존재 확인</li>
            <li>Claude Code 재시작</li>
          </ol>
        </Accordion>
      </section>
    </div>
  );
}
