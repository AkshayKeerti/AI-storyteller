'use client'

import { useState } from 'react'
import AuthModal from './auth/auth-modal'

interface HeroSectionProps {
  onAuthOpen: () => void
}

export default function HeroSection({ onAuthOpen }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8">
            Create Amazing Stories with{' '}
            <span className="gradient-text">AI-Powered Twists</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into captivating narratives with our intelligent story builder. 
            Choose genres, add surprising plot twists, and bring your imagination to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onAuthOpen}
              className="btn-primary text-lg px-8 py-4 animate-bounce-gentle"
            >
              Start Creating Stories
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Stories Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Genres Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">User Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Hero image/illustration placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-xl glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  From Idea to Story in Minutes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Generate characters and settings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Add unexpected plot twists</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Customize tone and style</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Export in multiple formats</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
