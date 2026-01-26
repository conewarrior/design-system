'use client';

import React, { forwardRef, HTMLAttributes, useState, useRef } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  position?: TooltipPosition;
  delay?: number;
}

const positionStyles: Record<TooltipPosition, React.CSSProperties> = {
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: 'var(--spacing-1)',
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: 'var(--spacing-1)',
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: 'var(--spacing-1)',
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: 'var(--spacing-1)',
  },
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', delay = 200, style, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const handleMouseEnter = () => {
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
    };

    const handleMouseLeave = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(false);
    };

    return (
      <div
        ref={ref}
        style={{
          position: 'relative',
          display: 'inline-flex',
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            role="tooltip"
            style={{
              position: 'absolute',
              padding: 'var(--spacing-1) var(--spacing-2)',
              background: 'var(--color-bg-inverse)',
              color: 'var(--color-text-inverse)',
              fontSize: 'var(--font-size-xs)',
              borderRadius: 'var(--radius-sm)',
              whiteSpace: 'nowrap',
              zIndex: 'var(--z-index-tooltip)' as unknown as number,
              boxShadow: 'var(--shadow-md)',
              ...positionStyles[position],
            }}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
