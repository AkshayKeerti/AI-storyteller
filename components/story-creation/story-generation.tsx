'use client'

import { useState, useEffect } from 'react'

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

interface StoryGenerationProps {
  storyData: StoryData
  onNext: () => void
  onCancel: () => void
}

interface GenerationStep {
  id: string
  title: string
  description: string
  status: 'pending' | 'active' | 'completed'
  progress: number
}

const initialSteps: GenerationStep[] = [
  {
    id: 'analyzing',
    title: 'Analyzing Prompt',
    description: 'Understanding your story concept and requirements',
    status: 'pending',
    progress: 0
  },
  {
    id: 'characters',
    title: 'Creating Characters',
    description: 'Developing compelling main characters and relationships',
    status: 'pending',
    progress: 0
  },
  {
    id: 'plot',
    title: 'Building Plot',
    description: 'Structuring the storyline and major events',
    status: 'pending',
    progress: 0
  },
  {
    id: 'world',
    title: 'Building World',
    description: 'Creating settings, atmosphere, and environment',
    status: 'pending',
    progress: 0
  },
  {
    id: 'twists',
    title: 'Adding Twists',
    description: 'Crafting unexpected plot developments',
    status: 'pending',
    progress: 0
  },
  {
    id: 'polish',
    title: 'Polishing Story',
    description: 'Refining dialogue, descriptions, and flow',
    status: 'pending',
    progress: 0
  }
]

export default function StoryGeneration({ storyData, onNext, onCancel }: StoryGenerationProps) {
  const [steps, setSteps] = useState<GenerationStep[]>(initialSteps)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Simulate story generation progress
  useEffect(() => {
    let stepInterval: NodeJS.Timeout
    let progressInterval: NodeJS.Timeout
    let wordInterval: NodeJS.Timeout

    if (!isComplete && !isPaused) {
      // Progress through steps
      stepInterval = setInterval(() => {
        setCurrentStepIndex((prevIndex) => {
          if (prevIndex < steps.length - 1) {
            // Mark current step as completed and next as active
            setSteps(prevSteps => 
              prevSteps.map((step, index))=> {
                if (index === prevIndex) {
                  return { ...step, status: 'completed' as const, progress: 100 }
                }
                if (index === prevIndex + 1) {
                  return { ...step, status: 'active' as const }
                }
                return step
              })
            )
            return prevIndex + 1
          } else {
            // Final step completed
            setIsComplete(true)
            setSteps(prevSteps => 
              prevSteps.map((step, index) => 
                index === prevIndex 
                  ? { ...step, status: 'completed' as const, progress: 100 }
                  : step
              )
            )
            clearInterval(stepInterval)
            clearInterval(progressInterval)
            clearInterval(wordInterval)
            return prevIndex
          }
        })
      }, 3000)

      // Increment progress for current active step
      progressInterval = setInterval(() => {
        setSteps(prevSteps => 
          prevSteps.map((step, index) => 
            step.status === 'active' && step.progress < 100
              ? { ...step, progress: Math.min(step.progress + Math.random() * 15, 100) }
              : step
          )
        )
      }, 200)

      // Increment word count
      wordInterval = setInterval(() => {
        setWordCount(prev => {
          // Faster growth in active steps
          const currentActiveStep = steps.find(step => step.status === 'active')
          if (currentActiveStep?.id === 'plot' || currentActiveStep?.id === 'story') {
            return prev + Math.random() * 5
          }
          return prev + Math.random() * 2
        })
      }, 100)
    }

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
      clearInterval(wordInterval)
    }
  }, [isComplete, isPaused])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel story generation? You will lose all progress.')) {
      onCancel()
    }
  }

  const handleCompleteGeneration = () => {
    onNext()
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-8 shadow-sm">
      {/* Step 3: Generation */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step 3: Generating Your Story
        </h2>
        <p className="text-gray-600">
          AI is crafting your personalized story with carefully planned twists and characters. This usually takes 2-3 minutes.
        </p>
      </div>

      {/* Story Summary */}
      <div className="mb-8 bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Story Summary</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Genre:</strong> {storyData.genre}</p>
          <p><strong>Length:</strong> ~{storyData.length} words</p>
          <p><strong>Tone:</strong> {storyData.style}</p>
          <p><strong>Audience:</strong> {storyData.audience}</p>
        </div>
      </div>

      {/* Generation Progress */}
      <div className="mb-8">
        {/* Overall Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-600">
              {Math.round((steps.filter(s => s.status === 'completed').length / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${(steps.filter(s => s.status === 'completed').length / steps.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* Live Word Count */}
        <div className="mb-6 flex items-center justify-center">
          <div className="bg-primary-50 border border-primary-200 rounded-lg px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {Math.floor(wordCount)}
                </div>
                <div className="text-xs text-gray-600">Words Generated</div>
              </div>
              <div className="w-px h-8 bg-primary-200" />
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{storyData.length}</div>
                <div className="text-xs text-gray-600">Target Words</div>
              </div>
            </div>
          </div>
        </div>

        {/* Generation Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = step.status === 'active'
            const isCompleted = step.status === 'completed'
            const isPending = step.status === 'pending'

            return (
              <div 
                key={step.id} 
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  isActive 
                    ? 'border-primary-300 bg-primary-50 shadow-md' 
                    : isCompleted 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {/* Status Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      isCompleted 
                        ? 'bg-green-500' 
                        : isActive 
                        ? 'bg-primary-500 animate-pulse' 
                        : 'bg-gray-300'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0$}` />
                        </svg>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className={`font-medium ${
                      isActive ? 'text-primary-700' : isCompleted ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Progress Percentage */}
                  {(isActive || isCompleted) && (
                    <span className="text-sm font-medium text-gray-600">
                      {Math.round(step.progress)}%
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm ml-11 ${
                  isActive ? 'text-primary-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.description}
                </p>

                {/* Progress Bar */}
                {(isActive || isCompleted) && (
                  <div className="mt-3 ml-11">
                    <div className="w-full bg-white rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                          isCompleted ? 'bg-green-500' : 'bg-primary-500'
                        }`}
                        style={{ width: `${step.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleCancel}
          className="btn-secondary"
          disabled={isComplete}
        >
          {isComplete ? 'Generation Complete' : 'Cancel Generation'}
        </button>
        
        {/* Pause/Resume */}
        {!isComplete && (
          <button
            onClick={togglePause}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isPaused 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            }`}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        )}

        {/* Complete Button */}
        {isComplete && (
          <button
            onClick={handleCompleteGeneration}
            className="btn-primary"
          >
            Review Your Story
          </button>
        )}
      </div>

      {/* Fun message when active */}
      {!isComplete && !isPaused && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            💫 Did you know? Our AI can generate thousands of words per minute while maintaining quality and coherence!
          </p>
        </div>
      )}
    </div>
  )
}
