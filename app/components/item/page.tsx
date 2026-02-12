import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from '@components/item';
import { Button } from '@components/button';
import { Badge } from '@components/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
import { CodeBlock } from '../../../ui/CodeBlock';
import { MoreHorizontal, User, Settings, FileText } from 'lucide-react';

export default function ItemPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Item"
        description="리스트 아이템을 구성하는 유연한 레이아웃 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          Item은 미디어, 콘텐츠, 액션으로 구성된 리스트 아이템입니다.
        </p>
        <Container className="flex-col">
          <Item>
            <ItemMedia variant="icon">
              <User />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>User Profile</ItemTitle>
              <ItemDescription>Manage your account settings and preferences</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontal />
              </Button>
            </ItemActions>
          </Item>
        </Container>
        <CodeBlock
          code={`<Item>
  <ItemMedia variant="icon">
    <User />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>User Profile</ItemTitle>
    <ItemDescription>Manage your account settings</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="icon-sm">
      <MoreHorizontal />
    </Button>
  </ItemActions>
</Item>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Variants</h2>
        <p className="text-muted-foreground">
          3가지 variant를 제공합니다.
        </p>
        <Container className="flex-col">
          <Item variant="default">
            <ItemContent>
              <ItemTitle>Default Variant</ItemTitle>
              <ItemDescription>기본 스타일입니다.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline Variant</ItemTitle>
              <ItemDescription>테두리가 있는 스타일입니다.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted Variant</ItemTitle>
              <ItemDescription>배경색이 있는 스타일입니다.</ItemDescription>
            </ItemContent>
          </Item>
        </Container>
        <CodeBlock
          code={`<Item variant="default">...</Item>
<Item variant="outline">...</Item>
<Item variant="muted">...</Item>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Media Variants</h2>
        <p className="text-muted-foreground">
          ItemMedia는 아이콘과 이미지를 지원합니다.
        </p>
        <Container className="flex-col">
          <Item>
            <ItemMedia variant="default">
              <FileText className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default Media</ItemTitle>
              <ItemDescription>아이콘만 표시</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemMedia variant="icon">
              <Settings />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Icon Media</ItemTitle>
              <ItemDescription>아이콘 박스 스타일</ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemMedia variant="image">
              <img src="https://github.com/shadcn.png" alt="Avatar" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Image Media</ItemTitle>
              <ItemDescription>이미지 스타일</ItemDescription>
            </ItemContent>
          </Item>
        </Container>
        <CodeBlock
          code={`<ItemMedia variant="default">
  <FileText className="size-5" />
</ItemMedia>

<ItemMedia variant="icon">
  <Settings />
</ItemMedia>

<ItemMedia variant="image">
  <img src="..." alt="Avatar" />
</ItemMedia>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Item Group</h2>
        <p className="text-muted-foreground">
          ItemGroup으로 여러 아이템을 그룹화할 수 있습니다.
        </p>
        <Container className="flex-col">
          <ItemGroup className="rounded-lg border divide-y">
            <Item size="sm">
              <ItemMedia variant="icon">
                <User />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Profile</ItemTitle>
              </ItemContent>
              <ItemActions>
                <Badge variant="secondary">New</Badge>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item size="sm">
              <ItemMedia variant="icon">
                <Settings />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Settings</ItemTitle>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item size="sm">
              <ItemMedia variant="icon">
                <FileText />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Documents</ItemTitle>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Container>
        <CodeBlock
          code={`<ItemGroup className="rounded-lg border divide-y">
  <Item size="sm">
    <ItemMedia variant="icon">
      <User />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Profile</ItemTitle>
    </ItemContent>
    <ItemActions>
      <Badge variant="secondary">New</Badge>
    </ItemActions>
  </Item>
  <ItemSeparator />
  <Item size="sm">
    <ItemMedia variant="icon">
      <Settings />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Settings</ItemTitle>
    </ItemContent>
  </Item>
</ItemGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Item>
      <ItemMedia variant="icon">
        <User />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>User Profile</ItemTitle>
        <ItemDescription>Manage settings</ItemDescription>
      </ItemContent>
    </Item>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
