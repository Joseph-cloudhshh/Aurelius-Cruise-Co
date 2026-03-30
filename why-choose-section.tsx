"use client"

import Image from "next/image"
import { Crown, Utensils, Compass, Shield, Star, Heart } from "lucide-react"

const features = [
  {
    icon: Crown,
    title: "Luxury Suites",
    description: "Spacious accommodations with premium amenities, ocean views, and personalized butler service.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "World-class restaurants featuring Michelin-starred chefs and cuisines from around the globe.",
  },
  {
    icon: Compass,
    title: "Private Excursions",
    description: "Curated shore experiences with expert guides and exclusive access to hidden gems.",
  },
  {
    icon: Shield,
    title: "24/7 Concierge",
    description: "Dedicated staff available around the clock to fulfill your every wish and need.",
  },
  {
    icon: Star,
    title: "Award-Winning",
    description: "Consistently recognized as the world&apos;s best cruise line by industry experts.",
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Full-service spas, fitness centers, and wellness programs for mind and body renewal.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              The Aurelius Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Why Choose Aurelius
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              For over four decades, we&apos;ve been setting the standard for luxury ocean travel. 
              Every detail is meticulously crafted to ensure your voyage exceeds expectations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/cabin-suite.jpg"
                    alt="Luxury suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/dining.jpg"
                    alt="Fine dining"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/spa.jpg"
                    alt="Spa and wellness"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ship-aurora.jpg"
                    alt="Ship exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card shadow-2xl rounded-2xl p-6 w-[280px]">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-accent">40+</p>
                  <p className="text-xs text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-accent">500K+</p>
                  <p className="text-xs text-muted-foreground">Happy Guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
