import { ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
  cite?: string;
  variant?: 'default' | 'accent';
}

export const Blockquote = ({ children, cite, variant = 'default' }: BlockquoteProps) => {
  const borderColor = variant === 'accent' ? 'var(--color-primary)' : 'var(--color-border)';

  return (
    <figure style={{ margin: 0 }}>
      <blockquote
        style={{
          margin: 0,
          paddingLeft: 'var(--spacing-2)',
          borderLeft: `4px solid ${borderColor}`,
          color: 'var(--color-foreground)',
        }}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption
          style={{
            marginTop: 'var(--spacing-1)',
            paddingLeft: 'var(--spacing-2)',
            color: 'var(--color-muted)',
            fontSize: '0.875em',
          }}
        >
          — {cite}
        </figcaption>
      )}
    </figure>
  );
};
