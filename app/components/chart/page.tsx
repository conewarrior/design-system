'use client';

import { PageHeader } from '../../../ui/PageHeader';
import { Container } from '../../../ui/Container';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@components/chart';
import { CodeBlock } from '../../../ui/CodeBlock';
import { Bar, BarChart, XAxis, YAxis, Line, LineChart, Pie, PieChart } from 'recharts';

const barData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-primary)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--color-secondary)',
  },
};

const pieData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-primary)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-secondary)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-muted-foreground)' },
];

const pieConfig: ChartConfig = {
  chrome: { label: 'Chrome', color: 'var(--color-primary)' },
  safari: { label: 'Safari', color: 'var(--color-secondary)' },
  firefox: { label: 'Firefox', color: 'var(--color-muted-foreground)' },
};

export default function ChartPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Chart"
        description="Recharts 기반의 데이터 시각화 컴포넌트"
      />

      <section className="space-y-4">
        <h2 className="text-subsection-title">Bar Chart</h2>
        <p className="text-muted-foreground">
          기본 막대 차트입니다. ChartContainer로 감싸서 스타일을 적용합니다.
        </p>
        <Container>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Container>
        <CodeBlock
          code={`const chartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-primary)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--color-secondary)',
  },
};

<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Line Chart</h2>
        <p className="text-muted-foreground">
          선형 차트로 추세를 표현합니다.
        </p>
        <Container>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={barData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="var(--color-desktop)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="mobile"
                stroke="var(--color-mobile)"
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        </Container>
        <CodeBlock
          code={`<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line
      type="monotone"
      dataKey="desktop"
      stroke="var(--color-desktop)"
      strokeWidth={2}
    />
    <Line
      type="monotone"
      dataKey="mobile"
      stroke="var(--color-mobile)"
      strokeWidth={2}
    />
  </LineChart>
</ChartContainer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Pie Chart</h2>
        <p className="text-muted-foreground">
          원형 차트로 비율을 표현합니다.
        </p>
        <Container>
          <ChartContainer config={pieConfig} className="h-[300px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                data={pieData}
                dataKey="visitors"
                nameKey="browser"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
              />
            </PieChart>
          </ChartContainer>
        </Container>
        <CodeBlock
          code={`<ChartContainer config={pieConfig} className="h-[300px] w-full">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie
      data={pieData}
      dataKey="visitors"
      nameKey="browser"
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
    />
  </PieChart>
</ChartContainer>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">Usage</h2>
        <CodeBlock
          code={`import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@gpters-internal/ui';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const chartConfig: ChartConfig = {
  value: {
    label: 'Value',
    color: 'var(--color-primary)',
  },
};

function Example() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" />
      </BarChart>
    </ChartContainer>
  );
}`}
          language="tsx"
        />
      </section>
    </div>
  );
}
