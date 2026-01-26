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

function NpmGuide() {
  return (
    <div className="guide">
      <Step number={1} title="패키지 설치">
        <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>
      </Step>

      <Step
        number={2}
        title="스타일 import"
        description="앱 진입점에서 tokens.css를 import합니다."
      >
        <CodeBlock language="tsx" filename="app/layout.tsx">{`import '@design-geniefy/ui/tokens.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}`}</CodeBlock>
      </Step>

      <Step
        number={3}
        title="컴포넌트 사용"
        description="Button, Input 등의 컴포넌트를 import하여 사용합니다."
      >
        <CodeBlock language="tsx">{`import { Button, Input } from '@design-geniefy/ui';

export default function Page() {
  return (
    <div>
      <Input placeholder="이메일을 입력하세요" />
      <Button variant="primary">구독하기</Button>
    </div>
  );
}`}</CodeBlock>
      </Step>
    </div>
  );
}

function CdnGuide() {
  return (
    <div className="guide">
      <Step
        number={1}
        title="tokens.css 추가"
        description="HTML head에 CDN 링크를 추가합니다."
      >
        <CodeBlock language="html">{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/geniefy/design-system/tokens.css"
>`}</CodeBlock>
      </Step>

      <Step
        number={2}
        title="CSS 변수 사용"
        description="토큰 CSS 변수를 사용하여 스타일링합니다."
      >
        <CodeBlock language="css">{`.my-button {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
}

.my-button:hover {
  opacity: 0.9;
}`}</CodeBlock>
      </Step>
    </div>
  );
}

function ClaudeGuide() {
  return (
    <div className="guide">
      <Step
        number={1}
        title="명령어 실행"
        description="Claude Code에서 setup 명령어를 실행합니다."
      >
        <CodeBlock language="bash">/setup-design</CodeBlock>
      </Step>

      <Step
        number={2}
        title="자동 설치 확인"
        description="다음 항목들이 자동으로 설치됩니다."
      >
        <div className="auto-install-list">
          <div className="auto-install-item">
            <span className="auto-install-icon">✅</span>
            <span>npm install @design-geniefy/ui</span>
          </div>
          <div className="auto-install-item">
            <span className="auto-install-icon">✅</span>
            <span>CLAUDE.md에 디자인 규칙 추가</span>
          </div>
          <div className="auto-install-item">
            <span className="auto-install-icon">✅</span>
            <span>Hook 설정 (UI 생성 시 규칙 자동 적용)</span>
          </div>
          <div className="auto-install-item">
            <span className="auto-install-icon">✅</span>
            <span>Dependabot 자동 업데이트 설정</span>
          </div>
        </div>
      </Step>

      <Step
        number={3}
        title="GitHub 토큰 설정 (선택)"
        description="컴포넌트 자동 기여 기능을 사용하려면 GitHub 토큰을 설정하세요."
      >
        <CodeBlock language="bash">export GITHUB_TOKEN="your_token_here"</CodeBlock>
      </Step>
    </div>
  );
}

function AutoUpdateSection() {
  return (
    <section className="auto-update-section">
      <h2 className="section-title">자동 업데이트</h2>
      <p className="section-description">
        Dependabot이 설정되면 @design-geniefy/ui의 새 버전이 출시될 때 자동으로 PR이 생성되고,
        CI 테스트 통과 시 자동으로 머지됩니다.
      </p>
      <div className="auto-update-flow">
        <div className="flow-step">
          <span className="flow-icon">📦</span>
          <span>새 버전 배포</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-step">
          <span className="flow-icon">🤖</span>
          <span>Dependabot PR</span>
        </div>
        <span className="flow-arrow">→</span>
        <div className="flow-step">
          <span className="flow-icon">✅</span>
          <span>자동 머지</span>
        </div>
      </div>
    </section>
  );
}

export default function InstallPage() {
  const [activeTab, setActiveTab] = useState('npm');

  return (
    <div>
      <h1 className="page-title">설치 가이드</h1>
      <p className="page-description">3가지 방법으로 시작하세요</p>

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

      <Checklist
        title="설치 확인"
        items={[
          { id: 'import', label: '컴포넌트 import 성공' },
          { id: 'tokens', label: '토큰 CSS 적용됨' },
          { id: 'render', label: '버튼 렌더링 확인' },
        ]}
        storageKey="install-checklist"
      />

      <AutoUpdateSection />
    </div>
  );
}
