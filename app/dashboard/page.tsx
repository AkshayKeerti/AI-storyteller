'use client'

import { useState } from 'react'
import DashboardHeader from '../../components/dashboard/dashboard-header'
import DashboardHero from '../../components/dashboard/dashboard-hero'
import StoryLibrary from '../../components/dashboard/story-library'

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <DashboardHeader />
      
      <div className="pt-16">
        {/* Hero Section */}
        <DashboardHero />
        
        {/* Story Library */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Stories</h2>
            <a href="/dashboard/create">
              <button className="btn-primary">
                Create New Story
              </button>
            </a>
          </div>
          
          <StoryLibrary 
            viewMode={viewMode} 
            onViewModeChange={setViewMode} 
          />
        </section>
      </div>
    </main>
  )
}
