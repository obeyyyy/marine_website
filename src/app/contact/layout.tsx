import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact VY Marine',
  description: 'Contact VY Marine to discuss marine engineering, dry dock support, vessel efficiency, technical supplies or crew requirements.',
  path: '/contact',
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
