import React from 'react'
import '../App.css'

const Locationinfo = ({location}) => {
  return (
    <article className='location_article'>
      <div className='location_card'>
      <h2 className='location_name'>{location?.name}</h2>
          <ul className='location_list'>
              <li><span>Type: </span>{location?.type}</li>
              <li><span>Dimension: </span>{location?.dimension}</li>
              <li><span>Population: </span>{location?.residents.length}</li>
          </ul>
    </div>
        
    </article>
  )
}

export default Locationinfo
