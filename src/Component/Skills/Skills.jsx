import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-container' id='skills'>

        <div className="frontend card">
                <h2>Frontend</h2>
                <div className="row1">
                    <img src="/html.png" alt="" />
                    <img src="/css.jpg" alt="" />
                </div>
                <div className="row2">
                    <img src="/js.png" alt="" />
                    <img src="/rjs.png" alt="" />
                </div>      
        </div>

        <div className="backend card">
            <h2>Backend</h2>
            <div className="row1">
                <img src="/javaw.png" alt="" />
                <img className='excep-img' src="/eclip.jpg" alt="" />
            </div>
            <div className="row2">
                <img className='excep-img' src="/hiber.jpg" alt="" />
                <img className='excep-img' src="/springb.png" alt="" />
            </div>
        </div>

        <div className="database card">
            <h2>Database</h2>
           <img src="/mysqlw.jpg" alt="" />
        </div>
    </div>
  )
}

export default Skills