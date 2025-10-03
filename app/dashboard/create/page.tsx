'use client'

import { useState } from 'react'
import DashboardHeader from '../../../components/dashboard/dashboard-header'
import ProgressIndicator from '../../../components/story-creation/progress-indicator'
import StorySetup from '../../../components/story-creation/story-setup'
import StoryCustomization from '../../../components/story-creation/story-customization'
import StoryGeneration from '../../../components/story-creation/story-generation'
import StoryReview from '../../../components/story-creation/story-review'

type CreationStep = 'setup' | 'customization' | 'generation' | 'review'

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

export default function CreateStory() {
  const [currentStep, setCurrentStep] = useState<CreationStep>('setup')
  const [storyData, setStoryData] = useState<StoryData>({
    prompt: '',
    characters: '',
    setting: '',
    genre: '',
    length: 1000,
    complexity: 5,
    twistIntensity: 5,
    audience: 'adult',
    style: 'dramatic'
  })

  const steps = [
    { id: 'setup', title: 'Setup', number: 1 },
    { id: 'customization', title: 'Customize', number: 2 },
    { id: 'generation', title: 'Generating', number: 3 },
    { id: 'review', title: 'Review' , number: 4 }
  ]

  const updateStoryData = (updates: Partial<StoryData>) => {
    setStoryData(prev => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    const stepOrder: CreationStep[] = ['setup', 'customization', 'generation', 'review']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const stepOrder: CreationStep[] = ['setup', 'customization', 'generation', 'review']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'setup':
        return (
          <StorySetup
            storyData={storyData}
            onUpdate={updateStoryData}
            onNext={nextStep}
            onPrevious={prevStep}
          />
        )
      case 'customization':
        return (
          <StoryCustomization
            storyData={storyData}
            onUpdate={updateStoryData}
            onNext={nextStep}
            onPrevious={prevStep}
          />
        )
      case 'generation':
        return (
          <StoryGeneration
            storyData={storyData}
            onNext={nextStep}
            onCancel={prevStep}
          />
        )
      case 'review':
        return (
          <StoryReview
            storyData={storyData}
            onPrevious={prevStep}
            onComplete={() => {/* Navigate to story */}}
          />
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <DashboardHeader />
      
      <div className="pt-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Story
            </h1>
            <p className="text-gray-600">
              Let AI help you craft an amazing story with unexpected twists.
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator 
            steps={steps}
            currentStep={currentStep}
            className="mb-8"
          />

          {/* Step Content */}
          {renderCurrentStep()}
        </section>
      </div>
    </main>
  )
}
