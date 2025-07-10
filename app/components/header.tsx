'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import { ThemeToggleSimple } from './ui/theme-toggle'
import { useActiveSection } from '@/app/hooks/use-active-section'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
              className="text-xl font-bold font-heading text-text-primary hover:text-primary-600 transition-colors"
            >
              Paulo Cymbaum
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={cn(
                  'text-text-secondary hover:text-text-primary transition-colors',
                  'font-medium py-2 px-3 rounded-md',
                  'hover:bg-muted/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  activeSection === item.href.slice(1) && 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleSimple />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleSimple />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted/50',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
              )}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  'text-text-secondary hover:text-text-primary hover:bg-muted/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  activeSection === item.href.slice(1) && 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
