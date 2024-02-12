import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  

  return (
    <div className="App bg-stone-900 text-white" >


      
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />



    </div>
  )
}

export default App
