'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'Getting Started',
    links: [
      { href: '/', label: 'Introduction' },
      { href: '/install/', label: 'Install' },
    ],
  },
  {
    title: 'Foundations',
    links: [
      { href: '/tokens/', label: 'Design Tokens' },
    ],
  },
  {
    title: 'Components',
    links: [
      { href: '/components/', label: 'Overview' },
      { href: '/components/button/', label: 'Button' },
      { href: '/components/input/', label: 'Input' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-logo">
          <div className="sidebar-logo-icon" />
          <span>@geniefy/ui</span>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            {navigation.map((section) => (
              <div key={section.title} className="sidebar-section">
                <div className="sidebar-section-title">{section.title}</div>
                <div className="sidebar-nav">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`sidebar-link ${pathname === link.href ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" />
          <span>@geniefy/ui</span>
        </div>

        {navigation.map((section) => (
          <div key={section.title} className="sidebar-section">
            <div className="sidebar-section-title">{section.title}</div>
            <nav className="sidebar-nav">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sidebar-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </aside>
    </>
  );
}
