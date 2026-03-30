"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Margaret & Richard Chen",
    location: "San Francisco, CA",
    cruise: "Mediterranean Odyssey",
    rating: 5,
    text: "Our voyage aboard the Aurora Majesty exceeded every expectation. The attention to detail, from the gourmet dining to the shore excursions, was impeccable. We've cruised with many lines, but Aurelius stands alone in true luxury.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "James Wellington III",
    location: "London, UK",
    cruise: "Caribbean Escape",
    rating: 5,
    text: "The Celestial Dreams is a masterpiece of maritime elegance. My family celebrated our anniversary in the Royal Suite, and the butler service was extraordinary. Every moment felt like we were the only guests aboard.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dr. Sophia Nakamura",
    location: "Tokyo, Japan",
    cruise: "Alaska Adventure",
    rating: 5,
    text: "Witnessing the glaciers from our private balcony while enjoying world-class sushi was surreal. The expedition team's knowledge enhanced every port visit. This is how Alaska should be experienced.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Antonio & Maria Rossi",
    location: "Milan, Italy",
    cruise: "Asian Discovery",
    rating: 5,
    text: "As frequent travelers, we thought we'd seen it all. Aurelius proved us wrong. The cultural immersion programs and onboard enrichment lectures added depth to our journey through Southeast Asia.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Guest Experiences
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Don&apos;t just take our word for it. Hear from travelers who&apos;ve experienced 
            the magic of Aurelius Cruise Co.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Quote className="h-6 w-6 text-accent-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-primary-foreground">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                      {currentTestimonial.location}
                    </p>
                    <p className="text-sm text-accent">
                      {currentTestimonial.cruise}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "w-8 bg-accent" 
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
