import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Marine Technician & Service Crew Supply',
  description: 'VyMarine recruits and employs trained technician crews for worldwide deployment on Hatchwin Marine Equipment Co., Limited international jobs.',
  path: '/crew-supply',
});

export default function CrewSupplyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
