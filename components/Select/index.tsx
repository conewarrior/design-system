import React, { forwardRef, SelectHTMLAttributes } from 'react';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectSize?: SelectSize;
  error?: boolean;
}

const sizeStyles: Record<SelectSize, React.CSSProperties> = {
  sm: {
    padding: 'var(--spacing-1) var(--spacing-2)',
    fontSize: 'var(--font-size-sm)',
  },
  md: {
    padding: 'var(--spacing-1-5) var(--spacing-3)',
    fontSize: 'var(--font-size-base)',
  },
  lg: {
    padding: 'var(--spacing-2) var(--spacing-4)',
    fontSize: 'var(--font-size-lg)',
  },
};

const baseStyles: React.CSSProperties = {
  display: 'block',
  width: '100%',
  background: 'var(--color-bg-surface)',
  color: 'var(--color-text-default)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  lineHeight: 'var(--line-height-normal)',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23737373' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  paddingRight: '36px',
};

const disabledStyles: React.CSSProperties = {
  opacity: 0.5,
  cursor: 'not-allowed',
  background: 'var(--color-secondary)',
};

const errorStyles: React.CSSProperties = {
  borderColor: 'var(--color-destructive)',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ selectSize = 'md', error = false, style, disabled, children, ...props }, ref) => {
    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[selectSize],
      ...(error ? errorStyles : {}),
      ...(disabled ? disabledStyles : {}),
      ...style,
    };

    return (
      <select ref={ref} style={combinedStyles} disabled={disabled} {...props}>
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
