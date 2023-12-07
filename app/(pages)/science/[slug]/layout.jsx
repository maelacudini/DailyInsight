export async function generateMetadata({ params }) {
  const id = params.slug;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.NEWS_API}`,
    { next: "no-store" }
  );
  const articles = await res.json();
  const article = articles.articles[id];

  return {
    title: article.title && article.title,
    description: article.content && article.content,
    authors: [{ name: article.author && article.author }],
    publishedTime: article.publishedAt && article.publishedAt,
    alternates: {
      canonical: `/science/${id}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: article.title && article.title,
      description: article.content && article.content,
      images: [article.urlToImage && article.urlToImage],
      url: `https://daily-insight-eight.vercel.app/science/${id}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title && article.title,
      description: article.content && article.content,
      images: [article.urlToImage && article.urlToImage],
    },
  };
}

export default function ArticleLayout({ children }) {
  return <div>{children}</div>;
}
