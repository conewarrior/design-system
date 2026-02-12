'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TopNav, Section } from './TopNav';
import { Sidebar } from './Sidebar';

function getSection(pathname: string): Section {
  if (pathname.startsWith('/status')) {
    return 'status';
  }
  if (pathname.startsWith('/templates')) {
    return 'templates';
  }
  return 'docs';
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const section = getSection(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <TopNav
        currentSection={section}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex-1 md:flex">
        <Sidebar
          section={section}
          isMobileOpen={isMobileMenuOpen}
          onMobileClose={() => setIsMobileMenuOpen(false)}
        />
        <main 
          data-slot="main"
          className="flex-1 px-6 py-8 md:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-[40rem]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
