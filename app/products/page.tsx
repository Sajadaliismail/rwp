import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Calculator, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wooden Pallet Products - Premium Quality Pallets, Boxes & Crates | Royal Wood Packers",
  description:
    "Explore Royal Wood Packers' comprehensive range of wooden packaging products. Premium wooden pallets, ISPM-15 certified export pallets, custom wooden boxes, industrial crates, plywood pallets, and rental services. Get instant quotes for rubber wood pallets, country wood pallets, painted pallets, and sustainable packaging solutions.",
  keywords: [
    "wooden pallets products India",
    "ISPM-15 certified wooden pallets",
    "rubber wood pallets price",
    "country wood pallets manufacturer",
    "plywood pallets India",
    "painted wooden pallets",
    "pine wood pallets supplier",
    "plastic pallets India",
    "wooden boxes manufacturer",
    "wooden crates supplier",
    "wooden planks India",
    "plywood sheets Kerala",
    "veneer sheets supplier",
    "pallet rental services India",
    "export wooden pallets",
    "industrial wooden packaging",
    "custom wooden pallets",
    "heat treated pallets",
    "wooden pallet price list",
    "packaging solutions India",
  ],
  openGraph: {
    title: "Wooden Pallet Products - Premium Quality Pallets & Packaging Solutions",
    description:
      "Comprehensive range of wooden packaging products including ISPM-15 certified pallets, custom boxes, industrial crates, and rental services.",
    url: "https://royalwoodpackers.in/products",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Wood Packers - Wooden Pallet Products Range",
      },
    ],
  },
  alternates: {
    canonical: "https://royalwoodpackers.in/products",
  },
}

