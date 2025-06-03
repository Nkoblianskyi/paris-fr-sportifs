import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, BarChart3, Shield, Clock, Trash2 } from "lucide-react"
import Link from "next/link"

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-600">Transparence Totale</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Cookies</h1>
            <p className="text-xl text-gray-600">Comprendre l'utilisation des cookies sur notre site</p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : Janvier 2025</p>
          </div>

          {/* Main Content */}
          <div className="grid gap-8">
            {/* What are Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-amber-600" />
                  Qu'est-ce qu'un Cookie ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone)
                  lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations sur votre
                  visite, comme vos préférences de langue ou vos paramètres de navigation.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Important :</strong> Les cookies ne peuvent pas endommager votre appareil, installer des
                    virus ou accéder à vos fichiers personnels. Ils ne contiennent aucune information personnelle
                    identifiable.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                  Types de Cookies Utilisés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-green-400 bg-green-50 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Cookies Essentiels (Obligatoires)</h4>
                    </div>
                    <p className="text-green-700 text-sm mb-3">
                      Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Session de navigation</h5>
                        <p className="text-xs text-gray-600">Maintient votre session active</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Sécurité</h5>
                        <p className="text-xs text-gray-600">Protection contre les attaques CSRF</p>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Cookies Analytiques (Optionnels)</h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      Ces cookies nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Statistiques de visite</h5>
                        <p className="text-xs text-gray-600">Pages vues, durée de visite</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Comportement utilisateur</h5>
                        <p className="text-xs text-gray-600">Parcours de navigation anonymisé</p>
                      </div>
                    </div>
                  </div>

                  {/* Preference Cookies */}
                  <div className="border-l-4 border-purple-400 bg-purple-50 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">Cookies de Préférences (Optionnels)</h4>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      Ces cookies mémorisent vos choix pour personnaliser votre expérience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Paramètres d'affichage</h5>
                        <p className="text-xs text-gray-600">Thème, langue, mise en page</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h5 className="font-medium text-sm">Consentement cookies</h5>
                        <p className="text-xs text-gray-600">Mémorisation de vos choix</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  Durée de Conservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Type de Cookie</th>
                        <th className="text-left py-3 px-4 font-semibold">Durée</th>
                        <th className="text-left py-3 px-4 font-semibold">Finalité</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 px-4">Session</td>
                        <td className="py-3 px-4">Fin de session</td>
                        <td className="py-3 px-4">Navigation et sécurité</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Préférences</td>
                        <td className="py-3 px-4">12 mois</td>
                        <td className="py-3 px-4">Mémorisation des choix utilisateur</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Analytiques</td>
                        <td className="py-3 px-4">24 mois</td>
                        <td className="py-3 px-4">Amélioration du site</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Consentement</td>
                        <td className="py-3 px-4">12 mois</td>
                        <td className="py-3 px-4">Respect de vos choix</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Cookie Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trash2 className="w-6 h-6 text-red-600" />
                  Gestion des Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Contrôle via votre navigateur</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Chrome / Edge</h5>
                      <p className="text-sm text-gray-600">
                        Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Firefox</h5>
                      <p className="text-sm text-gray-600">
                        Options → Vie privée et sécurité → Cookies et données de sites
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Safari</h5>
                      <p className="text-sm text-gray-600">
                        Préférences → Confidentialité → Gérer les données de sites web
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Mobile</h5>
                      <p className="text-sm text-gray-600">Paramètres du navigateur → Confidentialité → Cookies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Impact de la désactivation</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Certaines fonctionnalités peuvent ne plus fonctionner correctement</li>
                    <li>• Vos préférences ne seront plus mémorisées</li>
                    <li>• L'expérience de navigation peut être dégradée</li>
                    <li>• Les cookies essentiels restent nécessaires au fonctionnement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third Party */}
            <Card>
              <CardHeader>
                <CardTitle>Services Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Nous utilisons des services tiers pour améliorer votre expérience. Ces services peuvent déposer leurs
                  propres cookies :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Analyse de trafic</h4>
                    <p className="text-sm text-gray-600 mb-2">Outils d'analyse pour comprendre l'utilisation du site</p>
                    <p className="text-xs text-gray-500">Données anonymisées uniquement</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sécurité</h4>
                    <p className="text-sm text-gray-600 mb-2">Protection contre les attaques et le spam</p>
                    <p className="text-xs text-gray-500">Cookies techniques uniquement</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Chaque service tiers respecte sa propre politique de confidentialité et les réglementations en
                  vigueur.
                </p>
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
