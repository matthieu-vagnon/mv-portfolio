import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        dmSerifText: ['var(--font-dm-serif-text)'],
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)']
      }
    }
  },
  plugins: []
} satisfies Config
