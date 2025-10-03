'use client'

import { useState } from 'react'

interface TutorialTriggerProps {
  children?:React.ReactNode
  className?: string
  tutorialId?: string
  variant?: string
  position?: string
}

export default function TutorialTrigger({ children, className = '', tutorialId, variant, position }: TutorialTriggerProps) {
  const [showTutorial, setShowTutorial] = useState(false)

  return (
    <div className={className}>
      {children}
      {/* Tutorial overlay will be implemented later */}
    </div>
  )
}
