'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@components/drawer';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function DrawerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Drawer"
        description="화면 가장자리에서 슬라이드되어 나타나는 패널"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 Drawer는 화면 하단에서 올라옵니다.
        </p>
        <Container className="justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Drawer content goes here. You can add any content you need.
                </p>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Container>
        <CodeBlock
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>
        Make changes to your profile here. Click save when you're done.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p className="text-sm text-muted-foreground">
        Drawer content goes here.
      </p>
    </div>
    <DrawerFooter>
      <Button>Save changes</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Direction: Top</h2>
        <p className="text-muted-foreground">
          direction prop으로 위에서 내려오는 Drawer를 만들 수 있습니다.
        </p>
        <Container className="justify-center">
          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button variant="outline">Open from Top</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Top Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides down from the top of the screen.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Container>
        <CodeBlock
          code={`<Drawer direction="top">
  <DrawerTrigger asChild>
    <Button variant="outline">Open from Top</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Top Drawer</DrawerTitle>
      <DrawerDescription>
        This drawer slides down from the top of the screen.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Direction: Left / Right</h2>
        <p className="text-muted-foreground">
          좌우에서 나타나는 Drawer도 지원합니다.
        </p>
        <Container className="justify-center">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">Open from Left</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Left Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the left.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 flex-1">
                <p className="text-sm text-muted-foreground">
                  Navigation or filters typically go here.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">Open from Right</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Right Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the right.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 flex-1">
                <p className="text-sm text-muted-foreground">
                  Settings or details typically go here.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Container>
        <CodeBlock
          code={`<Drawer direction="left">
  <DrawerTrigger asChild>
    <Button variant="outline">Open from Left</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Left Drawer</DrawerTitle>
      <DrawerDescription>
        This drawer slides in from the left.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">Open from Right</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Right Drawer</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
          <DrawerDescription>Description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Action</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
