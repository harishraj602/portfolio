import React from 'react'
import'./Experience.css'

const Experience = () => {
  return (
    <div className='exp-container' id='experience'>
        <div className="exp">
            <div className="exp-details">
                <div className='details'>
                    <p className='heading'>Position &nbsp; :</p>
                    <p className='ans'>Java Developer Trainee</p>
                </div>
                <div className='details'>
                    <p className='heading'>Company :</p>
                    <p className='ans'>Graspear</p>
                </div>
                <div className='details'>
                    <p className='heading'>Duration&nbsp; :</p>
                    <p className='ans'>1 month</p>
                </div>
            </div>
            <div className="exp-description">
                <p className='heading'>Description :</p>
                <ul>
                    <li>As a Java Developer Trainee,
                        I gained hands-on experience in developing web applications and honed my skills in both backend and frontend development. 
                        During my tenure, I undertook the following responsibilities:
                    </li>

                    <li>
                    Developed RESTful APIs using Spring Boot framework to facilitate communication between the frontend
                    and backend components of the project.
                    </li>

                    <li>
                    Implemented CRUD operations and integrated database functionality to store and retrieve data efficiently.
                    </li>

                    <li>
                    Collaborated with the team to design and implement user-friendly interfaces using React, ensuring a seamless
                    and intuitive user experience.
                    </li>

                    <li>
                    Participated in code reviews and debugging sessions to identify and resolve issues, ensuring the reliability
                    and performance of the application.
                    </li>

                    <li>
                    Engaged in continuous learning and exploration of best practices in Java development, contributing to the growth
                    and success of the project.
                    </li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Experience