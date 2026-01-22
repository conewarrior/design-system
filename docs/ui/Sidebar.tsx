'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Section } from './TopNav';

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  title: string;
  links: NavLink[];
}

// Docs 네비게이션
const docsNavigation: NavGroup[] = [
  {
    title: 'Getting Started',
    links: [
      { href: '/', label: 'Introduction' },
      { href: '/install/', label: 'Install' },
      { href: '/install/how-it-works/', label: 'How it Works' },
    ],
  },
  {
    title: 'Foundations',
    links: [
      { href: '/tokens/', label: 'Design Tokens' },
      { href: '/rules/', label: 'Design Rules' },
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

// Status 네비게이션
const statusNavigation: NavGroup[] = [
  {
    title: 'Overview',
    links: [
      { href: '/status/', label: 'Dashboard' },
    ],
  },
  {
    title: 'Changes',
    links: [
      { href: '/status/changes/', label: 'All Changes' },
      { href: '/status/changes/components/', label: 'Components' },
      { href: '/status/changes/tokens/', label: 'Tokens' },
    ],
  },
  {
    title: 'Adoption',
    links: [
      { href: '/status/adoption/', label: 'Dashboard' },
      { href: '/status/adoption/projects/', label: 'By Project' },
      { href: '/status/adoption/pending/', label: 'Pending PRs' },
    ],
  },
  {
    title: 'Planning',
    links: [
      { href: '/status/roadmap/', label: 'Roadmap' },
      { href: '/status/migration/', label: 'Migration Guide' },
    ],
  },
];

interface SidebarProps {
  section: Section;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ section, isMobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const navigation = section === 'docs' ? docsNavigation : statusNavigation;

  const isActive = (href: string) => {
    if (pathname === href) return true;
    if (pathname === href.replace(/\/$/, '')) return true;
    if (pathname + '/' === href) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Nav Overlay */}
      {isMobileOpen && (
        <div className="mobile-nav-overlay" onClick={onMobileClose}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            {navigation.map((group) => (
              <div key={group.title} className="sidebar-section">
                <div className="sidebar-section-title">{group.title}</div>
                <div className="sidebar-nav">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`sidebar-link ${isActive(link.href) ? 'active' : ''}`}
                      onClick={onMobileClose}
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
        {navigation.map((group) => (
          <div key={group.title} className="sidebar-section">
            <div className="sidebar-section-title">{group.title}</div>
            <nav className="sidebar-nav">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`sidebar-link ${isActive(link.href) ? 'active' : ''}`}
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
