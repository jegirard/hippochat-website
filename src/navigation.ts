import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      href: getPermalink('/product'),
    },
    {
      text: 'Use Cases',
      href: getPermalink('/use-cases'),
    },
    {
      text: "Who It's For",
      href: getPermalink('/who-its-for'),
    },
    {
      text: 'Build vs Status Quo',
      href: getPermalink('/build-vs-status-quo'),
    },
    {
      text: 'Security',
      href: getPermalink('/security'),
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Request Demo', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Overview', href: getPermalink('/product') },
        { text: 'Use Cases', href: getPermalink('/use-cases') },
        { text: "Who It's For", href: getPermalink('/who-its-for') },
        { text: 'Security', href: getPermalink('/security') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Build vs Status Quo', href: getPermalink('/build-vs-status-quo') },
        { text: 'All Resources', href: getPermalink('/resources') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
  ],
  socialLinks: [],
  footNote: `
    &copy; 2026 HippoChat. All rights reserved.
  `,
};
