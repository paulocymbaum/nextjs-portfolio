import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Theme utility functions
 */
export const theme = {
  /**
   * Get theme-aware color classes
   */
  color: (lightClass: string, darkClass: string) => `${lightClass} dark:${darkClass}`,
  
  /**
   * Get responsive classes with consistent breakpoints
   */
  responsive: (classes: Record<string, string>) => {
    return Object.entries(classes)
      .map(([breakpoint, className]) => 
        breakpoint === 'base' ? className : `${breakpoint}:${className}`
      )
      .join(' ')
  },
  
  /**
   * Get focus-visible classes for accessibility
   */
  focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
  
  /**
   * Get consistent transition classes
   */
  transition: 'transition-colors duration-200 ease-in-out',
};
