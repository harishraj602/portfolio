import React from 'react'
import './Card.css'

const Card = ({item}) => {
  return (
    <div className='card-container'>
         <h2>{item.name}</h2>
         <img src={item.image} alt="" />
         <p>{item.description.length>100?item.description.substring(0,100)+"..":item.description}</p>
         <div className="tech">
            {
                item.technologies.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))
            }
         </div>
         <div className='card-btn'>
            <button>Demo</button>
            <button><a href={item.github}>Git Hub</a></button>
         </div>
    </div>
  )
}

export default Card