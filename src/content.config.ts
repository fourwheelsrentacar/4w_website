import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.enum([
      'Renting 101',
      'Self Drive',
      'With Driver',
      'Lahore Travel',
      'Airport Rental',
      'Monthly & Long-Term Rental',
      'Corporate Travel',
      'Choosing a Car',
      'Rental Safety',
      '4WHEELS News',
      'Public Notices'
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('4WHEELS Editorial Team'),
    datePublished: z.string(),
    dateModified: z.string(),
    heroImage: z.string().default('/brand/og-brand.png'),
    heroImageAlt: z.string().default('4WHEELS Rent a Car Lahore'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    index: z.boolean().default(true),
    readingTime: z.string().default('5 min read'),
    primaryQuery: z.string().optional(),
    secondaryQueries: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    factChecked: z.boolean().default(true),
    factCheckedBy: z.string().default('4WHEELS Editorial Team'),
    reviewDate: z.string().default('2025-01-01'),
    quickAnswer: z.string().optional(),
    keyTakeaways: z.array(z.string()).default([])
  })
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/press' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    type: z.enum([
      'Company News',
      'Public Notice',
      'Brand Protection',
      'Service Announcement',
      'Media Statement'
    ]),
    status: z.enum(['Active Notice', 'Resolved', 'Archived']).default('Active Notice'),
    author: z.string().default('4WHEELS Rent a Car Management'),
    heroImage: z.string().default('/brand/og-brand.png'),
    index: z.boolean().default(true),
    entityName: z.string().optional(),
    entityWebsite: z.string().optional(),
    entityPhone: z.string().optional(),
    entityEmail: z.string().optional()
  })
});

export const collections = { blog, press };
