import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8941C', // Main orange
        'primary-dark': '#e08519', // Darker orange for hover
        'primary-light': '#FFF4E6', // Light orange background
        secondary: '#F8941C', // Using primary orange instead of blue
        'secondary-dark': '#e08519',
        accent: '#F8941C', // Using primary orange
        'accent-light': '#FFF0F0', // Soft pink background
        'neutral-warm': '#FFF4E6', // Warm background
        'neutral-cool': '#F8FAFF', // Cool background
        'text': {
          DEFAULT: '#475569',
          dark: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
