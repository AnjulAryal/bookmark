import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from "../src/components/feature";
import Download from './components/download'
import Footer from './components/Footer';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
function App() {


  return (
    <>
      <Hero />
      <Feature />
      <Download />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  )
}

export default App
