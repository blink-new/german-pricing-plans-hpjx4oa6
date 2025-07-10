import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, ShoppingCart, Truck, Sparkles, RotateCcw, Home, Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PricingPlans from "./PricingPlans";

// ... bestsellers and processSteps arrays ...

const bestsellers = [
  // ... (unchanged) ...
];
const processSteps = [
  // ... (unchanged) ...
];

export default function LandingPage() {
  const [currentBestseller, setCurrentBestseller] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nextBestseller = () => {
    setCurrentBestseller((prev) => (prev + 1) % bestsellers.length);
  };
  const prevBestseller = () => {
    setCurrentBestseller((prev) => (prev - 1 + bestsellers.length) % bestsellers.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ... Navigation, Hero, Bestseller, How It Works ... */}

      {/* How It Works Section */}
      <section id="wie-es-funktioniert" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        {/* ...existing content... */}
      </section>

      {/* Pricing Plans Section */}
      <section id="preise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              💶 Unsere Preise & Pakete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende MietMäuse-Paket für Ihre Familie – transparent, flexibel und fair.
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>

      {/* Final CTA Section ... (unchanged) ... */}
    </div>
  );
}
