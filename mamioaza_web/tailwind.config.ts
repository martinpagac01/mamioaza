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
        'logo-orange': '#F8941C',
        primary: '#F8941C', // Main orange color
        'primary-dark': '#E17A16', // Darker shade of main orange
        secondary: '#1E3A8A', // Deep blue from the schedule
        'secondary-dark': '#1E40AF',
        accent: '#38BDF8',
        cream: '#FFF7ED',
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
