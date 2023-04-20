import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { MyOrg } from './components/MyOrg'


function App() {
  const [showForm, setShowForm] = useState(false);

  const showElement = () => {
      setShowForm(!showForm)
  }

  return (
    <main className='font-sans'>
      <Header/>
      {showForm === true? <Form/> : ''}
      <MyOrg showForm={showElement}/>
    </main>
  )
}

export default App
