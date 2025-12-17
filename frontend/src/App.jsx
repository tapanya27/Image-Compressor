import React from 'react'
import ImageCompressorNav from './componants/Navbar'
import Home from './pages/Home/Home'
import StatsShowcase from './pages/Circle/Circle'
import FeaturesSection from './pages/Cards/Card'
import Bottom from './pages/Bottom/Bottom'
import Footer from './pages/Footer/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <ImageCompressorNav/>
      <Home/>
      <StatsShowcase/>
      <FeaturesSection/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default App
