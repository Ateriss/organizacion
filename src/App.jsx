import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { MyOrg } from './components/MyOrg'


function App() {

  return (
    <main className='font-sans'>
      <Header/>
      <Form/>
      <MyOrg/>
    </main>
  )
}

export default App
