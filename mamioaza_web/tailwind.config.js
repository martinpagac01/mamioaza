/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F8941C',
        'primary-dark': '#E07D0B',
        'secondary': '#4A90E2',
        'secondary-dark': '#357ABD',
        'accent': '#FF6B6B',
        'neutral-warm': '#FFF9F0',
        'cream': '#FFF5E6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    'text-primary',
    'text-secondary',
    'text-accent',
    'from-primary',
    'from-secondary',
    'from-accent',
    'bg-secondary-dark',
  ],
  plugins: [],
};
