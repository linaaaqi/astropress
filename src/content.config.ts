import { defineCollection } from 'astro:content';

const contentCollection = defineCollection({
  type: 'content',
});

export const collections = {
  'posts': contentCollection,
};