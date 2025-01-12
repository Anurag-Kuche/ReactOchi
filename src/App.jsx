//import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}

export default App