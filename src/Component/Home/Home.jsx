import React from 'react'
import './Home.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className="home-container">
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Home