import type { Metadata } from 'next';

const configuredSiteUrl = process.env.SITE_URL || 'https://marine-website-gamma.vercel.app';

export const siteUrl = configuredSiteUrl.replace(/\/+$/, '');
export const socialImagePath = '/images/ship-scrub-poster.jpg';

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      siteName: 'VY Marine',
      title,
      description,
      url: path,
      images: [
        {
          url: socialImagePath,
          width: 1280,
          height: 720,
          alt: 'Commercial vessel at sea, representing VY Marine’s maritime services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImagePath],
    },
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'VY Marine',
      url: siteUrl,
      logo: `${siteUrl}/images/new-logo.png`,
      description:
        'Marine engineering, energy efficiency, dry dock support, technical supplies and specialist services.',
      email: 'admin@vymarines.com',
      telephone: ['+44 7424 475971', '+86 153 1722 3817'],
    },
    {
      '@type': 'WebSite',
      name: 'VY Marine',
      url: siteUrl,
      inLanguage: 'en',
    },
  ],
};
