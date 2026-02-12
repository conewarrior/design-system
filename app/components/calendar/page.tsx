"use client";

import { useState } from 'react';
import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import { Calendar } from '@components/calendar';
import { CodeBlock } from '../../../ui/CodeBlock';
import type { DateRange } from 'react-day-picker';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Calendar"
        description="날짜를 선택할 수 있는 캘린더 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Basic Usage</h2>
        <p className="text-muted-foreground">
          단일 날짜를 선택하는 기본 캘린더입니다.
        </p>
        <Container>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Container>
        <CodeBlock
          code={`const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Range Selection</h2>
        <p className="text-muted-foreground">
          날짜 범위를 선택할 수 있습니다.
        </p>
        <Container>
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            className="rounded-md border"
          />
        </Container>
        <CodeBlock
          code={`const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>();

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
  numberOfMonths={2}
  className="rounded-md border"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">With Dropdown Navigation</h2>
        <p className="text-muted-foreground">
          드롭다운으로 월/년도를 빠르게 선택할 수 있습니다.
        </p>
        <Container>
          <Calendar
            mode="single"
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
            className="rounded-md border"
          />
        </Container>
        <CodeBlock
          code={`<Calendar
  mode="single"
  captionLayout="dropdown"
  fromYear={2020}
  toYear={2030}
  className="rounded-md border"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Disabled Dates</h2>
        <p className="text-muted-foreground">
          특정 날짜를 비활성화할 수 있습니다.
        </p>
        <Container>
          <Calendar
            mode="single"
            disabled={(date) => date < new Date()}
            className="rounded-md border"
          />
        </Container>
        <CodeBlock
          code={`<Calendar
  mode="single"
  disabled={(date) => date < new Date()}
  className="rounded-md border"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import { Calendar } from '@gpters-internal/ui';
import { useState } from 'react';

function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
