'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@components/context-menu';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function ContextMenuPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Context Menu"
        description="우클릭으로 열리는 컨텍스트 메뉴"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          영역을 우클릭하면 컨텍스트 메뉴가 나타납니다.
        </p>
        <Container className="justify-center">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>Alt+Left</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>Alt+Right</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Print...</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Container>
        <CodeBlock
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>Alt+Left</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      Forward
      <ContextMenuShortcut>Alt+Right</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Reload
      <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      Save Page As...
      <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>Print...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Submenus</h2>
        <p className="text-muted-foreground">
          중첩된 서브메뉴를 사용할 수 있습니다.
        </p>
        <Container className="justify-center">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>New Tab</ContextMenuItem>
              <ContextMenuItem>New Window</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Save Page As...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </Container>
        <CodeBlock
          code={`<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>New Tab</ContextMenuItem>
    <ContextMenuItem>New Window</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Radio Items</h2>
        <p className="text-muted-foreground">
          라디오 그룹으로 단일 선택이 가능합니다.
        </p>
        <Container className="justify-center">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>View</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value="bottom">
                <ContextMenuRadioItem value="top">
                  Top
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="bottom">
                  Bottom
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="right">
                  Right
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </Container>
        <CodeBlock
          code={`<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuLabel>View</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value="bottom">
      <ContextMenuRadioItem value="top">
        Top
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="bottom">
        Bottom
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="right">
        Right
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@design-geniefy/ui';

function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Action
          <ContextMenuShortcut>Ctrl+A</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Another Action</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
