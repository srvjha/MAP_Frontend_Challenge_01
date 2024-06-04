/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 35s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{
            transform:"translateX(0px)"
          },
          to:{
            transform:"translateX(-100%)"
          }
        }
      }
    },
  },
  plugins: [],
}

