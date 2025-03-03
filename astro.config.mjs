// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AlgoDocs',
      // Set English as the default language for this site.
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
      },
      social: {
        github: 'https://github.com/AlgoLibrary',
      },
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'start_here' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Installation & Management',
          autogenerate: { directory: 'installation_management' },
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'configuration' },
        },
        {
          label: 'Theming',
          autogenerate: { directory: 'themes' },
        },
        {
          label: 'Extensions',
          autogenerate: { directory: 'extensions' },
        },
        {
          label: 'Reference',
          items: [{ label: 'FAQs', slug: 'reference/faqs' }],
        },
      ],
    }),
  ],
});
