/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-keto": "#0F0E0E",
        "black-keto-1": "#0b0a0a",
        "gray-keto": "#222222",
      }, 
      fontFamily: {
        amotica: ["Amotic SC"],
        kalam: ["Kalam"],
        lilita: ["Lilita One"],
        dyna: ["DynaPuff"],
        concert: ["Concert One"],
        text_me: ["Text Me One"],
      },
      boxShadow: {
        "3xl": "0px -1px 12px 1px rgba(0,0,0,0.95)"
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
          links: withOpacity('--color-text-links'),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity('--color-background'),
          layout: withOpacity('--color-layout'),
          layout2: withOpacity('--color-layout2'),
          layoutinverted: withOpacity('--color-layoutinverted'),
          layoutcarpet: withOpacity('--color-layoutcarpet'),
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

