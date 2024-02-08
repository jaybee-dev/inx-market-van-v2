/** @type {import('tailwindcss').Config} */
export default {

  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{html,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'main': 'auto auto 1fr auto',
      },
      gridTemplateColumns: {
        'header': '10% 10%'
      }
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
      'header': 'var(--header)',
      'warning': 'var(--warning)',
      'success': 'var(--success)',
      'info': 'var(--info)',
      'primary-tr': 'var(--primary-tr)',
     },  

  },
  plugins: [],
}

