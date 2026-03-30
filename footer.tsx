import Link from "next/link"
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-accent">
                <Anchor className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wide">
                  Aurelius
                </span>
                <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
                  Cruise Co.
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the world&apos;s most luxurious ocean voyages. Since 1985, we&apos;ve been crafting 
              unforgettable journeys across the seven seas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/ships", label: "Our Ships" },
                { href: "/destinations", label: "Destinations" },
                { href: "/pricing", label: "Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/marketplace", label: "Marketplace" },
                { href: "/booking", label: "Book a Cruise" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {[
                { href: "/terms#travel-insurance", label: "Travel Insurance" },
                { href: "/terms#refund-policy", label: "Cancellation Policy" },
                { href: "/terms#health-insurance", label: "Health & Safety" },
                { href: "/terms#luggage-fees", label: "Luggage Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  1200 Harbor Boulevard<br />
                  Miami, FL 33132, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+1-800-AURELIUS" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  1-800-AURELIUS
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:xbn2025@outlook.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  xbn2025@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Aurelius Cruise Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
