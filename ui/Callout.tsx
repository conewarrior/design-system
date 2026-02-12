import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const calloutVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default: 'border-border bg-muted/50 text-foreground',
        info: 'border-primary/20 bg-primary/5 text-foreground',
        warning: 'border-yellow-500/20 bg-yellow-500/5 text-foreground',
        destructive: 'border-destructive/20 bg-destructive/5 text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface CalloutProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof calloutVariants> {}

function Callout({ className, variant, children, ...props }: CalloutProps) {
  return (
    <div
      data-slot="callout"
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Callout, calloutVariants };
