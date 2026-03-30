import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight, Palmtree, Sparkles, Crown, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Pricing | Aurelius Cruise Co.",
  description: "Choose your perfect cruise package. From quick escapes to royal experiences, find the voyage that matches your dreams.",
}

const packages = [
  {
    icon: Palmtree,
    name: "Basic Escape",
    price: 799,
    duration: "3-day cruise",
    description: "Perfect for first-time cruisers or quick weekend getaways. Experience the Aurelius difference without the extended commitment.",
    features: {
      accommodation: "Standard Interior Cabin",
      dining: "Buffet dining included",
      beverages: "Non-alcoholic beverages",
      entertainment: "Full access to ship entertainment",
      excursions: "Self-guided port visits",
      spa: "Day pass available ($99/day)",
      priority: "Standard boarding",
      concierge: "Guest services desk",
      wifi: "Basic WiFi package",
      gratuities: "Not included",
    },
    popular: false,
    color: "primary",
  },
  {
    icon: Sparkles,
    name: "Luxury Voyage",
    price: 2499,
    duration: "7-day cruise",
    description: "Our most popular package. The perfect balance of value and luxury for an unforgettable week at sea.",
    features: {
      accommodation: "Ocean-View Suite with Balcony",
      dining: "All-inclusive specialty dining",
      beverages: "Premium beverage package",
      entertainment: "Priority seating at shows",
      excursions: "2 shore excursions included",
      spa: "$200 spa credit included",
      priority: "Priority boarding",
      concierge: "Dedicated concierge line",
      wifi: "Premium WiFi package",
      gratuities: "Gratuities included",
    },
    popular: true,
    color: "accent",
  },
  {
    icon: Crown,
    name: "Royal Elite",
    price: 6999,
    duration: "14-day cruise",
    description: "The pinnacle of luxury travel. Every detail is handled by your personal concierge for a truly royal experience.",
    features: {
      accommodation: "Private Penthouse Suite",
      dining: "Private dining experiences",
      beverages: "Unlimited premium bar",
      entertainment: "VIP access & backstage tours",
      excursions: "Unlimited private excursions",
      spa: "Unlimited spa access",
      priority: "Helicopter transfer available",
      concierge: "Personal concierge 24/7",
      wifi: "Unlimited satellite WiFi",
      gratuities: "All gratuities included",
    },
    popular: false,
    color: "primary",
  },
]

const comparisonFeatures = [
  { name: "Accommodation", key: "accommodation" },
  { name: "Dining", key: "dining" },
  { name: "Beverages", key: "beverages" },
  { name: "Entertainment", key: "entertainment" },
  { name: "Shore Excursions", key: "excursions" },
  { name: "Spa & Wellness", key: "spa" },
  { name: "Boarding", key: "priority" },
  { name: "Concierge Service", key: "concierge" },
  { name: "WiFi", key: "wifi" },
  { name: "Gratuities", key: "gratuities" },
]

const addOns = [
  { name: "Premium Beverage Package", price: 89, unit: "/day" },
  { name: "Specialty Dining (per restaurant)", price: 59, unit: "/person" },
  { name: "Shore Excursion Credit", price: 200, unit: "/trip" },
  { name: "Spa Day Pass", price: 99, unit: "/day" },
  { name: "WiFi Upgrade", price: 20, unit: "/day" },
  { name: "Photography Package", price: 299, unit: "/cruise" },
  { name: "Anniversary/Celebration Package", price: 199, unit: "/cruise" },
  { name: "Private Cabana Rental", price: 249, unit: "/day" },
]

const faqs = [
  {
    question: "What is included in the base price?",
    answer: "All packages include your cabin accommodation, standard dining, access to pools and fitness center, onboard entertainment, and port fees. Specific inclusions vary by package tier.",
  },
  {
    question: "Can I upgrade my package after booking?",
    answer: "Yes! You can upgrade your package up to 48 hours before departure, subject to availability. Our team will help calculate the difference and process the upgrade.",
  },
  {
    question: "Are there discounts for children or groups?",
    answer: "Children under 12 sail for 50% off when sharing a cabin with adults. Groups of 8+ receive 10% off, and groups of 16+ receive 15% off plus additional perks.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refund up to 90 days before departure. 75% refund 60-89 days out. 50% refund 30-59 days out. No refund within 30 days. We recommend travel insurance.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-ship.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Transparent Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Choose Your Perfect Voyage
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From quick escapes to royal experiences, find the package that matches your dreams. 
              No hidden fees, no surprises—just unforgettable adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular 
                    ? "ring-2 ring-accent shadow-xl scale-[1.02] z-10" 
                    : "hover:scale-[1.01]"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-accent text-accent-foreground text-center py-3 text-sm font-semibold">
                    Most Popular Choice
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    pkg.popular ? "bg-accent/20" : "bg-muted"
                  }`}>
                    <pkg.icon className={`h-8 w-8 ${pkg.popular ? "text-accent" : "text-muted-foreground"}`} />
                  </div>

                  {/* Header */}
                  <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">From</span>
                      <span className="text-5xl font-serif font-bold text-card-foreground">
                        ${pkg.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">/person • {pkg.duration}</p>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-3 mb-8">
                    {Object.entries(pkg.features).slice(0, 5).map(([key, value]) => (
                      <li key={key} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-accent" : "text-primary"
                        }`} />
                        <span className="text-sm text-card-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/booking">
                    <Button 
                      className={`w-full rounded-full text-lg py-6 ${
                        pkg.popular 
                          ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      Select Package
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Compare Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See exactly what&apos;s included in each package to make the best choice for your voyage.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className="text-center p-4 font-semibold">
                      <div className="flex flex-col items-center gap-1">
                        <pkg.icon className="h-5 w-5" />
                        {pkg.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={feature.key} className={idx % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                    <td className="p-4 font-medium text-card-foreground">{feature.name}</td>
                    {packages.map((pkg) => (
                      <td key={`${pkg.name}-${feature.key}`} className="p-4 text-center text-sm text-muted-foreground">
                        {pkg.features[feature.key as keyof typeof pkg.features]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-muted">
                  <td className="p-4 font-bold text-card-foreground">Starting Price</td>
                  {packages.map((pkg) => (
                    <td key={`${pkg.name}-price`} className="p-4 text-center">
                      <span className="text-xl font-bold text-accent">${pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground block">/person</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Enhance Your Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customize your voyage with these optional add-ons available for any package.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-card rounded-xl p-5 hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-card-foreground mb-2">{addon.name}</h3>
                <p className="text-accent font-bold">
                  ${addon.price}<span className="text-sm text-muted-foreground font-normal">{addon.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Book Your Dream Voyage?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Our voyage specialists are standing by to help you select the perfect package 
            and customize your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Start Booking Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:1-800-AURELIUS">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Call 1-800-AURELIUS
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
