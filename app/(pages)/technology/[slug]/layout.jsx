export async function generateMetadata({ params }) {
  const id = params.slug;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API}`,
    { next: "no-store" }
  );
  const articles = await res.json();
  const article = articles.articles[id];

  return {
    title: article.title && article.title,
    description: article.content !== null ? article.content : article.title,
    authors: [{ name: article.author && article.author }],
    publishedTime: article.publishedAt && article.publishedAt,
    alternates: {
      canonical: `/technology/${id}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: article.title && article.title,
      description: article.content !== null ? article.content : article.title,
      images: [article.urlToImage && article.urlToImage],
      url: `https://daily-insight-eight.vercel.app/technology/${id}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title && article.title,
      description: article.content !== null ? article.content : article.title,
      images: [article.urlToImage && article.urlToImage],
    },
  };
}

export default function ArticleLayout({ children }) {
  return <div>{children}</div>;
}
