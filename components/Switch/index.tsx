import React, { forwardRef, InputHTMLAttributes } from 'react';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  switchSize?: SwitchSize;
  label?: string;
}

const sizeStyles: Record<SwitchSize, { track: React.CSSProperties; thumb: React.CSSProperties; label: React.CSSProperties }> = {
  sm: {
    track: { width: '32px', height: '18px' },
    thumb: { width: '14px', height: '14px' },
    label: { fontSize: 'var(--font-size-sm)' },
  },
  md: {
    track: { width: '40px', height: '22px' },
    thumb: { width: '18px', height: '18px' },
    label: { fontSize: 'var(--font-size-base)' },
  },
  lg: {
    track: { width: '48px', height: '26px' },
    thumb: { width: '22px', height: '22px' },
    label: { fontSize: 'var(--font-size-lg)' },
  },
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ switchSize = 'md', label, style, disabled, className, ...props }, ref) => {
    const id = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const sizes = sizeStyles[switchSize];

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
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            ...sizes.track,
          }}
        >
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={id}
            disabled={disabled}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              cursor: disabled ? 'not-allowed' : 'pointer',
              ...style,
            }}
            className={`switch-input ${className || ''}`}
            {...props}
          />
          <span
            className="switch-track"
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--color-border-secondary)',
              borderRadius: 'var(--radius-full)',
              transition: 'background 0.15s ease',
            }}
          />
          <span
            className="switch-thumb"
            style={{
              position: 'absolute',
              top: '2px',
              left: '2px',
              background: 'white',
              borderRadius: 'var(--radius-full)',
              transition: 'transform 0.15s ease',
              boxShadow: 'var(--shadow-sm)',
              ...sizes.thumb,
            }}
          />
        </span>
        {label && (
          <span style={{ ...sizes.label, color: 'var(--color-text-default)' }}>
            {label}
          </span>
        )}
        <style>{`
          .switch-input:checked + .switch-track {
            background: var(--color-primary) !important;
          }
          .switch-input:checked ~ .switch-thumb {
            transform: translateX(calc(100% + 2px));
          }
          .switch-input:focus + .switch-track {
            box-shadow: 0 0 0 2px var(--color-primary-bg);
          }
        `}</style>
      </label>
    );
  }
);

Switch.displayName = 'Switch';
