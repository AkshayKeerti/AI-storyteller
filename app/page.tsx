'use client'

import { useState } from 'react'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import FeaturesSection from '../components/features-section'
import Footer from '../components/footer'
import AuthModal from '../components/auth/auth-modal'

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection onAuthOpen={() => setIsAuthModalOpen(true)} />
      <FeaturesSection />
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </main>
  )
}
