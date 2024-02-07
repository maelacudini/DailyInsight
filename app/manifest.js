export default function manifest() {
    return {
        name: 'Daily Insight',
        short_name: 'Daily Insight',
        description: 'Next.js App',
        start_url: 'https://dailyinsight-theta.vercel.app/',
        display: 'standalone',
        background_color: '#2f2f2f',
        theme_color: '#2f2f2f',
        icons: [
            {
                src: 'https://dailyinsight-theta.vercel.app/icon.png',
                sizes: '77x146',
                type: 'image/png',
                purpose: "any maskable"
            },
        ],
    }
}