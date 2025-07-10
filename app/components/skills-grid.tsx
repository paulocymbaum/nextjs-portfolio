'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/app/lib/utils'

interface SkillData {
  name: string
  level: number // 0-100
  category: 'AI/ML' | 'Languages' | 'AI Tools' | 'Backend' | 'Frontend' | 'Tools' | 'Other'
  icon?: string
  description?: string
  yearsOfExperience?: number
}

interface SkillCardProps {
  skill: SkillData
  index: number
  isVisible: boolean
}

export function SkillCard({ skill, index, isVisible }: SkillCardProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 100) // Stagger animation
      return () => clearTimeout(timeout)
    }
  }, [isVisible, skill.level, index])

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-emerald-500'
    if (level >= 60) return 'bg-blue-500'
    if (level >= 40) return 'bg-yellow-500'
    return 'bg-orange-500'
  }

  const getLevelText = (level: number) => {
    if (level >= 80) return 'Expert'
    if (level >= 60) return 'Advanced'
    if (level >= 40) return 'Intermediate'
    return 'Beginner'
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      case 'Languages':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
      case 'AI Tools':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
      case 'Frontend':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      case 'Backend':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'Tools':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  return (
    <div
      className={cn(
        'group relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700',
        'hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-400/20',
        'transition-all duration-300 hover:scale-105 cursor-pointer',
        'hover:border-primary-300 dark:hover:border-primary-600'
      )}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          'px-2 py-1 rounded-full text-xs font-medium',
          getCategoryColor(skill.category)
        )}>
          {skill.category}
        </span>
        {skill.yearsOfExperience && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {skill.yearsOfExperience}+ years
          </span>
        )}
      </div>

      {/* Skill Icon & Name */}
      <div className="flex items-center gap-3 mb-4">
        {skill.icon && (
          <div className="w-8 h-8 text-2xl flex items-center justify-center">
            {skill.icon}
          </div>
        )}
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
          {skill.name}
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {getLevelText(skill.level)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {animatedLevel}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className={cn(
              'h-full rounded-full transition-all duration-1000 ease-out',
              getLevelColor(skill.level),
              'relative overflow-hidden'
            )}
            style={{ width: `${animatedLevel}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      {/* XP Bar Style Addition */}
      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={cn(
                'w-2 h-2 rounded-full transition-colors duration-300',
                i < Math.floor(skill.level / 20) 
                  ? getLevelColor(skill.level).replace('bg-', 'bg-')
                  : 'bg-gray-300 dark:bg-gray-600'
              )}
            />
          ))}
        </div>
        <span>Level {Math.floor(skill.level / 20) + 1}</span>
      </div>

      {/* Hover/Click Details */}
      {showDetails && skill.description && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {skill.description}
          </p>
        </div>
      )}

      {/* Achievement Badge */}
      {skill.level >= 80 && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-1 text-xs font-bold">
          ⭐
        </div>
      )}
    </div>
  )
}

interface SkillsGridProps {
  skills: SkillData[]
  title?: string
}

export function SkillsGrid({ skills, title = 'Skills & Technologies' }: SkillsGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Languages' | 'AI Tools' | 'Backend' | 'Frontend' | 'Tools'>('All')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [mounted])

  const filteredSkills = skills.filter(skill => 
    filter === 'All' || skill.category === filter
  )

  const categories = ['All', 'AI/ML', 'Languages', 'AI Tools', 'Backend', 'Frontend', 'Tools']

  return (
    <div id="skills-section" className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My technical expertise and proficiency levels across different technologies and tools
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category as typeof filter)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              filter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Overall Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {skills.length}
          </div>
          <div className="text-gray-700 dark:text-gray-300">Total Skills</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
            {skills.filter(s => s.level >= 80).length}
          </div>
          <div className="text-gray-700 dark:text-gray-300">Expert Level</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
          </div>
          <div className="text-gray-700 dark:text-gray-300">Average Level</div>
        </div>
      </div>
    </div>
  )
}
