import React, { useState } from 'react'
import './Projects.css'
import Card from '../Card/Card'

const projectlist=[
    {
        "name":"Job Posting",
        "image":'/jobapp.png',
        "description":"this project is about creating a job post application where we can post a job, search  for a job, and filter it",
        "technologies":["React","Spring boot","Java","MySQL"],
        "github":"https://github.com/harishraj602/JobApp",
    },
    {
        "name":"Linked in Cloning",
        "image":'/linked.png',
        "description":"This project is a replica of the user interface of the LinkedIn platform, built entirely with HTML, CSS, and JavaScript. As a frontend development endeavor, the focus was on accurately mimicking the visual design and user experience of LinkedIn's web application.",
        "technologies":["HTML","CSS","Javascript"],
        "github":"https://github.com/harishraj602/cloningInsta",
    },
    {
        "name":"Food Order App",
        "image":'/foodorder.png',
        "description":"This project is a web application designed to facilitate food ordering and delivery. Implemented a dynamic menu interface that allows users to browse through various food items, view detailed descriptions, and add items to their cart.",
        "technologies":["HTML","CSS","Javascript","React"],
        "github":"https://github.com/harishraj602/Food-order",
    },
    {
        "name":"E-commerce",
        "image":'/ecommerce.png',
        "description":" Developed a dynamic shopping cart system that enables users to add, remove, and update items in their cart, providing a smooth checkout experience.",
        "technologies":["Java","React","Spring Boot","MySQL"],
        "github":"https://github.com/harishraj602/JobApp",
    },
     
]

const Projects = () => {

    const [startIndex, setStartIndex] = useState(0);
    const cardsperpage =3;
  
    const handleNextPage = () => {
      setStartIndex((prevStartIndex) => prevStartIndex + cardsperpage);
    };
  
    const handlePrevPage = () => {
      setStartIndex((prevStartIndex) => Math.max(0, prevStartIndex - cardsperpage));
    };
  
    const visibleProjects = projectlist.slice(startIndex, startIndex + cardsperpage);
    console.log(visibleProjects)

  const isLastPage = startIndex + cardsperpage >= projectlist.length;
  const isFirstPage = startIndex === 0;


  return (
    <div className='projects-container' id='projects'>
        
        <div className="slider-btn">
            <button onClick={handlePrevPage} disabled={isFirstPage}>Prev</button>
            <button onClick={handleNextPage} disabled={isLastPage}>Next</button>
        </div>

        <div className="cards">
         {
            visibleProjects.map((item,index)=>(
                <Card item={item} key={index}/>
            ))
         }
         </div>
    </div>
  )
}

export default Projects