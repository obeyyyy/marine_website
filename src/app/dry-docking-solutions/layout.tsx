import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Dry Docking Support & Coordination',
  description: 'Dry dock planning support, scope discussions, yard coordination and project communication for commercial vessel owners and managers.',
  path: '/dry-docking-solutions',
});

export default function DryDockingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
