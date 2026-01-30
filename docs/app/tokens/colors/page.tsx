import { PageHeader } from '../../../ui/PageHeader';
import { PageNav } from '../../../ui/PageNav';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';

const colorTokens = [
  { name: 'background', cssVar: '--background', tailwind: 'bg-background', light: '0 0% 100%', dark: '240 10% 3.9%' },
  { name: 'foreground', cssVar: '--foreground', tailwind: 'text-foreground', light: '240 10% 3.9%', dark: '0 0% 98%' },
  { name: 'card', cssVar: '--card', tailwind: 'bg-card', light: '0 0% 100%', dark: '240 10% 3.9%' },
  { name: 'card-foreground', cssVar: '--card-foreground', tailwind: 'text-card-foreground', light: '240 10% 3.9%', dark: '0 0% 98%' },
  { name: 'popover', cssVar: '--popover', tailwind: 'bg-popover', light: '0 0% 100%', dark: '240 10% 3.9%' },
  { name: 'popover-foreground', cssVar: '--popover-foreground', tailwind: 'text-popover-foreground', light: '240 10% 3.9%', dark: '0 0% 98%' },
  { name: 'primary', cssVar: '--primary', tailwind: 'bg-primary', light: '24 95% 53%', dark: '24 95% 53%' },
  { name: 'primary-foreground', cssVar: '--primary-foreground', tailwind: 'text-primary-foreground', light: '0 0% 100%', dark: '240 10% 3.9%' },
  { name: 'secondary', cssVar: '--secondary', tailwind: 'bg-secondary', light: '240 4.8% 95.9%', dark: '240 3.7% 15.9%' },
  { name: 'secondary-foreground', cssVar: '--secondary-foreground', tailwind: 'text-secondary-foreground', light: '240 5.9% 10%', dark: '0 0% 98%' },
  { name: 'muted', cssVar: '--muted', tailwind: 'bg-muted', light: '240 4.8% 95.9%', dark: '240 3.7% 15.9%' },
  { name: 'muted-foreground', cssVar: '--muted-foreground', tailwind: 'text-muted-foreground', light: '240 3.8% 46.1%', dark: '240 5% 64.9%' },
  { name: 'accent', cssVar: '--accent', tailwind: 'bg-accent', light: '240 4.8% 95.9%', dark: '240 3.7% 15.9%' },
  { name: 'accent-foreground', cssVar: '--accent-foreground', tailwind: 'text-accent-foreground', light: '240 5.9% 10%', dark: '0 0% 98%' },
  { name: 'destructive', cssVar: '--destructive', tailwind: 'bg-destructive', light: '0 84.2% 60.2%', dark: '0 62.8% 30.6%' },
  { name: 'destructive-foreground', cssVar: '--destructive-foreground', tailwind: 'text-destructive-foreground', light: '0 0% 100%', dark: '0 0% 98%' },
  { name: 'border', cssVar: '--border', tailwind: 'border-border', light: '240 5.9% 90%', dark: '240 3.7% 15.9%' },
  { name: 'input', cssVar: '--input', tailwind: 'border-input', light: '240 5.9% 90%', dark: '240 3.7% 15.9%' },
  { name: 'ring', cssVar: '--ring', tailwind: 'ring-ring', light: '24 95% 53%', dark: '24 95% 53%' },
];

export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Colors"
        description="19개 시맨틱 색상 토큰"
      />

      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          모든 색상은 HSL 형식으로 정의되어 있으며, 라이트/다크 모드에 따라 자동으로 전환됩니다.
          Tailwind 클래스를 사용하면 테마 전환을 자동으로 지원합니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">색상 미리보기</h2>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {colorTokens.map((token) => (
            <div key={token.name} className="space-y-1">
              <div
                className="h-10 w-full rounded-md border border-border"
                style={{ backgroundColor: `hsl(var(${token.cssVar}))` }}
                title={token.name}
              />
              <div className="text-[10px] text-muted-foreground truncate">{token.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">토큰 목록</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Token</TableHead>
                <TableHead className="w-[140px]">CSS Variable</TableHead>
                <TableHead className="w-[160px]">Tailwind Class</TableHead>
                <TableHead className="hidden md:table-cell">Light (HSL)</TableHead>
                <TableHead className="hidden md:table-cell">Dark (HSL)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorTokens.map((token) => (
                <TableRow key={token.name}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded border border-border flex-shrink-0"
                        style={{ backgroundColor: `hsl(var(${token.cssVar}))` }}
                      />
                      {token.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-code">{token.cssVar}</TableCell>
                  <TableCell className="text-code text-muted-foreground">{token.tailwind}</TableCell>
                  <TableCell className="text-code text-muted-foreground hidden md:table-cell">{token.light}</TableCell>
                  <TableCell className="text-code text-muted-foreground hidden md:table-cell">{token.dark}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <PageNav
        prev={{ href: '/tokens/', title: 'Tokens Overview' }}
        next={{ href: '/tokens/radius/', title: 'Radius' }}
      />
    </div>
  );
}
