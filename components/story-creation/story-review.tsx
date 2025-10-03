'use client'

import { useEffect, useState } from 'react'

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

interface StoryReviewProps {
  storyData: StoryData
  onPrevious: () => void
  onComplete: () => void
}

interface GeneratedStory {
  title: string
  content: string
  chapters: Array<{
    id: string
    title: string
    content: string
    wordCount: number
  }>
  totalWordCount: number
  readingTime: number
}

const mockGeneratedStory: GeneratedStory = {
  title: "The Quantum Detective",
  content: `The brilliant Detective Sarah Chen stared at the impossible evidence before her. The victim, Marcus Webb, had been found dead in his locked apartment at 10:30 PM. Yet his security footage showed him alive and well at 11:15 PM—forty-five minutes after his confirmed death time.

Sarah's initial theory of electronic manipulation dissolved when forensics confirmed the footage was authentic. No digital tampering. No deepfakes. Just Marcus Webb, sipping coffee in his own kitchen, forty-five minutes after his corpse had been wheeled out.

She thought back to Marcus's last words to her neighbor: "I'm going to change everything tomorrow." He had been a quantum physicist working on temporal research. The kind of physicist who joked about "playing with time itself."

As Sarah dug deeper, she discovered Marcus's lab notes contained equations that violated known physics. He had been attempting to create what he called "localized timeline loops"—microscopic regions where time could slip backwards.

The twist came when Sarah realized she had met Marcus before. At the crime scene. At 11:00 PM, speaking to her partner. But her memory of that conversation was different from what the cameras showed. She remembered Marcus asking about quantum entanglement detection methods. The cameras showed him discussing coffee beans.

Sarah was living through the same timeline Marcus had manipulated. Each of her observations was creating new branches in quantum reality. The detective was both the observer and the observed, trapped in a temporal paradox Marcus had engineered. His "death" was merely his consciousness shifting to a parallel timeline where quantum effects allowed him to physically manifest in multiple temporal states simultaneously.

Now Sarah had to choose: solve the case and collapse the quantum reality, or let Marcus—and herself—exist across multiple timelines forever. Her decision would determine not just justice, but the fundamental nature of time itself.`,
  chapters: [
    {
      id: '1',
      title: 'The Impossible Evidence',
      content: 'The brilliant Detective Sarah Chen stared at the impossible evidence before her. The victim, Marcus Webb, had been found dead in his locked apartment at 10:30 PM. Yet his security footage showed him alive and well at 11:15 PM—forty-five minutes after his confirmed death time.',
      wordCount: 48
    },
    {
      id: '2',
      title: 'Digital Doubts',
      content: "Sarah's initial theory of electronic manipulation dissolved when forensics confirmed the footage was authentic. No digital tampering. No deepfakes. Just Marcus Webb, sipping coffee in his own kitchen, forty-five minutes after his corpse had been wheeled out.",
      wordCount: 35
    },
    {
      id: '3',
      title: 'Quantum Clues',
      content: 'She thought back to Marcus\'s last words to her neighbor: "I\'m going to change everything tomorrow." He had been a quantum physicist working on temporal research. The kind of physicist who joked about "playing with time itself."',
      wordCount: 37
    },
    {
      id: '4',
      title: 'The Temporal Twist',
      content: 'As Sarah dug deeper, she discovered Marcus\'s lab notes contained equations that violated known physics. He had been attempting to create what he called "localized timeline loops"—microscopic regions where time could slip backwards.',
      wordCount: 36
    },
    {
      id: '5',
      title: 'Paradoxical Reality',
      content: 'The twist came when Sarah realized she had met Marcus before. At the crime scene. At 11:00 PM, speaking to her partner. But her memory of that conversation was different from what the cameras showed. She remembered Marcus asking about quantum entanglement detection methods. The cameras showed him discussing coffee beans.',
      wordCount: 58
    },
    {
      id: '6',
      title: 'Quantum Justice',
      content: 'Sarah was living through the same timeline Marcus had manipulated. Each of her observations was creating new branches in quantum reality. The detective was both the observer and the observed, trapped in a temporal paradox Marcus had engineered. His "death" was merely his consciousness shifting to a parallel timeline where quantum effects allowed him to physically manifest in multiple temporal states simultaneously.',
      wordCount: 67
    },
    {
      id: '7',
      title: 'The Final Choice',
      content: "Now Sarah had to choose: solve the case and collapse the quantum reality, or let Marcus—and herself—exist across multiple timelines forever. Her decision would determine not just justice, but the fundamental nature of time itself.",
      wordCount: 42
    }
  ],
  totalWordCount: 323,
  readingTime: 2
}

