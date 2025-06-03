"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqs = [
    {
      id: "faq-1",
      question: "Comment choisir un site de paris sportifs fiable ?",
      answer:
        "Pour choisir un site fiable, vérifiez d'abord qu'il possède une licence ANJ (visible en bas de page). Ensuite, évaluez la réputation du site, la qualité du service client, les méthodes de paiement disponibles et les avis d'autres utilisateurs. Tous les sites recommandés sur PariFrSportifs.com sont légaux et sécurisés.",
    },
    {
      id: "faq-2",
      question: "Comment fonctionnent les bonus de bienvenue ?",
      answer:
        "Les bonus de bienvenue sont des offres destinées aux nouveaux inscrits. Ils peuvent prendre la forme d'un bonus de dépôt (par exemple 100% jusqu'à 100€), de paris gratuits, ou d'autres avantages. Pour en bénéficier, vous devez généralement créer un compte, effectuer un premier dépôt et respecter certaines conditions (mise minimum, cote minimum, etc.). Lisez toujours attentivement les conditions d'utilisation.",
    },
    {
      id: "faq-3",
      question: "Quels documents sont nécessaires pour vérifier mon compte ?",
      answer:
        "Pour vérifier votre compte, vous devrez généralement fournir une pièce d'identité valide (carte d'identité, passeport), un justificatif de domicile récent (facture d'électricité, relevé bancaire) et parfois une preuve de paiement (photo de votre carte bancaire avec certains chiffres masqués). Cette vérification est obligatoire pour garantir la sécurité et respecter les réglementations contre le blanchiment d'argent.",
    },
    {
      id: "faq-4",
      question: "Combien de temps prennent les retraits d'argent ?",
      answer:
        "Les délais de retrait varient selon la méthode de paiement choisie. En général, les portefeuilles électroniques (Skrill, Neteller) sont les plus rapides (24-48h), suivis des cartes bancaires (2-5 jours ouvrables) et des virements bancaires (3-7 jours ouvrables). Certains sites proposent des retraits express moyennant des frais supplémentaires.",
    },
    {
      id: "faq-5",
      question: "Est-il légal de parier sur plusieurs sites différents ?",
      answer:
        "Oui, il est parfaitement légal de s'inscrire et de parier sur plusieurs sites de paris sportifs, tant qu'ils sont agréés par l'ANJ. C'est même une pratique recommandée pour profiter de différents bonus et des meilleures cotes disponibles sur le marché. Assurez-vous simplement de respecter les conditions d'utilisation de chaque site.",
    },
    {
      id: "faq-6",
      question: "Comment fonctionne l'imposition des gains aux paris sportifs ?",
      answer:
        "En France, les gains issus des paris sportifs sur des sites agréés par l'ANJ sont exonérés d'impôt sur le revenu. Les opérateurs prélèvent déjà une taxe sur les mises. Cependant, si vous utilisez des sites étrangers non agréés, vos gains pourraient être imposables. Il est toujours recommandé de consulter un conseiller fiscal pour votre situation particulière.",
    },
    {
      id: "faq-7",
      question: "Puis-je m'auto-exclure temporairement des paris sportifs ?",
      answer:
        "Oui, tous les sites agréés par l'ANJ proposent des options d'auto-exclusion temporaire (de quelques jours à plusieurs mois) ou définitive. Vous pouvez également demander une auto-exclusion globale via le site de l'ANJ, qui vous bloquera l'accès à tous les sites de jeux en ligne français pour une période minimale de 3 mois. Cette mesure est utile si vous sentez que votre pratique de jeu devient problématique.",
    },
    {
      id: "faq-8",
      question: "Les applications mobiles sont-elles aussi sécurisées que les sites web ?",
      answer:
        "Oui, les applications mobiles officielles des opérateurs agréés sont aussi sécurisées que leurs sites web. Elles utilisent les mêmes protocoles de chiffrement et mesures de sécurité. Assurez-vous simplement de télécharger l'application depuis les sources officielles (App Store, Google Play) ou directement depuis le site de l'opérateur pour éviter les applications frauduleuses.",
    },
  ]

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Questions Fréquentes</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur les paris sportifs en ligne et notre processus
            de sélection.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
