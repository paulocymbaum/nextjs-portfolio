'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button";

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Video Background - only render after mounting */}
      {mounted && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          onLoadStart={() => {
            console.log('Video loading started')
          }}
          onCanPlay={() => {
            console.log('Video ready to play')
            setVideoLoaded(true)
          }}
          onLoadedData={() => {
            console.log('Video data loaded')
            setVideoLoaded(true)
          }}
          onPlaying={() => {
            console.log('Video is playing')
            setVideoLoaded(true)
          }}
          onError={(e) => {
            console.error('Video error:', e)
            setVideoError(true)
          }}
          style={{
            filter: 'brightness(0.8)' // Slightly darken the video for better text contrast
          }}
        >
          <source src="/HEROVIDEO.mp4" type="video/mp4" />
          <p className="text-white">Your browser does not support the video tag.</p>
        </video>
      )}
      
      {/* Fallback Background - only show if video fails to load */}
      {(!mounted || videoError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-[1]"></div>
      )}
      
      {/* Enhanced Dark Overlay with Gradient - lighter overlay to see video better */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-[2]"></div>
      
      {/* Content */}
      <div className="relative z-[3] max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Shaping the Future with{" "}
              <span className="text-primary-400 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                AI Engineering
              </span>
            </h1>
          </div>
          <div className="mb-8 animate-fade-in-up animation-delay-200">
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              AI Engineer specializing in LLMs, RAG architectures, and intelligent automation. 
              Transforming complex AI challenges into scalable, real-world solutions that drive innovation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700 text-white border-primary-600 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-transform backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[3]">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-white animate-bounce hover:scale-110 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
