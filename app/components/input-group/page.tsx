import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@components/input-group';
import { Kbd } from '@components/kbd';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Search, Mail, Eye, Copy, Send } from 'lucide-react';

export default function InputGroupPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Input Group"
        description="입력 필드에 부가 요소를 결합하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          Input 앞이나 뒤에 아이콘, 텍스트, 버튼을 추가할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <InputGroup>
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </Container>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupAddon>
    <Search className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Text</h2>
        <p className="text-muted-foreground">
          텍스트를 포함한 addon을 추가할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="www.example.com" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Mail className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@gmail.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Container>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="www.example.com" />
</InputGroup>

<InputGroup>
  <InputGroupAddon>
    <Mail className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>@gmail.com</InputGroupText>
  </InputGroupAddon>
</InputGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Button</h2>
        <p className="text-muted-foreground">
          버튼을 포함한 인풋 그룹입니다.
        </p>
        <Container className="flex-col max-w-md">
          <InputGroup>
            <InputGroupInput type="password" placeholder="Password" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs">
                <Eye className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Copy this text" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <Copy className="size-4" />
                Copy
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Container>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupInput type="password" placeholder="Password" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs">
      <Eye className="size-4" />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

<InputGroup>
  <InputGroupInput placeholder="Copy this text" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>
      <Copy className="size-4" />
      Copy
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Keyboard Shortcut</h2>
        <p className="text-muted-foreground">
          키보드 단축키를 표시할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <InputGroup>
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <Kbd>Ctrl+K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </Container>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupAddon>
    <Search className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Kbd>Ctrl+K</Kbd>
  </InputGroupAddon>
</InputGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Textarea</h2>
        <p className="text-muted-foreground">
          Textarea와 함께 사용할 수 있습니다.
        </p>
        <Container className="flex-col max-w-md">
          <InputGroup>
            <InputGroupTextarea placeholder="Type your message..." />
            <InputGroupAddon align="block-end">
              <InputGroupButton size="sm">
                <Send className="size-4" />
                Send
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Container>
        <CodeBlock
          code={`<InputGroup>
  <InputGroupTextarea placeholder="Type your message..." />
  <InputGroupAddon align="block-end">
    <InputGroupButton size="sm">
      <Send className="size-4" />
      Send
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@gpters-internal/ui';

function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
