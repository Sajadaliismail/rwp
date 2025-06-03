"use client"

import { useEffect, useRef, useState } from "react"
import { CustomOptions } from "./components/customOptions"
import { PalletWizard } from "./components/pallets/PalletWizard"
import { BoxWizard } from "./components/boxes/BoxWizard"
import { CrateWizard } from "./components/crates/CrateWizard"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GetRates() {
  const wizardRef = useRef<HTMLDivElement | null>(null)

  const [activeWizard, setActiveWizard] = useState<"wizardOne" | "wizardTwo" | "wizardThree" | null>(null)

  const handleBack = () => {
    setActiveWizard(null)
  }

  useEffect(() => {
    if (wizardRef.current) wizardRef.current.scrollIntoView({ behavior: "smooth" })
  }, [activeWizard])

  const renderWizard = () => {
    switch (activeWizard) {
      case "wizardOne":
        return <PalletWizard onBack={handleBack} />
      case "wizardTwo":
        return <BoxWizard onBack={handleBack} />
      case "wizardThree":
        return <CrateWizard onBack={handleBack} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
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
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-white tracking-wide">ROYAL WOOD PACKERS</span>
                <p className="text-sm text-blue-400 font-semibold tracking-wider">Quality Wood Pallet Makers</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
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
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 animate-bounce-in">
              <Link href="/request-rate">Get Quote</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-16">
        {!activeWizard && (
          <div className="mb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Button variant="ghost" asChild className="mb-6 text-blue-400 hover:text-blue-300">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
              <h1 className="text-5xl font-bold text-white mb-4">Price Calculator</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get instant price estimates for your wooden packaging needs. Select a product type below to start
                calculating.
              </p>
            </div>
          </div>
        )}

        <div ref={wizardRef} className="min-h-[60vh] flex justify-center px-4">
          {!activeWizard && <CustomOptions onSelect={setActiveWizard} />}
          {renderWizard()}
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
              <p>&copy; 2025 Royal Wood Packers - India's Leading Wooden Pallet Manufacturer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
