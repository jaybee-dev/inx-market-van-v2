/** @type {import('tailwindcss').Config} */
export default {

  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{html,jsx}",
  ],
  theme: {
    borderRadius: {
      'DEFAULT': '0.125rem',
      'sm': '0.15rem',
      'full': '100%',
      'switch': '1em'
    },
    extend: {
      gridTemplateRows: {
        'main': 'auto auto auto 1fr auto',
      },
      gridTemplateColumns: {
        'header': '1fr auto auto'
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
      'swstart': 'var(--swstart)',
      'swend': 'var(--swend)',
     },  

  },
  plugins: [
    
  ],
}

