import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Palmtree, Sparkles, Crown } from "lucide-react"

const packages = [
  {
    icon: Palmtree,
    name: "Basic Escape",
    price: 799,
    duration: "3-day cruise",
    description: "Perfect for a quick getaway",
    features: [
      "Standard cabin accommodation",
      "Buffet dining included",
      "Pool & fitness center access",
      "Live entertainment",
    ],
    popular: false,
  },
  {
    icon: Sparkles,
    name: "Luxury Voyage",
    price: 2499,
    duration: "7-day cruise",
    description: "Our most popular experience",
    features: [
      "Ocean-view suite",
      "All-inclusive dining",
      "Shore excursions included",
      "Spa credit ($200)",
      "Priority boarding",
      "24/7 room service",
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: "Royal Elite",
    price: 6999,
    duration: "14-day cruise",
    description: "The ultimate luxury experience",
    features: [
      "Private balcony suite",
      "Personal concierge",
      "VIP events & tours",
      "Unlimited spa access",
      "Helicopter excursion",
      "Private dining experiences",
      "Complimentary bar package",
    ],
    popular: false,
  },
]

export function PricingPreviewSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Voyage Packages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Start Your Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Choose from our carefully curated packages, each designed to deliver 
            an unforgettable experience tailored to your preferences.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? "ring-2 ring-accent shadow-xl scale-[1.02]" 
                  : "hover:scale-[1.01]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                pkg.popular ? "bg-accent/20" : "bg-muted"
              }`}>
                <pkg.icon className={`h-7 w-7 ${pkg.popular ? "text-accent" : "text-muted-foreground"}`} />
              </div>

              {/* Header */}
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-4xl font-serif font-bold text-card-foreground">
                    ${pkg.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">/person • {pkg.duration}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                      pkg.popular ? "text-accent" : "text-primary"
                    }`} />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/booking">
                <Button 
                  className={`w-full rounded-full ${
                    pkg.popular 
                      ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Book This Package
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Pricing */}
        <div className="text-center mt-12">
          <Link 
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View Full Pricing & Comparison
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
