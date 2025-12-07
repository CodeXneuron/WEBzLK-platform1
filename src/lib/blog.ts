import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import type { Post } from './types';

const postsDirectory = join(process.cwd(), 'src/_posts');

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (e) {
    return [];
  }
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { 
    slug: realSlug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    content: content,
    ...(data.ogImage && { ogImage: { url: data.ogImage.url }})
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
