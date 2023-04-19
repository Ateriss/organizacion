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
      'bg-progra': '#D9F7E9',
      'bg-front': '#E8F8FF',
      'bg-data': '#F0F8E2',
      'bg-devop': '#FDE7E8',
      'bg-ux': '#FAE9F5',
      'bg-movil': '#FFF5D9',
      'bg-innova': '#FFEEDF',
      'progra': '#57C278',
      'front': '#82CFFA',
      'data': '#A6D157',
      'devop': '#E06B69',
      'ux': '#DB6EBF',
      'movil': '#FFBA05',
      'innova': '#FF8A29',
    }
  },
  plugins: [],
}

