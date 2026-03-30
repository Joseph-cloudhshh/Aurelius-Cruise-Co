import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  Shield, Heart, Briefcase, Plane, AlertTriangle, 
  FileText, Clock, CreditCard, RefreshCw, CheckCircle2,
  Info, Phone, Mail
} from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Aurelius Cruise Co.",
  description: "Review our terms and conditions, including health insurance, luggage fees, and travel insurance policies for your luxury cruise experience.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before booking your voyage with Aurelius Cruise Co. 
              Your safety and satisfaction are our highest priorities.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Important Notices Banner */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-foreground font-medium">
              Important: All fees mentioned below must be paid before your boarding date. Please review each section carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, label: "Health Insurance", href: "#health-insurance" },
                { icon: Briefcase, label: "Luggage Fees", href: "#luggage-fees" },
                { icon: Plane, label: "Travel Insurance", href: "#travel-insurance" },
                { icon: RefreshCw, label: "Refund Policy", href: "#refund-policy" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Health Insurance Section */}
            <div id="health-insurance" className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 shrink-0">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Health Insurance Fee</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-600">
                    <RefreshCw className="h-4 w-4" />
                    <span className="text-sm font-medium">Fully Refundable</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    At Aurelius Cruise Co., the health and safety of our guests is our utmost priority. 
                    All passengers are required to pay a mandatory health insurance fee prior to boarding. 
                    This fee ensures comprehensive medical coverage throughout your voyage.
                  </p>
                </div>

                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-accent" />
                    Fee Structure
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Standard Voyages (7-14 days)</p>
                      <p className="text-2xl font-bold text-foreground">$89 <span className="text-sm font-normal text-muted-foreground">per person</span></p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Extended Voyages (15+ days)</p>
                      <p className="text-2xl font-bold text-foreground">$149 <span className="text-sm font-normal text-muted-foreground">per person</span></p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-foreground">Coverage Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "24/7 onboard medical consultations",
                      "Emergency medical treatments",
                      "Prescription medications dispensed onboard",
                      "Medical evacuation if necessary",
                      "Hospital transfers at port destinations",
                      "Telemedicine services with specialists",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-serif font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <RefreshCw className="h-5 w-5" />
                    Refund Policy for Health Insurance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The health insurance fee is <strong className="text-foreground">fully refundable</strong> under the following conditions:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">1.</span>
                      <span className="text-muted-foreground">Cancellation made 30+ days before departure: 100% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">2.</span>
                      <span className="text-muted-foreground">Cancellation made 15-29 days before departure: 100% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">3.</span>
                      <span className="text-muted-foreground">Cancellation made 7-14 days before departure: 75% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">4.</span>
                      <span className="text-muted-foreground">Cancellation made less than 7 days before departure: 50% refund</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    Refunds are processed within 10-14 business days to your original payment method.
                  </p>
                </div>

                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Payment Deadline:</strong> Health insurance fees must be paid at least 14 days before your scheduled boarding date.
                  </p>
                </div>
              </div>
            </div>

            {/* Luggage Fees Section */}
            <div id="luggage-fees" className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shrink-0">
                  <Briefcase className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Luggage Fees</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-600">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-sm font-medium">Required Before Boarding</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    To ensure smooth embarkation and proper handling of your belongings, all luggage fees must be 
                    settled prior to your boarding date. Our premium luggage service includes professional handling, 
                    secure storage, and direct delivery to your stateroom.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-foreground">Luggage Allowance & Pricing:</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/5">
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Cabin Type</th>
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Included Bags</th>
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Extra Bag Fee</th>
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Max Weight/Bag</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Interior Stateroom</td>
                          <td className="p-4 text-muted-foreground">2 bags</td>
                          <td className="p-4 text-foreground font-semibold">$35/bag</td>
                          <td className="p-4 text-muted-foreground">50 lbs (23 kg)</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="p-4 text-muted-foreground">Ocean View</td>
                          <td className="p-4 text-muted-foreground">2 bags</td>
                          <td className="p-4 text-foreground font-semibold">$35/bag</td>
                          <td className="p-4 text-muted-foreground">50 lbs (23 kg)</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Balcony Suite</td>
                          <td className="p-4 text-muted-foreground">3 bags</td>
                          <td className="p-4 text-foreground font-semibold">$30/bag</td>
                          <td className="p-4 text-muted-foreground">55 lbs (25 kg)</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="p-4 text-muted-foreground">Penthouse Suite</td>
                          <td className="p-4 text-muted-foreground">4 bags</td>
                          <td className="p-4 text-foreground font-semibold">$25/bag</td>
                          <td className="p-4 text-muted-foreground">60 lbs (27 kg)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Owner&apos;s Suite</td>
                          <td className="p-4 text-muted-foreground">Unlimited</td>
                          <td className="p-4 text-foreground font-semibold">Complimentary</td>
                          <td className="p-4 text-muted-foreground">70 lbs (32 kg)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="font-serif font-semibold text-blue-700 mb-4">Additional Luggage Services:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Overweight Bag Fee</p>
                        <p className="text-sm text-muted-foreground">$15 per 10 lbs over limit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Oversized Items</p>
                        <p className="text-sm text-muted-foreground">$50 per item (golf clubs, surfboards, etc.)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Priority Delivery</p>
                        <p className="text-sm text-muted-foreground">$25 - luggage delivered within 30 min of boarding</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Luggage Insurance</p>
                        <p className="text-sm text-muted-foreground">$40 - covers up to $3,000 in lost/damaged items</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> Luggage fees must be paid at least 7 days before your boarding date. 
                    Unpaid luggage fees may result in delays during embarkation.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Insurance Section */}
            <div id="travel-insurance" className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 shrink-0">
                  <Plane className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Travel Insurance</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Highly Recommended</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    We <strong>highly recommend</strong> all guests purchase comprehensive travel insurance. 
                    While not mandatory, travel insurance provides essential protection for your investment 
                    and peace of mind throughout your journey.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Life is unpredictable, and travel plans can change unexpectedly. Travel insurance protects 
                    you against unforeseen circumstances such as trip cancellations, medical emergencies abroad, 
                    lost luggage, and travel delays. Our partner insurance providers offer comprehensive coverage 
                    tailored specifically for cruise vacations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-foreground">Recommended Coverage Plans:</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 border border-border hover:border-accent transition-colors">
                      <div className="text-center mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Basic Protection</p>
                        <p className="text-3xl font-bold text-foreground">$99</p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Trip cancellation up to $5,000",
                          "Medical coverage up to $25,000",
                          "Luggage loss up to $1,000",
                          "24/7 assistance hotline",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        Most Popular
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Premium Protection</p>
                        <p className="text-3xl font-bold text-foreground">$199</p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Trip cancellation up to $15,000",
                          "Medical coverage up to $100,000",
                          "Medical evacuation included",
                          "Luggage loss up to $3,000",
                          "Trip delay coverage",
                          "Cancel for any reason option",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-6 border border-border hover:border-accent transition-colors">
                      <div className="text-center mb-4">
                        <p className="text-sm text-muted-foreground mb-1">Elite Protection</p>
                        <p className="text-3xl font-bold text-foreground">$349</p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Trip cancellation up to $50,000",
                          "Medical coverage up to $500,000",
                          "Unlimited medical evacuation",
                          "Luggage loss up to $5,000",
                          "Trip interruption coverage",
                          "Concierge services",
                          "Pre-existing condition waiver",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-foreground">Why Travel Insurance is Essential:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Trip Cancellation Protection",
                        desc: "Recover costs if you need to cancel due to illness, family emergency, or other covered reasons.",
                      },
                      {
                        title: "Medical Emergency Coverage",
                        desc: "Access quality medical care anywhere in the world without worrying about astronomical bills.",
                      },
                      {
                        title: "Lost or Delayed Luggage",
                        desc: "Receive compensation for lost belongings or funds to purchase essentials during delays.",
                      },
                      {
                        title: "Travel Delay Benefits",
                        desc: "Cover additional expenses for meals and accommodation if your trip is significantly delayed.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Shield className="h-5 w-5 text-emerald-600 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Pro Tip:</strong> Purchase travel insurance within 14 days of your initial deposit 
                    to qualify for pre-existing condition coverage and the best rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy Section */}
            <div id="refund-policy" className="scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 shrink-0">
                  <RefreshCw className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Refund & Cancellation Policy</h2>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    We understand that plans may change. Our cancellation policy is designed to be fair 
                    while covering the costs associated with your reservation. Please review the following 
                    cancellation schedule carefully.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif font-semibold text-foreground">Cruise Fare Refund Schedule:</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/5">
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Days Before Departure</th>
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Refund Amount</th>
                          <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Cancellation Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">90+ days</td>
                          <td className="p-4 text-green-600 font-semibold">100% refund</td>
                          <td className="p-4 text-muted-foreground">None</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="p-4 text-muted-foreground">60-89 days</td>
                          <td className="p-4 text-green-600 font-semibold">75% refund</td>
                          <td className="p-4 text-muted-foreground">25% of fare</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">30-59 days</td>
                          <td className="p-4 text-amber-600 font-semibold">50% refund</td>
                          <td className="p-4 text-muted-foreground">50% of fare</td>
                        </tr>
                        <tr className="border-b border-border bg-muted/30">
                          <td className="p-4 text-muted-foreground">15-29 days</td>
                          <td className="p-4 text-amber-600 font-semibold">25% refund</td>
                          <td className="p-4 text-muted-foreground">75% of fare</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Less than 15 days</td>
                          <td className="p-4 text-red-600 font-semibold">No refund</td>
                          <td className="p-4 text-muted-foreground">100% of fare</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-serif font-semibold text-foreground mb-4">Important Notes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-600 text-sm font-semibold shrink-0">1</span>
                      <span className="text-muted-foreground">All refunds are processed within 10-14 business days to the original payment method.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-600 text-sm font-semibold shrink-0">2</span>
                      <span className="text-muted-foreground">Port fees and government taxes are fully refundable regardless of cancellation timing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-600 text-sm font-semibold shrink-0">3</span>
                      <span className="text-muted-foreground">Future cruise credits may be offered as an alternative to cash refunds at enhanced value.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-600 text-sm font-semibold shrink-0">4</span>
                      <span className="text-muted-foreground">Special promotional fares may have different cancellation terms as specified at booking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Payment Terms Summary</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Fee Type</th>
                      <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Amount</th>
                      <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Payment Deadline</th>
                      <th className="text-left p-4 font-serif font-semibold text-foreground border-b border-border">Refundable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-foreground font-medium">Health Insurance</td>
                      <td className="p-4 text-muted-foreground">$89-$149/person</td>
                      <td className="p-4 text-muted-foreground">14 days before boarding</td>
                      <td className="p-4"><span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-sm font-medium">Yes</span></td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="p-4 text-foreground font-medium">Luggage Fees</td>
                      <td className="p-4 text-muted-foreground">$25-$50/extra bag</td>
                      <td className="p-4 text-muted-foreground">7 days before boarding</td>
                      <td className="p-4"><span className="px-2 py-1 bg-amber-500/20 text-amber-600 rounded text-sm font-medium">Partial</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground font-medium">Travel Insurance</td>
                      <td className="p-4 text-muted-foreground">$99-$349/person</td>
                      <td className="p-4 text-muted-foreground">Before departure (recommended at booking)</td>
                      <td className="p-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-600 rounded text-sm font-medium">See policy</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact for Questions */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Have Questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Our dedicated guest services team is available to help you understand our terms and answer 
                  any questions you may have about fees, insurance, or policies.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="tel:+1-800-AURELIUS" 
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    1-800-AURELIUS
                  </a>
                  <a 
                    href="mailto:xbn2025@outlook.com" 
                    className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:border-accent transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    xbn2025@outlook.com
                  </a>
                </div>
              </div>
            </div>

            {/* Agreement Statement */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                By booking a voyage with Aurelius Cruise Co., you acknowledge that you have read, understood, 
                and agree to these Terms and Conditions. These terms are subject to change; please review them 
                before each booking.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
