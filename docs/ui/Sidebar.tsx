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
    title: 'Rules',
    links: [
      { href: '/rules/philosophy/', label: 'Philosophy' },
      { href: '/rules/', label: 'Markdown' },
      { href: '/rules/changelog/', label: 'Changelog' },
    ],
  },
  {
    title: 'Tokens',
    links: [
      { href: '/tokens/', label: 'Overview' },
      { href: '/tokens/colors/', label: 'Colors' },
      { href: '/tokens/radius/', label: 'Radius' },
      { href: '/tokens/typography/', label: 'Typography' },
    ],
  },
  {
    title: 'Components',
    links: [
      { href: '/components/accordion/', label: 'Accordion' },
      { href: '/components/alert/', label: 'Alert' },
      { href: '/components/alert-dialog/', label: 'Alert Dialog' },
      { href: '/components/aspect-ratio/', label: 'Aspect Ratio' },
      { href: '/components/avatar/', label: 'Avatar' },
      { href: '/components/badge/', label: 'Badge' },
      { href: '/components/breadcrumb/', label: 'Breadcrumb' },
      { href: '/components/button/', label: 'Button' },
      { href: '/components/button-group/', label: 'Button Group' },
      { href: '/components/calendar/', label: 'Calendar' },
      { href: '/components/card/', label: 'Card' },
      { href: '/components/carousel/', label: 'Carousel' },
      { href: '/components/chart/', label: 'Chart' },
      { href: '/components/checkbox/', label: 'Checkbox' },
      { href: '/components/collapsible/', label: 'Collapsible' },
      { href: '/components/command/', label: 'Command' },
      { href: '/components/context-menu/', label: 'Context Menu' },
      { href: '/components/dialog/', label: 'Dialog' },
      { href: '/components/drawer/', label: 'Drawer' },
      { href: '/components/dropdown-menu/', label: 'Dropdown Menu' },
      { href: '/components/empty/', label: 'Empty' },
      { href: '/components/field/', label: 'Field' },
      { href: '/components/form/', label: 'Form' },
      { href: '/components/hover-card/', label: 'Hover Card' },
      { href: '/components/input/', label: 'Input' },
      { href: '/components/input-group/', label: 'Input Group' },
      { href: '/components/input-otp/', label: 'Input OTP' },
      { href: '/components/item/', label: 'Item' },
      { href: '/components/kbd/', label: 'Kbd' },
      { href: '/components/label/', label: 'Label' },
      { href: '/components/menubar/', label: 'Menubar' },
      { href: '/components/navigation-menu/', label: 'Navigation Menu' },
      { href: '/components/pagination/', label: 'Pagination' },
      { href: '/components/popover/', label: 'Popover' },
      { href: '/components/progress/', label: 'Progress' },
      { href: '/components/radio-group/', label: 'Radio Group' },
      { href: '/components/scroll-area/', label: 'Scroll Area' },
      { href: '/components/select/', label: 'Select' },
      { href: '/components/separator/', label: 'Separator' },
      { href: '/components/sheet/', label: 'Sheet' },
      { href: '/components/sidebar/', label: 'Sidebar' },
      { href: '/components/skeleton/', label: 'Skeleton' },
      { href: '/components/slider/', label: 'Slider' },
      { href: '/components/sonner/', label: 'Sonner' },
      { href: '/components/spinner/', label: 'Spinner' },
      { href: '/components/switch/', label: 'Switch' },
      { href: '/components/table/', label: 'Table' },
      { href: '/components/tabs/', label: 'Tabs' },
      { href: '/components/textarea/', label: 'Textarea' },
      { href: '/components/toggle/', label: 'Toggle' },
      { href: '/components/toggle-group/', label: 'Toggle Group' },
      { href: '/components/tooltip/', label: 'Tooltip' },
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

// Templates 네비게이션
const templatesNavigation: NavGroup[] = [
  {
    title: 'Overview',
    links: [
      { href: '/templates/', label: 'All Templates' },
    ],
  },
  {
    title: 'Design Concepts',
    links: [
      { href: '/templates/gpters-brand/', label: 'GPTers Brand' },
      { href: '/templates/minimal-clean/', label: 'Minimal Clean' },
      { href: '/templates/dark-modern/', label: 'Dark Modern' },
      { href: '/templates/glassmorphism/', label: 'Glassmorphism' },
      { href: '/templates/soft-gradient/', label: 'Soft Gradient' },
      { href: '/templates/bold-vibrant/', label: 'Bold & Vibrant' },
      { href: '/templates/corporate-pro/', label: 'Corporate Pro' },
      { href: '/templates/futuristic/', label: 'Futuristic' },
    ],
  },
];

interface SidebarProps {
  section: Section;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

function getNavigation(section: Section): NavGroup[] {
  switch (section) {
    case 'docs':
      return docsNavigation;
    case 'status':
      return statusNavigation;
    case 'templates':
      return templatesNavigation;
  }
}

export function Sidebar({ section, isMobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const navigation = getNavigation(section);

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
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onMobileClose}
        >
          <nav 
            className="fixed left-0 top-14 bottom-0 w-full max-w-xs bg-background p-6 shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {navigation.map((group) => (
              <div key={group.title} className="mb-6">
                <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{group.title}</div>
                <div className="space-y-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                        isActive(link.href) 
                          ? 'bg-accent text-accent-foreground font-medium' 
                          : 'text-foreground/60'
                      }`}
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
      <aside 
        data-slot="sidebar"
        className="hidden md:block w-[220px] shrink-0 bg-background"
      >
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-6 pl-8">
          {navigation.map((group) => (
            <div key={group.title} className="mb-6">
              <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{group.title}</div>
              <nav className="space-y-1">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive(link.href) 
                        ? 'bg-accent text-accent-foreground font-medium' 
                        : 'text-foreground/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
