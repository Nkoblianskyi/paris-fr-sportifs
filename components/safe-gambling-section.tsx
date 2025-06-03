import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, Phone, Brain, Clock, Ban, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SafeGamblingSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Jeu Responsable</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Les paris sportifs doivent rester un divertissement. Découvrez comment jouer de manière responsable et
            reconnaître les signes d'addiction.
          </p>
        </div>

        {/* Main Safe Gambling Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Warning Signs */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-red-50/80">
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Signes d'Alerte
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Préoccupation constante</h4>
                    <p className="text-sm text-gray-600">
                      Penser constamment aux paris, planifier la prochaine mise ou revivre des paris passés
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Temps excessif</h4>
                    <p className="text-sm text-gray-600">
                      Passer de plus en plus de temps à parier, au détriment d'autres activités importantes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Incapacité à s'arrêter</h4>
                    <p className="text-sm text-gray-600">
                      Difficulté à limiter les mises ou à cesser de jouer malgré les pertes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Impacts relationnels</h4>
                    <p className="text-sm text-gray-600">
                      Mensonges aux proches, isolement social ou conflits liés aux habitudes de jeu
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50/80 backdrop-blur-sm rounded-lg">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  Besoin d'aide ?
                </h4>
                <p className="text-sm">
                  Si vous reconnaissez ces signes, n'hésitez pas à contacter les services d'aide spécialisés :
                </p>
                <p className="font-medium mt-2">09 74 75 13 13 (appel non surtaxé)</p>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Responsible Gambling Tools */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-green-50/80">
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Outils de Jeu Responsable
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Limites de dépôt</h4>
                    <p className="text-sm text-gray-600">
                      Définissez un montant maximum que vous pouvez déposer par jour, semaine ou mois
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Limites de temps</h4>
                    <p className="text-sm text-gray-600">
                      Contrôlez votre temps de jeu avec des alertes et des limites de session
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Auto-exclusion</h4>
                    <p className="text-sm text-gray-600">
                      Possibilité de s'exclure temporairement ou définitivement des sites de paris
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Tests d'auto-évaluation</h4>
                    <p className="text-sm text-gray-600">
                      Évaluez vos habitudes de jeu pour identifier d'éventuels comportements à risque
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50/80 backdrop-blur-sm rounded-lg">
                <h4 className="font-semibold mb-2">Conseils pratiques</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>
                    <span>Considérez les paris comme un divertissement, pas une source de revenus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>
                    <span>Ne pariez jamais pour récupérer vos pertes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></div>
                    <span>Fixez-vous un budget et respectez-le strictement</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Protection des mineurs */}
        <div className="mb-12">
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-blue-50/80">
              <CardTitle className="text-center">Protection des Mineurs</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-blue-100 rounded-lg bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ban className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Interdiction stricte</h4>
                  <p className="text-sm text-gray-600">
                    Les paris sportifs sont strictement interdits aux personnes de moins de 18 ans
                  </p>
                </div>
                <div className="text-center p-4 border border-blue-100 rounded-lg bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Vérification d'identité</h4>
                  <p className="text-sm text-gray-600">
                    Les sites légaux vérifient systématiquement l'âge et l'identité des joueurs
                  </p>
                </div>
                <div className="text-center p-4 border border-blue-100 rounded-lg bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Contrôle parental</h4>
                  <p className="text-sm text-gray-600">
                    Utilisez des outils de contrôle parental pour bloquer l'accès aux sites de paris
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organisations d'aide */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Organisations d'Aide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="https://www.joueurs-info-service.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm hover-lift"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="font-semibold mb-2">Joueurs Info Service</h4>
              <p className="text-sm text-gray-600 text-center">
                Information, aide et orientation pour les joueurs en difficulté
              </p>
            </Link>
            <Link
              href="https://www.sosjoueurs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm hover-lift"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="font-semibold mb-2">SOS Joueurs</h4>
              <p className="text-sm text-gray-600 text-center">Association d'aide aux joueurs et à leur entourage</p>
            </Link>
            <Link
              href="https://anj.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm hover-lift"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="font-semibold mb-2">ANJ</h4>
              <p className="text-sm text-gray-600 text-center">
                Autorité Nationale des Jeux - Régulation et protection des joueurs
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
