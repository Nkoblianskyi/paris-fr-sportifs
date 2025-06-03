import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Shield,
  Award,
  DollarSign,
  Smartphone,
  Headphones,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"
import FadeIn from "./animations/fade-in"
import StaggerContainer from "./animations/stagger-container"

export default function MethodologySection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Notre Méthodologie</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Découvrez comment nous évaluons et sélectionnons les meilleurs sites de paris sportifs pour vous garantir
              une expérience de qualité et sécurisée.
            </p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <StaggerContainer staggerDelay={200} className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center hover-lift bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-float">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">1. Recherche Approfondie</h3>
            <p className="text-gray-700">
              Notre équipe identifie tous les sites de paris sportifs disponibles en France et vérifie leur légalité.
            </p>
          </div>
          <div className="flex flex-col items-center text-center hover-lift bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">2. Évaluation Rigoureuse</h3>
            <p className="text-gray-700">
              Chaque site est testé selon plus de 50 critères spécifiques par nos experts en paris sportifs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center hover-lift bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">3. Classement Objectif</h3>
            <p className="text-gray-700">
              Les sites sont classés selon leurs performances globales et mis à jour régulièrement.
            </p>
          </div>
        </StaggerContainer>

        {/* Evaluation Criteria */}
        <FadeIn>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Critères d'Évaluation</h3>
        </FadeIn>
        <StaggerContainer staggerDelay={100} className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Security & Licensing */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-green-50/80">
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600 animate-pulse" />
                Sécurité et Licences
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Licence ANJ valide</h4>
                    <p className="text-sm text-gray-600">
                      Vérification de la présence d'une licence officielle de l'Autorité Nationale des Jeux
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Chiffrement des données</h4>
                    <p className="text-sm text-gray-600">
                      Analyse des protocoles de sécurité SSL/TLS et de la protection des informations personnelles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Jeu responsable</h4>
                    <p className="text-sm text-gray-600">
                      Évaluation des outils de contrôle et des mesures de prévention de l'addiction
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bonuses & Promotions */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-yellow-50/80">
              <CardTitle className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-yellow-600 animate-pulse" />
                Bonus et Promotions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Valeur des offres</h4>
                    <p className="text-sm text-gray-600">
                      Analyse du montant et du pourcentage des bonus de bienvenue et promotions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Conditions de mise</h4>
                    <p className="text-sm text-gray-600">
                      Évaluation des exigences de mise et de la facilité à débloquer les bonus
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Promotions régulières</h4>
                    <p className="text-sm text-gray-600">
                      Vérification de la fréquence et de la qualité des offres pour les joueurs existants
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Betting Markets */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-blue-50/80">
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-600 animate-pulse" />
                Marchés et Cotes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Diversité des sports</h4>
                    <p className="text-sm text-gray-600">Évaluation du nombre de sports et compétitions disponibles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Profondeur des marchés</h4>
                    <p className="text-sm text-gray-600">
                      Analyse du nombre de paris disponibles pour chaque événement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Compétitivité des cotes</h4>
                    <p className="text-sm text-gray-600">Comparaison des cotes proposées avec la moyenne du marché</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Experience */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-purple-50/80">
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-purple-600 animate-pulse" />
                Expérience Utilisateur
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Interface et navigation</h4>
                    <p className="text-sm text-gray-600">
                      Évaluation de la facilité d'utilisation et de l'ergonomie du site
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Applications mobiles</h4>
                    <p className="text-sm text-gray-600">
                      Test des applications iOS et Android et de la version mobile du site
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Vitesse et stabilité</h4>
                    <p className="text-sm text-gray-600">
                      Mesure des temps de chargement et de la fiabilité de la plateforme
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banking */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-orange-50/80">
              <CardTitle className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-orange-600 animate-pulse" />
                Méthodes de Paiement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Diversité des options</h4>
                    <p className="text-sm text-gray-600">
                      Évaluation du nombre et de la variété des méthodes de dépôt et retrait
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Rapidité des retraits</h4>
                    <p className="text-sm text-gray-600">Mesure des délais de traitement des demandes de retrait</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Limites et frais</h4>
                    <p className="text-sm text-gray-600">
                      Analyse des montants minimum/maximum et des éventuels frais appliqués
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Support */}
          <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-red-50/80">
              <CardTitle className="flex items-center gap-3">
                <Headphones className="w-6 h-6 text-red-600 animate-pulse" />
                Service Client
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Canaux de contact</h4>
                    <p className="text-sm text-gray-600">
                      Évaluation des options disponibles (chat, email, téléphone) et de leur accessibilité
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Réactivité</h4>
                    <p className="text-sm text-gray-600">
                      Mesure des temps de réponse et de la disponibilité du support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Qualité des réponses</h4>
                    <p className="text-sm text-gray-600">
                      Analyse de la pertinence et de l'efficacité des solutions proposées
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </StaggerContainer>

        {/* Exclusion Criteria */}
        <FadeIn>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Critères d'Exclusion</h3>
            <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50/90 backdrop-blur-sm p-6 rounded-lg hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600 animate-pulse" />
                  <h4 className="font-semibold">Absence de licence ANJ</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Nous excluons systématiquement tous les sites non agréés par l'Autorité Nationale des Jeux.
                </p>
              </div>
              <div className="bg-red-50/90 backdrop-blur-sm p-6 rounded-lg hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600 animate-pulse" />
                  <h4 className="font-semibold">Problèmes de paiement</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Les sites avec des retards de paiement récurrents ou des refus de paiement injustifiés sont exclus.
                </p>
              </div>
              <div className="bg-red-50/90 backdrop-blur-sm p-6 rounded-lg hover-lift shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600 animate-pulse" />
                  <h4 className="font-semibold">Pratiques trompeuses</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Tout site utilisant des conditions abusives ou des pratiques commerciales déloyales est écarté.
                </p>
              </div>
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Update Process */}
        <FadeIn>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Processus de Mise à Jour</h3>
            <Card className="hover-lift hover-glow bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-float">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Révision Trimestrielle</h4>
                    <p className="text-gray-700">
                      Notre classement est intégralement révisé tous les trois mois pour garantir son exactitude.
                    </p>
                  </div>
                </div>
                <StaggerContainer staggerDelay={100} className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg hover-scale bg-white/80 backdrop-blur-sm">
                    <h5 className="font-semibold mb-2">Surveillance continue</h5>
                    <p className="text-sm text-gray-600">
                      Veille permanente sur les changements de conditions, bonus et services
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover-scale bg-white/80 backdrop-blur-sm">
                    <h5 className="font-semibold mb-2">Retours utilisateurs</h5>
                    <p className="text-sm text-gray-600">
                      Prise en compte des avis et expériences des parieurs français
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover-scale bg-white/80 backdrop-blur-sm">
                    <h5 className="font-semibold mb-2">Tests anonymes</h5>
                    <p className="text-sm text-gray-600">
                      Utilisation régulière des plateformes par nos experts sous couvert d'anonymat
                    </p>
                  </div>
                </StaggerContainer>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
