import React, { createContext, useContext } from 'react'

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

export const UserContext = createContext<UserContextProps | null>(null)

export const useAuthContext = () => {
  return useContext(UserContext)
}
