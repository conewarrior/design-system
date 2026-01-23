import React, { forwardRef, InputHTMLAttributes } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  radioSize?: RadioSize;
  label?: string;
}

const sizeStyles: Record<RadioSize, { box: React.CSSProperties; label: React.CSSProperties }> = {
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
  borderRadius: 'var(--radius-full)',
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

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ radioSize = 'md', label, style, disabled, className, ...props }, ref) => {
    const id = props.id || `radio-${Math.random().toString(36).substr(2, 9)}`;

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
          type="radio"
          id={id}
          disabled={disabled}
          style={{
            ...baseBoxStyles,
            ...sizeStyles[radioSize].box,
            ...style,
          }}
          className={`radio-input ${className || ''}`}
          {...props}
        />
        {label && (
          <span style={{ ...sizeStyles[radioSize].label, color: 'var(--color-text-default)' }}>
            {label}
          </span>
        )}
        <style>{`
          .radio-input:checked {
            border-color: var(--color-primary) !important;
          }
          .radio-input:checked::after {
            content: '';
            position: absolute;
            width: 50%;
            height: 50%;
            background: var(--color-primary);
            border-radius: var(--radius-full);
          }
          .radio-input:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--color-primary-bg);
          }
        `}</style>
      </label>
    );
  }
);

Radio.displayName = 'Radio';
