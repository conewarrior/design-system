import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '@components/empty';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Inbox, FileX, Search, Plus } from 'lucide-react';

export default function EmptyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Empty"
        description="콘텐츠가 없을 때 표시하는 빈 상태 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본 Empty 컴포넌트입니다.
        </p>
        <Container>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>
                You have no messages in your inbox. Start a conversation to see messages here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Container>
        <CodeBlock
          code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>
      You have no messages in your inbox. Start a conversation to see messages here.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Action</h2>
        <p className="text-muted-foreground">
          액션 버튼을 추가할 수 있습니다.
        </p>
        <Container>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileX />
              </EmptyMedia>
              <EmptyTitle>No files found</EmptyTitle>
              <EmptyDescription>
                There are no files in this folder. Upload files to get started.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>
                <Plus />
                Upload File
              </Button>
            </EmptyContent>
          </Empty>
        </Container>
        <CodeBlock
          code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FileX />
    </EmptyMedia>
    <EmptyTitle>No files found</EmptyTitle>
    <EmptyDescription>
      There are no files in this folder. Upload files to get started.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <Plus />
      Upload File
    </Button>
  </EmptyContent>
</Empty>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Search Empty State</h2>
        <p className="text-muted-foreground">
          검색 결과가 없을 때 사용하는 빈 상태입니다.
        </p>
        <Container>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Search />
              </EmptyMedia>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>
                We couldn&apos;t find anything matching your search.
                Try using different keywords.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">Clear search</Button>
            </EmptyContent>
          </Empty>
        </Container>
        <CodeBlock
          code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Search />
    </EmptyMedia>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      We couldn't find anything matching your search.
      Try using different keywords.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline">Clear search</Button>
  </EmptyContent>
</Empty>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Media Variants</h2>
        <p className="text-muted-foreground">
          EmptyMedia는 default와 icon 두 가지 variant를 제공합니다.
        </p>
        <Container className="grid grid-cols-1 md:grid-cols-2">
          <Empty className="border min-h-[200px]">
            <EmptyHeader>
              <EmptyMedia variant="default">
                <Inbox className="size-16 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>Default Variant</EmptyTitle>
              <EmptyDescription>
                Larger icon without background
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
          <Empty className="border min-h-[200px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>Icon Variant</EmptyTitle>
              <EmptyDescription>
                Smaller icon with background
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Container>
        <CodeBlock
          code={`{/* Default variant - larger icon without background */}
<EmptyMedia variant="default">
  <Inbox className="size-16 text-muted-foreground" />
</EmptyMedia>

{/* Icon variant - smaller icon with background */}
<EmptyMedia variant="icon">
  <Inbox />
</EmptyMedia>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from '@gpters-internal/ui';

function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No items</EmptyTitle>
        <EmptyDescription>
          There are no items to display.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add Item</Button>
      </EmptyContent>
    </Empty>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
