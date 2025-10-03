'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthModal from './auth/auth-modal'
import { useAuth } from '../contexts/auth-context'

export default function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✍️</span>
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">AI Story Builder</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Conditional auth buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              // Authenticated user - redirect to dashboard
              <button
                onClick={() => router.push('/dashboard')}
                className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
              >
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="User avatar" 
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </button>
            ) : (
              // Non-authenticated user - show login buttons
              <>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="btn-secondary"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="btn-primary"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden px-4 pb-4">
        <nav className="flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
            Features
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
                  About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  )
}
