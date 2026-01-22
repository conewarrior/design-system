import React, { forwardRef, HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'outline' | 'elevated';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: 'var(--color-bg-surface)',
    border: '1px solid var(--color-border)',
    boxShadow: 'none',
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--color-border)',
    boxShadow: 'none',
  },
  elevated: {
    background: 'var(--color-bg-surface)',
    border: 'none',
    boxShadow: 'var(--shadow-md)',
  },
};

const paddingStyles: Record<'none' | 'sm' | 'md' | 'lg', React.CSSProperties> = {
  none: { padding: '0' },
  sm: { padding: 'var(--spacing-3)' },
  md: { padding: 'var(--spacing-4)' },
  lg: { padding: 'var(--spacing-6)' },
};

const baseStyles: React.CSSProperties = {
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', style, children, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...variantStyles[variant],
      ...paddingStyles[padding],
      ...style,
    };

    return (
      <div ref={ref} style={combinedStyles} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          marginBottom: 'var(--spacing-3)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Title
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        style={{
          margin: 0,
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)' as unknown as number,
          lineHeight: 'var(--line-height-tight)',
          color: 'var(--color-text-default)',
          ...style,
        }}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

// Card Description
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        style={{
          margin: 0,
          marginTop: 'var(--spacing-1)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-normal)',
          ...style,
        }}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

// Card Content
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div ref={ref} style={style} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

// Card Footer
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          marginTop: 'var(--spacing-4)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
