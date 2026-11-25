import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Ship Repairs, Marine Spares & Supplies',
  description: 'Technical spares and stores sourcing, plus coordination support for commercial vessel repair and maintenance requirements.',
  path: '/ship-repairs-supplies',
});

export default function ShipRepairsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
