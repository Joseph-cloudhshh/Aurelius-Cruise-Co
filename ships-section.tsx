"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Waves, Utensils, Sparkles, ArrowRight } from "lucide-react"

const ships = [
  {
    id: "aurora",
    name: "Aurora Majesty",
    tagline: "The Pinnacle of Ocean Luxury",
    image: "/images/ship-aurora.jpg",
    capacity: 2850,
    features: ["Infinity Pool", "Michelin-Star Dining", "Spa Sanctuary", "Broadway Theater"],
    highlights: "Our flagship vessel featuring the revolutionary Sky Dome observatory and 20 dining venues.",
  },
  {
    id: "celestial",
    name: "Celestial Dreams",
    tagline: "Where Every Moment Shines",
    image: "/images/ship-celestial.jpg",
    capacity: 2200,
    features: ["Crystal Atrium", "Private Cabanas", "Wine Cellar", "Art Gallery"],
    highlights: "An intimate luxury experience with spacious suites and personalized butler service.",
  },
  {
    id: "imperial",
    name: "Imperial Odyssey",
    tagline: "Adventure Meets Elegance",
    image: "/images/ship-imperial.jpg",
    capacity: 3100,
    features: ["Expedition Center", "Helicopter Pad", "Casino Royale", "Golf Simulator"],
    highlights: "Our newest addition, perfect for explorers seeking both adventure and comfort.",
  },
]

const iconMap = {
  0: Users,
  1: Waves,
  2: Utensils,
  3: Sparkles,
}

export function ShipsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Our Fleet
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Featured Ships
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Each vessel in our fleet is a masterpiece of maritime engineering, 
            designed to deliver the ultimate luxury experience at sea.
          </p>
        </div>

        {/* Ships Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ships.map((ship) => (
            <div 
              key={ship.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={ship.image}
                  alt={ship.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-accent text-sm font-medium">{ship.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-card-foreground">
                    {ship.name}
                  </h3>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Capacity</p>
                    <p className="text-lg font-bold text-accent">{ship.capacity.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {ship.highlights}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {ship.features.map((feature, idx) => {
                    const Icon = iconMap[idx as keyof typeof iconMap]
                    return (
                      <div key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
                        <Icon className="h-4 w-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA */}
                <Link href={`/ships/${ship.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                  >
                    Explore {ship.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/ships">
            <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              View All Ships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
