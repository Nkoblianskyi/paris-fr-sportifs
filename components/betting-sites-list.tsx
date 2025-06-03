import { bettingSites } from "@/lib/betting-sites"
import BettingSiteCard from "./betting-site-card"
import FadeIn from "./animations/fade-in"
import StaggerContainer from "./animations/stagger-container"

export default function BettingSitesList() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 pt-4 md:pt-0 text-white">
            Top Sites de Paris Sportifs 2024
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={150} className="space-y-6">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
