"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    id: "caribbean",
    name: "Caribbean",
    description: "Crystal waters, white sand beaches, and vibrant island culture",
    image: "/images/destination-caribbean.jpg",
    cruises: 24,
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    description: "Ancient wonders, coastal charm, and culinary excellence",
    image: "/images/destination-mediterranean.jpg",
    cruises: 18,
  },
  {
    id: "alaska",
    name: "Alaska",
    description: "Majestic glaciers, pristine wilderness, and incredible wildlife",
    image: "/images/destination-alaska.jpg",
    cruises: 12,
  },
  {
    id: "asia",
    name: "Asia",
    description: "Rich heritage, exotic landscapes, and unforgettable adventures",
    image: "/images/destination-asia.jpg",
    cruises: 15,
  },
]

export function DestinationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Discover the World
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From tropical paradises to icy frontiers, explore our handpicked destinations 
            that promise extraordinary experiences at every port.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link 
              key={destination.id}
              href={`/destinations#${destination.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <p className="text-accent text-sm font-medium mb-2">
                    {destination.cruises} Cruises Available
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    Explore
                    <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            href="/destinations"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
