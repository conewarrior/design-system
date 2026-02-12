import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@components/navigation-menu';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Navigation Menu"
        description="수평 내비게이션을 위한 링크 컬렉션"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          드롭다운 메뉴가 포함된 내비게이션 메뉴입니다.
        </p>
        <Container>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink href="#">
                      <div className="font-medium">Introduction</div>
                      <p className="text-muted-foreground text-sm">
                        디자인 시스템 시작하기
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <div className="font-medium">Installation</div>
                      <p className="text-muted-foreground text-sm">
                        패키지 설치 방법
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationMenuLink href="#">
                      <div className="font-medium">Button</div>
                      <p className="text-muted-foreground text-sm">
                        클릭 가능한 인터랙티브 요소
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#">
                      <div className="font-medium">Input</div>
                      <p className="text-muted-foreground text-sm">
                        텍스트 입력 필드
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Container>
        <CodeBlock
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4">
          <NavigationMenuLink href="#">
            <div className="font-medium">Introduction</div>
            <p className="text-muted-foreground text-sm">
              디자인 시스템 시작하기
            </p>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@gpters-internal/ui';

function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
