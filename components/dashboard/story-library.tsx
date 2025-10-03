'use client'

import { useState } from 'react'

interface Story {
  id: string
  title: string
  genre: string
  coverImage?: string
  wordCount: number
  createdAt: string
  isComplete: boolean
  readingTime: number
}

interface StoryLibraryProps {
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}

const mockStories: Story[] = [
  {
    id: '1',
    title: 'The Dragon\'s Last Flight',
    genre: 'Fantasy',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
    wordCount: 1200,
    createdAt: '2024-01-15',
    isComplete: true,
    readingTime: 5
  },
  {
    id: '2',
    title: 'Lost in the Quantum Maze',
    genre: 'Sci-Fi',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    wordCount: 980,
    createdAt: '2024-01-12',
    isComplete: true,
    readingTime: 4
  },
  {
    id: '3',
    title: 'The Mystery of Sunset Manor',
    genre: 'Mystery',
    coverImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
    wordCount: 1450,
    createdAt: '2024-01-10',
    isComplete: true,
    readingTime: 6
  },
  {
    id: '4',
    title: 'Eternal Love Spell',
    genre: 'Romance',
    coverImage: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=300&h=200&fit=crop',
    wordCount: 750,
    createdAt: '2024-01-08',
    isComplete: false,
    readingTime: 3
  },
  {
    id: '5',
    title: 'The Haunted Observatory',
    genre: 'Horror',
    wordCount: 1100,
    createdAt: '2024-01-05',
    isComplete: true,
    readingTime: 5
  },
  {
    id: '6',
    title: 'Mars Colony Chronicles',
    genre: 'Sci-Fi',
    wordCount: 2000,
    createdAt: '2024-01-03',
    isComplete: true,
    readingTime: 8
  }
]

export default function StoryLibrary({ viewMode, onViewModeChange }: StoryLibraryProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedLength, setSelectedLength] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('newest')
  const [filteredStories, setFilteredStories] = useState<Story[]>(mockStories)

  const genres = ['All', 'Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Horror', 'Adventure']
  const lengths = ['All', 'Short (<500)', 'Medium (500-1000)', 'Long (1000+)']
  const statuses = ['All', 'Complete', 'In Progress']
  const sortOptions = ['Newest', 'Oldest', 'Alphabetically', 'Word Count']

  const handleFilterChange = () => {
    let filtered = [...mockStories]

    // Filter by genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(story => story.genre === selectedGenre)
    }

    // Filter by length
    if (selectedLength !== 'all') {
      switch (selectedLength) {
        case 'Short (<500)':
          filtered = filtered.filter(story => story.wordCount < 500)
          break
        case 'Medium (500-1000)':
          filtered = filtered.filter(story => story.wordCount >= 500 && story.wordCount <= 1000)
          break
        case 'Long (1000+)':
          filtered = filtered.filter(story => story.wordCount > 1000)
          break
      }
    }

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(story => 
        selectedStatus === 'Complete' ? story.isComplete : !story.isComplete
      )
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => `new Date(b.createdAt).getTime()` - `new Date(a.createdAt).getTime()`)
        break
      case 'oldest':
        filtered.sort((a, b) => `new Date(a.createdAt).getTime()` - `new Date(b.createdAt).getTime()`)
        break
      case 'alphabetically':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'word count':
        filtered.sort((a, b) => b.wordCount - a.wordCount)
        break
    }

    setFilteredStories(filtered)
  }

  // Call handleFilterChange whenever filters change
  useState(() => {
    handleFilterChange()
  })

  const StoryCard = ({ story }: { story: Story }) => (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {story.coverImage ? (
            <img 
              src={story.coverImage} 
              alt={story.title}
              className="w-16 h-20 object-cover rounded-lg"
            />
          ) : (
            <div className="w-16 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate group-hover:text-primary-600 transition-colors">
            {story.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {story.genre}
            </span>
            {story.isComplete ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Complete
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                In Progress
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{story.wordCount} words</span>
            <span>{story.readingTime} min read</span>
            <span>{new Date(story.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Filters and Controls */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-4 mb-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Genre Filter */}
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {genres.map(genre => (
                <option key={genre} value={genre.toLowerCase()}>
                  {genre}
                </option>
              ))}
            </select>

            {/* Length Filter */}
            <select
              value={selectedLength}
              onChange={(e) => setSelectedLength(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {lengths.map(length => (
                <option key={length} value={length}>
                  {length}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status} value={status.toLowerCase()}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option} value={option.toLowerCase()}>
                  Sort by {option}
                </option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-5 h-5` fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredStories.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or create a new story.</p>
            <button className="btn-primary">
              Create New Story
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          filteredStories.map(story => (
            <div key={story.id} className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
              {story.coverImage && (
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={story.coverImage} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {story.genre}
                  </span>
                  {story.isComplete ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Complete
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {story.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{story.wordCount} words</span>
                  <span>{story.readingTime} min read</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          filteredStories.map(story => <StoryCard key={story.id} story={story} />)
        )}
      </div>
    </div>
  )
}
