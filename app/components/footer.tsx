'use client'

import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/paulocymbaum',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/paulocymbaum',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/paulocymbaum',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:paulo@example.com',
    icon: Mail,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-heading text-text-primary">
                Paulo Cymbaum
              </h3>
              <p className="text-text-secondary max-w-md">
                Full-stack developer passionate about creating innovative solutions 
                that bridge technology and business needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={cn(
                      'block text-text-secondary hover:text-text-primary transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-sm'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted/50',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                      'transition-colors'
                    )}
                    aria-label={`Follow on ${item.name}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-text-secondary text-sm">
                © {new Date().getFullYear()} Paulo Cymbaum. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className={cn(
                  'mt-4 md:mt-0 p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                  'transition-colors flex items-center space-x-2'
                )}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="text-sm">Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
