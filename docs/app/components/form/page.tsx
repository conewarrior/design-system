'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@components/form';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { CodeBlock } from '../../../ui/CodeBlock';
import { useForm } from 'react-hook-form';

export default function FormPage() {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Form"
        description="react-hook-form과 통합된 폼 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          Form 컴포넌트는 react-hook-form의 FormProvider를 래핑하여
          폼 상태 관리와 유효성 검증을 쉽게 처리합니다.
        </p>
        <Container>
          <Form {...form}>
            <form className="space-y-4 w-full max-w-sm">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>
                      공개적으로 표시될 이름입니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </Container>
        <CodeBlock
          code={`import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@design-geniefy/ui';

function Example() {
  const form = useForm({
    defaultValues: { username: '' },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                공개적으로 표시될 이름입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Validation</h2>
        <p className="text-muted-foreground">
          FormMessage는 자동으로 필드의 에러 메시지를 표시합니다.
        </p>
        <CodeBlock
          code={`import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력하세요.'),
});

function Example() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
} from '@design-geniefy/ui';`}
          language="tsx"
        />
      </section>
    </div>
  );
}
