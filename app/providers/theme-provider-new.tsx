'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'dark' | 'light'
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  actualTheme: 'light',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [actualTheme, setActualTheme] = useState<'dark' | 'light'>('light')
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Load saved theme from localStorage
  useEffect(() => {
    if (!mounted) return
    
    try {
      const stored = localStorage.getItem(storageKey) as Theme
      if (stored && ['dark', 'light', 'system'].includes(stored)) {
        setTheme(stored)
      }
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error)
    }
  }, [storageKey, mounted])

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return
    
    const root = window.document.documentElement
    
    const updateTheme = () => {
      try {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        
        const currentTheme = theme === 'system' ? systemTheme : theme
        setActualTheme(currentTheme)
        
        root.classList.remove('light', 'dark')
        root.classList.add(currentTheme)
      } catch (error) {
        console.error('Failed to update theme:', error)
      }
    }

    updateTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (mounted) {
        try {
          localStorage.setItem(storageKey, theme)
          setTheme(theme)
        } catch (error) {
          console.error('Failed to save theme to localStorage:', error)
          setTheme(theme)
        }
      }
    },
    actualTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
