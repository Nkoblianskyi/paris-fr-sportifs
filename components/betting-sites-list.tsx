import { bettingSites } from "@/lib/betting-sites"
import BettingSiteCard from "./betting-site-card"
import FadeIn from "./animations/fade-in"
import StaggerContainer from "./animations/stagger-container"

export default function BettingSitesList() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center pt-4 md:pt-0 text-white">
              Top Sites de Paris Sportifs{" "}
            </h2>
            <p className="text-white text-lg mb-2">{new Date().toLocaleDateString("fr-FR", { month: "2-digit", year: "numeric" }).replace("/", ".")}</p>
          </div>
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
