'use client'

import { useState } from 'react'

interface StoryReaderProps {
  storyId: string
  className?: string
}

export default function StoryReader({ storyId, className = '' }: StoryReaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={className}>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Story Reader</h2>
        <p className="text-gray-600">Loading story with ID: {storyId}</p>
        {isLoading && (
          <div className="mt-4 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        )}
        {/* Story content will be implemented later */}
      </div>
    </div>
  )
}
