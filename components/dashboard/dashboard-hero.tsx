'use client'

import Link from 'next/link'

interface Story {
  id: string
  title: string
  genre: string
  coverImage?: string
  wordCount: number
  createdAt: string
}

const mockStats = {
  storiesCreated: 12,
  twistsGenerated: 45,
  totalWords: 18500
}

const mockFeaturedStories: Story[] = [
  {
    id: '1',
    title: 'The Dragon\'s Last Flight',
    genre: 'Fantasy',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
    wordCount: 1200,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Lost in the Quantum Maze',
    genre: 'Sci-Fi',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    wordCount: 980,
    createdAt: '2024-01-12'
  },
  {
    id: '3',
    title: 'The Mystery of Sunset Manor',
    genre: 'Mystery',
    coverImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
    wordCount: 1450,
    createdAt: '2024-01-10'
  }
]

export default function DashboardHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-gray-600">
          Ready to create your next amazing story with AI-powered twists?
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Stories Created</h3>
              <p className="text-2xl font-bold text-gray-900">{mockStats.storiesCreated}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Twists Generated</h3>
              <p className="text-2xl font-bold text-gray-900">{mockStats.twistsGenerated}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecapitalize="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-600">Total Words</h3>
              <p className="text-2xl font-bold text-gray-900">{mockStats.totalWords.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Featured Stories</h2>
          <a href="/dashboard/stories" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockFeaturedStories.map((story) => (
            <div key={story.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
                {story.coverImage ? (
                  <img 
                    src={story.coverImage} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                {story.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {story.genre} • {story.wordCount} words
              </p>
              <p className="text-xs text-gray-500">
                Created {new Date(story.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center">
        <Link href="/dashboard/create">
          <button className="btn-primary px-8 py-4 text-lg">
            Create New Story
          </button>
        </Link>
      </div>
    </section>
  )
}
