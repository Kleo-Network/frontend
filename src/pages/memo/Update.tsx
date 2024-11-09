import React from 'react'
import { Calendar, TrendingUp, Award } from 'lucide-react'

const KleoNewsfeed = () => {
  const updates = [
    {
      date: 'November 4th, 2024',
      highlights: [
        'Surpassed 10,000+ extension downloads',
        'Successfully managed community during server issues',
        'Preparing for Devcon in Bangkok (Nov 6-11)'
      ],
      keyPoints: [
        'Pooling data to build novel AI models',
        'Building hyper-personalized user experiences',
        'Creating use cases for research data sales'
      ],
      isLatest: true
    },
    {
      date: 'October 29th, 2024',
      quote: 'Software ate the world; now, AI is eating software',
      highlights: [
        'Launched web dashboard with referral features & leaderboards',
        'Reached 8,000 users (25% WoW increase)',
        "Integrated with Polygon's Safe Gas Station",
        'Selected for POL Rush at Devcon'
      ]
    },
    {
      date: 'October 22nd, 2024',
      metrics: [
        {
          label: 'Extension Downloads',
          value: '6,400',
          growth: '25% increase'
        },
        { label: 'Twitter Followers', value: '43,000', growth: '10% growth' },
        {
          label: 'Grant Received',
          value: '$24,000',
          source: 'Thrive x Polygon'
        }
      ]
    },
    {
      date: 'October 15th, 2024',
      highlights: [
        '5,000 extension installs milestone reached',
        'Developed proprietary activity classification algorithm on TEE',
        'Built strong community: 30k+ Twitter followers, 900 Discord members',
        'Completed 5 bounties with 1,200 USDC distributed'
      ]
    }
  ]

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {updates.map((update, index) => (
          <div
            key={index}
            className="py-10 first:pt-0 last:pb-0 border-b border-gray-100 last:border-0"
          >
            {/* Update Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {update.date}
                </h2>
              </div>
              {update.isLatest && (
                <span className="bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm">
                  Latest Update
                </span>
              )}
            </div>

            {/* Update Content */}
            <div className="space-y-8">
              {update.quote && (
                <blockquote className="border-l-4 border-gray-200 pl-6 py-2 italic text-gray-600">
                  {update.quote}
                </blockquote>
              )}

              {update.keyPoints && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    SDK End Goals:
                  </h3>
                  <ul className="space-y-4">
                    {update.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <Award className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {update.highlights && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Highlights:
                  </h3>
                  <ul className="space-y-4">
                    {update.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <TrendingUp className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {update.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {update.metrics.map((metric, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-600 mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-2xl font-bold text-gray-800">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {metric.growth || metric.source}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KleoNewsfeed
