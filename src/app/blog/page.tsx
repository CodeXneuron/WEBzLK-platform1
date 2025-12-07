import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, articles, and news from the WEBz team on AI, engineering, and technology in Sri Lanka.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <>
      <PageHeader
        title="WEBz Blog"
        description="Insights, articles, and news on AI and engineering in Sri Lanka."
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.length > 0 ? (
            allPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary">{post.title}</CardTitle>
                    <CardDescription>
                      <time dateTime={post.date}>{format(new Date(post.date), 'LLLL d, yyyy')}</time> by {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-muted-foreground">No blog posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}