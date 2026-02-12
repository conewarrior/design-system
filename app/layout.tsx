import type { Metadata, Viewport } from 'next';
import { LayoutClient } from '../ui/LayoutClient';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '@gpters-internal/ui - Design System',
  description: 'Design tokens and React components for Geniefy products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
