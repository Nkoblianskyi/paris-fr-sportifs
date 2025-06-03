"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface BounceInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function BounceIn({ children, delay = 0, className = "" }: BounceInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
