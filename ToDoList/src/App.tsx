import { useState } from 'react'
import  './App.css'
import { CreateButton } from './components/CreateButton'
import { Header } from './components/Header'
import { Input } from './components/Input'


function App() {

  return (
    <div className="App">
      <Header/>
      <div className='input'>
        <Input/>
        <CreateButton/>
      </div>
      
      
    </div>
  )
}

export default App
