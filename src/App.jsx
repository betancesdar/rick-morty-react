import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ResidentCard from './components/ResidentCard'
import randomNumber from './utils/getRandomNumber'

function App() {

  console.log(randomNumber)  


  return (
    <div className="App">
    <Navbar />
    <ResidentCard />
      
    </div>
  )
}

export default App
