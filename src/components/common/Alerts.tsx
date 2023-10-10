import React from 'react'

interface AlertProps {
  type: 'primary' | 'secondary' | 'info' | 'danger'
  message: string
  icon?: React.ReactNode
}

const Alert = ({ type, message, icon }: AlertProps) => {
  let className = ''

  switch (type) {
    case 'primary':
      className = 'bg-blue-200 text-blue-700'
      break
    case 'secondary':
      className = 'bg-gray-200 text-gray-700'
      break
    case 'info':
      className = 'bg-green-200 text-green-700'
      break
    case 'danger':
      className = 'bg-red-200 text-red-700'
      break
    default:
      className = 'bg-gray-200 text-gray-700'
  }

  return (
    <div className={`alert ${className} p-2 rounded-lg flex flex-row gap-2`}>
      {icon && <span>{icon}</span>}
      {message}
    </div>
  )
}

export default Alert
