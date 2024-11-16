import { useState } from 'react'
import '../App.css'

import Navbar from '../components/navbar'
import About from '../components/About'
import Hero from '../components/Hero'
import Upcoming from '../components/upcoming'
import Team from '../components/Team'
import Footer from '../components/footer'
function App() {

    return (
        <>
        <div className="background-container">
            <Navbar/>
            <Hero/>
            <About/>
            <Team/>
            <Upcoming/>
            <Footer/>
        </div>
        </>
    )
}

export default App
