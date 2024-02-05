export async function generateMetadata({ params }) {
  const id = params.slug[1];
  const category = params.slug[0];
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API}`,
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
      canonical: `/${category}/${id}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: article.title && article.title,
      description: article.content !== null ? article.content : article.title,
      images: [article.urlToImage && article.urlToImage],
      url: `https://daily-insight-eight.vercel.app/${category}/${id}`,
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
