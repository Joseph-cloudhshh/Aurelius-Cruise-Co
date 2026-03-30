import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Ship, MapPin, ArrowRight, Sun, Snowflake, Palmtree, Mountain } from "lucide-react"

export const metadata = {
  title: "Destinations | Aurelius Cruise Co.",
  description: "Discover breathtaking destinations around the world. From tropical Caribbean beaches to majestic Alaskan glaciers.",
}

const destinations = [
  {
    id: "caribbean",
    name: "Caribbean",
    tagline: "Paradise Found",
    description: "Crystal-clear turquoise waters, pristine white-sand beaches, and vibrant island culture await you in the Caribbean. Experience world-class snorkeling, explore historic ports, and savor fresh tropical cuisine.",
    image: "/images/destination-caribbean.jpg",
    icon: Palmtree,
    cruises: 24,
    ports: ["Cozumel, Mexico", "Nassau, Bahamas", "St. Thomas", "Grand Cayman", "Aruba", "Jamaica"],
    bestTime: "December - April",
    highlights: ["Beach excursions", "Snorkeling & diving", "Historic sites", "Local cuisine"],
    startingPrice: 799,
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    tagline: "Ancient Wonders & Coastal Beauty",
    description: "Immerse yourself in centuries of history, art, and culture as you sail the storied waters of the Mediterranean. From the Greek isles to the Italian Riviera, every port tells a story.",
    image: "/images/destination-mediterranean.jpg",
    icon: Sun,
    cruises: 18,
    ports: ["Barcelona, Spain", "Rome, Italy", "Santorini, Greece", "Dubrovnik, Croatia", "Monaco", "Marseille, France"],
    bestTime: "May - October",
    highlights: ["Ancient ruins", "World-class museums", "Wine country tours", "Coastal villages"],
    startingPrice: 1299,
  },
  {
    id: "alaska",
    name: "Alaska",
    tagline: "Nature&apos;s Majesty",
    description: "Witness awe-inspiring glaciers, spot whales and bears in their natural habitat, and experience the raw beauty of the Last Frontier. Alaska offers adventure and wonder at every turn.",
    image: "/images/destination-alaska.jpg",
    icon: Snowflake,
    cruises: 12,
    ports: ["Juneau", "Ketchikan", "Skagway", "Glacier Bay", "Sitka", "Icy Strait Point"],
    bestTime: "May - September",
    highlights: ["Glacier viewing", "Wildlife encounters", "Gold rush history", "Helicopter tours"],
    startingPrice: 1499,
  },
  {
    id: "asia",
    name: "Asia",
    tagline: "Exotic Discovery",
    description: "From the ancient temples of Southeast Asia to the modern skylines of Japan, discover a world of contrast and wonder. Experience rich traditions, incredible cuisine, and breathtaking landscapes.",
    image: "/images/destination-asia.jpg",
    icon: Mountain,
    cruises: 15,
    ports: ["Singapore", "Hong Kong", "Tokyo, Japan", "Bangkok, Thailand", "Ho Chi Minh City", "Bali, Indonesia"],
    bestTime: "October - March",
    highlights: ["Temple visits", "Street food tours", "Cultural experiences", "Island escapes"],
    startingPrice: 1799,
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/destination-mediterranean.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Explore the World
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Extraordinary Destinations Await
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From tropical paradises to icy frontiers, discover our carefully curated itineraries 
              that promise unforgettable experiences at every port of call.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                id={destination.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-card shadow-xl rounded-2xl p-6 hidden lg:block">
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-3xl font-serif font-bold text-accent">
                        ${destination.startingPrice.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">/person</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <destination.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-accent font-medium">{destination.tagline}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                      {destination.name}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {destination.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-secondary rounded-xl p-4">
                        <Ship className="h-5 w-5 text-accent mb-2" />
                        <p className="text-xl font-bold text-foreground">{destination.cruises}</p>
                        <p className="text-xs text-muted-foreground">Cruises</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-4">
                        <MapPin className="h-5 w-5 text-accent mb-2" />
                        <p className="text-xl font-bold text-foreground">{destination.ports.length}</p>
                        <p className="text-xs text-muted-foreground">Ports</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-4">
                        <Calendar className="h-5 w-5 text-accent mb-2" />
                        <p className="text-sm font-bold text-foreground">{destination.bestTime}</p>
                        <p className="text-xs text-muted-foreground">Best Time</p>
                      </div>
                    </div>

                    {/* Ports */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Popular Ports</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.ports.map((port) => (
                          <span 
                            key={port}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {port}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Experience Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight) => (
                          <span 
                            key={highlight}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/booking">
                      <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                        Explore {destination.name} Cruises
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Can&apos;t Decide? We&apos;ll Help!
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Our voyage specialists can help you find the perfect destination 
            based on your interests, travel dates, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Start Planning
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
