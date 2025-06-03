import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users } from "lucide-react"
import FadeIn from "./animations/fade-in"
import BounceIn from "./animations/bounce-in"

export default function Hero() {
  return (
    <section className="relative text-white py-12 overflow-hidden" style={{ maxHeight: "250px" }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <FadeIn delay={200}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">
              Meilleurs Sites de Paris Sportifs en France
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-shadow">
              Découvrez notre sélection des meilleurs sites de paris sportifs français, avec des bonus exclusifs et des
              avis d'experts vérifiés.
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            <BounceIn delay={600}>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 hover-scale bg-white/95 text-gray-900 shadow-lg"
              >
                <Shield className="w-4 h-4" />
                Sites Licenciés ANJ
              </Badge>
            </BounceIn>
            <BounceIn delay={700}>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 hover-scale bg-white/95 text-gray-900 shadow-lg"
              >
                <Award className="w-4 h-4" />
                Bonus Vérifiés
              </Badge>
            </BounceIn>
            <BounceIn delay={800}>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 hover-scale bg-white/95 text-gray-900 shadow-lg"
              >
                <Users className="w-4 h-4" />
                Avis Certifiés
              </Badge>
            </BounceIn>
          </div>
        </div>
      </div>
    </section>
  )
}
