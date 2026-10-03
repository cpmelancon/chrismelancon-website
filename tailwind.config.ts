import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-earth': '#000000',
        'warm-clay': '#556B2F',
        'sage-green': '#6B8E23',
        'pale-cream': '#FFFFFF',
        'stone-grey': '#666666',
      },
      fontFamily: {
        serif: ['Calibri', 'system-ui', 'sans-serif'],
        sans: ['Calibri', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
