import React from 'react'
import'./About.css'

const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className="container-box">
            <div className="img-container">
                <img src="/img2.jpg" alt="" />
            </div>
            <div className='about'>
                <h3>HARISH RAJ</h3>
                <p>seeking an entry-level full stack developer role to kickstart my career in software
                    development with a solid foundation in frontend and backend technologies,I am excited
                    to collaborate with a team of experienced developers to build scalable and efficient web
                    solutions
                </p>
                <button><a href="#contact">Contact</a></button>
            </div>
       </div>
    </div>
  )
}

export default About