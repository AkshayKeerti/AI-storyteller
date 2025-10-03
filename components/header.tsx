'use client'

import { useState } from 'react'
import AuthModal from './auth/auth-modal'

export default function Header() {
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

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
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
