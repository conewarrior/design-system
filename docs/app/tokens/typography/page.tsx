import { PageHeader } from '../../../ui/PageHeader';
import { Kbd } from '@components/kbd';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/table';

const fontSizeTokens = [
  { name: 'display', cssVar: '--text-display', value: '60px', usage: '히어로, 랜딩 페이지' },
  { name: 'page-title', cssVar: '--text-page-title', value: '36px', usage: '페이지 제목 (h1)' },
  { name: 'section-title', cssVar: '--text-section-title', value: '24px', usage: '섹션 제목 (h2)' },
  { name: 'card-title', cssVar: '--text-card-title', value: '18px', usage: '카드 제목 (h3)' },
  { name: 'body', cssVar: '--text-body', value: '16px', usage: '본문 기본' },
  { name: 'body-sm', cssVar: '--text-body-sm', value: '14px', usage: '본문 작은 크기' },
  { name: 'caption', cssVar: '--text-caption', value: '12px', usage: '캡션, 레이블' },
];

const fontWeightTokens = [
  { name: 'normal', cssVar: '--font-normal', value: '400', usage: '본문 텍스트' },
  { name: 'medium', cssVar: '--font-medium', value: '500', usage: '강조 텍스트' },
  { name: 'semibold', cssVar: '--font-semibold', value: '600', usage: '제목' },
  { name: 'bold', cssVar: '--font-bold', value: '700', usage: '페이지 제목' },
];

const lineHeightTokens = [
  { name: 'tight', cssVar: '--leading-tight', value: '1.25', usage: '제목용' },
  { name: 'normal', cssVar: '--leading-normal', value: '1.5', usage: '본문용' },
  { name: 'relaxed', cssVar: '--leading-relaxed', value: '1.625', usage: '긴 문단용' },
];

export default function TypographyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Typography"
        description="폰트 패밀리, 크기, 굵기, 행간 토큰"
      />

      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          일관된 타이포그래피를 위한 토큰입니다. 용도별 시맨틱 이름을 사용하여 적절한 크기와 스타일을 적용하세요.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">폰트 패밀리</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border p-4 space-y-2">
            <div className="text-label">Sans (기본)</div>
            <div className="font-sans text-2xl">Pretendard Variable</div>
            <Kbd className="text-muted-foreground">--font-sans</Kbd>
          </div>
          <div className="rounded-md border p-4 space-y-2">
            <div className="text-label">Mono (코드)</div>
            <div className="font-mono text-2xl">Fira Code</div>
            <Kbd className="text-muted-foreground">--font-mono</Kbd>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">폰트 크기</h2>
        <div className="space-y-4">
          {fontSizeTokens.map((token) => (
            <div key={token.name} className="flex items-baseline gap-4 border-b border-border pb-4 last:border-0">
              <div
                className="flex-1 truncate"
                style={{ fontSize: token.value }}
              >
                {token.name}
              </div>
              <div className="text-xs text-muted-foreground w-20 text-right">{token.value}</div>
              <div className="text-xs text-muted-foreground w-40 text-right hidden sm:block">{token.usage}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">폰트 굵기</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>CSS Variable</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fontWeightTokens.map((token) => (
                <TableRow key={token.name}>
                  <TableCell className="font-medium" style={{ fontWeight: parseInt(token.value) }}>
                    {token.name}
                  </TableCell>
                  <TableCell className="text-code">{token.cssVar}</TableCell>
                  <TableCell className="text-code">{token.value}</TableCell>
                  <TableCell className="text-muted-foreground">{token.usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-subsection-title">행간 (Line Height)</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>CSS Variable</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineHeightTokens.map((token) => (
                <TableRow key={token.name}>
                  <TableCell className="font-medium">{token.name}</TableCell>
                  <TableCell className="text-code">{token.cssVar}</TableCell>
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
