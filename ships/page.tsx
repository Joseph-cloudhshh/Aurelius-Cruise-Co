import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ships } from "@/lib/data/ships"
import { Users, Ruler, Layers, Calendar, ArrowRight, Anchor } from "lucide-react"

export const metadata = {
  title: "Our Fleet | Aurelius Cruise Co.",
  description: "Explore our world-class fleet of luxury cruise ships. Each vessel offers unparalleled comfort, exceptional dining, and unforgettable experiences.",
}

export default function ShipsPage() {
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
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Our Fleet
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Masterpieces of Maritime Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Each vessel in the Aurelius fleet represents the pinnacle of luxury cruise engineering. 
              Discover the ship that will become your home away from home.
            </p>
          </div>
        </div>
      </section>

      {/* Ships Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {ships.map((ship, index) => (
              <div 
                key={ship.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={ship.image}
                      alt={ship.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-accent font-medium text-sm mb-1">Built {ship.yearBuilt}</p>
                      <p className="text-primary-foreground text-lg font-semibold">{ship.tagline}</p>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-xl hidden lg:block">
                    <Anchor className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {ship.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {ship.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <Users className="h-5 w-5 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{ship.capacity.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Guests</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <Ruler className="h-5 w-5 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{ship.length}</p>
                      <p className="text-xs text-muted-foreground">Length</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <Layers className="h-5 w-5 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{ship.decks}</p>
                      <p className="text-xs text-muted-foreground">Decks</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4 text-center">
                      <Calendar className="h-5 w-5 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{ship.yearBuilt}</p>
                      <p className="text-xs text-muted-foreground">Year Built</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {ship.features.slice(0, 6).map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {ship.features.length > 6 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                        +{ship.features.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link href={`/ships/${ship.id}`}>
                    <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                      Explore {ship.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Experience Our Fleet?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Let our voyage specialists help you find the perfect ship and itinerary 
            for your dream cruise vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Book Your Voyage
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
