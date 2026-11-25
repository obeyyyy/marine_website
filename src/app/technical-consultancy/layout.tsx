import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Marine Technical Consultancy & Engineering Support',
  description: 'Technical guidance for maritime projects, including feasibility reviews, design assessment, failure analysis and engineering coordination.',
  path: '/technical-consultancy',
});

export default function TechnicalConsultancyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
