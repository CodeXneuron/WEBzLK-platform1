import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import markdownToHtml from '@/lib/markdownToHtml';
import { format } from 'date-fns';
import { PageHeader } from '@/components/page-header';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch (error) {
    return {
        title: "Post not found",
        description: "This post could not be found."
    }
  }
}

export default async function PostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <PageHeader
        title={post.title}
        description={`By ${post.author} on ${format(new Date(post.date), 'LLLL d, yyyy')}`}
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </>
  );
}

export async function generateStaticParams() {
    try {
        const posts = getAllPosts();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (e) {
        return [];
    }
}
