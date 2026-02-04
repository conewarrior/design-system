'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/sheet';
import { Button } from '@components/button';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SheetPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Sheet"
        description="화면 가장자리에서 슬라이드되어 나타나는 패널"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 시트 예시입니다. 오른쪽에서 슬라이드됩니다.
        </p>
        <Container>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  프로필 정보를 수정합니다. 완료 후 저장 버튼을 클릭하세요.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Container>
        <CodeBlock
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        프로필 정보를 수정합니다.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <Input id="name" defaultValue="John Doe" />
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sides</h2>
        <p className="text-muted-foreground">
          시트가 나타나는 방향을 지정할 수 있습니다.
        </p>
        <Container>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Sheet</SheetTitle>
                <SheetDescription>왼쪽에서 나타납니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Sheet</SheetTitle>
                <SheetDescription>오른쪽에서 나타납니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>위에서 나타납니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>아래에서 나타납니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Container>
        <CodeBlock
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Right</Button>
  </SheetTrigger>
  <SheetContent side="right">...</SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Top</Button>
  </SheetTrigger>
  <SheetContent side="top">...</SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">...</SheetContent>
</Sheet>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        {/* Content */}
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
