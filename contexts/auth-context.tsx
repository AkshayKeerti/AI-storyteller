'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing authentication on app load
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      // Check if user data exists in localStorage (in a real app, this would be a secure token)
      const userData = localStorage.getItem('ai-story-builder-user')
      if (userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
      }
    } catch (error) {
      console.error('Error checking auth status:', error)
      localStorage.removeItem('ai-story-builder-user')
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock successful login - in real app, validate credentials with backend
      if (email && password) {
        const userData: User = {
          id: '1',
          name: email.split('@')[0], // Extract name from email for demo
          email: email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          createdAt: new Date().toISOString()
        }
        
        // Store user data in localStorage (in production, use secure tokens)
        localStorage.setItem('ai-story-builder-user', JSON.stringify(userData))
        setUser(userData)
        setIsLoading(false)
        return true
      }
      
      setIsLoading(false)
      return false
    } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock successful registration - in real app, create user account
      if (name && email && password) {
        const userData: User = {
          id: '1',
          name: name,
          email: email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed${email}`,
          createdAt: new Date().toISOString()
        }
        
        // Store user data in localStorage (in production, use secure tokens)
        localStorage.setItem('ai-story-builder-user', JSON.stringify(userData))
        setUser(userData)
        setIsLoading(false)
        return true
      }
      
      setIsLoading(false)
      return false
    } catch (error) {
      console.error('Registration error:', error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('ai-story-builder-user')
    setUser(null)
    router.push('/')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
