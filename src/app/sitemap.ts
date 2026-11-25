import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

const routes = [
  '/',
  '/services',
  '/green-solutions',
  '/optimization-energy-efficiency',
  '/dry-docking-solutions',
  '/ship-repairs-supplies',
  '/technical-consultancy',
  '/crew-supply',
  '/trading',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
