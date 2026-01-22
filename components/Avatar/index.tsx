'use client';

import React, { forwardRef, ImgHTMLAttributes, useState } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  size?: AvatarSize;
  fallback?: string;
}

const sizeStyles: Record<AvatarSize, React.CSSProperties> = {
  xs: { width: '24px', height: '24px', fontSize: 'var(--font-size-xs)' },
  sm: { width: '32px', height: '32px', fontSize: 'var(--font-size-sm)' },
  md: { width: '40px', height: '40px', fontSize: 'var(--font-size-base)' },
  lg: { width: '48px', height: '48px', fontSize: 'var(--font-size-lg)' },
  xl: { width: '64px', height: '64px', fontSize: 'var(--font-size-xl)' },
};

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-full)',
  overflow: 'hidden',
  background: 'var(--color-secondary)',
  color: 'var(--color-secondary-foreground)',
  fontWeight: 'var(--font-weight-medium)' as unknown as number,
  flexShrink: 0,
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = 'md', src, alt, fallback, style, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    const combinedStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[size],
      ...style,
    };

    const getFallbackText = () => {
      if (fallback) return fallback;
      if (alt) return alt.charAt(0).toUpperCase();
      return '?';
    };

    if (!src || hasError) {
      return (
        <span ref={ref} style={combinedStyles}>
          {getFallbackText()}
        </span>
      );
    }

    return (
      <span ref={ref} style={combinedStyles}>
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          {...props}
        />
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
