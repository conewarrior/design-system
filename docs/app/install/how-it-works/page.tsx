'use client';

import { CodeBlock } from '../../../ui/CodeBlock';
import { PageHeader } from '../../../ui/PageHeader';
import { PageNav } from '../../../ui/PageNav';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Separator } from '@components/separator';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@components/collapsible';

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="How it Works"
        description="디자인 시스템의 양방향 동기화 구조"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          이 디자인 시스템은 <strong className="text-foreground">중앙 저장소</strong>와{' '}
          <strong className="text-foreground">사용자 프로젝트</strong> 간에 양방향으로 동기화됩니다.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-primary font-semibold">일관성</span>
            <span className="text-muted-foreground">— 모든 프로젝트가 동일한 디자인 토큰과 컴포넌트를 사용</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-semibold">자동 동기화</span>
            <span className="text-muted-foreground">— 수동 업데이트 없이 항상 최신 버전 유지</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-semibold">협업</span>
            <span className="text-muted-foreground">— 어느 프로젝트에서든 컴포넌트를 만들면 전체에 공유</span>
          </li>
        </ul>

        <div className="rounded-md border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-xs font-mono">{`┌─────────────────────────────────────────────────────────────┐
│              conewarrior/design-system (중앙)               │
│                                                             │
│   components/    tokens.css    docs/                        │
│       │              │                                      │
│       ▼              ▼                                      │
│   npm publish    CDN (jsDelivr)                             │
│   @design-geniefy/ui    즉시 반영                           │
└───────────────────────┬─────────────────────────────────────┘
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▲
     Downstream                   Upstream
   (자동 업데이트)               (자동 기여)
          │                           │
┌─────────┴───────────────────────────┴───────────────────────┐
│                      사용자 프로젝트                        │
│                                                             │
│  Dependabot → PR → Auto-merge        Write → Hook → GitHub  │
│  (새 버전 감지)                       (components/ 생성 시) │
└─────────────────────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-subsection-title">배포 채널</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">npm 패키지 (@design-geniefy/ui)</h3>
            <p className="text-body-sm">Node.js 프로젝트 (Next.js, React, Vue 등)에서 사용합니다.</p>
            <ul className="text-body-sm space-y-1 list-disc list-inside">
              <li>React 컴포넌트 (Button, Input 등)</li>
              <li>tokens.css (CSS 변수)</li>
              <li>TypeScript 타입 정의</li>
            </ul>
            <CodeBlock language="bash">npm install @design-geniefy/ui</CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">CDN (jsDelivr)</h3>
            <p className="text-body-sm">HTML/CSS 프로젝트, 빠른 프로토타이핑에서 사용합니다. tokens.css만 제공됩니다.</p>
            <CodeBlock language="html">{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/conewarrior/design-system/tokens.css">`}</CodeBlock>
          </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Downstream: 중앙 → 프로젝트</h2>
        <p className="text-body-sm">새 버전이 배포되면 자동으로 사용자 프로젝트에 반영됩니다.</p>

        <ol className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">1</span>
            <div>
              <div className="font-medium">npm publish</div>
              <div className="text-muted-foreground">버전 태그(v*)를 push하면 GitHub Actions가 자동으로 npm에 배포</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">2</span>
            <div>
              <div className="font-medium">Dependabot 감지</div>
              <div className="text-muted-foreground">매일 09:00 (KST)에 새 버전을 체크하고 PR 생성</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">3</span>
            <div>
              <div className="font-medium">Auto-merge</div>
              <div className="text-muted-foreground">CI 통과 시 minor/patch는 자동 머지, major는 수동 리뷰</div>
            </div>
          </li>
        </ol>

        <Collapsible className="rounded-md border">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left text-label hover:bg-accent transition-colors [&[data-state=open]>svg:first-child]:hidden [&[data-state=closed]>svg:last-child]:hidden">
            <span>dependabot.yml 보기</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="border-t p-4">
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
          </CollapsibleContent>
        </Collapsible>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Upstream: 프로젝트 → 중앙</h2>
        <p className="text-body-sm">프로젝트에서 컴포넌트를 만들면 자동으로 중앙 저장소에 기여됩니다.</p>

        <ol className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">1</span>
            <div>
              <div className="font-medium">Write/Edit 감지</div>
              <div className="text-muted-foreground">Claude Code가 components/ 폴더에 파일을 생성하면 Hook 트리거</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">2</span>
            <div>
              <div className="font-medium">auto-contribute.sh</div>
              <div className="text-muted-foreground">gh CLI 또는 GitHub API를 사용하여 design-system 저장소에 직접 커밋</div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-caption font-medium">3</span>
            <div>
              <div className="font-medium">npm 배포</div>
              <div className="text-muted-foreground">커밋이 main에 반영되면 자동으로 새 버전 배포</div>
            </div>
          </li>
        </ol>

        <div className="rounded-md border border-primary/20 bg-primary/5 p-4 text-sm">
          <strong>gh CLI</strong> (권장) 또는 <strong>GITHUB_TOKEN</strong> 환경변수가 설정되어 있어야 합니다.
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-subsection-title">트러블슈팅</h2>

        <div className="space-y-3">
          <Collapsible className="rounded-md border">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left text-label hover:bg-accent transition-colors [&[data-state=open]>svg:first-child]:hidden [&[data-state=closed]>svg:last-child]:hidden">
              <span>자동 업데이트가 안 될 때</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t p-4">
              <ol className="space-y-2 text-sm">
                <li>
                  <strong>Dependabot 설정 확인</strong>
                  <p className="text-muted-foreground"><code className="text-xs bg-muted px-1 py-0.5 rounded">.github/dependabot.yml</code> 파일이 있는지 확인</p>
                </li>
                <li>
                  <strong>GitHub Actions 권한 확인</strong>
                  <p className="text-muted-foreground">Settings → Actions → General → Workflow permissions에서 "Read and write permissions" 활성화</p>
                </li>
              </ol>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="rounded-md border">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left text-label hover:bg-accent transition-colors [&[data-state=open]>svg:first-child]:hidden [&[data-state=closed]>svg:last-child]:hidden">
              <span>자동 기여가 안 될 때</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t p-4">
              <ol className="space-y-3 text-sm">
                <li>
                  <strong>gh CLI 확인 (권장)</strong>
                  <CodeBlock language="bash">gh auth status</CodeBlock>
                  <p className="text-muted-foreground mt-2">인증되지 않았다면:</p>
                  <CodeBlock language="bash">{`# 설치
brew install gh

# 인증 (브라우저 로그인)
gh auth login`}</CodeBlock>
                </li>
                <li>
                  <strong>또는 GITHUB_TOKEN 확인 (CI/CD용)</strong>
                  <CodeBlock language="bash">echo $GITHUB_TOKEN</CodeBlock>
                </li>
              </ol>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="rounded-md border">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left text-label hover:bg-accent transition-colors [&[data-state=open]>svg:first-child]:hidden [&[data-state=closed]>svg:last-child]:hidden">
              <span>Hook이 작동하지 않을 때</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t p-4">
              <ol className="space-y-1 text-sm list-decimal list-inside">
                <li><code className="text-xs bg-muted px-1 py-0.5 rounded">.claude/settings.local.json</code> 파일 확인</li>
                <li><code className="text-xs bg-muted px-1 py-0.5 rounded">~/.claude/skills/design-rules.md</code> 파일 존재 확인</li>
                <li>Claude Code 재시작</li>
              </ol>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <PageNav
        prev={{ href: '/install/', title: 'Install' }}
        next={{ href: '/tokens/', title: 'Tokens' }}
      />
    </div>
  );
}
