import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
} from '@components/menubar';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function MenubarPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Menubar"
        description="데스크톱 애플리케이션 스타일의 메뉴바"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          여러 메뉴를 포함하는 수평 메뉴바입니다.
        </p>
        <Container>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>Ctrl+N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>Ctrl+X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>Ctrl+C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>Ctrl+V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem>
                  Zoom In <MenubarShortcut>Ctrl++</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Zoom Out <MenubarShortcut>Ctrl+-</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Container>
        <CodeBlock
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>Ctrl+N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Submenu</h2>
        <p className="text-muted-foreground">
          중첩된 서브메뉴를 포함할 수 있습니다.
        </p>
        <Container>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New File</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Document 1</MenubarItem>
                    <MenubarItem>Document 2</MenubarItem>
                    <MenubarItem>Document 3</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Clear Recent</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Exit</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Container>
        <CodeBlock
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarSub>
        <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Document 1</MenubarItem>
          <MenubarItem>Document 2</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Clear Recent</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Radio Group</h2>
        <p className="text-muted-foreground">
          라디오 그룹으로 단일 선택을 구현할 수 있습니다.
        </p>
        <Container>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Options</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Theme</MenubarLabel>
                <MenubarRadioGroup value="light">
                  <MenubarRadioItem value="light">Light</MenubarRadioItem>
                  <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                  <MenubarRadioItem value="system">System</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Container>
        <CodeBlock
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Options</MenubarTrigger>
    <MenubarContent>
      <MenubarLabel>Theme</MenubarLabel>
      <MenubarRadioGroup value="light">
        <MenubarRadioItem value="light">Light</MenubarRadioItem>
        <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
        <MenubarRadioItem value="system">System</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
