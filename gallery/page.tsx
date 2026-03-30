"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All" },
  { id: "ships", name: "Ships" },
  { id: "cabins", name: "Cabins" },
  { id: "dining", name: "Dining" },
  { id: "destinations", name: "Destinations" },
]

const galleryImages = [
  { id: 1, src: "/images/hero-ship.jpg", alt: "Cruise ship at sunset", category: "ships" },
  { id: 2, src: "/images/ship-aurora.jpg", alt: "Aurora Majesty exterior", category: "ships" },
  { id: 3, src: "/images/ship-celestial.jpg", alt: "Celestial Dreams at sea", category: "ships" },
  { id: 4, src: "/images/ship-imperial.jpg", alt: "Imperial Odyssey at night", category: "ships" },
  { id: 5, src: "/images/cabin-suite.jpg", alt: "Luxury penthouse suite", category: "cabins" },
  { id: 6, src: "/images/gallery-balcony.jpg", alt: "Balcony suite ocean view", category: "cabins" },
  { id: 7, src: "/images/dining.jpg", alt: "Fine dining restaurant", category: "dining" },
  { id: 8, src: "/images/spa.jpg", alt: "Spa and wellness center", category: "ships" },
  { id: 9, src: "/images/gallery-pool.jpg", alt: "Infinity pool deck", category: "ships" },
  { id: 10, src: "/images/gallery-theater.jpg", alt: "Broadway theater", category: "ships" },
  { id: 11, src: "/images/destination-caribbean.jpg", alt: "Caribbean paradise", category: "destinations" },
  { id: 12, src: "/images/destination-mediterranean.jpg", alt: "Mediterranean coast", category: "destinations" },
  { id: 13, src: "/images/destination-alaska.jpg", alt: "Alaska glaciers", category: "destinations" },
  { id: 14, src: "/images/destination-asia.jpg", alt: "Asian landscapes", category: "destinations" },
  { id: 15, src: "/images/gallery-sunset.jpg", alt: "Sunset from deck", category: "ships" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (id: number) => setLightboxImage(id)
  const closeLightbox = () => setLightboxImage(null)

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage)
    let newIndex: number
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    setLightboxImage(filteredImages[newIndex].id)
  }

  const currentLightboxImage = lightboxImage !== null 
    ? galleryImages.find(img => img.id === lightboxImage) 
    : null

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/gallery-sunset.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Photo Gallery
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Capture the Beauty
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Browse our collection of stunning images showcasing our ships, destinations, 
              and the unforgettable experiences that await you.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-full px-6",
                  selectedCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl"
                onClick={() => openLightbox(image.id)}
              >
                <div className={cn(
                  "relative w-full",
                  index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                )}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <ZoomIn className="h-10 w-10 text-primary-foreground mx-auto mb-2" />
                      <p className="text-primary-foreground font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && currentLightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev") }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next") }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-5xl max-h-[80vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentLightboxImage.src}
              alt={currentLightboxImage.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-primary-foreground font-medium text-lg">{currentLightboxImage.alt}</p>
            <p className="text-primary-foreground/60 text-sm capitalize">{currentLightboxImage.category}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
