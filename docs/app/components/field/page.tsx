import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from '@components/field';
import { Input } from '@components/input';
import { Checkbox } from '@components/checkbox';
import { CodeBlock } from '../../../ui/CodeBlock';

export default function FieldPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Field"
        description="폼 필드를 구성하는 레이아웃 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          Field는 Label, Input, Description, Error 메시지를 그룹화합니다.
        </p>
        <Container>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="you@example.com" />
            <FieldDescription>업무용 이메일을 입력하세요.</FieldDescription>
          </Field>
        </Container>
        <CodeBlock
          code={`<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" placeholder="you@example.com" />
  <FieldDescription>업무용 이메일을 입력하세요.</FieldDescription>
</Field>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Error</h2>
        <p className="text-muted-foreground">
          유효성 검증 실패 시 에러 메시지를 표시합니다.
        </p>
        <Container>
          <Field data-invalid="true" className="max-w-sm">
            <FieldLabel htmlFor="email-error">Email</FieldLabel>
            <Input id="email-error" type="email" aria-invalid="true" defaultValue="invalid-email" />
            <FieldError>유효한 이메일 주소를 입력하세요.</FieldError>
          </Field>
        </Container>
        <CodeBlock
          code={`<Field data-invalid="true">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid="true" defaultValue="invalid-email" />
  <FieldError>유효한 이메일 주소를 입력하세요.</FieldError>
</Field>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Horizontal Orientation</h2>
        <p className="text-muted-foreground">
          가로 방향 레이아웃을 지원합니다.
        </p>
        <Container className="flex-col">
          <Field orientation="horizontal">
            <Checkbox id="terms" />
            <FieldContent>
              <FieldLabel htmlFor="terms">이용약관에 동의합니다</FieldLabel>
              <FieldDescription>서비스 이용을 위해 필수입니다.</FieldDescription>
            </FieldContent>
          </Field>
        </Container>
        <CodeBlock
          code={`<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldContent>
    <FieldLabel htmlFor="terms">이용약관에 동의합니다</FieldLabel>
    <FieldDescription>서비스 이용을 위해 필수입니다.</FieldDescription>
  </FieldContent>
</Field>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Field Group</h2>
        <p className="text-muted-foreground">
          FieldGroup과 FieldSet으로 여러 필드를 그룹화할 수 있습니다.
        </p>
        <Container>
          <FieldSet className="max-w-md">
            <FieldLegend>개인정보</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">이름</FieldLabel>
                <Input id="name" placeholder="홍길동" />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">연락처</FieldLabel>
                <Input id="phone" placeholder="010-0000-0000" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </Container>
        <CodeBlock
          code={`<FieldSet>
  <FieldLegend>개인정보</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">이름</FieldLabel>
      <Input id="name" placeholder="홍길동" />
    </Field>
    <Field>
      <FieldLabel htmlFor="phone">연락처</FieldLabel>
      <Input id="phone" placeholder="010-0000-0000" />
    </Field>
  </FieldGroup>
</FieldSet>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from '@design-geniefy/ui';

function Example() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" />
      <FieldDescription>업무용 이메일을 입력하세요.</FieldDescription>
    </Field>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
