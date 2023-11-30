export default function manifest() {
    return {
        name: 'Daily Insight',
        short_name: 'Daily Insight',
        description: 'Next.js App',
        start_url: '/',
        display: 'standalone',
        background_color: '#2f2f2f',
        theme_color: '#2f2f2f',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
                purpose: "any maskable"
            },
        ],
    }
}