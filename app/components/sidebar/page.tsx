'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@components/sidebar';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Home, Settings, User, FileText, Mail } from 'lucide-react';

export default function SidebarPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Sidebar"
        description="애플리케이션의 사이드바 내비게이션 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          사이드바는 SidebarProvider 내부에서 사용해야 합니다.
        </p>
        <Container className="flex-col p-0 overflow-hidden">
          <SidebarProvider defaultOpen={true}>
            <div className="flex h-[400px] w-full">
              <Sidebar collapsible="none">
                <SidebarHeader>
                  <div className="px-2 py-2 font-semibold">My App</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <Home />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <FileText />
                            <span>Documents</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Mail />
                            <span>Messages</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <User />
                            <span>Profile</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Settings />
                            <span>Settings</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <div className="px-2 py-2 text-sm text-muted-foreground">
                    v1.0.0
                  </div>
                </SidebarFooter>
              </Sidebar>
              <main className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <SidebarTrigger />
                  <span className="font-medium">Main Content</span>
                </div>
                <p className="text-muted-foreground">
                  메인 콘텐츠 영역입니다. 사이드바와 함께 사용됩니다.
                </p>
              </main>
            </div>
          </SidebarProvider>
        </Container>
        <CodeBlock
          code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="px-2 py-2 font-semibold">My App</div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FileText />
                <span>Documents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <div className="px-2 py-2 text-sm">v1.0.0</div>
    </SidebarFooter>
  </Sidebar>
  <main className="flex-1 p-4">
    <SidebarTrigger />
    <p>Main content</p>
  </main>
</SidebarProvider>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@gpters-internal/ui';

function Example() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>Footer</SidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger />
        {/* Main content */}
      </main>
    </SidebarProvider>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Props</h2>
        <div className="space-y-2">
          <h3 className="font-medium">Sidebar</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><code>side</code>: &quot;left&quot; | &quot;right&quot; - 사이드바 위치</li>
            <li><code>variant</code>: &quot;sidebar&quot; | &quot;floating&quot; | &quot;inset&quot; - 스타일 변형</li>
            <li><code>collapsible</code>: &quot;offcanvas&quot; | &quot;icon&quot; | &quot;none&quot; - 접힘 모드</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">SidebarMenuButton</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li><code>isActive</code>: boolean - 활성화 상태</li>
            <li><code>tooltip</code>: string - 툴팁 텍스트 (접힌 상태에서 표시)</li>
            <li><code>size</code>: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; - 버튼 크기</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
