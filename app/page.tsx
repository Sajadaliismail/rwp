import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Package,
  Truck,
  Target,
  Heart,
  Shield,
  Calculator,
  MessageCircle,
  Home,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import { Didact_Gothic, Saira } from "next/font/google";
import LocationMap from "@/components/location";

const didact = Didact_Gothic({
  weight: ["400"],
  subsets: ["latin"],
});

const saira = Saira({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Royal Wood Packers - India's Leading Wooden Pallet Manufacturer | Premium Quality Since 2000",
  description:
    "Royal Wood Packers - India's premier wooden pallet manufacturer since 2000. Specializing in ISPM-15 certified export pallets, industrial wooden packaging, custom wooden boxes & crates. Serving 1000+ clients nationwide with premium quality wooden packaging solutions. Get instant quotes for wooden pallets, plywood pallets, painted pallets & rental services.",
  keywords: [
    "wooden pallets manufacturer India",
    "ISPM-15 certified pallets India",
    "export wooden pallets",
    "industrial wooden packaging",
    "wooden pallet supplier Kerala",
    "custom wooden pallets manufacturer",
    "heat treated pallets India",
    "wooden boxes manufacturer India",
    "wooden crates supplier",
    "plywood pallets India",
    "pallet rental services India",
    "packaging solutions manufacturer",
    "logistics wooden pallets",
    "warehouse pallets India",
    "shipping pallets manufacturer",
    "wooden pallet price India",
    "sustainable packaging solutions",
    "rubber wood pallets",
    "country wood pallets",
    "painted wooden pallets",
  ],
  openGraph: {
    title: "Royal Wood Packers - India's Leading Wooden Pallet Manufacturer",
    description:
      "Premium wooden pallets manufacturer since 2000. ISPM-15 certified export pallets, custom wooden packaging solutions. Serving 1000+ clients nationwide.",
    url: "https://royalwoodpackers.in",
    images: [
      {
        url: "/rwp.svg",
        width: 1200,
        height: 630,
        alt: "Royal Wood Packers - Premium Wooden Pallets Manufacturing",
      },
    ],
  },
  alternates: {
    canonical: "https://royalwoodpackers.in",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Royal Wood Packers - India's Leading Wooden Pallet Manufacturer",
            description:
              "Premium wooden pallets manufacturer since 2000. ISPM-15 certified export pallets, custom wooden packaging solutions.",
            url: "https://royalwoodpackers.in",
            mainEntity: {
              "@type": "Organization",
              name: "Royal Wood Packers",
              description:
                "India's leading wooden pallet manufacturer specializing in premium quality wooden packaging solutions",
              foundingDate: "2000",
              numberOfEmployees: "50-100",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perumbavoor",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wooden Packaging Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Rubber Wood Pallets",
                      description:
                        "Premium rubber wood pallets with dense grain strength, starting from ₹1,450",
                      offers: {
                        "@type": "Offer",
                        price: "1450",
                        priceCurrency: "INR",
                        availability: "https://schema.org/InStock",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "ISPM-15 Certified Export Pallets",
                      description:
                        "Heat treated wooden pallets compliant with international shipping standards",
                      offers: {
                        "@type": "Offer",
                        availability: "https://schema.org/InStock",
                      },
                    },
                  },
                ],
              },
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
              ],
            },
          }),
        }}
      />

      <div
        id="home"
        className="min-h-screen overflow-clip bg-gradient-to-b from-gray-900 to-gray-800"
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <div className="animate-logo-pulse">
                  <Image
                    src="/logo.svg"
                    alt="Royal Wood Packers Logo - Premium Wooden Pallet Manufacturer"
                    width={100}
                    height={100}
                    className="h-24 w-24"
                  />
                </div>
                <div className="hidden md:block">
                  <span
                    className={` text-2xl font-black text-white tracking-wide`}
                  >
                    ROYAL WOOD PACKERS
                  </span>
                  <p
                    className={`${didact.className} text-sm text-blue-400 font-semibold tracking-wider`}
                  >
                    Quality Wood Pallet Makers
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-blue-400 font-medium hover:text-blue-300 transition-all duration-300 hover:scale-105"
                  aria-label="Home - Royal Wood Packers"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                  aria-label="Wooden Pallets Products"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                  aria-label="Contact Royal Wood Packers"
                >
                  Contact
                </Link>
                <Link
                  href="/request-rate"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                  aria-label="Get Wooden Pallet Quote"
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile Navigation Icons */}
              <div className="flex md:hidden space-x-4">
                <Link
                  href="/"
                  className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                  aria-label="Home"
                >
                  <Home className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-blue-400 transition-colors p-2"
                  aria-label="Products"
                >
                  <Package className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors p-2"
                  aria-label="Contact"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link
                  href="/request-rate"
                  className="text-gray-300 hover:text-blue-400 transition-colors p-2"
                  aria-label="Get Quote"
                >
                  <Calculator className="h-5 w-5" />
                </Link>
              </div>

              <div className="hidden md:block">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Link
                    href="/request-rate"
                    aria-label="Request Wooden Pallet Quote"
                  >
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={` space-y-8 animate-fade-in-up"`}>
                <div className={`animate-text-reveal ${saira.className}`}>
                  <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                    ROYAL WOOD
                    <span className="text-blue-400 block animate-gradient-text">
                      PACKERS
                    </span>
                  </h1>
                </div>
                <p
                  className={`${didact.className} text-3xl text-blue-400 font-bold tracking-wide animate-slide-in-bottom"`}
                >
                  India's Premier Wooden Pallet Manufacturer
                </p>
                <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-delayed">
                  Premium ISPM-15 certified wooden pallets and packaging
                  solutions since 2000. Serving 1000+ clients across India with
                  reliable, sustainable wooden pallets for export, logistics,
                  and industrial applications. Get instant quotes for custom
                  wooden pallets, boxes, and crates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-buttons-appear">
                  <Button
                    size="lg"
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 group transform hover:scale-105 transition-all duration-300"
                  >
                    <Link
                      scroll={true}
                      href="/products"
                      aria-label="View Wooden Pallet Products"
                    >
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Link
                      scroll={true}
                      href="/request-rate"
                      aria-label="Request Wooden Pallet Quote"
                    >
                      Request Quote
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-3 opacity-20 animate-float"></div>
                <Image
                  src="/HardWood.png"
                  alt="Royal Wood Packers - Premium Quality Wooden Pallets Manufacturing"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover animate-image-reveal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                24+ Years of Wooden Pallet Manufacturing Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Established in 2000, Royal Wood Packers has grown into India's
                leading manufacturer and supplier of premium wooden pallets and
                packaging solutions. We specialize in ISPM-15 certified export
                pallets, custom wooden boxes, industrial crates, and sustainable
                packaging solutions for diverse industries across India.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-300">
                    To become India's most trusted wooden pallet manufacturer,
                    delivering world-class quality products and exceptional
                    customer service across all industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    To continuously innovate and enhance our wooden packaging
                    solutions, delivering premium quality ISPM-15 certified
                    pallets that exceed international standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Our Values
                  </h3>
                  <p className="text-gray-300">
                    Commitment to quality, sustainability, and customer
                    satisfaction drives our wooden pallet manufacturing process,
                    ensuring reliable packaging solutions for every client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Royal Wood Packers for Your Wooden Pallet Needs?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine traditional craftsmanship with modern manufacturing
                techniques to deliver exceptional wooden packaging solutions
                that meet international quality standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Premium Quality Wooden Pallets",
                  description:
                    "Hand-selected premium wood materials ensuring maximum durability and strength for heavy-duty industrial applications and export requirements",
                },
                {
                  icon: Truck,
                  title: "Nationwide Wooden Pallet Delivery",
                  description:
                    "Reliable delivery of wooden pallets across India with quick turnaround times to keep your logistics operations running smoothly",
                },
                {
                  icon: Users,
                  title: "24+ Years Wooden Pallet Experience",
                  description:
                    "Over two decades of expertise in wooden pallet manufacturing with meticulous attention to quality and customer satisfaction",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700"
                >
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {[
                { number: "24+", label: "Years Manufacturing Wooden Pallets" },
                { number: "50,000+", label: "Wooden Pallets Manufactured" },
                { number: "1000+", label: "Satisfied Clients Nationwide" },
                { number: "24/7", label: "Customer Support Service" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section id="industries" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve with Wooden Packaging Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our premium wooden pallets and packaging solutions support
                diverse industries across India with specialized requirements
                for export, logistics, and industrial applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Export & International Logistics",
                  description:
                    "ISPM-15 certified wooden pallets for international shipping and export compliance",
                  icon: "🚢",
                },
                {
                  name: "Manufacturing Industries",
                  description:
                    "Heavy-duty wooden pallets for industrial equipment and machinery transportation",
                  icon: "🏭",
                },
                {
                  name: "Agriculture & Food Processing",
                  description:
                    "Food-safe wooden pallets for agricultural products and food industry applications",
                  icon: "🌾",
                },
                {
                  name: "Pharmaceutical Industry",
                  description:
                    "Clean, contamination-free wooden packaging solutions for pharmaceutical products",
                  icon: "💊",
                },
                {
                  name: "Automotive Industry",
                  description:
                    "Robust wooden pallets for automotive parts, components, and vehicle transportation",
                  icon: "🚗",
                },
                {
                  name: "Electronics & Technology",
                  description:
                    "Anti-static wooden packaging solutions for sensitive electronic equipment",
                  icon: "📱",
                },
                {
                  name: "Textile Industry",
                  description:
                    "Breathable wooden storage solutions for fabric, garments, and textile products",
                  icon: "🧵",
                },
                {
                  name: "Chemical Industry",
                  description:
                    "Specialized wooden pallets for chemical containers and hazardous material transport",
                  icon: "⚗️",
                },
              ].map((industry, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Certifications */}
        <section id="quality" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quality Certifications & Standards for Wooden Pallets
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest international standards of quality and
                compliance for wooden pallet manufacturing, ensuring your
                products meet global trade requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "ISPM-15 Certified Wooden Pallets",
                  description:
                    "Heat treated wooden pallets compliant with international phytosanitary standards for export",
                  icon: Shield,
                },
                {
                  title: "Quality Tested Wooden Products",
                  description:
                    "Every batch of wooden pallets undergoes rigorous quality control and load testing procedures",
                  icon: CheckCircle,
                },
                {
                  title: "Sustainable Wood Sourcing",
                  description:
                    "Responsibly sourced wood from certified sustainable forests for eco-friendly packaging",
                  icon: Heart,
                },
                {
                  title: "ISO Standard Manufacturing",
                  description:
                    "Wooden pallet manufacturing processes aligned with international quality standards",
                  icon: Star,
                },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <cert.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="process" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Wooden Pallet Manufacturing Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined wooden pallet manufacturing process ensures
                premium quality products delivered on time, every time, meeting
                your specific packaging requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Requirements",
                  description:
                    "We understand your specific wooden pallet requirements and provide expert recommendations for optimal packaging solutions",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Design & Quote",
                  description:
                    "Custom wooden pallet design solutions with transparent pricing and delivery timelines for your project",
                  icon: Target,
                },
                {
                  step: "03",
                  title: "Manufacturing & Quality Control",
                  description:
                    "Precision wooden pallet crafting using premium materials and proven manufacturing processes with quality checks",
                  icon: Package,
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  description:
                    "Reliable nationwide wooden pallet delivery with tracking and comprehensive quality assurance support",
                  icon: Truck,
                },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 text-center h-full">
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <process.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {process.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {process.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section id="products" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Wooden Pallet Products & Packaging Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive range of wooden packaging solutions including
                pallets, boxes, crates, and specialized services for all your
                industrial needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Premium Wooden Pallets", icon: Package },
                { name: "Custom Wooden Boxes", icon: Package },
                { name: "Industrial Wooden Crates", icon: Package },
                { name: "Plywood Pallets", icon: Package },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <product.icon className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {product.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Wooden Pallet Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Wooden Pallet Recycling",
                  "Pallet Repair Services",
                  "Custom Pallet Design",
                  "Logistics Solutions",
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <h4 className="text-white font-medium">{service}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Wooden Pallet Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by 1000+ clients across India for premium wooden pallet
                solutions and exceptional customer service.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  company: "Export Solutions Pvt Ltd",
                  text: "Outstanding quality ISPM-15 certified wooden pallets and exceptional service. Royal Wood Packers has been our trusted partner for export pallets for over 5 years.",
                  rating: 5,
                },
                {
                  name: "Priya Sharma",
                  company: "Logistics Pro India",
                  text: "Most reliable wooden pallet manufacturer in India. Always delivers on time with excellent craftsmanship. Their wooden pallets are perfect for our logistics operations.",
                  rating: 5,
                },
                {
                  name: "Mohammed Ali",
                  company: "Warehouse Solutions Kerala",
                  text: "The best wooden pallets we've used for our warehouse operations. Durable, well-made, and competitively priced. Great customer service and quick delivery.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-blue-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Premium Wooden Pallets?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact Royal Wood Packers today for a custom quote on your wooden
              pallet and packaging needs. Get ISPM-15 certified pallets with
              nationwide delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link
                  scroll={true}
                  href="/request-rate"
                  aria-label="Get Free Wooden Pallet Quote"
                >
                  Get Free Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <Link
                  scroll={true}
                  href="/contact"
                  aria-label="Contact Royal Wood Packers"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <LocationMap />
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Link href={"/"} scroll={true}>
                    <Image
                      src="/logo.svg"
                      alt="Royal Wood Packers Logo - Premium Wooden Pallet Manufacturer"
                      width={100}
                      height={100}
                      // className="h-12 w-12"
                    />
                  </Link>
                  <div>
                    <span className="text-xl font-bold">
                      ROYAL WOOD PACKERS
                    </span>
                    <p className="text-xs text-blue-400">
                      Premium Wooden Pallet Manufacturer
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  India's leading wooden pallet manufacturer since 2000. Premium
                  quality ISPM-15 certified wooden pallets with commitment to
                  sustainability and customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link
                      href="#about"
                      className="hover:text-blue-400 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#products"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Our Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#industries"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#quality"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Quality & Certifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={true}
                      href="/contact"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">
                  Wooden Packaging Products
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link
                      href="#products"
                      className="hover:text-blue-400 transition-colors"
                    >
                      View All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={true}
                      href="/products/rubber-wood-pallets"
                      className="hover:text-blue-400 transition-colors"
                    >
                      ISPM-15 Certified Wooden Pallets
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={true}
                      href="/products/wooden-boxes"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Custom Wooden Boxes
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={true}
                      href="/products/plywood-pallets"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Plywood Pallets
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={true}
                      href="/get-rates"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Get Price Calculator
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-400">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Perumbavoor, Ernakulam</p>
                  <p>Kerala - 683547, India</p>
                  <p>Phone: +91 9947405821</p>
                  <p>Phone: +91 9495785815</p>
                  <p>Email: info@royalwoodpackers.in</p>
                </div>
              </div>
            </div>
           <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
              <p>
                &copy; 2025 Royal Wood Packers - India's Leading Wooden Pallet
                Manufacturer. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              title="Facebook"
              href={"https://www.facebook.com/royalwoodpackers"}
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              title="Twitter"
              href={"https://www.instagram.com/royalwoodpackers"}
              target="_blank"
              aria-label="Twitter"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              title="LinkedIn"
              href={"https://www.linkedin.com/company/royalwoodpackers"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
