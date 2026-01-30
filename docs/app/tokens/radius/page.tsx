import { PageHeader } from '../../../ui/PageHeader';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';

const radiusTokens = [
  { name: 'sm', cssVar: '--radius-sm', tailwind: 'rounded-sm', value: '2px', usage: '태그, 뱃지' },
  { name: 'md', cssVar: '--radius-md', tailwind: 'rounded-md', value: '4px', usage: '버튼, 인풋 (기본값)' },
  { name: 'lg', cssVar: '--radius-lg', tailwind: 'rounded-lg', value: '6px', usage: '카드, 모달' },
  { name: 'xl', cssVar: '--radius-xl', tailwind: 'rounded-xl', value: '8px', usage: '큰 카드' },
  { name: '2xl', cssVar: '--radius-2xl', tailwind: 'rounded-2xl', value: '12px', usage: '대형 컨테이너' },
  { name: '3xl', cssVar: '--radius-3xl', tailwind: 'rounded-3xl', value: '16px', usage: '특수 용도' },
  { name: 'full', cssVar: '--radius-full', tailwind: 'rounded-full', value: '9999px', usage: '아바타, 토글' },
];

export default function RadiusPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Radius"
        description="7개 border-radius 토큰"
      />

      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          일관된 모서리 둥글기를 위한 토큰입니다. 컴포넌트 용도에 맞는 적절한 radius를 선택하세요.
          기본값은 <code className="text-sm bg-muted px-1 py-0.5 rounded">rounded-md</code> (4px)입니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">미리보기</h2>
        <div className="flex flex-wrap gap-4">
          {radiusTokens.map((token) => (
            <div key={token.name} className="flex flex-col items-center gap-2">
              <div
                className="h-16 w-16 border-2 border-primary bg-primary/10"
                style={{ borderRadius: token.value }}
              />
              <div className="text-label">{token.name}</div>
              <div className="text-[10px] text-muted-foreground">{token.value}</div>
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
                <TableHead className="w-[80px]">Token</TableHead>
                <TableHead className="w-[140px]">CSS Variable</TableHead>
                <TableHead className="w-[120px]">Tailwind</TableHead>
                <TableHead className="w-[80px]">Value</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {radiusTokens.map((token) => (
                <TableRow key={token.name}>
                  <TableCell className="font-medium">{token.name}</TableCell>
                  <TableCell className="text-code">{token.cssVar}</TableCell>
                  <TableCell className="text-code text-muted-foreground">{token.tailwind}</TableCell>
                  <TableCell className="text-code">{token.value}</TableCell>
                  <TableCell className="text-muted-foreground">{token.usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

    </div>
  );
}
