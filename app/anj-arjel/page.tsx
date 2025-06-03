import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, AlertTriangle, Users } from "lucide-react"
import Link from "next/link"

export default function ANJARJELPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600">Régulation Officielle</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ANJ - Autorité Nationale des Jeux</h1>
            <p className="text-xl text-gray-600">L'organisme de régulation des jeux d'argent et de hasard en France</p>
          </div>

          {/* Main Content */}
          <div className="grid gap-8">
            {/* What is ANJ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Qu'est-ce que l'ANJ ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  L'Autorité Nationale des Jeux (ANJ) est l'autorité administrative indépendante française chargée de la
                  régulation des jeux d'argent et de hasard. Créée en 2020, elle remplace l'ARJEL (Autorité de
                  Régulation des Jeux En Ligne) et étend ses compétences à l'ensemble du secteur des jeux.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'ANJ supervise les casinos, les jeux en ligne, les paris sportifs, les loteries et tous les autres
                  jeux d'argent autorisés en France. Elle garantit l'intégrité, la fiabilité et la transparence de ces
                  activités.
                </p>
              </CardContent>
            </Card>

            {/* Missions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  Missions Principales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Délivrance des licences</h4>
                        <p className="text-sm text-gray-600">
                          Attribution et contrôle des agréments pour les opérateurs de jeux
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Protection des joueurs</h4>
                        <p className="text-sm text-gray-600">Prévention de l'addiction et protection des mineurs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Lutte contre la fraude</h4>
                        <p className="text-sm text-gray-600">
                          Surveillance des activités illégales et blanchiment d'argent
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Contrôle technique</h4>
                        <p className="text-sm text-gray-600">Vérification des systèmes et logiciels de jeux</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Sanctions disciplinaires</h4>
                        <p className="text-sm text-gray-600">Application de mesures en cas de non-conformité</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Information du public</h4>
                        <p className="text-sm text-gray-600">Sensibilisation aux risques liés aux jeux d'argent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Framework */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  Cadre Légal et Réglementaire
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Loi du 12 mai 2010</h4>
                  <p className="text-orange-700 text-sm">
                    Ouverture à la concurrence et régulation du secteur des jeux d'argent et de hasard en ligne
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Ordonnance du 2 octobre 2019</h4>
                  <p className="text-blue-700 text-sm">
                    Création de l'ANJ et extension de ses compétences à l'ensemble du secteur des jeux
                  </p>
                </div>
                <p className="text-gray-700">
                  L'ANJ dispose de pouvoirs étendus : enquête, contrôle, sanction, et peut prononcer des amendes pouvant
                  atteindre 5% du chiffre d'affaires annuel de l'opérateur fautif.
                </p>
              </CardContent>
            </Card>

            {/* Player Protection */}
            <Card>
              <CardHeader>
                <CardTitle>Protection des Joueurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  L'ANJ met en place des dispositifs de protection renforcés pour les joueurs :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Limites de jeu</h4>
                    <p className="text-sm text-gray-600">
                      Plafonds de dépôts, de pertes et de temps de jeu obligatoires
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Auto-exclusion</h4>
                    <p className="text-sm text-gray-600">
                      Possibilité de s'interdire de jouer temporairement ou définitivement
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Fichier des interdits</h4>
                    <p className="text-sm text-gray-600">
                      Système centralisé d'exclusion partagé entre tous les opérateurs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back Link */}
            <div className="text-center">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
