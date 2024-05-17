import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' id='contact'>
        <div className='text'>
            <h2>Contact</h2>
            <h3>Feel free to reach out!</h3>
        </div>
        <div className='links'>

            <div className='link-container'>
              <i className="fa-solid fa-envelope fa-2x"></i>
              <p>harishcharlie602@gmail.com</p>
            </div>

            <div className='link-container' >
             <i className="fa-brands fa-linkedin fa-2x"></i>
              <p>linkedin.com/harishraj</p>
            </div>

            <div className='link-container'>
             <i className="fa-brands fa-github fa-2x"></i>
              <p>github.com/harishraj</p>
            </div>

        </div>
    </div>
  )
}

export default Footer