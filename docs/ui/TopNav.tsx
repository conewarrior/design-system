'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export type Section = 'docs' | 'status' | 'templates';

interface TopNavProps {
  currentSection: Section;
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const sections = [
  { id: 'docs' as const, label: 'Docs', href: '/' },
  { id: 'status' as const, label: 'Status', href: '/status/' },
  { id: 'templates' as const, label: 'Templates', href: '/templates/' },
];

export function TopNav({ currentSection, onMobileMenuToggle, isMobileMenuOpen }: TopNavProps) {
  return (
    <header 
      data-slot="header"
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-primary" />
            <span className="font-bold">@design-geniefy/ui</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:flex-1 md:items-center md:gap-6 md:text-sm">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className={`transition-colors hover:text-foreground/80 ${
                currentSection === section.id 
                  ? 'text-foreground font-medium' 
                  : 'text-foreground/60'
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden"
          onClick={onMobileMenuToggle}
          aria-label="메뉴 열기"
        >
{isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
