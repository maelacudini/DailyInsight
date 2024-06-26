import { DM_Sans } from 'next/font/google'
import './_style/globals.css'
import Footer from './_components/common/footer/Footer'
import Header from './_components/common/header/Header'

const font = DM_Sans({ subsets: ['latin'] })

export const viewport = {
  themeColor: 'dark',
}

export const metadata = {
  title: {
    template: '%s | Daily Insight',
    default: 'For the people | Daily Insight',
  },
  description: 'Daily Insight was founded on the belief that good, open conversations create great, meaningful work.',
  generator: 'Next.js',
  applicationName: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'News', 'Web', 'Politics', 'History', 'Culture', 'Technology', 'Business'],
  authors: [{ name: 'Maela Cudini', url: 'https://maelacudini.com' }],
  creator: 'Maela Cudini',
  metadataBase: new URL('https://dailyinsight-theta.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'For the people | Daily Insight',
    description: 'Daily Insight was founded on the belief that good, open conversations create great, meaningful work.',
    images: ['https://dailyinsight-theta.vercel.app/opengraph-image.png'],
    url: `https://daily-insight-eight.vercel.app`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'For the people | Daily Insight',
    description: 'Daily Insight was founded on the belief that good, open conversations create great, meaningful work.',
    images: ['https://dailyinsight-theta.vercel.app/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
