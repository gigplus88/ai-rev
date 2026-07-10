
import React from 'react'
import Navbar from './navbar'
import HeroSection from './heroSection'
import AiTypes from './aiTypes'
import AiBenefits from './aiBenefits'
import Contact from './contact'
import Footer from './footer'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
