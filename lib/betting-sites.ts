export interface BettingSite {
  id: string
  name: string
  url: string
  logo: string
  bonus: string
  bonusDetails: string
  rating: number
  reviewsCount: number
  featured?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: "winamax",
    name: "WINAMAX",
    url: "https://www.winamax.fr/",
    logo: "/winamax.png",
    bonus: "100% Jusqu'à 100€",
    bonusDetails: "Remboursé",
    rating: 4.8,
    reviewsCount: 2547,
    featured: true,
  },
  {
    id: "netbet",
    name: "NetBet",
    url: "https://www.netbet.fr/",
    logo: "/netbet.png",
    bonus: "100% Jusqu'à 100€",
    bonusDetails: "100 Paris Gratuits",
    rating: 4.6,
    reviewsCount: 1823,
    featured: true,
  },
]

export const topThreeSites = bettingSites.filter((site) => site.featured).slice(0, 3)
