interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-card/50 border-b">
      <div className="container mx-auto px-4 py-12 text-center md:py-20">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
          {description}
        </p>
      </div>
    </section>
  );
}
