import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        bg:       '#050505',
        surface:  '#101010',
        surface2: '#181818',
        surface3: '#222222',
        red:      '#ff3b30',
        green:    '#00ff9c',
        gold:     '#d4af37',
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}
export default config
