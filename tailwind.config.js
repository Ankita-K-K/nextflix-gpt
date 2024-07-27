/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js, jsx, ts, tsx, html}", "./src/**/*.{js, jsx, ts, tsx, html}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({addUtilities}){
      const newUtilities = {
        ".scarollBar-thin" :{
          scrollbarWidth:"thin",
          scrollbarColor:"rgb(31 29 29) white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width:"8px",
          },
          "&::-webkit-scrollbar-track":{
            background:"black"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:"rgb(31 41 55)",
            borderRadius:"20px",
            border:"1px solid black"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

