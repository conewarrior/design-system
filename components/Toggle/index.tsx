import { Switch } from '@design-geniefy/ui';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onLabel?: string;
  offLabel?: string;
}

export function Toggle({
  checked,
  onChange,
  onLabel = '노출',
  offLabel = '미노출',
}: ToggleProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
      }}
    >
      <Switch
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-foreground)',
          whiteSpace: 'nowrap',
        }}
      >
        {checked ? onLabel : offLabel}
      </span>
    </div>
  );
}
