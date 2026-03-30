"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ships", label: "Ships" },
  { href: "/destinations", label: "Destinations" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled ? "bg-primary" : "bg-primary/20 backdrop-blur-sm"
            )}>
              <Anchor className={cn(
                "h-6 w-6 transition-colors",
                isScrolled ? "text-primary-foreground" : "text-primary-foreground"
              )} />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-serif font-bold tracking-wide transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                Aurelius
              </span>
              <span className={cn(
                "text-xs tracking-[0.3em] uppercase transition-colors",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              )}>
                Cruise Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-primary/10",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/booking">
              <Button
                className={cn(
                  "rounded-full px-6 font-medium transition-all duration-200",
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                )}
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-xl">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
