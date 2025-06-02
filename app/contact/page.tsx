"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

// Note: Since this is a client component, we'll add metadata in the parent or use a separate metadata file
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Royal Wood Packers - Wooden Pallet Manufacturer",
            description:
              "Contact Royal Wood Packers for wooden pallet inquiries, custom quotes, and packaging solutions",
            url: "https://royalwoodpackers.in/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Royal Wood Packers",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Perumbavoor",
                addressLocality: "Ernakulam",
                addressRegion: "Kerala",
                postalCode: "683547",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9947405821",
                  contactType: "customer service",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9495785815",
                  contactType: "sales",
                },
              ],
              email: "info@royalwoodpackers.in",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://royalwoodpackers.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://royalwoodpackers.in/contact",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                 <Link
                  href={'/'}
                  scroll={true}>
                  <Image
                  
                  src="/logo.svg"
                  alt="Royal Wood Packers Logo - Premium Wooden Pallet Manufacturer"
                  width={100}
                  height={100}
                  // className="h-12 w-12"
                  />
                  </Link>
                <div>
                  <span className="text-xl font-bold text-white">ROYAL WOOD PACKERS</span>
                  <p className="text-xs text-blue-400">Contact Wooden Pallet Experts</p>
                </div>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Products
                </Link>
                <Link href="/contact" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  Contact
                </Link>
                <Link href="/request-rate" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Get Quote
                </Link>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/request-rate">Get Quote</Link>
              </Button>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Button variant="ghost" asChild className="mb-6 text-blue-400 hover:text-blue-300">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-5xl font-bold text-white mb-4">
                Contact Royal Wood Packers - Wooden Pallet Manufacturer
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Get in touch with India's leading wooden pallet manufacturer for custom quotes, ISPM-15 certified
                pallets, wooden boxes, crates, and comprehensive packaging solutions. Our expert team is ready to help
                with all your wooden packaging needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gray-800 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Send us a Message About Your Wooden Pallet Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-300">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message About Your Wooden Pallet Requirements *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                        placeholder="Tell us about your wooden pallet requirements, quantities needed, dimensions, ISPM-15 certification needs, delivery location, or any specific questions about our wooden packaging solutions..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message to Royal Wood Packers
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="bg-gray-800 border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get in Touch with Wooden Pallet Experts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Royal Wood Packers Address</h3>
                        <p className="text-gray-300">
                          Perumbavoor, Ernakulam
                          <br />
                          Kerala - 683547
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Phone Numbers</h3>
                        <p className="text-gray-300">
                          <a href="tel:+919947405821" className="hover:text-blue-400 transition-colors">
                            +91 9947405821
                          </a>
                          <br />
                          <a href="tel:+919495785815" className="hover:text-blue-400 transition-colors">
                            +91 9495785815
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Email Address</h3>
                        <p className="text-gray-300">
                          <a href="mailto:info@royalwoodpackers.in" className="hover:text-blue-400 transition-colors">
                            info@royalwoodpackers.in
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">Business Hours</h3>
                        <p className="text-gray-300">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 8:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Need a Quick Wooden Pallet Quote?</h3>
                    <p className="text-blue-100 mb-4">
                      For faster service on standard wooden pallet orders, use our online quote request form with
                      instant pricing calculator.
                    </p>
                    <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      <Link href="/request-rate">Get Instant Wooden Pallet Quote</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Company Info */}
                <Card className="bg-gray-800 border-gray-700 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">About Royal Wood Packers</h3>
                    <p className="text-gray-300 mb-4">
                      Established in 2000, Royal Wood Packers is one of India's leading manufacturers of premium wooden
                      pallets, ISPM-15 certified export pallets, wooden boxes, industrial crates, and comprehensive
                      packaging solutions.
                    </p>
                    <div className="text-blue-400 font-semibold">
                      24+ Years of Excellence in Wooden Packaging Manufacturing
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                 <Link
                  href={'/'}
                  scroll={true}>
                  <Image
                  
                  src="/logo.svg"
                  alt="Royal Wood Packers Logo - Premium Wooden Pallet Manufacturer"
                  width={100}
                  height={100}
                  // className="h-12 w-12"
                  />
                  </Link>
                  <div>
                    <span className="text-xl font-bold">ROYAL WOOD PACKERS</span>
                    <p className="text-xs text-blue-400">Premium Wooden Pallet Manufacturer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  India's leading wooden pallet manufacturer since 2000. Premium quality ISPM-15 certified wooden
                  pallets with commitment to sustainability and customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/#about" className="hover:text-blue-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-blue-400 transition-colors">
                      Our Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/#industries" className="hover:text-blue-400 transition-colors">
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-400 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">Wooden Packaging Products</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/products/rubber-wood-pallets" className="hover:text-blue-400 transition-colors">
                      ISPM-15 Certified Wooden Pallets
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/wooden-boxes" className="hover:text-blue-400 transition-colors">
                      Custom Wooden Boxes
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/wooden-crates" className="hover:text-blue-400 transition-colors">
                      Industrial Wooden Crates
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/plywood-pallets" className="hover:text-blue-400 transition-colors">
                      Plywood Pallets
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/rented-pallets" className="hover:text-blue-400 transition-colors">
                      Wooden Pallet Recycling
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-rates" className="hover:text-blue-400 transition-colors">
                      Custom Pallet Design
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Perumbavoor, Ernakulam</p>
                  <p>Kerala - 683547, India</p>
                  <p>
                    <a href="tel:+919947405821" className="hover:text-blue-400 transition-colors">
                      Phone: +91 9947405821
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919495785815" className="hover:text-blue-400 transition-colors">
                      Phone: +91 9495785815
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@royalwoodpackers.in" className="hover:text-blue-400 transition-colors">
                      Email: info@royalwoodpackers.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Royal Wood Packers - India's Leading Wooden Pallet Manufacturer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
