import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Marine Equipment, Spares & Stores Supply',
  description: 'Sourcing support for marine equipment, OEM spare parts, vessel stores and industrial supplies, based on project requirements.',
  path: '/trading',
});

export default function TradingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
