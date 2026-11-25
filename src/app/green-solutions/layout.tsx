import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Decarbonization & Green Marine Solutions',
  description: 'Explore practical decarbonization, emissions planning and energy-saving support for commercial vessels from VY Marine.',
  path: '/green-solutions',
});

export default function GreenSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
