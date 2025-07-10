import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanFeature {
  icon: string;
  title: string;
  basic: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
}

const features: PlanFeature[] = [
  {
    icon: "🧸",
    title: "Anzahl der Mietartikel pro Monat",
    basic: "bis zu 7 Produkte",
    pro: "bis zu 15 Produkte",
    premium: "unbegrenzt"
  },
  {
    icon: "📦",
    title: "Versandkosten",
    basic: "Standardtarif",
    pro: "1 kostenloser Versand/Monat",
    premium: "alle Versendungen kostenlos"
  },
  {
    icon: "🛠️",
    title: "Zustand der Artikel",
    basic: "Gebraucht, gut",
    pro: "Gebraucht + wie neu",
    premium: "Neu + Premiumzustand"
  },
  {
    icon: "🔄",
    title: "Austausch pro Monat",
    basic: "1 Wechsel",
    pro: "2 Wechsel",
    premium: "unbegrenzt"
  },
  {
    icon: "💬",
    title: "Community-Chat & Elternforum",
    basic: false,
    pro: "Leserechte",
    premium: "Volle Teilnahme & Themen starten"
  },
  {
    icon: "🎁",
    title: "Exklusive Willkommensbox",
    basic: false,
    pro: "kleine Überraschung",
    premium: "Premium-Box mit Markenprodukten"
  },
  {
    icon: "🎉",
    title: "Zugang zu Events & Webinaren",
    basic: false,
    pro: "eingeschränkt",
    premium: "alle Events inklusive"
  },
  {
    icon: "🕒",
    title: "Frühzeitiger Zugang zu neuen Produkten",
    basic: false,
    pro: "3 Tage vorher",
    premium: "1 Woche vorher"
  },
  {
    icon: "🎄",
    title: "Weihnachtsgeschenk & Sonderaktionen",
    basic: false,
    pro: "Rabattgutschein",
    premium: "Geschenk + Rabattcode"
  },
  {
    icon: "🏆",
    title: "Loyalty-Programm",
    basic: false,
    pro: true,
    premium: "Exklusivpunkte & Geschenk nach 1 Jahr"
  }
];

const plans = [
  {
    name: "Basic",
    price: "5,99 €",
    description: "Perfekt für den Einstieg",
    popular: false,
    features: features.map(f => f.basic)
  },
  {
    name: "Pro",
    price: "11,99 €",
    description: "Ideal für aktive Familien",
    popular: true,
    features: features.map(f => f.pro)
  },
  {
    name: "Premium",
    price: "18,99 €",
    description: "Das Rundum-sorglos-Paket",
    popular: false,
    features: features.map(f => f.premium)
  }
];

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === false) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <X className="h-4 w-4" />
        <span>Kein Zugang</span>
      </div>
    );
  }
  
  if (value === true) {
    return (
      <div className="flex items-center gap-2 text-emerald-600">
        <Check className="h-4 w-4" />
        <span>Verfügbar</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-2 text-foreground">
      <Check className="h-4 w-4 text-emerald-600" />
      <span>{value}</span>
    </div>
  );
}

export default function PricingPlans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Wählen Sie Ihren perfekten Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere flexiblen Mietpläne für Kinderartikel und finden Sie das perfekte Paket für Ihre Familie
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            return (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-2xl",
                  plan.popular ? "border-2 border-blue-500 scale-105 shadow-xl" : "hover:scale-102"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Beliebtester Plan
                  </div>
                )}
                
                <CardHeader className={cn("text-center pb-8", plan.popular ? "pt-12" : "pt-6")}>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/Monat</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl flex-shrink-0">{feature.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm leading-tight mb-1">
                          {feature.title}
                        </p>
                        <FeatureValue value={plan.features[featureIndex]} />
                      </div>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    className={cn(
                      "w-full py-3 text-lg font-semibold transition-all duration-200",
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl" 
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    )}
                  >
                    {plan.name} Plan wählen
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison Table for Desktop */}
        <div className="hidden lg:block">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Detaillierter Planvergleich
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="text-left p-6 text-lg font-semibold text-gray-900">Features</th>
                    <th className="text-center p-6 text-lg font-semibold text-gray-900">Basic</th>
                    <th className="text-center p-6 text-lg font-semibold text-gray-900 bg-blue-50 relative">
                      Pro
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                        Beliebt
                      </Badge>
                    </th>
                    <th className="text-center p-6 text-lg font-semibold text-gray-900">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-medium text-gray-900 bg-gray-50">
                      💶 Preis/Monat
                    </td>
                    <td className="p-6 text-center text-2xl font-bold text-gray-900">5,99 €</td>
                    <td className="p-6 text-center text-2xl font-bold text-gray-900 bg-blue-50">11,99 €</td>
                    <td className="p-6 text-center text-2xl font-bold text-gray-900">18,99 €</td>
                  </tr>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-medium text-gray-900 bg-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{feature.icon}</span>
                          <span>{feature.title}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <FeatureValue value={feature.basic} />
                      </td>
                      <td className="p-6 text-center bg-blue-50">
                        <FeatureValue value={feature.pro} />
                      </td>
                      <td className="p-6 text-center">
                        <FeatureValue value={feature.premium} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Haben Sie noch Fragen?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Unser Kundenservice-Team hilft Ihnen gerne bei der Auswahl des perfekten Plans für Ihre Familie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="px-8">
              Kontakt aufnehmen
            </Button>
            <Button size="lg" className="px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Kostenlos testen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}