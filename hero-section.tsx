"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Ship, MapPin, Calendar } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ship.jpg"
          alt="Luxury cruise ship sailing at sunset"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now Booking 2026 Voyages
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight text-balance">
            Explore the World in{" "}
            <span className="text-accent">Unmatched Luxury</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            Embark on extraordinary voyages to the world&apos;s most breathtaking destinations. 
            Experience unparalleled elegance, world-class dining, and memories that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30">
                Book Your Voyage
              </Button>
            </Link>
            <Link href="/ships">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                Explore Our Ships
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="glass-dark rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-xl">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-primary-foreground/60">Destination</p>
                  <p className="text-sm text-primary-foreground font-medium">Caribbean</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-xl">
                <Calendar className="h-5 w-5 text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-primary-foreground/60">Departure</p>
                  <p className="text-sm text-primary-foreground font-medium">Select Date</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/10 rounded-xl">
                <Ship className="h-5 w-5 text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-primary-foreground/60">Ship</p>
                  <p className="text-sm text-primary-foreground font-medium">Any Ship</p>
                </div>
              </div>
              <Link href="/booking">
                <Button className="w-full h-full min-h-[52px] rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Search Cruises
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
