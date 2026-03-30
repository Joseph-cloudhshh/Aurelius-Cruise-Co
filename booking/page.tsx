"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  User, Users, Gift, RefreshCw, 
  ArrowRight, ArrowLeft, Mail, Phone, 
  Calendar, Ship, Bed, MapPin, MessageSquare,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

type BookingType = "returning" | "group" | "solo" | "voucher" | null

const bookingOptions = [
  {
    id: "returning",
    icon: RefreshCw,
    title: "Have you booked with us before?",
    description: "Welcome back! Enjoy loyalty benefits and faster booking.",
  },
  {
    id: "group",
    icon: Users,
    title: "Are you booking a group trip?",
    description: "Groups of 8+ receive special rates and perks.",
  },
  {
    id: "solo",
    icon: User,
    title: "Do you want a solo trip?",
    description: "Single travelers enjoy dedicated activities and no single supplement on select cabins.",
  },
  {
    id: "voucher",
    icon: Gift,
    title: "Do you have a free trip voucher?",
    description: "Redeem your voucher code for a complimentary voyage.",
  },
]

const destinations = [
  "Caribbean",
  "Mediterranean", 
  "Alaska",
  "Asia",
  "Northern Europe",
  "South Pacific",
  "Around the World",
]

const cabinTypes = [
  "Interior Stateroom",
  "Ocean View",
  "Balcony Suite",
  "Penthouse Suite",
  "Owner's Suite",
  "No Preference",
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [bookingType, setBookingType] = useState<BookingType>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    departureDate: "",
    cabinPreference: "",
    numberOfGuests: "2",
    voucherCode: "",
    specialRequests: "",
    loyaltyNumber: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Generate email body
    const tripType = bookingType === "returning" ? "Returning Guest" 
      : bookingType === "group" ? "Group Trip"
      : bookingType === "solo" ? "Solo Trip"
      : "Voucher Redemption"
    
    const emailBody = `Hello Aurelius Cruise Co.,

Here are my booking details:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Trip Type: ${tripType}
Destination: ${formData.destination}
Departure Date: ${formData.departureDate}
Cabin Preference: ${formData.cabinPreference}
${bookingType === "group" ? `Number of Guests: ${formData.numberOfGuests}` : ""}
${bookingType === "voucher" ? `Voucher Code: ${formData.voucherCode}` : ""}
${bookingType === "returning" ? `Loyalty Number: ${formData.loyaltyNumber}` : ""}
Special Requests: ${formData.specialRequests || "None"}

Looking forward to confirmation.

Thank you!`

    // Open email client
    const mailtoLink = `mailto:xbn2025@outlook.com?subject=${encodeURIComponent("Cruise Booking Request")}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    
    setIsSubmitted(true)
  }

  const goToStep2 = (type: BookingType) => {
    setBookingType(type)
    setStep(2)
  }

  const goBack = () => {
    setStep(1)
    setBookingType(null)
  }

  const resetForm = () => {
    setStep(1)
    setBookingType(null)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      departureDate: "",
      cabinPreference: "",
      numberOfGuests: "2",
      voucherCode: "",
      specialRequests: "",
      loyaltyNumber: "",
    })
    setIsSubmitted(false)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/ship-aurora.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Book Your Voyage
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Start Your Journey Today
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Complete the form below and our voyage specialists will contact you 
              within 24 hours to finalize your dream cruise.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            
            {/* Progress Indicator */}
            {!isSubmitted && (
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                    step >= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    1
                  </div>
                  <div className={cn(
                    "w-24 h-1 rounded-full transition-colors",
                    step >= 2 ? "bg-accent" : "bg-muted"
                  )} />
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                    step >= 2 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    2
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Selection Options */}
            {step === 1 && !isSubmitted && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Tell Us About Your Trip
                  </h2>
                  <p className="text-muted-foreground">
                    Select the option that best describes your booking
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {bookingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => goToStep2(option.id as BookingType)}
                      className="group p-6 bg-card rounded-2xl border-2 border-border hover:border-accent text-left transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <option.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Dynamic Form */}
            {step === 2 && !isSubmitted && (
              <div>
                <button 
                  onClick={goBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to selection
                </button>

                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-card-foreground mb-2">
                      {bookingType === "returning" && "Welcome Back!"}
                      {bookingType === "group" && "Group Booking"}
                      {bookingType === "solo" && "Solo Adventure"}
                      {bookingType === "voucher" && "Voucher Redemption"}
                    </h2>
                    <p className="text-muted-foreground">
                      Please fill in your details below
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-card-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-accent" />
                        Personal Information
                      </h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Smith"
                            required
                            className="rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              required
                              className="rounded-lg pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            required
                            className="rounded-lg pl-10"
                          />
                        </div>
                      </div>

                      {/* Loyalty Number for returning guests */}
                      {bookingType === "returning" && (
                        <div className="space-y-2">
                          <Label htmlFor="loyaltyNumber">Loyalty Member Number</Label>
                          <Input
                            id="loyaltyNumber"
                            name="loyaltyNumber"
                            value={formData.loyaltyNumber}
                            onChange={handleInputChange}
                            placeholder="AUR-XXXXXX"
                            className="rounded-lg"
                          />
                        </div>
                      )}
                    </div>

                    {/* Trip Details */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="font-semibold text-card-foreground flex items-center gap-2">
                        <Ship className="h-4 w-4 text-accent" />
                        Trip Details
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination *</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <select
                              id="destination"
                              name="destination"
                              value={formData.destination}
                              onChange={handleInputChange}
                              required
                              className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="">Select destination</option>
                              {destinations.map(dest => (
                                <option key={dest} value={dest}>{dest}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="departureDate">Departure Date *</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <Input
                              id="departureDate"
                              name="departureDate"
                              type="date"
                              value={formData.departureDate}
                              onChange={handleInputChange}
                              required
                              className="rounded-lg pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cabinPreference">Cabin Preference *</Label>
                          <div className="relative">
                            <Bed className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <select
                              id="cabinPreference"
                              name="cabinPreference"
                              value={formData.cabinPreference}
                              onChange={handleInputChange}
                              required
                              className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="">Select cabin type</option>
                              {cabinTypes.map(cabin => (
                                <option key={cabin} value={cabin}>{cabin}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Number of Guests for group trips */}
                        {bookingType === "group" && (
                          <div className="space-y-2">
                            <Label htmlFor="numberOfGuests">Number of Guests *</Label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="numberOfGuests"
                                name="numberOfGuests"
                                type="number"
                                min="8"
                                max="500"
                                value={formData.numberOfGuests}
                                onChange={handleInputChange}
                                required
                                className="rounded-lg pl-10"
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">Minimum 8 guests for group rates</p>
                          </div>
                        )}

                        {/* Voucher Code */}
                        {bookingType === "voucher" && (
                          <div className="space-y-2">
                            <Label htmlFor="voucherCode">Voucher Code *</Label>
                            <div className="relative">
                              <Gift className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="voucherCode"
                                name="voucherCode"
                                value={formData.voucherCode}
                                onChange={handleInputChange}
                                placeholder="XXXX-XXXX-XXXX"
                                required
                                className="rounded-lg pl-10"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="font-semibold text-card-foreground flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-accent" />
                        Additional Information
                      </h3>

                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          placeholder="Dietary requirements, accessibility needs, special occasions, etc."
                          rows={4}
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full rounded-full py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        Submit Booking Request
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        By submitting, you agree to our Terms of Service and Privacy Policy. 
                        This will open your email app to send the booking request.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Success State */}
            {isSubmitted && (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Booking Request Initiated!
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Your email app should have opened with your booking details. 
                  Please send the email to complete your request. Our voyage specialists 
                  will respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={resetForm}
                    variant="outline"
                    className="rounded-full"
                  >
                    Start New Booking
                  </Button>
                  <Link href="/">
                    <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Prefer to Speak With Someone?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our voyage specialists are available 24/7 to assist you with your booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:1-800-AURELIUS"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card rounded-full hover:shadow-lg transition-shadow"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-semibold">1-800-AURELIUS</span>
              </a>
              <a 
                href="mailto:xbn2025@outlook.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card rounded-full hover:shadow-lg transition-shadow"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-semibold">xbn2025@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
