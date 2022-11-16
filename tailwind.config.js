/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/**/*.{html,js}",
    // "./node_modules/flowbite/**/*.js"
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'  
  ],
  theme: {
    extend: {},
    colors: {
      
      // 'bgblue': '#eaf3fc',
      'footerblue': '#024f63',

      'bgblue':"#f6f8fa",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