export default function StoryReview({ storyData, onPrevious, onComplete }: StoryReviewProps) {
  const [story, setStory] = useState<GeneratedStory>(mockGeneratedStory)
  const [editingChapter, setEditingChapter] = useState<string | null>(null)
  const [editableContent, setEditableContent] = useState<string>(story.content)
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base')
  const [lineSpacing, setLineSpacing] = useState<'tight' | 'normal' | 'relaxed'>('normal')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const getFontClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm'
      case 'lg': return 'text-lg'
      default: return 'text-base'
    }
  }

  const getSpacingClass = () => {
    switch (lineSpacing) {
      case 'tight': return 'leading-tight'
      case 'relaxed': return 'leading-relaxed'
      default: return 'leading-normal'
    }
  }

  const regenerateSection = (chapterId: string) => {
    // This would trigger AI regeneration for the specific section
    const chapter = story.chaptas.find(c => c.id === chapterId)
    if (chapter) {
      // Simulate regeneration
      alert(`Regenerating "${chapter.title}"... This feature will regenerate just this section while preserving the rest of your story.`)
    }
  }

  const addNewSection = (position: number) => {
    // This would add a new section at the specified position
    alert(`Adding new section at position ${position}. This feature will insert new content at the cursor position.`)
  }

  const finishStory = () => {
    // Save the story and complete the process
    onComplete()
  }

  const saveStory = () => {
    // Simulate saving
    const success = Math.random() > 0.1 // 90% success rate
    if (success) {
      alert('Story saved successfully!')
    } else {
      alert('Failed to save story. Please try again.')
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-200">
        {/* Step 4: Review */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 4: Review & Edit Your Story
          </h2>
          <p className="text-gray-600">
            Review your generated story, make edits, and save it to your library.
          </p>
        </div>

        {/* Story Metadata */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <span><strong>Word Count:</strong> {story.totalWordCount}</span>
                <span><strong>Reading Time:</strong> {story.readingTime} min</span>
                <span><strong>Genre:</strong> {storyData.genre}</span>
                <span><strong>Style:</strong> {storyData.style}</span>
              </div>
            </div>
            <div className="ml-4">
              <button
                onClick={saveStory}
                className="btn-secondary mr-2"
              >
                Save Draft
              </button>
              <button
                onClick={finishStory}
                className="btn-primary"
              >
                Finish & Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Split View Content */}
      <div className="flex flex-col lg:flex-row h-[600px]">
        {/* Story Text (Left Side) */}
        <div className="flex-1 p-6 border-r border-gray-200 overflow-auto">
          <div className="max-w-2xl mx-auto">
            {/* Reading Settings */}
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white/90 backdrop-blur-sm py-3 -mx-6 px-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Font:</span>
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-2 py-1 text-xs rounded ${fontSize === 'sm' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Small
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-2 py-1 text-xs rounded ${fontSize === 'base' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-2 py-1 text-xs rounded ${fontSize === 'lg' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Large
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Spacing:</span>
                  <button
                    onClick={() => setLineSpacing('tight')}
                    className={`px-2 py-1 text-xs rounded ${lineSpacing === 'tight' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Tight
                  </button>
                  <button
                    onClick={() => setLineSpacing('normal')}
                    className={`px-2 py-1 text-xs rounded ${lineSpacing === 'normal' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setLineSpacing('relaxed')}
                    className={`px-2 py-1 text-xs rounded ${lineSpacing === 'relaxed' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Relaxed
                  </button>
                </div>
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className={`px-3 py-1 text-xs rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'}
                </button>
              </div>
              <div className="text-sm text-gray-500">
                {story.totalWordCount} words • {story.readingTime} min read
              </div>
            </div>

            {/* Story Content */}
            <div className={`${getFontClass()} ${getSpacingClass()} ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
              {story.chapters.map((chapter, index) => (
                <div key={chapter.id} className="mb-6 group hover:bg-gray-50 rounded-lg p-4 -mx-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{chapter.title}</h4>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => regenerateSection(chapter.id)}
                        className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                        title="Regenerate this section"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <button
                        onClick={() => addNewSection(index + 1)}
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                        title="Add new section after this"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{chapter.content}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    {chapter.wordCount} words
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Controls (Right Side) */}
        <div className="w-full lg:w-80 p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Tools</h3>
          
          {/* Edit Toolbar */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Bold">
              <b>B</b>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Italic">
              <i>I</i>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Strikethrough">
              <s>S</s>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Insert Link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Undo">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100" title="Redo">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m0 0l6-6m-6 6l6 6" />
              </svg>
            </button>
          </div>

          {/* Chapter Navigation */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Chapter Navigation</h4>
            <div className="space-y-2">
              {story.chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    const element = document.getElementById(`chapter-${chapter.id}`)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full text-left p-2 text-sm rounded hover:bg-gray-100 transition-colors"
                >
                  {index + 1}. {chapter.title}
                  <div className="text-xs text-gray-500">{chapter.wordCount} words</div>
                </button>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Export Options</h4>
            <div className="space-y-2">
              <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-left text-sm">
                📄 Export as PDF
              </button>
              <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-left text-sm">
                📚 Export as EPUB
              </button>
              <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-left text-sm">
                📝 Export as TXT
              </button>
            </div>
          </div>

          {/* Share Options */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Share Story</h4>
            <div className="space-y-2">
              <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-left text-sm">
                🔗 Generate Public Link
              </button>
              <button className="w-full p-2 border border-gray-300 rounded hover:bg-gray-100 text-left text-sm">
                📱 Share on Social Media
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            className="btn-secondary"
          >
            Back to Generation
          </button>
          <div className="flex space-x-3">
            <button
              onClick={saveStory}
              className="btn-secondary"
            >
              Save Draft
            </button>
            <button
              onClick={finishStory}
              className="btn-primary"
            >
              Complete Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
