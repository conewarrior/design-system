import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageNavLink {
  href: string;
  title: string;
}

interface PageNavProps {
  prev?: PageNavLink;
  next?: PageNavLink;
}

export function PageNav({ prev, next }: PageNavProps) {
  if (!prev && !next) return null;

  return (
    <div className="mt-12 flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:bg-accent"
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <div className="text-left">
            <div className="text-xs text-muted-foreground">이전</div>
            <div className="font-medium">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:bg-accent"
        >
          <div className="text-right">
            <div className="text-xs text-muted-foreground">다음</div>
            <div className="font-medium">{next.title}</div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
