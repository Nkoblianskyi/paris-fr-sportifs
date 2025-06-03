"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { topThreeSites } from "@/lib/betting-sites"
import BettingSiteCard from "./betting-site-card"

interface BonusModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BonusModal({ isOpen, onClose }: BonusModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-none overflow-visible p-4 md:p-8 animate-slide-in-up bg-white">
        <DialogHeader className="pb-2 bg-white">
          <DialogTitle className="text-lg md:text-2xl font-bold text-center animate-bounce-in">
            Offres Exclusives - Ne Ratez Pas Ces Bonus !
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-1 md:space-y-3">
          {topThreeSites.map((site, index) => (
            <div
              key={site.id}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`,
              }}
            >
              <BettingSiteCard site={site} rank={index + 1} variant="modal" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
