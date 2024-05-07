/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
    
  // },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '600': '600',
      },
      fontSize: {
        '9': '9px',
        '12': '12px',
        '14': '14px',
        '18': '18px',
        '24': '24px',
        '36' : '36px',
        '48' : '48px',
        '60' : '60px',
      },
      width: {
        '150': '150px',
        '199' : '199px',
        '263' : '263px',
        '253' : '253px',
        '274' : '274px',
        '304' : '304px',
        '314' : '314px',
        '342' : '342px',
        '508' : '508px',
        '456' : '456px',
        '452' : '452px',
        '549' : '549px',
        '653' : '653px',
        '697' : '697px',
        '1440' : '1440px',
      },
      height: {
        '45': '45px',
        '60' : '60px',
        '63' : '63px',
        '70' : '70px',
        '144' : '144px',
        '214' : '214px',
        '389' : '389px',
        '455'  :'455px',
        '499' : '499px',
        '511' : '511px',
        '652' : '652px',
        '687' : '687px',
        '688' : '688px',
      },
      colors: {
        // Back ground Colors
        bgFirst: '#F2F3F6',
        bgsecond: '#0000ff',
        // Buttons Color
        btnclr: '#006FFF',
        // Text Color
        txtclr: '#333333',
        // Add more custom colors here...
      },
    },
  },
  plugins: [],
}

