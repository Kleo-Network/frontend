import React from 'react'
import { Users, Linkedin, Twitter, Globe } from 'lucide-react'

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Vaibhav Maheshwari',
      role: 'FOUNDER',
      image: '/api/placeholder/100/100',
      description:
        "NIT Surat alumnus with a Master's in Mathematics, 4 years of full-stack dev experience, and a successful exit from an edtech startup with 15k+ users.",
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      name: 'Pratik Ostwal',
      role: 'GROWTH',
      image: '/api/placeholder/100/100',
      description:
        '5 years on experience in web2 marketing. Lead growth at GigIndia, Axis Bank (Freecharge) and Trianly',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Ruchi Tripathi',
      role: 'UX DESIGNER',
      image: '/api/placeholder/100/100',
      description:
        'Product Manager and competency in UX and UI interfaces. 2 years of Design Experience working with startups',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Prince Dalsaniya',
      role: 'TECH LEAD',
      image: '/api/placeholder/100/100',
      description:
        'Ahmedabad University Alumni, 3+ years Front-End Dev Passionate about Full Stack Development and Web3',
      social: {
        linkedin: '#',
        website: '#'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-10 w-10 text-purple-600 mr-2" />
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
        </div>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          The right tech powerhouse to back, with the right product
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <div className="h-full w-full rounded-xl bg-white shadow-xl p-8 flex flex-col items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-purple-600 tracking-wider mt-2">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-8 py-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-6 mt-6">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                      {member.social.website && (
                        <a
                          href={member.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <Globe className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
