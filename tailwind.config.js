/** @type {import('tailwindcss').Config} */
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
        "orange-dyeketo": "#FFA559",
        "beige-keto": "#FFE6C7"
        //modo oscuro 
        
        //modo dark neon 
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
      }
    },
  },
  plugins: [],
}

