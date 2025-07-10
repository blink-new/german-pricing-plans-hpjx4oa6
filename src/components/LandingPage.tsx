import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, ShoppingCart, Truck, Sparkles, RotateCcw, Home, Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const bestsellers = [
  {
    id: 1,
    name: "Premium Kinderwagen",
    image: "🚗",
    price: "5,99",
    description: "Luxus-Kinderwagen mit Komfort-Federung",
    rating: 4.9,
    popular: true
  },
  {
    id: 2,
    name: "Babybett aus Holz",
    image: "🛏️",
    price: "4,49",
    description: "Nachhaltiges Holzbett, schadstoffgeprüft",
    rating: 4.8,
    popular: false
  },
  {
    id: 3,
    name: "Marken-Spielzeug Set",
    image: "🧸",
    price: "3,99",
    description: "Pädagogisch wertvolles Lernspielzeug",
    rating: 4.7,
    popular: false
  },
  {
    id: 4,
    name: "Hochstuhl Premium",
    image: "🪑",
    price: "6,99",
    description: "Verstellbarer Hochstuhl für alle Altersgruppen",
    rating: 4.8,
    popular: false
  },
  {
    id: 5,
    name: "Babywippe Deluxe",
    image: "🎠",
    price: "4,99",
    description: "Beruhigende Wippe mit Musik & Vibration",
    rating: 4.9,
    popular: true
  }
];

