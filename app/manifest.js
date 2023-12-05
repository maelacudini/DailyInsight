export default function manifest() {
    return {
        name: 'Daily Insight',
        short_name: 'Daily Insight',
        description: 'Next.js App',
        start_url: 'https://daily-insight-eight.vercel.app/',
        display: 'standalone',
        background_color: '#2f2f2f',
        theme_color: '#2f2f2f',
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: "any maskable"
            },
        ],
    }
}