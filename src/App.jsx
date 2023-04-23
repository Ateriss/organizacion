import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form/Form'
import { MyOrg } from './components/MyOrg'
import { Equipo } from './components/Equipo/Equipo'
import { Footer } from './components/Footer'
import fotoAle from './assets/1670622700504.jpeg'


function App() {
  const [showForm, setShowForm] = useState(false);
  const [partners, setPartners]= useState([{
    equipo: "Front End",
    foto: fotoAle,
    nombre: "Alexandra Linares Viña",
    puesto1: "Dev. de Software",
    puesto2: "",
  }]);

  const teams = [
    {
      titulo: 'Programación',
      colorPrim: '#57C278 ',
      colorSec: '#D9F7E9',
    },
    {
      titulo: 'Front End',
      colorPrim: '#82CFFA',
      colorSec: '#E8F8FF',
    },
    {
      titulo: 'Data Science',
      colorPrim: '#A6D157',
      colorSec: '#F0F8E2',
    },
    {
      titulo: 'Devops',
      colorPrim: '#E06B69',
      colorSec: '#FDE7E8',
    },
    {
      titulo: 'UX y Diseño',
      colorPrim: '#DB6EBF',
      colorSec: '#FAE9F5',
    },
    {
      titulo: 'Movil',
      colorPrim: '#FFBA05',
      colorSec: '#FFF5D9',
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrim: '#FF8A29',
      colorSec: '#FFEEDF',
    },
  ]

const teamsName = teams.map((data)=>data.titulo)

  const showElement = () => {
      setShowForm(!showForm)
  }

  const registerPartner = (partner)=>{
    console.log('new partner ', partners)
    setPartners([...partners, partner ])

  }


  return (
    <main className='font-sans flex items-center justify-center flex-col'>
      <Header/>
      {showForm === true? <Form teams={teamsName} registerPartner={registerPartner} /> : ''}
      <MyOrg showForm={showElement}/>
      {
        teams.map((team)=>{
          return <Equipo key={team.titulo} nameTeam={team.titulo} color1={team.colorPrim} colorBg={team.colorSec} partners={partners.filter(partners => partners.equipo === team.titulo)} />
    })
      }
      <Footer/>
    </main>
  )
}

export default App
