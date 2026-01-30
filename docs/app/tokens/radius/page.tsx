const radiusTokens = [
  {
    name: 'Base',
    cssVar: '--radius',
    tailwind: 'rounded',
    value: '0.25rem',
    description: 'shadcn 컴포넌트 기본 radius',
    isBase: true,
  },
  {
    name: 'Small',
    cssVar: '--radius-sm',
    tailwind: 'rounded-sm',
    value: '0.125rem',
  },
  {
    name: 'Medium',
    cssVar: '--radius-md',
    tailwind: 'rounded-md',
    value: '0.25rem',
  },
  {
    name: 'Large',
    cssVar: '--radius-lg',
    tailwind: 'rounded-lg',
    value: '0.375rem',
  },
  {
    name: 'Extra Large',
    cssVar: '--radius-xl',
    tailwind: 'rounded-xl',
    value: '0.5rem',
  },
  {
    name: '2X Large',
    cssVar: '--radius-2xl',
    tailwind: 'rounded-2xl',
    value: '0.75rem',
  },
  {
    name: '3X Large',
    cssVar: '--radius-3xl',
    tailwind: 'rounded-3xl',
    value: '1rem',
  },
  {
    name: 'Full',
    cssVar: '--radius-full',
    tailwind: 'rounded-full',
    value: '9999px',
  },
];

export default function RadiusPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Radius</h1>
      <p className="text-lg text-muted-foreground mb-8">
        8개 border-radius 토큰
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {radiusTokens.map((token) => (
          <div key={token.cssVar} className="p-4 border rounded-lg">
            <div
              className="w-12 h-12 bg-primary mb-4"
              style={{ borderRadius: token.value }}
            />
            <code className="text-sm font-mono">{token.cssVar}</code>
            <p className="text-sm text-muted-foreground mt-2">{token.tailwind}</p>
            <p className="text-sm font-mono text-foreground mt-1">{token.value}</p>
            {token.isBase && (
              <p className="text-xs text-muted-foreground mt-2">
                {token.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
