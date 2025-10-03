'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import FeaturesSection from '../components/features-section'
import Footer from '../components/footer'
import AuthModal from '../components/auth/auth-modal'
import { useAuth } from '../contexts/auth-context'

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, isLoading, router])

  // Show loading spinner while checking auth status
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    )
  }

  // Don't render landing page if user is authenticated (will redirect)
  if (isAuthenticated) {
    return null
  }

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
