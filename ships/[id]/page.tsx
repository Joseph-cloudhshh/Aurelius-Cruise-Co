import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ships, getShipById } from "@/lib/data/ships"
import { 
  Users, Ruler, Layers, Calendar, ArrowRight, Anchor, 
  Bed, Maximize, DollarSign, Check, Utensils, Star
} from "lucide-react"

export async function generateStaticParams() {
  return ships.map((ship) => ({
    id: ship.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ship = getShipById(id)
  
  if (!ship) {
    return { title: "Ship Not Found | Aurelius Cruise Co." }
  }

  return {
    title: `${ship.name} | Aurelius Cruise Co.`,
    description: ship.description,
  }
}

export default async function ShipDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ship = getShipById(id)

  if (!ship) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={ship.image}
          alt={ship.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-16">
            <div className="max-w-4xl">
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                {ship.tagline}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
                {ship.name}
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
                {ship.description}
              </p>
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  Book This Ship
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <Users className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{ship.capacity.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Guest Capacity</p>
            </div>
            <div className="text-center">
              <Ruler className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{ship.length}</p>
              <p className="text-sm text-muted-foreground">Length</p>
            </div>
            <div className="text-center">
              <Layers className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{ship.decks}</p>
              <p className="text-sm text-muted-foreground">Decks</p>
            </div>
            <div className="text-center">
              <Calendar className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{ship.yearBuilt}</p>
              <p className="text-sm text-muted-foreground">Year Built</p>
            </div>
            <div className="text-center">
              <Anchor className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{ship.crew.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Crew Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Ship Features
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Amenities & Experiences
            </h2>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {ship.features.map((feature) => (
              <span 
                key={feature}
                className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Amenity Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {ship.amenities.map((category) => (
              <div key={category.category} className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Options */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Accommodations
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Cabin Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From comfortable staterooms to lavish suites, find your perfect home at sea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ship.cabinTypes.map((cabin, index) => (
              <div 
                key={cabin.name}
                className={`bg-card rounded-2xl overflow-hidden shadow-lg ${
                  index === ship.cabinTypes.length - 1 ? "ring-2 ring-accent" : ""
                }`}
              >
                {index === ship.cabinTypes.length - 1 && (
                  <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    Most Luxurious
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">
                    {cabin.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cabin.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Maximize className="h-4 w-4" />
                      {cabin.size}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">From</span>
                      <span className="text-2xl font-bold text-card-foreground">
                        ${cabin.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">/person per voyage</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {cabin.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Bed className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking">
                    <Button 
                      variant={index === ship.cabinTypes.length - 1 ? "default" : "outline"}
                      className={`w-full rounded-full ${
                        index === ship.cabinTypes.length - 1 
                          ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                          : ""
                      }`}
                    >
                      Select Cabin
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Venues */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Culinary Excellence
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Dining Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Embark on a culinary journey with our world-class restaurants and venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ship.diningVenues.map((venue) => (
              <div 
                key={venue.name}
                className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Utensils className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      {venue.type}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {venue.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {venue.description}
                    </p>
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
          <Star className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Sail on {ship.name}?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Book your voyage today and experience the unmatched luxury of Aurelius Cruise Co.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/ships">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Other Ships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