const processSteps = [
  {
    id: 1,
    icon: "🛒",
    title: "Artikel wählen",
    description: "Stöbern Sie auf unserer Plattform & wählen Sie die gewünschten Babyartikel aus unserem kuratierten Sortiment."
  },
  {
    id: 2,
    icon: "🚚",
    title: "Lieferung & Nutzung",
    description: "Wir liefern die Produkte direkt nach Hause – bequem & zuverlässig. Nutzen Sie sie über die gesamte Mietdauer."
  },
  {
    id: 3,
    icon: "🧼",
    title: "Rückgabe & Reinigung",
    description: "Artikel werden zurückgeschickt. Wir reinigen & prüfen sie sorgfältig nach höchsten Standards."
  },
  {
    id: 4,
    icon: "👶",
    title: "Weitervermietung",
    description: "Die Produkte werden wieder bereitgestellt – für die nächsten Familien in unserem Kreislauf."
  }
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
      {/* Navigation Header */}
      <nav className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
              <img 
                src="/mietmaeuse-logo.png" 
                alt="MietMäuse Logo" 
                className="h-16 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900">MietMäuse</h1>
                <p className="text-sm text-gray-600 -mt-1">Weil Ersteltern zu sein genug schwierig ist</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#wie-es-funktioniert" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Wie es funktioniert
              </a>
              <a href="#bestseller" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Bestseller
              </a>
              <a href="#preise" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Preise
              </a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6">
                Jetzt starten
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <a href="#wie-es-funktioniert" className="text-gray-700 hover:text-blue-600 font-medium">
                  Wie es funktioniert
                </a>
                <a href="#bestseller" className="text-gray-700 hover:text-blue-600 font-medium">
                  Bestseller
                </a>
                <a href="#preise" className="text-gray-700 hover:text-blue-600 font-medium">
                  Preise
                </a>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                  Jetzt starten
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-2 text-sm">
                ✨ Neu: 10% Rabatt für Neukunden
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Weil <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Ersteltern</span> zu sein{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  genug schwierig ist
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
                <strong>MietMäuse</strong> macht Elternsein einfacher: Nachhaltige, günstige und stressfreie Babyartikel im Mietmodell. 
                Sparen Sie bis zu 80% und schonen Sie die Umwelt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Jetzt starten & 10% Rabatt sichern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg border-2 hover:bg-gray-50 transition-all duration-200"
                >
                  So funktioniert's
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Über 10.000 zufriedene Familien</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>CO₂-neutral versandt</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* MietMäuse Logo Integration */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <img 
                    src="/mietmaeuse-logo.png" 
                    alt="MietMäuse Familie" 
                    className="w-32 h-32 mx-auto mb-6 opacity-90"
                  />
                  <p className="text-gray-600 font-medium text-lg">
                    "MietMäuse hat unser Familienleben revolutioniert!"
                  </p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Weil Ersteltern zu sein genug schwierig ist
                  </p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Brand Elements */}
              <div className="absolute -top-6 -right-6 bg-amber-100 rounded-full p-4 shadow-lg animate-bounce">
                <span className="text-2xl">🐭</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-100 rounded-full p-3 shadow-lg animate-pulse">
                <span className="text-xl">👶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Highlight Section */}
      <section id="bestseller" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🧸 Unsere Bestseller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Artikel sind bei Familien besonders beliebt – 
              entdecken Sie, warum tausende Eltern auf MietMäuse vertrauen.
            </p>
          </div>

          {/* Bestseller Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBestseller * 20}%)` }}
              >
                {bestsellers.map((product) => (
                  <div key={product.id} className="w-1/5 flex-shrink-0 px-2">
                    <Card className={cn(
                      "h-full transition-all duration-300 hover:shadow-xl hover:scale-105",
                      product.popular ? "ring-2 ring-blue-500 shadow-lg" : ""
                    )}>
                      {product.popular && (
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                          🔥 Bestseller
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <div className="text-6xl mb-4">{product.image}</div>
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {product.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="text-center">
                        <div className="mb-3">
                          <span className="text-3xl font-bold text-blue-600">
                            {product.price} €
                          </span>
                          <span className="text-gray-600 ml-1">/Monat</span>
                        </div>
                        
                        <div className="flex justify-center items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-4 w-4",
                                i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              )} 
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">
                            ({product.rating})
                          </span>
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                          size="sm"
                        >
                          Jetzt mieten
                          <ShoppingCart className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevBestseller}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowRight className="h-6 w-6 rotate-180 text-gray-600" />
            </button>
            
            <button
              onClick={nextBestseller}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {bestsellers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBestseller(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  index === currentBestseller 
                    ? "bg-blue-500 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="wie-es-funktioniert" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              🔄 So funktioniert's – Unser Kreislaufmodell
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nachhaltig, einfach und stressfrei – so funktioniert das MietMäuse-System 
              für eine bessere Zukunft unserer Kinder.
            </p>
          </div>

          {/* Circular Process Visualization */}
          <div className="relative">
            {/* Desktop Circular Layout */}
            <div className="hidden lg:block">
              <div className="relative w-[560px] h-[560px] mx-auto">
                {processSteps.map((step, index) => {
                  const angle = (index * 90) - 90; // Start from top and go clockwise
                  const x = Math.cos((angle * Math.PI) / 180) * 220;
                  const y = Math.sin((angle * Math.PI) / 180) * 220;
                  
                  return (
                    <div
                      key={step.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                      }}
                    >
                      <Card className="w-80 h-64 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm">
                        <CardHeader className="text-center pb-3 px-6">
                          <div className="text-4xl mb-3">{step.icon}</div>
                          <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-6">
                          <p className="text-sm text-gray-600 text-center leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                      
                      {/* Arrow to next step */}
                      {index < processSteps.length - 1 && (
                        <div 
                          className="absolute"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(${x > 0 ? '140px' : x < 0 ? '-140px' : '0px'}, ${y > 0 ? '70px' : y < 0 ? '-70px' : '90px'}) rotate(${angle + 90}deg)`,
                            transformOrigin: 'center'
                          }}
                        >
                          <ArrowRight className="h-8 w-8 text-blue-500" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Center Logo/Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <RotateCcw className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Linear Layout */}
            <div className="lg:hidden grid gap-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <Card className="w-full max-w-sm shadow-xl bg-white">
                    <CardHeader className="text-center">
                      <div className="text-5xl mb-4">{step.icon}</div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Schritt {step.id}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < processSteps.length - 1 && (
                    <div className="mt-4 mb-4">
                      <ArrowRight className="h-8 w-8 text-blue-500 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Extra Section: Artikel-Annahme */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 shadow-xl">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Haben Sie Artikel, die Sie nicht mehr benötigen?
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Verdienen Sie mit ungenutzten Babyartikeln Geld und helfen Sie anderen Familien!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <Sparkles className="h-8 w-8 text-yellow-500" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Verkaufen</p>
                      <p className="text-sm text-gray-600">Erhalten Sie faire Preise für Ihre Artikel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <Heart className="h-8 w-8 text-red-500" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Spenden</p>
                      <p className="text-sm text-gray-600">Helfen Sie anderen Familien & erhalten Sie Mietguthaben</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Artikel anbieten & Guthaben erhalten
                  <Home className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bereit für stressfreies Elternsein?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schließen Sie sich über 10.000 zufriedenen Familien an und 
            entdecken Sie, wie einfach nachhaltiges Elternsein sein kann.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Kostenlos testen – 10% Rabatt sichern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Mehr erfahren
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Kostenloser Versand ab 25€</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              <span>30 Tage Geld-zurück-Garantie</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}