'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/tabs';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Tabs"
        description="관련 콘텐츠를 그룹화하여 탭으로 전환하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          여러 패널 사이를 전환할 수 있는 탭 컴포넌트입니다.
        </p>
        <Container>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">계정</TabsTrigger>
              <TabsTrigger value="password">비밀번호</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">
                  계정 설정을 변경할 수 있습니다.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">
                  비밀번호를 변경할 수 있습니다.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
        <CodeBlock
          code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">계정</TabsTrigger>
    <TabsTrigger value="password">비밀번호</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    계정 설정을 변경할 수 있습니다.
  </TabsContent>
  <TabsContent value="password">
    비밀번호를 변경할 수 있습니다.
  </TabsContent>
</Tabs>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Multiple Tabs</h2>
        <p className="text-muted-foreground">
          여러 개의 탭을 사용할 수 있습니다.
        </p>
        <Container>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="analytics">분석</TabsTrigger>
              <TabsTrigger value="reports">리포트</TabsTrigger>
              <TabsTrigger value="notifications">알림</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">개요 탭 콘텐츠</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">분석 탭 콘텐츠</p>
              </div>
            </TabsContent>
            <TabsContent value="reports">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">리포트 탭 콘텐츠</p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">알림 탭 콘텐츠</p>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
        <CodeBlock
          code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">개요</TabsTrigger>
    <TabsTrigger value="analytics">분석</TabsTrigger>
    <TabsTrigger value="reports">리포트</TabsTrigger>
    <TabsTrigger value="notifications">알림</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">개요 콘텐츠</TabsContent>
  <TabsContent value="analytics">분석 콘텐츠</TabsContent>
  <TabsContent value="reports">리포트 콘텐츠</TabsContent>
  <TabsContent value="notifications">알림 콘텐츠</TabsContent>
</Tabs>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled Tab</h2>
        <p className="text-muted-foreground">
          특정 탭을 비활성화할 수 있습니다.
        </p>
        <Container>
          <Tabs defaultValue="active" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="active">활성</TabsTrigger>
              <TabsTrigger value="disabled" disabled>비활성</TabsTrigger>
              <TabsTrigger value="other">기타</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">활성 탭입니다.</p>
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="p-4 rounded-md border mt-2">
                <p className="text-sm text-muted-foreground">기타 탭입니다.</p>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
        <CodeBlock
          code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">활성</TabsTrigger>
    <TabsTrigger value="disabled" disabled>비활성</TabsTrigger>
    <TabsTrigger value="other">기타</TabsTrigger>
  </TabsList>
  {/* ... */}
</Tabs>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@design-geniefy/ui';

function Example() {
  return (
    <Tabs defaultValue="tab1" onValueChange={(value) => console.log(value)}>
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">콘텐츠 1</TabsContent>
      <TabsContent value="tab2">콘텐츠 2</TabsContent>
    </Tabs>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
