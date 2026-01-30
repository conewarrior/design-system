'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/tabs';
import { CodeBlock } from '../../ui/CodeBlock';

function NpmGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">1. 패키지 설치</h3>
        <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>
      </div>

      <div>
        <h3 className="font-semibold mb-2">2. 스타일 import</h3>
        <p className="text-sm text-muted-foreground mb-2">앱 진입점에서 tokens.css를 import합니다.</p>
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
      </div>

      <div>
        <h3 className="font-semibold mb-2">3. 컴포넌트 사용</h3>
        <p className="text-sm text-muted-foreground mb-2">Button, Input 등의 컴포넌트를 import하여 사용합니다.</p>
        <CodeBlock language="tsx">{`import { Button, Input } from '@design-geniefy/ui';

export default function Page() {
  return (
    <div className="space-y-12">
      <Input placeholder="이메일을 입력하세요" />
      <Button variant="primary">구독하기</Button>
    </div>
  );
}`}</CodeBlock>
      </div>
    </div>
  );
}

function CdnGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">1. tokens.css 추가</h3>
        <p className="text-sm text-muted-foreground mb-2">HTML head에 CDN 링크를 추가합니다.</p>
        <CodeBlock language="html">{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
>`}</CodeBlock>
      </div>

      <div>
        <h3 className="font-semibold mb-2">2. CSS 변수 사용</h3>
        <p className="text-sm text-muted-foreground mb-2">토큰 CSS 변수를 사용하여 스타일링합니다.</p>
        <CodeBlock language="css">{`.my-button {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.my-button:hover {
  opacity: 0.9;
}`}</CodeBlock>
      </div>
    </div>
  );
}

function ClaudeGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">1. GitHub 인증 설정 (선택)</h3>
        <p className="text-sm text-muted-foreground mb-2">자동 기여 기능을 사용하려면 GitHub 인증이 필요합니다.</p>
        <div className="space-y-4">
          <p><strong>방법 1: gh CLI (권장)</strong></p>
          <p className="text-muted-foreground text-sm">Hook에서도 안정적으로 작동합니다.</p>
          <CodeBlock language="bash">{`# 설치 (macOS)
brew install gh

# 인증 (브라우저 로그인)
gh auth login

# 확인
gh auth status`}</CodeBlock>

          <p className="mt-4"><strong>방법 2: GITHUB_TOKEN (CI/CD용)</strong></p>
          <p className="text-muted-foreground text-sm">환경변수 방식은 CI/CD 환경에서 사용합니다.</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer" className="text-primary underline">GitHub 토큰 생성</a> (repo 권한)</li>
            <li>터미널에서 설정:
              <CodeBlock language="bash">{`echo 'export GITHUB_TOKEN="토큰"' >> ~/.zshrc && source ~/.zshrc`}</CodeBlock>
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">2. 명령어 실행</h3>
        <p className="text-sm text-muted-foreground mb-2">Claude Code에서 setup 명령어를 실행합니다.</p>
        <CodeBlock language="bash">/setup-design</CodeBlock>
      </div>

      <div>
        <h3 className="font-semibold mb-2">3. 자동 설치 확인</h3>
        <p className="text-sm text-muted-foreground mb-2">다음 항목들이 자동으로 설치됩니다.</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2"><span>✅</span><span>npm install @design-geniefy/ui</span></div>
          <div className="flex items-center gap-2"><span>✅</span><span>CLAUDE.md에 디자인 규칙 추가</span></div>
          <div className="flex items-center gap-2"><span>✅</span><span>Hook 설정 (UI 생성 시 규칙 자동 적용)</span></div>
          <div className="flex items-center gap-2"><span>✅</span><span>Dependabot 자동 업데이트 설정</span></div>
          <div className="flex items-center gap-2"><span>✅</span><span>컴포넌트 자동 기여 (gh CLI 설정 시)</span></div>
        </div>
      </div>
    </div>
  );
}

export default function InstallPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">설치 가이드</h1>
      <p className="text-lg text-muted-foreground mb-8">3가지 방법으로 시작하세요</p>

      <Tabs defaultValue="npm" className="w-full">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="cdn">CDN</TabsTrigger>
          <TabsTrigger value="claude">Claude Code</TabsTrigger>
        </TabsList>
        <TabsContent value="npm" className="mt-6">
          <NpmGuide />
        </TabsContent>
        <TabsContent value="cdn" className="mt-6">
          <CdnGuide />
        </TabsContent>
        <TabsContent value="claude" className="mt-6">
          <ClaudeGuide />
        </TabsContent>
      </Tabs>
    </div>
  );
}
