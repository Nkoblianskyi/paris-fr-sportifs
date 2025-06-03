import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const responsibleGamblingLinks = [
    {
      name: "ANJ",
      url: "https://anj.fr/",
      logo: "logo-anj.svg",
    },
    {
      name: "Joueurs Info Service",
      url: "https://www.joueurs-info-service.fr/",
      logo: "/jouers-info-service.png",
    },
    {
      name: "GambleAware",
      url: "https://www.gambleaware.org/",
      logo: "/gamble.webp",
    },
    {
      name: "GamCare",
      url: "https://www.gamcare.org.uk/",
      logo: "/gamecare.svg",
    },
    {
      name: "GamStop",
      url: "https://www.gamstop.co.uk/",
      logo: "/logo-gamstop.svg",
    },
    {
      name: "SOS Joueurs",
      url: "https://www.sosjoueurs.org/",
      logo: "/logo-sos-joueurs.svg",
    },
    {
      name: "Mediateur des Jeux en Ligne",
      url: "https://mediateurdesjeuxenligne.fr/",
      logo: "/logo-mediateurs-des-jeux.png",
    },
    {
      name: "Adictel",
      url: "https://www.adictel.com/",
      logo: "/logo-adictel.svg",
    },
    {
      name: "Safe Gambling",
      url: "",
      logo: "/icn-ssl.svg",
    },
  ]

  const legalLinks = [
    { name: "ANJ/ARJEL", href: "/anj-arjel" },
    { name: "Politique de Confidentialité", href: "/politique-confidentialite" },
    { name: "Politique de Cookies", href: "/politique-cookies" },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Custom football/soccer ball icon */}
                <Image src={'/logo.png'} alt="Logo" width={32} height={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold">PariFrSportifs</h3>
                <p className="text-sm text-gray-300">Guide des meilleurs sites</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Votre guide de confiance pour découvrir les meilleurs sites de paris sportifs en France. Analyses
              expertes, bonus vérifiés et recommandations sécurisées.
            </p>
            <Image src="/icn-plus18.svg" alt="PariFrSportifs Logo" width={32} height={32} />
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations Légales</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jeu Responsable</h4>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {responsibleGamblingLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-14 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                  aria-label={link.name}
                >
                  <img
                    src={link.logo || "/placeholder.svg"}
                    alt={`${link.name} logo`}
                    className="w-20 h-14 object-contain"
                  />
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400">Aide : 09 74 75 13 13 (France)</p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-yellow-600 text-black p-4 rounded-lg mb-6">
          <p className="text-sm font-medium text-center">
            ⚠️ Les paris comportent des risques. Jouez avec modération. 18+ uniquement.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 PariFrSportifs.com - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
