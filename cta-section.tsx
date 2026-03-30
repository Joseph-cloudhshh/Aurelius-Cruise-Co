import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/ship-imperial.jpg"
          alt="Cruise ship at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Ready to Set Sail?
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Your Dream Voyage Awaits
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-xl">
            Connect with our voyage specialists today. Let us craft a personalized 
            journey that exceeds your every expectation. Your adventure begins with 
            a single conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Start Booking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:1-800-AURELIUS">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                1-800-AURELIUS
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:voyage@aureliuscruise.com" className="hover:text-accent transition-colors">
                voyage@aureliuscruise.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
