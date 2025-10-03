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

interface StorySetupProps {
  storyData: StoryData
  onUpdate: (updates: Partial<StoryData>) => void
  onNext: () => void
  onPrevious: () => void
}

const popularPrompts = [
  "A detective discovers that the victim was already dead before the supposed murder",
  "A time-traveling chef must prepare a meal that prevents a future apocalypse",
  "A librarian finds a book that writes itself based on reader's thoughts",
  "An AI becomes obsessed with finding the meaning of love",
  "A gardener's plants start responding to emotions rather than water"
]

const genreTemplates = [
  {
    genre: 'Fantasy',
    template: 'In a magical world where sorcery is dying out, a young apprentice discovers...',
    icon: '🧙‍♂️'
  },
  {
    genre: 'Sci-Fi',
    template: 'In the year 2150, technology has advanced beyond human comprehension, until...',
    icon: '🚀'
  },
  {
    genre: 'Mystery',
    template: 'The detective's latest case seems impossible until they realize the clues were planted by...',
    icon: '🔍'
  },
  {
    genre: 'Romance',
    template: 'Two rival business owners fall in love, but their companies are merging in a way that threatens...',
    icon: '💕'
  },
  {
    genre: 'Horror',
    template: 'The old lighthouse keeper has been dead for months, but the light still shines every night...',
    icon: '👻'
  },
  {
    genre: 'Adventure',
    template: 'An ancient map leads to treasure beyond imagination, but the legend says...',
    icon: '🗺️'
  }
]

export default function StorySetup({ storyData, onUpdate, onNext, onPrevious }: StorySetupProps) {
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showSettingDetails, setShowSettingDetails] = useState(false)

  const handlePromptSelect = (template: string) => {
    onUpdate({ prompt: template })
  }

  const handleGenreSelect = (genre: string, template: string) => {
    onUpdate({ 
      genre, 
      prompt: template 
    })
  }

  const validateAndNext = () => {
    if (storyData.prompt.trim().length > 0) {
      onNext()
    } else {
      // You could add validation feedback here
      alert('Please enter a story idea or select a template')
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-8 shadow-sm">
      {/* Step 1: Setup */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step 1: Story Setup
        </h2>
        <p className="text-gray-600 mb-6">
          Start by describing your story idea. The more detail you provide, the better the AI can craft your story.
        </p>
      </div>

      {/* Main Prompt Input */}
      <div className="mb-8">
        <label htmlFor="story-prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Describe your story idea *
        </label>
        <textarea
          id="story-prompt"
          rows={6}
          placeholder="Describe your story idea... For example: A detective discovers that the victim was already dead before the supposed murder, and must uncover a conspiracy that goes back decades."
          value={storyData.prompt}
          onChange={(e) => onUpdate({ prompt: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
        />
        <p className="mt-2 text-sm text-gray-500">
          Characters, tone, setting, conflicts - include anything that's important to your story.
        </p>
      </div>

      {/* Quick Templates */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
        
        {/* Popular Prompts */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Popular Prompts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptSelect(prompt)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <p className="text-sm text-gray-700">{prompt}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Genre Templates */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Genre Templates</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {genreTemplates.map((template) => (
              <button
                key={template.genre}
                onClick={() => handleGenreSelect(template.genre, template.template)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                <div className="flex items-center mb-2">
                  <span className="text-lg mr-2">{template.icon}</span>
                  <span className="font-medium text-gray-900">{template.genre}</span>
                </div>
                <p className="text-sm text-gray-600">{template.template}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Expansion Panels */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Details (Optional)</h3>
        
        {/* Characters */}
        <div className="mb-4">
          <button
            onClick={() => setShowCharacterDetails(!showCharacterDetails)}
            className="flex items-center justify-between w-full p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <span className="font-medium text-gray-700">Characters</span>
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform ${showCharacterDetails ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showCharacterDetails && (
            <div className="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <textarea
                rows={3}
                placeholder="Describe your main characters: their names, personalities, backgrounds, relationships..."
                value={storyData.characters}
                onChange={(e) => onUpdate({ characters: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
              />
            </div>
          )}
        </div>

        {/* Setting */}
        <div>
          <button
            onClick={() => setShowSettingDetails(!showSettingDetails)}
            className="flex items-center justify-between w-full p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <span className="font-medium text-gray-700">Setting</span>
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform ${showSettingDetails ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showSettingDetails && (
            <div className="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <textarea
                rows={3}
                placeholder="Describe the world, time period, location, atmosphere, or specific places in your story..."
                value={storyData.setting}
                onChange={(e) => onUpdate({ setting: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
              />
            </div>
          )}
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
          onClick={validateAndNext}
          className="btn-primary"
        >
          Continue to Customization
        </button>
      </div>
    </div>
  )
}
