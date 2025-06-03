"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import BettingSitesList from "@/components/betting-sites-list"
import SafeGamblingSection from "@/components/safe-gambling-section"
import MethodologySection from "@/components/methodology-section"
import FAQSection from "@/components/faq-section"
import BonusModal from "@/components/bonus-modal"

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="min-h-screen relative parallax bg-paris"
      style={{
        backgroundImage:
          "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <BettingSitesList />
        <MethodologySection />
        <SafeGamblingSection />
        <FAQSection />
        <BonusModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  )
}
