export default function FeaturesSection() {
  const features = [
    {
      icon: '🎭',
      title: 'Genre Selection',
      description: 'Choose from 15+ genres including Fantasy, Sci-Fi, Mystery, Romance, Horror, and more.'
    },
    {
      icon: '🤖',
      title: 'AI Assistance',
      description: 'Our advanced AI helps develop characters, plot lines, and creates surprising narrative twists.'
    },
    {
      icon: '⚡',
      title: 'Surprising Plots',
      description: 'Get unexpected plot twists and story elements that keep readers engaged and surprised.'
    },
    {
      icon: '✏️',
      title: 'Easy Editing',
      description: 'Refine and customize your stories with our intuitive editing tools and real-time preview.'
    },
    {
      icon: '🎨',
      title: 'Visual Enhancements',
      description: 'Generate covers, character illustrations, and scene visualizations for your stories.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access and create stories on any device with our responsive, touch-optimized interface.'
    }
  ]

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features That Bring Your Stories to Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, customize, and share amazing stories with AI-powered assistance.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional showcase */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  From Idea to Published Story
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Our streamlined workflow takes you from a simple idea to a polished, ready-to-share story in just a few steps.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      1
                    </div>
                    <span className="text-gray-700">Describe your story idea</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      2
                    </div>
                    <span className="text-gray-700">Choose genre and customize parameters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      3
                    </div>
                    <span className="text-gray-700">AI generates your story with twists</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      4
                    </div>
                    <span className="text-gray-700">Review, edit, and export</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="w-72 h-72 mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-8xl text-white">📖</span>
                  </div>
                  <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
