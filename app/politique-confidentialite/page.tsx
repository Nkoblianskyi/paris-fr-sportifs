import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Users, Database, Settings } from "lucide-react"
import Link from "next/link"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600">RGPD Conforme</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
            <p className="text-xl text-gray-600">Protection et traitement de vos données personnelles</p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : Janvier 2025</p>
          </div>

          {/* Main Content */}
          <div className="grid gap-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  Notre Engagement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  La protection de vos données personnelles est une priorité absolue. Cette politique explique comment
                  nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au
                  Règlement Général sur la Protection des Données (RGPD) et à la loi française.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Principe fondamental :</strong> Nous ne collectons que les données strictement nécessaires
                    au fonctionnement de nos services et ne les partageons jamais avec des tiers à des fins
                    commerciales.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-600" />
                  Données Collectées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Données techniques automatiques</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Navigation</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Adresse IP anonymisée</li>
                          <li>• Type de navigateur</li>
                          <li>• Pages visitées</li>
                          <li>• Durée de visite</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Appareil</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Système d'exploitation</li>
                          <li>• Résolution d'écran</li>
                          <li>• Langue du navigateur</li>
                          <li>• Fuseau horaire</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cookies et technologies similaires</h4>
                    <p className="text-gray-700 text-sm">
                      Utilisation de cookies techniques essentiels et analytiques pour améliorer votre expérience de
                      navigation. Aucun cookie publicitaire ou de tracking tiers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-purple-600" />
                  Utilisation des Données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Amélioration du service</h4>
                        <p className="text-sm text-gray-600">
                          Analyse du comportement de navigation pour optimiser l'expérience utilisateur
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sécurité</h4>
                        <p className="text-sm text-gray-600">
                          Détection et prévention des activités frauduleuses ou malveillantes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Statistiques</h4>
                        <p className="text-sm text-gray-600">
                          Génération de rapports anonymisés sur l'utilisation du site
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Conformité légale</h4>
                        <p className="text-sm text-gray-600">Respect des obligations légales et réglementaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-red-600" />
                  Protection et Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-red-800">Chiffrement</h4>
                    <p className="text-sm text-red-700">SSL/TLS pour toutes les communications</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800">Accès restreint</h4>
                    <p className="text-sm text-blue-700">Personnel autorisé uniquement</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800">Sauvegarde</h4>
                    <p className="text-sm text-green-700">Copies sécurisées régulières</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Nos serveurs sont hébergés dans des centres de données certifiés ISO 27001 en Union Européenne,
                  garantissant le respect des standards de sécurité les plus élevés.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-600" />
                  Vos Droits RGPD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit d'accès</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit de rectification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit à l'effacement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit à la portabilité</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit d'opposition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Droit à la limitation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Retrait du consentement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Réclamation CNIL</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-orange-50 border-l-4 border-orange-400 p-4">
                  <p className="text-orange-800 text-sm">
                    <strong>Exercice de vos droits :</strong> Vous pouvez exercer ces droits à tout moment. Les demandes
                    sont traitées dans un délai maximum de 30 jours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-gray-600" />
                  Conservation des Données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nous appliquons le principe de minimisation des données et ne conservons vos informations que le
                    temps strictement nécessaire :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Données de navigation</h4>
                      <p className="text-sm text-gray-600">Conservées 13 mois maximum (obligation légale)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Cookies analytiques</h4>
                      <p className="text-sm text-gray-600">Expiration automatique après 24 mois</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    À l'expiration de ces délais, toutes les données sont automatiquement et définitivement supprimées
                    de nos systèmes.
                  </p>
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
