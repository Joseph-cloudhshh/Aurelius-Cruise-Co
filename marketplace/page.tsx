"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, X, Star, Package, Sparkles, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Products" },
  { id: "collectibles", name: "Collectibles" },
  { id: "accessories", name: "Travel Accessories" },
  { id: "packages", name: "Onboard Packages" },
  { id: "apparel", name: "Apparel" },
]

const products = [
  {
    id: 1,
    name: "Aurora Majesty Ship Model",
    description: "Exquisite 1:500 scale model of our flagship vessel. Handcrafted with premium materials and stunning detail.",
    price: 299,
    category: "collectibles",
    image: "/images/product-ship-model.jpg",
    rating: 5,
    reviews: 47,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Premium Luggage Set",
    description: "Elegant navy and gold 3-piece luggage set with TSA-approved locks and spinner wheels.",
    price: 549,
    category: "accessories",
    image: "/images/product-luggage.jpg",
    rating: 5,
    reviews: 89,
    badge: null,
  },
  {
    id: 3,
    name: "Luxury Spa Gift Set",
    description: "Indulgent spa collection featuring our signature scents used in onboard spa treatments.",
    price: 159,
    category: "accessories",
    image: "/images/product-spa-kit.jpg",
    rating: 4,
    reviews: 63,
    badge: "New",
  },
  {
    id: 4,
    name: "Marine Expedition Binoculars",
    description: "Professional-grade 10x42 binoculars perfect for wildlife viewing and scenic exploration.",
    price: 399,
    category: "accessories",
    image: "/images/product-binoculars.jpg",
    rating: 5,
    reviews: 34,
    badge: null,
  },
  {
    id: 5,
    name: "Romance at Sea Package",
    description: "Champagne, chocolate-covered strawberries, rose petals, and couples spa treatment credit.",
    price: 299,
    category: "packages",
    image: "/images/cabin-suite.jpg",
    rating: 5,
    reviews: 156,
    badge: "Popular",
  },
  {
    id: 6,
    name: "Celebration Package",
    description: "Perfect for birthdays and anniversaries. Includes cake, decorations, and specialty dining reservation.",
    price: 199,
    category: "packages",
    image: "/images/dining.jpg",
    rating: 5,
    reviews: 203,
    badge: null,
  },
  {
    id: 7,
    name: "Ultimate Beverage Package",
    description: "Unlimited premium beverages including cocktails, wine, beer, and specialty coffees.",
    price: 799,
    category: "packages",
    image: "/images/gallery-sunset.jpg",
    rating: 4,
    reviews: 412,
    badge: "Best Value",
  },
  {
    id: 8,
    name: "Celestial Dreams Model",
    description: "Limited edition 1:500 scale model celebrating our intimate luxury vessel.",
    price: 349,
    category: "collectibles",
    image: "/images/ship-celestial.jpg",
    rating: 5,
    reviews: 28,
    badge: "Limited",
  },
]

interface CartItem {
  productId: number
  quantity: number
}

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (productId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId)
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { productId, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.productId !== productId))
  }

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.productId === productId) {
        const newQuantity = item.quantity + delta
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    }).filter(item => item.quantity > 0))
  }

  const cartItems = cart.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  }))

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Aurelius Marketplace
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              Bring the Voyage Home
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Shop exclusive cruise collectibles, travel essentials, and onboard packages 
              to enhance your Aurelius experience.
            </p>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header with Cart */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "rounded-full",
                    selectedCategory === category.id 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary/10"
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Cart Button */}
            <Button 
              onClick={() => setIsCartOpen(true)}
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 relative"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {categories.find(c => c.id === product.category)?.name}
                  </p>

                  {/* Name */}
                  <h3 className="font-serif font-bold text-card-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-4 w-4",
                          i < product.rating ? "fill-accent text-accent" : "text-muted"
                        )} 
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-card-foreground">
                      ${product.price}
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Package className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Sparkles className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Exclusive Aurelius products</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Gift className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Gift Wrapping</h3>
                <p className="text-sm text-muted-foreground">Elegant presentation included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-serif font-bold text-card-foreground">Your Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.productId} className="flex gap-4 bg-secondary rounded-xl p-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-card-foreground text-sm line-clamp-1">
                            {item.product.name}
                          </h3>
                          <p className="text-accent font-bold">${item.product.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button 
                              onClick={() => updateQuantity(item.productId, -1)}
                              className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.productId, 1)}
                              className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                            <button 
                              onClick={() => removeFromCart(item.productId)}
                              className="ml-auto text-muted-foreground hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-xl font-bold text-card-foreground">
                      ${cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Proceed to Checkout
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
