import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Vessel Energy Efficiency & Performance Support',
  description: 'VY Marine provides vessel performance assessments, voyage optimization support, energy-saving recommendations and digital monitoring guidance.',
  path: '/optimization-energy-efficiency',
});

export default function OptimizationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
