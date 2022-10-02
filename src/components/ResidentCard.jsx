import React from 'react'
import '../App.css'
import useFetch from '../hooks/useFetch.js'
import styled from 'styled-components'

const Article = styled.article`
   display: flex;
   margin-top: 30px;
`



const ResidentCard = ({url}) => {

 const resident = useFetch(url)

 console.log(resident)

  return (
    <Article className='resident_article'>
      <div className='resident_card'>
      <img className='resident_image' src={resident?.image} /> 
      <div className='resident_bar'>
          <div className='status_icon'></div>
          <span>{resident?.status}</span>
      </div> 
      <container>
        <h3 className='resident_name'>{resident?.name}</h3>
        <br/>
        <ul className='resident_list'>
          <li><span>Specie: </span>{resident?.species}</li>
          <li><span>Origin: </span>{resident?.origin.name}</li>
          <li><span>Episodes: </span>{resident?.episode.length}</li>
        </ul>
      </container>      
      </div>    
    </Article>
  )
}

export default ResidentCard
