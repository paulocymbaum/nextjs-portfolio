'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/app/providers/theme-provider'
import { cn } from '@/app/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-800 p-1 bg-white dark:bg-gray-900">
      <button
        onClick={() => setTheme('light')}
        className={cn(
          'p-2 rounded-md transition-colors duration-200',
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          theme === 'light' ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
        )}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={cn(
          'p-2 rounded-md transition-colors duration-200',
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          theme === 'dark' ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
        )}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={cn(
          'p-2 rounded-md transition-colors duration-200',
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          theme === 'system' ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
        )}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  )
}

// Alternative single-button toggle
export function ThemeToggleSimple() {
  const { actualTheme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(actualTheme === 'light' ? 'dark' : 'light')}
      className={cn(
        'p-2 rounded-lg transition-colors duration-200',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'text-gray-700 dark:text-gray-300'
      )}
      aria-label={`Switch to ${actualTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {actualTheme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  )
}
