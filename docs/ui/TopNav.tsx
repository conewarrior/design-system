'use client';

import Link from 'next/link';

export type Section = 'docs' | 'status';

interface TopNavProps {
  currentSection: Section;
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const sections = [
  { id: 'docs' as const, label: 'Docs', href: '/' },
  { id: 'status' as const, label: 'Status', href: '/status/' },
];

export function TopNav({ currentSection, onMobileMenuToggle, isMobileMenuOpen }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="top-nav-left">
        <Link href="/" className="top-nav-logo">
          <div className="top-nav-logo-icon" />
          <span>@geniefy/ui</span>
        </Link>
      </div>

      <nav className="top-nav-menu">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className={`top-nav-link ${currentSection === section.id ? 'active' : ''}`}
          >
            {section.label}
          </Link>
        ))}
      </nav>

      <button
        className="top-nav-mobile-btn"
        onClick={onMobileMenuToggle}
        aria-label="메뉴 열기"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}
