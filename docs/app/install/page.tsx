'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/tabs';
import { CodeBlock } from '../../ui/CodeBlock';
import { PageHeader } from '../../ui/PageHeader';
import { PageNav } from '../../ui/PageNav';
import { Badge } from '@components/badge';
import { Check } from 'lucide-react';

export default function InstallPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="설치 가이드"
        description="3가지 방법으로 시작하세요"
      >
        <div className="flex gap-2">
          <Badge variant="secondary">npm</Badge>
          <Badge variant="secondary">CDN</Badge>
          <Badge variant="secondary">Claude Code</Badge>
        </div>
      </PageHeader>

      <Tabs defaultValue="npm" className="w-full">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="cdn">CDN</TabsTrigger>
          <TabsTrigger value="claude">Claude Code</TabsTrigger>
        </TabsList>

        {/* npm Guide */}
        <TabsContent value="npm" className="mt-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">1. 패키지 설치</h3>
              <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">2. 스타일 import</h3>
              <p className="text-body-sm">앱 진입점에서 tokens.css를 import합니다.</p>
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

            <div className="space-y-3">
              <h3 className="font-medium">3. 컴포넌트 사용</h3>
              <p className="text-body-sm">Button, Input 등의 컴포넌트를 import하여 사용합니다.</p>
              <CodeBlock language="tsx">{`import { Button, Input } from '@design-geniefy/ui';

export default function Page() {
  return (
    <div className="space-y-4">
      <Input placeholder="이메일을 입력하세요" />
      <Button variant="primary">구독하기</Button>
    </div>
  );
}`}</CodeBlock>
            </div>
          </div>
        </TabsContent>

        {/* CDN Guide */}
        <TabsContent value="cdn" className="mt-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">1. tokens.css 추가</h3>
              <p className="text-body-sm">HTML head에 CDN 링크를 추가합니다.</p>
              <CodeBlock language="html">{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css"
/>`}</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">2. CSS 변수 사용</h3>
              <p className="text-body-sm">토큰 CSS 변수를 사용하여 스타일링합니다.</p>
              <CodeBlock language="css">{`.my-button {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
}

.my-button:hover {
  opacity: 0.9;
}`}</CodeBlock>
            </div>
          </div>
        </TabsContent>

        {/* Claude Code Guide */}
        <TabsContent value="claude" className="mt-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">1. GitHub 인증 설정 (선택)</h3>
              <p className="text-body-sm">자동 기여 기능을 사용하려면 GitHub 인증이 필요합니다.</p>
              <div className="space-y-4">
                <div className="rounded-md border p-4 space-y-2">
                  <div className="font-medium">방법 1: gh CLI (권장)</div>
                  <p className="text-body-sm">Hook에서도 안정적으로 작동합니다.</p>
                  <CodeBlock language="bash">{`# 설치 (macOS)
brew install gh

# 인증 (브라우저 로그인)
gh auth login

# 확인
gh auth status`}</CodeBlock>
                </div>

                <div className="rounded-md border p-4 space-y-2">
                  <div className="font-medium">방법 2: GITHUB_TOKEN (CI/CD용)</div>
                  <p className="text-body-sm">환경변수 방식은 CI/CD 환경에서 사용합니다.</p>
                  <CodeBlock language="bash">{`echo 'export GITHUB_TOKEN="토큰"' >> ~/.zshrc && source ~/.zshrc`}</CodeBlock>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">2. 명령어 실행</h3>
              <p className="text-body-sm">Claude Code에서 setup 명령어를 실행합니다.</p>
              <CodeBlock language="bash">/setup-design</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">3. 자동 설치 확인</h3>
              <p className="text-body-sm">다음 항목들이 자동으로 설치됩니다.</p>
              <div className="space-y-2">
                {[
                  'npm install @design-geniefy/ui',
                  'CLAUDE.md에 디자인 규칙 추가',
                  'Hook 설정 (UI 생성 시 규칙 자동 적용)',
                  'Dependabot 자동 업데이트 설정',
                  '컴포넌트 자동 기여 (gh CLI 설정 시)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <PageNav
        prev={{ href: '/', title: 'Introduction' }}
        next={{ href: '/install/how-it-works/', title: 'How it Works' }}
      />
    </div>
  );
}
