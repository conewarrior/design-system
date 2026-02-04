import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@components/select';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Select"
        description="드롭다운 목록에서 옵션을 선택하는 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          기본적인 셀렉트 예시입니다.
        </p>
        <Container>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
          </Select>
        </Container>
        <CodeBlock
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Groups</h2>
        <p className="text-muted-foreground">
          그룹으로 옵션을 분류할 수 있습니다.
        </p>
        <Container>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Container>
        <CodeBlock
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Asia</SelectLabel>
      <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
      <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Sizes</h2>
        <p className="text-muted-foreground">
          두 가지 크기를 제공합니다.
        </p>
        <Container>
          <Select>
            <SelectTrigger className="w-[180px]" size="sm">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]" size="default">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </Container>
        <CodeBlock
          code={`<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Small" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>

<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Default" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Select onValueChange={(value) => console.log(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
