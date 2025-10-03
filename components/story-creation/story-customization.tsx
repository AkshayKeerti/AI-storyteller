'use client'

import { useState } from 'react'

interface StoryData {
  prompt: string
  characters: string
  setting: string
  genre: string
  length: number
  complexity: number
  twistIntensity: number
  audience: string
  style: string
}

interface StoryCustomizationProps {
  storyData: StoryData
  onUpdate: (updates: Partial<StoryData>) => void
  onNext: () => void
  onPrevious: () => void
}

const genres = [
  { id: 'fantasy', name: 'Fantasy', icon: '🧙‍♂️', description: 'Magic, mythical creatures, and fantastical worlds' },
  { id: 'sci-fi', name: 'Sci-Fi', icon: '🚀', description: 'Advanced technology, space exploration, and futuristic themes' },
  { id: 'mystery', name: 'Mystery', icon: '🔍', description: 'Puzzles, crime solving, and mysterious circumstances' },
  { id: 'romance', name: 'Romance', icon: '💕', description: 'Love stories, relationships, and emotional connections' },
  { id: 'horror', name: 'Horror', icon: '👻', description: 'Fear, suspense, and supernatural elements' },
  { id: 'adventure', name: 'Adventure', icon: '🗺️', description: 'Journeys, exploration, and exciting experiences' },
  { id: 'thriller', name: 'Thriller', icon: '⚡', description: 'Suspense, tension, and unexpected twists' },
  { id: 'drama', name: 'Drama', icon: '🎭', description: 'Realistic characters, emotional depth, and serious themes' },
  { id: 'comedy', name: 'Comedy', icon: '😄', description: 'Humor, wit, and lighthearted entertainment' }
]

const tones = [
  { id: 'dark', name: 'Dark', description: 'Serious, somber, or mysterious atmosphere' },
  { id: 'light', name: 'Light', description: 'Bright, happy, and optimistic feeling' },
  { id: 'dramatic', name: 'Dramatic', description: 'Intense, emotional, and compelling' },
  { id: 'humorous', name: 'Humorous', description: 'Funny, witty, and entertaining' },
  { id: 'romantic', name: 'Romantic', description: 'Loving, passionate, and emotionally engaging' },
  { id: 'epic', name: 'Epic', description: 'Grand, sweeping, and larger-than-life' }
]

const audiences = [
  { id: 'children', name: 'Children', description: 'Ages 5-12, simple language and themes' },
  { id: 'young-adult', name: 'Young Adult', description: 'Ages 13-18, relatable to teenagers' },
  { id: 'adult', name: 'Adult', description: 'Ages 18+, mature themes and complexity' }
]

export default function StoryCustomization({ storyData, onUpdate, onNext, onPrevious }: StoryCustomizationProps) {
  const [previewData, setPreviewData] = useState(storyData)

  const updateParameter = (param: string, value: any)=> {
    const updates = { [param]: value }
    onUpdate(updates)
    setPreviewData(prev => ({ ...prev, ...updates }))
  }

  const handleSliderChange = (param: string, value: number) => {
    updateParameter(param, value)
  }

  const getLengthLabel = (value: number) => {
    if (value < 500) return 'Short (500 words)'
    if (value < 1000) return 'Medium (1000 words)'
    if (value < 2000) return 'Long (2000 words)'
    return 'Very Long (2000+ words)'
  }

  const getComplexityLabel = (value: number) => {
    if (value < 3) return 'Simple Plot'
    if (value < 7) return 'Moderate Complexity'
    return 'Complex Story'
  }

  const getTwistLabel = (value: number) => {
    if (value < 3) return 'Subtle Twists'
    if (value < 7) return 'Moderate Twists'
    return 'Dramatic Twists'
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-8 shadow-sm">
      {/* Step 2: Customization */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step 2: Customize Your Story
        </h2>
        <p className="text-gray-600">
          Fine-tune the genre, length, complexity, and style to match your vision.
        </p>
      </div>

      {/* Genre Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Genre</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => updateParameter('genre', genre.name)}
              className={`p-4 border rounded-lg transition-all duration-200 text-left ${
                storyData.genre === genre.name
                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{genre.icon}</span>
                <span className="font-semibold text-gray-900">{genre.name}</span>
              </div>
              <p className="text-sm text-gray-600">{genre.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Story Parameters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Story Parameters</h3>
        
        <div className="space-y-6">
          {/* Length Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Story Length</label>
              <span className="text-sm text-gray-600">{storyData.length} words</span>
            </div>
            <input
              type="range"
              min="300"
              max="3000"
              step="100"
              value={storyData.length}
              onChange={(e) => handleSliderChange('length', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <p className="text-xs text-gray-500 mt-1">{getLengthLabel(storyData.length)}</p>
          </div>

          {/* Complexity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Plot Complexity</label>
              <span className="text-sm text-gray-600">{storyData.complexity}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={storyData.complexity}
              onChange={(e) => handleSliderChange('complexity', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <p className="text-xs text-gray-500 mt-1">{getComplexityLabel(storyData.complexity)}</p>
          </div>

          {/* Twist Intensity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">Twist Intensity</label>
              <span className="text-sm text-gray-600">{storyData.twistIntensity}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={storyData.twistIntensity}
              onChange={(e) => handleSliderChange('twistIntensity', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <p className="text-xs text-gray-500 mt-1">{getTwistLabel(storyData.twistIntensity)}</p>
          </div>
        </div>
      </div>

      {/* Style Preferences */}
      <div className="mb-8">
        <h3 className="textlg font-semibold text-gray-900 mb-4">Style Preferences</h3>
        
        {/* Tone Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Tone</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tones.map((tone) => (
              <button
                key={tone.id}
                onClick={() => updateParameter('style', tone.name)}
                className={`p-3 border rounded-lg transition-all duration-200 text-left ${
                  storyData.style.toLowerCase() === tone.name.toLowerCase()
                    ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className="font-medium text-gray-900">{tone.name}</div>
                <div className="text-xs text-gray-600">{tone.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Audience Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Target Audience</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => updateParameter('audience', audience.id)}
                className={`p-3 border rounded-lg transition-all duration-200 text-left ${
                  storyData.audience === audience.id
                    ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className="font-medium text-gray-900">{audience.name}</div>
                <div className="text-xs text-gray-600">{audience.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="mb-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Genre:</strong> {storyData.genre || 'Not selected'}
          </div>
          <div>
            <strong>Length:</strong> {storyData.length} words
          </div>
          <div>
            <strong>Complexity:</strong> {storyData.complexity}/10
          </div>
          <div>
            <strong>Twists:</strong> {storyData.twistIntensity}/10
          </div>
          <div>
            <strong>Tone:</strong> {storyData.style}
          </div>
          <div>
            <strong>Audience:</strong> {audiences.find(a => a.id === storyData.audience)?.name || 'Adult'}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onPrevious}
          className="btn-secondary"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="btn-primary"
        >
          Generate Story
        </button>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #8B5CF6;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #8B5CF6;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}
