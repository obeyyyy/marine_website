import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Marine Engineering & Technical Services',
  description: 'Explore VY Marine services for shipowners and managers: decarbonization support, energy efficiency, dry dock coordination, ship repairs, technical supplies and crew supply.',
  path: '/services',
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
