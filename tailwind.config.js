/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'prin-violet': '#6278F7',
      'prin-green': '#95FFD4',
      'prin-grey': '#F2F2F2',
      'sec-progra': '#D9F7E9',
      'sec-front': '#E8F8FF',
      'sec-data': '#F0F8E2',
      'sec-devop': '#FDE7E8',
      'sec-ux': '#FAE9F5',
      'sec-movil': '#FFF5D9',
      'sec-innova': '#FFEEDF',
      'thi-progra': '#57C278',
      'thi-front': '#82CFFA',
      'thi-data': '#A6D157',
      'thi-devop': '#E06B69',
      'thi-ux': '#DB6EBF',
      'thi-movil': '#FFBA05',
      'thi-innova': '#FF8A29',
    }
  },
  plugins: [],
}

