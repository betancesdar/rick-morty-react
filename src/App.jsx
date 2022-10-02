import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import Locationinfo from './components/Locationinfo'
import styled from 'styled-components'

const Container = styled.div`
  display:flex ;
  margin: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
`

function App() {

  const random = getRandomNumber()
  const URL = `https://rickandmortyapi.com/api/location/${random}`
  const location = useFetch(URL)


  return (
    <div className="App">
    <Navbar />
    <Locationinfo location={location}/>
    <Container>
      {
          location?.residents.map(url  => (
            <ResidentCard url={url} key={url}/>     
          ))
      }
    </Container>
      
    </div>
  )
}

export default App
