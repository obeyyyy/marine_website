import { Leaf, Gauge, Anchor, Wrench, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceNavItem = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICE_LINKS: ServiceNavItem[] = [
  {
    href: '/green-solutions',
    label: 'Green Solutions',
    description: 'Decarbonization, followed by digitalization, for greener fleets.',
    icon: Leaf,
  },
  {
    href: '/optimization-energy-efficiency',
    label: 'Optimization & Energy Efficiency',
    description: 'Energy saving solutions for more efficient vessel operations.',
    icon: Gauge,
  },
  {
    href: '/dry-docking-solutions',
    label: 'Dry Docking Solutions',
    description: 'Practical support for planned dry dock projects.',
    icon: Anchor,
  },
  {
    href: '/ship-repairs-supplies',
    label: 'Ship Repairs & Supplies',
    description: 'Technical spares, stores supply, and specialized services.',
    icon: Wrench,
  },
  {
    href: '/technical-consultancy',
    label: 'Technical Consultancy',
    description: 'Specialized technical services and engineering guidance.',
    icon: ClipboardCheck,
  },
];

export function isServicesPath(pathname: string | null): boolean {
  return pathname === '/services' || SERVICE_LINKS.some((service) => service.href === pathname);
}

export type NavLinkItem = {
  href: string;
  label: string;
};

/** Top-level links rendered around the Services mega menu trigger. */
export const PRIMARY_LINKS: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/trading', label: 'Trading' },
  { href: '/contact', label: 'Contact' },
];

/** Shared styling for the pill that highlights the active top-level nav item. */
export const NAV_LINK_CLASS =
  'relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300';
