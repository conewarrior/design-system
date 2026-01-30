const colorTokens = [
  {
    name: 'background',
    cssVar: '--background',
    tailwind: 'bg-background',
    lightValue: '0 0% 100%',
    darkValue: '240 10% 3.9%',
  },
  {
    name: 'foreground',
    cssVar: '--foreground',
    tailwind: 'text-foreground',
    lightValue: '240 10% 3.9%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'card',
    cssVar: '--card',
    tailwind: 'bg-card',
    lightValue: '0 0% 100%',
    darkValue: '240 10% 3.9%',
  },
  {
    name: 'card-foreground',
    cssVar: '--card-foreground',
    tailwind: 'text-card-foreground',
    lightValue: '240 10% 3.9%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'popover',
    cssVar: '--popover',
    tailwind: 'bg-popover',
    lightValue: '0 0% 100%',
    darkValue: '240 10% 3.9%',
  },
  {
    name: 'popover-foreground',
    cssVar: '--popover-foreground',
    tailwind: 'text-popover-foreground',
    lightValue: '240 10% 3.9%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'primary',
    cssVar: '--primary',
    tailwind: 'bg-primary',
    lightValue: '24 95% 53%',
    darkValue: '24 95% 53%',
  },
  {
    name: 'primary-foreground',
    cssVar: '--primary-foreground',
    tailwind: 'text-primary-foreground',
    lightValue: '0 0% 100%',
    darkValue: '240 10% 3.9%',
  },
  {
    name: 'secondary',
    cssVar: '--secondary',
    tailwind: 'bg-secondary',
    lightValue: '240 4.8% 95.9%',
    darkValue: '240 3.7% 15.9%',
  },
  {
    name: 'secondary-foreground',
    cssVar: '--secondary-foreground',
    tailwind: 'text-secondary-foreground',
    lightValue: '240 5.9% 10%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'muted',
    cssVar: '--muted',
    tailwind: 'bg-muted',
    lightValue: '240 4.8% 95.9%',
    darkValue: '240 3.7% 15.9%',
  },
  {
    name: 'muted-foreground',
    cssVar: '--muted-foreground',
    tailwind: 'text-muted-foreground',
    lightValue: '240 3.8% 46.1%',
    darkValue: '240 5% 64.9%',
  },
  {
    name: 'accent',
    cssVar: '--accent',
    tailwind: 'bg-accent',
    lightValue: '240 4.8% 95.9%',
    darkValue: '240 3.7% 15.9%',
  },
  {
    name: 'accent-foreground',
    cssVar: '--accent-foreground',
    tailwind: 'text-accent-foreground',
    lightValue: '240 5.9% 10%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'destructive',
    cssVar: '--destructive',
    tailwind: 'bg-destructive',
    lightValue: '0 84.2% 60.2%',
    darkValue: '0 62.8% 30.6%',
  },
  {
    name: 'destructive-foreground',
    cssVar: '--destructive-foreground',
    tailwind: 'text-destructive-foreground',
    lightValue: '0 0% 100%',
    darkValue: '0 0% 98%',
  },
  {
    name: 'border',
    cssVar: '--border',
    tailwind: 'border-border',
    lightValue: '240 5.9% 90%',
    darkValue: '240 3.7% 15.9%',
  },
  {
    name: 'input',
    cssVar: '--input',
    tailwind: 'border-input',
    lightValue: '240 5.9% 90%',
    darkValue: '240 3.7% 15.9%',
  },
  {
    name: 'ring',
    cssVar: '--ring',
    tailwind: 'ring-ring',
    lightValue: '24 95% 53%',
    darkValue: '24 95% 53%',
  },
];

export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Colors</h1>
        <p className="text-lg text-muted-foreground">
          19개 시맨틱 색상 토큰
        </p>
      </div>

      <div className="space-y-4">
        {colorTokens.map((token) => (
          <div
            key={token.name}
            className="flex items-center gap-4 p-4 border rounded-lg bg-card"
          >
            <div
              className="w-8 h-8 rounded border border-border flex-shrink-0"
              style={{ backgroundColor: `hsl(var(${token.cssVar}))` }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-mono text-sm font-semibold">{token.cssVar}</div>
              <div className="text-xs text-muted-foreground">{token.tailwind}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs">
                <span className="text-muted-foreground">Light: </span>
                <span className="font-mono">{token.lightValue}</span>
              </div>
              <div className="text-xs">
                <span className="text-muted-foreground">Dark: </span>
                <span className="font-mono">{token.darkValue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
