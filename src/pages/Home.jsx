import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServiceSection from '../components/Home/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ServiceSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home
