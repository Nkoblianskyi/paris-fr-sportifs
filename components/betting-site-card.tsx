"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/lib/betting-sites"
import Image from "next/image"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
  variant?: "default" | "modal"
}

export default function BettingSiteCard({ site, rank, variant = "default" }: BettingSiteCardProps) {
  const handleClick = () => {
    window.open(site.url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card
      className="bg-white cursor-pointer hover-lift transition-all duration-300 border rounded-md border-blue-500 hover:border-blue-300 hover-glow"
      onClick={handleClick}
    >
      <CardContent className={variant === "modal" ? "p-2 md:p-3" : "p-3"}>
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-3">
          {/* Rank */}
          <div className="flex-shrink-0">
            <div
              className={`${variant === "modal" ? "w-6 h-6 text-xs md:w-8 md:h-8 md:text-sm" : "w-8 h-8 text-sm"} bg-blue-600 text-white rounded-full flex items-center justify-center font-bold animate-float`}
            >
              {rank}
            </div>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 bg-black p-2 md:p-4">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={120}
              height={60}
              className={`${variant === "modal" ? "h-10 md:h-10 w-18 object-contain" : "h-18 w-auto object-contain"} hover-scale transition-transform duration-300`}
            />
          </div>

          {/* Site Info */}
          <div className="flex-grow text-center lg:text-left">
            <h3 className={`${variant === "modal" ? "text-base md:text-lg" : "text-lg"} font-bold mb-1`}>
              {site.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-1 md:gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${variant === "modal" ? "w-3 h-3 md:w-6 md:h-6" : "w-4 h-4"} text-yellow-400 fill-current animate-pulse transition-colors duration-300`}
                  />
                ))}
              </div>
              <span className={`${variant === "modal" ? "text-xs md:text-sm" : "text-sm"} font-semibold`}>
                {site.rating}/5
              </span>
              <span className={`${variant === "modal" ? "text-xs md:text-sm" : "text-sm"} text-gray-500`}>
                ({site.reviewsCount} avis)
              </span>
            </div>
          </div>

          {/* Bonus Column */}
          <div className="flex-shrink-0 text-center">
            <div
              className={`bg-green-50 border-2 border-green-200 rounded-lg hover-scale transition-all duration-300 ${variant === "modal" ? "p-1 md:p-2 min-w-[120px] md:min-w-[150px]" : "p-2 min-w-[150px]"}`}
            >
              <Badge
                className={`bg-green-500 hover:bg-green-600 animate-pulse ${variant === "modal" ? "text-xs md:text-sm px-1 md:px-2 py-1" : "text-sm px-2 py-1"} mb-1 md:mb-2 block transition-colors duration-300`}
              >
                BONUS: {site.bonus}
              </Badge>
              <p className={`${variant === "modal" ? "text-xs md:text-sm" : "text-sm"} text-gray-600 font-medium`}>
                {site.bonusDetails}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button
              size="sm"
              className={`bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap hover-scale transition-all duration-300 ${
                variant === "modal" ? "px-1 md:px-2 py-1 text-xs md:text-xs" : "px-2 py-1 text-xs"
              }`}
              onClick={(e) => {
                e.stopPropagation()
                handleClick()
              }}
            >
              Récupérer
              <ExternalLink className={`${variant === "modal" ? "w-2 h-2 md:w-3 md:h-3 ml-1" : "w-3 h-3 ml-1"}`} />
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={`${variant === "modal" ? "mt-1 pt-1 md:mt-2 md:pt-2" : "mt-2 pt-2"} border-t border-gray-200`}>
          <p className={`${variant === "modal" ? "text-xs" : "text-xs"} text-gray-500 text-center`}>
            18+ | Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75
            13 13 (appel non surtaxé)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
