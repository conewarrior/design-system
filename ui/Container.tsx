import { cn } from '../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4 p-6 rounded-lg border border-border", className)}>
      {children}
    </div>
  );
}
