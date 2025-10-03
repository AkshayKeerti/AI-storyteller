interface ProgressIndicatorProps {
  steps: Array<{
    id: string
    title: string
    number: number
  }>
  currentStep: string
  className?: string
}

export default function ProgressIndicator({ steps, currentStep, className = "" }: ProgressIndicatorProps) {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep)

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = index < currentStepIndex
          const isUpcoming = index > currentStepIndex

          return (
            <div key={step.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    isCompleted
                      ? 'bg-primary-600 text-white'
                      : isActive
                      ? 'bg-primary-100 text-primary-600 ring-2 ring-primary-200'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
              </div>

              {/* Step Title */}
              <div className="ml-3">
                <p
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-6 h-0.5 bg-gray-200 relative">
                  {isCompleted && (
                    <div className="absolute inset-0 bg-primary-600 transition-all duration-300" />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
