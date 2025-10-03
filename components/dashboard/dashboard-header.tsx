'use client'

import { useState } from 'react'
import { useAuth } from '../../contexts/auth-context'

interface DashboardHeaderProps {
  userName?: string
  userAvatar?: string
}

export default function DashboardHeader() {
  const { user, logout } = useAuth()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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
            <a href="/dashboard" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </a>
            <a href="/dashboard/stories" className="text-gray-700 hover:text-primary-600 transition-colors">
              My Stories
            </a>
            <a href="/dashboard/create" className="text-gray-700 hover:text-primary-600 transition-colors">
              Create New
            </a>
            <a href="/dashboard/profile" className="text-gray-700 hover:text-primary-600 transition-colors">
              Profile
            </a>
            <a href="/dashboard/settings" className="text-gray-700 hover:text-primary-600 transition-colors">
              Settings
            </a>
          </nav>

          {/* Search & User */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* User Avatar & Menu */}
            <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {user?.name}
              </span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <a href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Profile
                    </a>
                    <a href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Settings
                    </a>
                    <hr className="my-1" />
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4 pb-4">
          {/* Mobile Search */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-wrap gap-4">
            <a href="/dashboard" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
              Home
            </a>
            <a href="/dashboard/stories" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
              My Stories
            </a>
            <a href="/dashboard/create" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
              Create New
            </a>
            <a href="/dashboard/profile" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
              Profile
            </a>
            <a href="/dashboard/settings" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
              Settings
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
