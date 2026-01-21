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
    <div className="accordion">
      <button
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="architecture-diagram">
      <div className="arch-central">
        <div className="arch-label">geniefy/design-system</div>
        <div className="arch-boxes">
          <div className="arch-box">
            <span className="arch-icon">📦</span>
            <span>components/</span>
          </div>
          <div className="arch-box">
            <span className="arch-icon">🎨</span>
            <span>tokens.css</span>
          </div>
          <div className="arch-box">
            <span className="arch-icon">📚</span>
            <span>docs/</span>
          </div>
        </div>
        <div className="arch-outputs">
          <div className="arch-output npm">
            <span>npm publish</span>
            <span className="arch-arrow">↓</span>
            <span className="arch-target">@geniefy/ui</span>
          </div>
          <div className="arch-output cdn">
            <span>CDN</span>
            <span className="arch-arrow">↓</span>
            <span className="arch-target">jsDelivr</span>
          </div>
        </div>
      </div>

      <div className="arch-flow-arrows">
        <div className="flow-down">
          <span className="flow-label downstream">Downstream</span>
          <span className="flow-arrow-big">⬇</span>
        </div>
        <div className="flow-up">
          <span className="flow-arrow-big">⬆</span>
          <span className="flow-label upstream">Upstream</span>
        </div>
      </div>

      <div className="arch-project">
        <div className="arch-label">사용자 프로젝트</div>
        <div className="arch-sync-boxes">
          <div className="sync-box downstream">
            <div className="sync-title">자동 업데이트</div>
            <div className="sync-flow">
              <span>Dependabot</span>
              <span className="sync-arrow">→</span>
              <span>PR</span>
              <span className="sync-arrow">→</span>
              <span>Auto-merge</span>
            </div>
          </div>
          <div className="sync-box upstream">
            <div className="sync-title">자동 기여</div>
            <div className="sync-flow">
              <span>Write</span>
              <span className="sync-arrow">→</span>
              <span>Hook</span>
              <span className="sync-arrow">→</span>
              <span>GitHub API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowCard({
  direction,
  title,
  description,
  steps,
}: {
  direction: 'downstream' | 'upstream';
  title: string;
  description: string;
  steps: { icon: string; label: string; detail: string }[];
}) {
  return (
    <div className={`flow-card ${direction}`}>
      <div className="flow-card-header">
        <span className="flow-card-direction">
          {direction === 'downstream' ? '⬇ Downstream' : '⬆ Upstream'}
        </span>
        <h3 className="flow-card-title">{title}</h3>
      </div>
      <p className="flow-card-description">{description}</p>
      <div className="flow-card-steps">
        {steps.map((step, i) => (
          <div key={i} className="flow-step-item">
            <div className="flow-step-header">
              <span className="flow-step-icon">{step.icon}</span>
              <span className="flow-step-label">{step.label}</span>
            </div>
            <p className="flow-step-detail">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="how-it-works">
      <h1 className="page-title">How it Works</h1>
      <p className="page-description">
        디자인 시스템의 양방향 동기화 구조를 이해합니다
      </p>

      {/* Section 1: Overview */}
      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="overview-why">
          <h3>왜 이 구조가 필요한가?</h3>
          <div className="why-cards">
            <div className="why-card">
              <span className="why-icon">🎯</span>
              <h4>일관성</h4>
              <p>모든 프로젝트가 동일한 디자인 토큰과 컴포넌트를 사용</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🔄</span>
              <h4>자동 동기화</h4>
              <p>수동 업데이트 없이 항상 최신 버전 유지</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🤝</span>
              <h4>협업</h4>
              <p>어느 프로젝트에서든 컴포넌트를 만들면 전체에 공유</p>
            </div>
          </div>
        </div>

        <h3>한눈에 보는 아키텍처</h3>
        <ArchitectureDiagram />
      </section>

      {/* Section 2: Distribution Channels */}
      <section className="section">
        <h2 className="section-title">배포 채널</h2>
        <p className="section-intro">
          디자인 시스템은 두 가지 채널로 배포됩니다. 프로젝트 타입에 따라 적절한 방식을 선택하세요.
        </p>

        <div className="channel-cards">
          <div className="channel-card">
            <div className="channel-header">
              <span className="channel-icon">📦</span>
              <h3>npm 패키지</h3>
              <code>@geniefy/ui</code>
            </div>
            <div className="channel-content">
              <p><strong>대상:</strong> Node.js 프로젝트 (Next.js, React, Vue 등)</p>
              <p><strong>포함 내용:</strong></p>
              <ul>
                <li>React 컴포넌트 (Button, Input 등)</li>
                <li>tokens.css (CSS 변수)</li>
                <li>TypeScript 타입 정의</li>
              </ul>
              <p><strong>업데이트:</strong> Dependabot이 자동으로 PR 생성</p>
            </div>
            <CodeBlock language="bash">npm install @geniefy/ui</CodeBlock>
          </div>

          <div className="channel-card">
            <div className="channel-header">
              <span className="channel-icon">🌐</span>
              <h3>CDN</h3>
              <code>jsDelivr</code>
            </div>
            <div className="channel-content">
              <p><strong>대상:</strong> HTML/CSS 프로젝트, 빠른 프로토타이핑</p>
              <p><strong>포함 내용:</strong></p>
              <ul>
                <li>tokens.css만 제공</li>
                <li>컴포넌트는 직접 구현 필요</li>
              </ul>
              <p><strong>업데이트:</strong> main 브랜치 push 시 즉시 반영</p>
            </div>
            <CodeBlock language="html">{`<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css">`}</CodeBlock>
          </div>
        </div>
      </section>

      {/* Section 3: Bidirectional Sync */}
      <section className="section">
        <h2 className="section-title">양방향 동기화</h2>
        <p className="section-intro">
          디자인 시스템은 중앙 저장소와 사용자 프로젝트 간에 양방향으로 동기화됩니다.
        </p>

        <div className="flow-cards">
          <FlowCard
            direction="downstream"
            title="중앙 → 프로젝트"
            description="새 버전이 배포되면 자동으로 사용자 프로젝트에 반영됩니다."
            steps={[
              {
                icon: '📦',
                label: 'npm publish',
                detail: 'main 브랜치에 push되면 GitHub Actions가 자동으로 npm에 배포',
              },
              {
                icon: '🤖',
                label: 'Dependabot 감지',
                detail: '매일 09:00 (KST)에 새 버전을 체크하고 PR 생성',
              },
              {
                icon: '✅',
                label: 'Auto-merge',
                detail: 'CI 통과 시 minor/patch는 자동 머지, major는 수동 리뷰',
              },
            ]}
          />

          <FlowCard
            direction="upstream"
            title="프로젝트 → 중앙"
            description="프로젝트에서 컴포넌트를 만들면 자동으로 중앙 저장소에 기여됩니다."
            steps={[
              {
                icon: '✏️',
                label: 'Write/Edit 감지',
                detail: 'Claude Code가 components/ 폴더에 파일을 생성하면 Hook 트리거',
              },
              {
                icon: '🔗',
                label: 'auto-contribute.sh',
                detail: 'GitHub API를 사용하여 design-system 저장소에 직접 커밋',
              },
              {
                icon: '🔄',
                label: 'npm 배포',
                detail: '커밋이 main에 반영되면 자동으로 새 버전 배포',
              },
            ]}
          />
        </div>
      </section>

      {/* Section 4: Hook System */}
      <section className="section">
        <h2 className="section-title">Hook 시스템</h2>
        <p className="section-intro">
          Claude Code의 Hook 기능을 사용하여 자동화를 구현합니다.
        </p>

        <Accordion title="UserPromptSubmit: design-rules 자동 로딩" defaultOpen>
          <p>
            사용자가 UI 관련 키워드(버튼, 카드, 폼 등)를 입력하면
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
          <div className="hook-trigger-examples">
            <p><strong>트리거 예시:</strong></p>
            <ul>
              <li>"로그인 폼 만들어줘" → design-rules 로딩</li>
              <li>"버튼 스타일 수정해줘" → design-rules 로딩</li>
              <li>"API 연동해줘" → 로딩 안 됨 (UI 키워드 없음)</li>
            </ul>
          </div>
        </Accordion>

        <Accordion title="PostToolUse: 컴포넌트 자동 기여">
          <p>
            Claude Code가 components/ 폴더에 파일을 생성/수정하면
            자동으로 design-system 저장소에 커밋됩니다.
          </p>
          <CodeBlock language="json">{`{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "command": "if [[ \\"$CLAUDE_TOOL_ARG_file_path\\" == *\\"components/\\"* ]]; then ~/.claude/scripts/auto-contribute.sh \\"$CLAUDE_TOOL_ARG_file_path\\"; fi"
    }]
  }
}`}</CodeBlock>
          <div className="hook-note">
            <strong>참고:</strong> GITHUB_TOKEN 환경변수가 설정되어 있어야 합니다.
          </div>
        </Accordion>
      </section>

      {/* Section 5: npm Pipeline */}
      <section className="section">
        <h2 className="section-title">npm 배포 파이프라인</h2>
        <p className="section-intro">
          GitHub Actions를 통해 자동으로 npm에 배포됩니다.
        </p>

        <div className="pipeline-diagram">
          <div className="pipeline-step">
            <span className="pipeline-icon">📝</span>
            <span className="pipeline-label">코드 변경</span>
            <span className="pipeline-detail">components/, package.json, index.ts</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">🔀</span>
            <span className="pipeline-label">main push</span>
            <span className="pipeline-detail">브랜치 머지 또는 직접 push</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">⚙️</span>
            <span className="pipeline-label">GitHub Actions</span>
            <span className="pipeline-detail">build → publish</span>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-step">
            <span className="pipeline-icon">📦</span>
            <span className="pipeline-label">npm 배포</span>
            <span className="pipeline-detail">@geniefy/ui 새 버전</span>
          </div>
        </div>

        <Accordion title="publish.yml 워크플로우 보기">
          <CodeBlock language="yaml">{`name: Publish to npm

on:
  push:
    branches:
      - main
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

      {/* Section 6: Troubleshooting */}
      <section className="section">
        <h2 className="section-title">트러블슈팅</h2>

        <Accordion title="자동 업데이트가 안 될 때">
          <ol className="troubleshoot-steps">
            <li>
              <strong>Dependabot 설정 확인</strong>
              <p><code>.github/dependabot.yml</code> 파일이 있는지 확인</p>
            </li>
            <li>
              <strong>@geniefy/ui 대상인지 확인</strong>
              <CodeBlock language="yaml">{`allow:
  - dependency-name: "@geniefy/ui"`}</CodeBlock>
            </li>
            <li>
              <strong>GitHub Actions 권한 확인</strong>
              <p>Settings → Actions → General → Workflow permissions</p>
              <p>"Read and write permissions" 활성화 필요</p>
            </li>
          </ol>
        </Accordion>

        <Accordion title="자동 기여가 안 될 때">
          <ol className="troubleshoot-steps">
            <li>
              <strong>GITHUB_TOKEN 확인</strong>
              <CodeBlock language="bash">echo $GITHUB_TOKEN</CodeBlock>
              <p>값이 출력되지 않으면 토큰 설정 필요</p>
            </li>
            <li>
              <strong>토큰 권한 확인</strong>
              <p>repo (Full control of private repositories) 권한 필요</p>
            </li>
            <li>
              <strong>auto-contribute.sh 확인</strong>
              <CodeBlock language="bash">cat ~/.claude/scripts/auto-contribute.sh</CodeBlock>
            </li>
          </ol>
        </Accordion>

        <Accordion title="Hook이 작동하지 않을 때">
          <ol className="troubleshoot-steps">
            <li>
              <strong>settings.local.json 확인</strong>
              <CodeBlock language="bash">cat .claude/settings.local.json</CodeBlock>
            </li>
            <li>
              <strong>design-rules.md 위치 확인</strong>
              <CodeBlock language="bash">ls ~/.claude/skills/design-rules.md</CodeBlock>
            </li>
            <li>
              <strong>Claude Code 재시작</strong>
              <p>설정 변경 후 Claude Code를 재시작해야 Hook이 적용됩니다.</p>
            </li>
          </ol>
        </Accordion>
      </section>
    </div>
  );
}
