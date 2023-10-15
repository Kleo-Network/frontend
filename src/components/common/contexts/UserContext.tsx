import React, { createContext } from 'react'

interface UserContextProps {
  user: UserProps
  setUser: (user: UserProps) => void
}

interface UserProps {
  name: string
  avatar: string
  address: string
  kleo: number
  userId: string
}

export const UserContext = createContext<any>(null)
