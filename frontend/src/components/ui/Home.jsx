import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCrousel from './CategoryCrousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <CategoryCrousel />
        <LatestJobs />
        <Footer />  
    </div>
  )
}

export default Home