import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  badge?: ReactNode;
}

export function PageHeader({ title, onBack, badge }: PageHeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-3) 0',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-1)',
            padding: 'var(--spacing-1) var(--spacing-2)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'transparent',
            color: 'var(--color-foreground)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-bg-surface-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <ArrowLeft size={16} />
          목록으로
        </button>
      )}
      <h1
        style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-foreground)',
          margin: 0,
        }}
      >
        {title}
      </h1>
      {badge && <span>{badge}</span>}
    </header>
  );
}
