export const metadata = {
  title: "About",
  description:
    "Daily Insight was founded on the belief that good, open conversations create great, meaningful work.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/en-US",
    },
  },
  metadataBase: new URL("https://dailyinsight-theta.vercel.app/about"),
  openGraph: {
    title: "About",
    description:
      "Daily Insight was founded on the belief that good, open conversations create great, meaningful work.",
    images: ["https://dailyinsight-theta.vercel.app/icon.png"],
    url: `https://dailyinsight-theta.vercel.app/about`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Daily Insight was founded on the belief that good, open conversations create great, meaningful work.",
    images: ["https://dailyinsight-theta.vercel.app/icon.png"],
  },
};

export default function AboutLayout({ children }) {
  return <div>{children}</div>;
}
