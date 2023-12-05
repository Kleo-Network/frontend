import React from 'react'

import { ReactComponent as CopyIcon } from '../../../assets/images/copy.svg'
import { ReactComponent as TickIcon } from '../../../assets/images/check.svg'

interface SocialShareProps {
  profileUrl: string
}

const SocialShare: React.FC<SocialShareProps> = ({ profileUrl }) => {
  const [copied, setCopied] = React.useState(false)

  const shareMessage = `Here is my KLEO profile containing my past browsing history insights! Check it out: ${profileUrl}`

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`)
  }

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        profileUrl
      )}`
    )
  }

  const shareToInstagram = () => {
    // Instagram sharing doesn't support pre-filled captions through URL
    // You can guide users to share manually on Instagram
    alert('Please share manually on Instagram.')
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareMessage
      )}`
    )
  }

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profileUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-2xl font-bold mb-8">Share Your KLEO Profile</h2>

      <div className="flex space-x-6">
        <button onClick={shareToWhatsApp}>
          <img
            src="https://www.google.com/s2/favicons?domain=whatsapp.com&sz=48"
            alt="WhatsApp"
            className="w-10 h-10"
          />
          {/* WhatsApp */}
        </button>
        <button onClick={shareToFacebook}>
          <img
            src="https://www.google.com/s2/favicons?domain=facebook.com&sz=48"
            alt="Facebook"
            className="w-10 h-10"
          />
          {/* Facebook */}
        </button>
        <button onClick={shareToInstagram}>
          <img
            src="https://www.google.com/s2/favicons?domain=instagram.com&sz=48"
            alt="Instagram"
            className="w-10 h-10"
          />
          {/* Instagram */}
        </button>
        <button onClick={shareToTwitter}>
          <img
            src="https://www.google.com/s2/favicons?domain=twitter.com&sz=48"
            alt="Twitter"
            className="w-10 h-10"
          />
          {/* Twitter */}
        </button>
      </div>
      <button
        onClick={copyProfileLink}
        className="flex flex-row gap-2 items-center justify-center text-gray-800 font-medium mx-4 my-4 rounded-full hover:underline hover:text-violet-500"
      >
        <span>
          {copied ? (
            <TickIcon className=" fill-green-500 w-5 h-5" />
          ) : (
            <CopyIcon className="w-5 h-5" />
          )}
        </span>
        <span>Copy Profile Link</span>
      </button>
    </div>
  )
}

export default SocialShare
