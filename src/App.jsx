import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ResidentCard from './components/ResidentCard'
import getRandomNumber from './utils/getRandomNumber'
import Locationinfo from './components/Locationinfo'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display:flex ;
  margin: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
`

function App() {
  const [location, setLocation] = useState()
  const [inputSearch, setinputSearch] = useState('')

  useEffect(() => {
    let id = getRandomNumber()
    if(inputSearch){
      id = inputSearch
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`
    
    axios.get(URL)
         .then(res => setLocation(res.data))
         .catch(err => console.log(err))
    
  },[inputSearch])

  const handleSubmit = e => {
    e.preventDefault()
    setinputSearch(e.target.idLocation.value)
  }

  


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <Navbar />
    
    </form>
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
