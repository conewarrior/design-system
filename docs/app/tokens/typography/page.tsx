import { Card, CardContent, CardTitle } from '@components/card';

const fontTokens = [
  {
    name: 'Sans Serif',
    cssVar: '--font-sans',
    tailwind: 'font-sans',
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
    sample: 'The quick brown fox jumps over the lazy dog. 다람쥐 헌 쳇바퀴에 타고파.',
  },
  {
    name: 'Monospace',
    cssVar: '--font-mono',
    tailwind: 'font-mono',
    fontFamily: '"Fira Code", "JetBrains Mono", Consolas, monospace',
    sample: 'const greeting = "Hello, World!";',
  },
];

export default function TypographyPage() {
  return (
    <div>
      <h1 className="text-page-title mb-2">Typography</h1>
      <p className="text-page-description mb-8">2개 폰트 토큰</p>

      <div className="space-y-8">
        {fontTokens.map((token) => (
          <Card key={token.cssVar}>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">{token.name}</CardTitle>

              {/* Font sample */}
              <div
                className="text-2xl mb-4 p-4 bg-muted rounded"
                style={{ fontFamily: token.fontFamily }}
              >
                {token.sample}
              </div>

              {/* Token info */}
              <div className="space-y-2 text-body-sm">
                <p><span className="text-muted-foreground">CSS Variable:</span> <code className="text-code">{token.cssVar}</code></p>
                <p><span className="text-muted-foreground">Tailwind:</span> <code className="text-code">{token.tailwind}</code></p>
                <p><span className="text-muted-foreground">Font Stack:</span></p>
                <code className="block text-xs bg-muted p-2 rounded overflow-x-auto">{token.fontFamily}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