export default function ProductsPage() {
  const products = [
    {
      id: "rubber-wood-pallets",
      name: "Rubber Wood Pallets",
      price: "From ₹1,450",
      image: "/fourway.png",
      shortDescription:
        "Premium rubber wood pallets with dense grain strength, resistant to warping and cracking under pressure. Perfect for heavy-duty industrial applications.",
      popular: true,
      keywords: "rubber wood pallets, heavy duty pallets, export pallets",
    },
    {
      id: "country-wood-pallets",
      name: "Country Wood Pallets",
      price: "From ₹1,650",
      image: "/HardWood.png",
      shortDescription:
        "Superior strength country wood pallets resistant to wear and moisture for heavy-duty industrial and export applications.",
      keywords: "country wood pallets, hardwood pallets, industrial pallets",
    },
    {
      id: "plywood-pallets",
      name: "Plywood Pallets",
      price: "From ₹900",
      image: "/palletImg4.png",
      shortDescription:
        "Lightweight, cost-effective plywood pallets ideal for lighter loads, indoor storage, and air freight applications.",
      keywords: "plywood pallets, lightweight pallets, cost effective pallets",
    },
    {
      id: "painted-wood-pallets",
      name: "Painted Wood Pallets",
      price: "From ₹1,350",
      image: "/painted.png",
      shortDescription:
        "Enhanced protection painted wooden pallets against moisture, pests, and weathering with professional polished finish.",
      keywords: "painted wooden pallets, weather resistant pallets, moisture proof pallets",
    },
    {
      id: "pine-wood-pallets",
      name: "Pine Wood Pallets",
      price: "From ₹1,100",
      image: "/palletImg1.png",
      shortDescription:
        "Lightweight pine wood pallets with no risk of staining, ideal for food industry and cost-effective transportation.",
      keywords: "pine wood pallets, food grade pallets, lightweight pallets",
    },
    {
      id: "plastic-pallets",
      name: "Plastic Pallets",
      price: "From ₹2,200",
      image: "/pp.png",
      shortDescription:
        "Unmatched durability and moisture resistance plastic pallets for safe, reusable, and hygienic transportation.",
      keywords: "plastic pallets, reusable pallets, hygienic pallets",
    },
    {
      id: "wooden-boxes",
      name: "Wooden Boxes",
      price: "From ₹1,800",
      image: "/box.png",
      shortDescription:
        "High-quality custom wooden boxes for secure storage, shipping, and industrial packaging applications.",
      keywords: "wooden boxes, custom wooden boxes, shipping boxes",
    },
    {
      id: "wooden-crates",
      name: "Wooden Crates",
      price: "From ₹2,800",
      image: "/crate.png",
      shortDescription:
        "Durable industrial wooden crates providing strong and secure packaging solutions for heavy machinery and equipment.",
      keywords: "wooden crates, industrial crates, heavy duty crates",
    },
    {
      id: "wooden-planks",
      name: "Wooden Planks",
      price: "From ₹45/piece",
      image: "/planks.webp",
      shortDescription:
        "High-quality wooden planks for manufacturing pallets, boxes, and custom wooden packaging products.",
      keywords: "wooden planks, pallet manufacturing, wooden packaging materials",
    },
    {
      id: "plywood",
      name: "Plywood Sheets",
      price: "From ₹85/sq.ft",
      image: "/Plywood.png",
      shortDescription:
        "Premium-quality plywood sheets for commercial and industrial applications with superior strength and durability.",
      keywords: "plywood sheets, commercial plywood, industrial plywood",
    },
    {
      id: "veneer-sheets",
      name: "Veneer Sheets",
      price: "From ₹120/sq.ft",
      image: "/veneer.jpg",
      shortDescription:
        "High-quality veneer sheets for commercial and hardwood plywood applications with premium finish.",
      keywords: "veneer sheets, hardwood veneer, plywood veneer",
    },
    {
      id: "rented-pallets",
      name: "Pallet Rental Services",
      price: "From ₹25/month",
      image: "/rented.jpg",
      shortDescription:
        "Cost-effective pallet rental services to reduce costs and environmental impact with managed tracking and repair.",
      keywords: "pallet rental, pallet leasing, managed pallet services",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Wooden Pallet Products - Royal Wood Packers",
            description:
              "Comprehensive range of wooden packaging products including pallets, boxes, crates, and rental services",
            url: "https://royalwoodpackers.in/products",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                description: product.shortDescription,
                image: `https://royalwoodpackers.in${product.image}`,
                offers: {
                  "@type": "Offer",
                  price: product.price.replace(/[^\d]/g, ""),
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "Royal Wood Packers",
                  },
                },
                manufacturer: {
                  "@type": "Organization",
                  name: "Royal Wood Packers",
                },
              })),
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
                  name: "Products",
                  item: "https://royalwoodpackers.in/products",
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
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4 animate-slide-in-left">
                <div className="animate-logo-pulse">
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
                </div>
                <div>
                  <span className="text-2xl font-black text-white tracking-wide">ROYAL WOOD PACKERS</span>
                  <p className="text-sm text-blue-400 font-semibold tracking-wider">Premium Wooden Pallet Products</p>
                </div>
              </div>
              <div className="hidden md:flex space-x-8 animate-slide-in-right">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-blue-400 font-medium hover:text-blue-300 transition-all duration-300 hover:scale-105"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Contact
                </Link>
                <Link
                  href="/request-rate"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Get Quote
                </Link>
              </div>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/request-rate">Get Quote</Link>
              </Button>
            </div>
          </div>
        </nav>

        <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Button variant="ghost" asChild className="mb-6 text-blue-400 hover:text-blue-300">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up">
                Premium Wooden Pallet Products & Packaging Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl animate-fade-in-delayed">
                Discover Royal Wood Packers' comprehensive range of wooden packaging products designed to meet various
                industrial, export, and commercial needs. Each wooden pallet and packaging solution is crafted with
                precision using premium materials and built to exceed international quality standards.
              </p>
            </div>

            {/* Price Calculator CTA */}
            <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white animate-fade-in-up">
              <Calculator className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get Instant Wooden Pallet Price Estimates</h2>
              <p className="text-xl mb-6 text-blue-100">
                Use our advanced wooden pallet calculator to get accurate pricing for pallets, boxes, and crates based
                on your specific requirements and dimensions
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/get-rates">Calculate Wooden Pallet Prices Now</Link>
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 overflow-hidden animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    {product.popular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} - Premium Wooden Packaging Solution`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{product.name}</CardTitle>
                    <div className="text-2xl font-bold text-blue-400">{product.price}</div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300 text-sm leading-relaxed">{product.shortDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Link href={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Services Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Wooden Packaging Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Wooden Pallet Recycling",
                    description: "Eco-friendly wooden pallet recycling and refurbishment services",
                  },
                  {
                    name: "Pallet Repair Services",
                    description: "Professional wooden pallet repair and maintenance services",
                  },
                  {
                    name: "Custom Wooden Pallet Design",
                    description: "Tailored wooden pallet solutions for specific industry needs",
                  },
                  {
                    name: "Logistics & Packaging Solutions",
                    description: "Complete wooden packaging and logistics support services",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-6 text-center">
                      <Package className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Custom Solutions CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Custom Wooden Packaging Solutions?</h2>
              <p className="text-xl mb-6 text-blue-100">
                We specialize in creating custom wooden pallets, boxes, and packaging solutions tailored to your
                specific industry requirements and dimensions
              </p>
              <Button size="lg" variant="secondary" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Discuss Custom Wooden Packaging Solutions</Link>
              </Button>
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
                    <Link href="/products" className="hover:text-blue-400 transition-colors font-semibold">
                      View All Products →
                    </Link>
                  </li>
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
                    <Link href="/get-rates" className="hover:text-blue-400 transition-colors">
                      Price Calculator
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
