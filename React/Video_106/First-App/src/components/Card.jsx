import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      
    </div>
  )
}

export default Card
