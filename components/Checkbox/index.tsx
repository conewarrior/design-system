import React, { forwardRef, InputHTMLAttributes } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  checkboxSize?: CheckboxSize;
  label?: string;
}

const sizeStyles: Record<CheckboxSize, { box: React.CSSProperties; label: React.CSSProperties }> = {
  sm: {
    box: { width: '14px', height: '14px' },
    label: { fontSize: 'var(--font-size-sm)' },
  },
  md: {
    box: { width: '16px', height: '16px' },
    label: { fontSize: 'var(--font-size-base)' },
  },
  lg: {
    box: { width: '20px', height: '20px' },
    label: { fontSize: 'var(--font-size-lg)' },
  },
};

const baseBoxStyles: React.CSSProperties = {
  appearance: 'none',
  margin: 0,
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--color-border)',
  background: 'var(--color-bg-surface)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.15s ease',
  position: 'relative',
  flexShrink: 0,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checkboxSize = 'md', label, style, disabled, className, ...props }, ref) => {
    const id = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <label
        htmlFor={id}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          disabled={disabled}
          style={{
            ...baseBoxStyles,
            ...sizeStyles[checkboxSize].box,
            ...style,
          }}
          className={`checkbox-input ${className || ''}`}
          {...props}
        />
        {label && (
          <span style={{ ...sizeStyles[checkboxSize].label, color: 'var(--color-text-default)' }}>
            {label}
          </span>
        )}
        <style>{`
          .checkbox-input:checked {
            background: var(--color-primary) !important;
            border-color: var(--color-primary) !important;
          }
          .checkbox-input:checked::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='3,8 6,11 13,4'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          .checkbox-input:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--color-primary-bg);
          }
        `}</style>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
