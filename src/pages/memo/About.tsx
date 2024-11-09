import React from 'react'
import { ArrowRight, Shield, Users, Database, Coins, Brain } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      title: 'Own Your Data',
      description:
        'Take control of your digital footprint with our secure Chrome extension. Your browsing data is encrypted and signed using public key cryptography.',
      icon: Shield
    },
    {
      title: 'Get Rewarded',
      description:
        'Earn KLEO tokens for sharing your data and enjoy enhanced personalization across partner sites.',
      icon: Coins
    },
    {
      title: 'Developer SDK',
      description:
        'Access high-quality, real-time user data to build powerful AI models and personalized experiences.',
      icon: Brain
    }
  ]

  const useCases = [
    {
      title: 'For Users',
      items: [
        'Secure data ownership through encryption',
        'Query your data like a personal memory assistant',
        'Earn rewards for data contributions',
        'Enhanced personalization across partner sites',
        'Complete control over data sharing'
      ]
    },
    {
      title: 'For Developers & Organizations',
      items: [
        'Real-time access to high-quality user data',
        'Build better AI models with authentic data',
        'User-specific personalization capabilities',
        'Access to pooled anonymous data insights',
        'Simple SDK integration'
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Democratizing Data Ownership
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Kleo Network is revolutionizing how users own their data and how
            organizations access it. A decentralized data marketplace that
            rewards users while enabling AI innovation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-6">
                <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md">
                  <feature.icon className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {useCase.title}
              </h3>
              <ul className="space-y-4">
                {useCase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Data DAO Section */}
        <div className="mt-24 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Power of Data DAO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Individual Insights
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Movie preferences and viewing history</li>
                <li>• Sports interests and engagement</li>
                <li>• Cryptocurrency tracking behavior</li>
                <li>• Web3 activity and NFT interactions</li>
                <li>• Video consumption patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Pooled Data Analytics
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Aggregate user behavior analysis</li>
                <li>• Trading workflow patterns</li>
                <li>• Shopping preferences</li>
                <li>• Anonymous trend identification</li>
                <li>• AI model training datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
