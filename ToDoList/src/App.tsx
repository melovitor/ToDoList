import { useState } from 'react'
import  './App.css'
import { CreateButton } from './components/CreateButton'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'
import { TaskCount } from './components/TaskCount'
import { WithoutTask } from './components/WithoutTask'


function App() {

  return (
    <div className="App">
      <Header/>
      <div className='input'>
        <Input/>
        <CreateButton/>
      </div>
      <div className='tasks'>
        <TaskCount/>
        <Task/>
        <WithoutTask/>
      </div>      
    </div>
  )
}

export default App
