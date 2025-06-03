"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calculator,
  Clock,
  CheckCircle,
  MessageCircle,
  Package,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function RequestRatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    dimensions: "",
    deliveryDate: "",
    deliveryAddress: "",
    specialRequirements: "",
    urgentOrder: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Quote request submitted:", formData);
    alert(
      "Thank you for your wooden pallet quote request! We'll send you a detailed quote within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productType: "",
      quantity: "",
      dimensions: "",
      deliveryDate: "",
      deliveryAddress: "",
      specialRequirements: "",
      urgentOrder: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      urgentOrder: checked,
    }));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Request Wooden Pallet Quote - Royal Wood Packers",
            description:
              "Get instant quotes for wooden pallets, ISPM-15 certified pallets, wooden boxes, and packaging solutions",
            url: "https://royalwoodpackers.in/request-rate",
            mainEntity: {
              "@type": "Service",
              name: "Wooden Pallet Quote Service",
              description:
                "Professional wooden pallet quotation service with 24-hour response time",
              provider: {
                "@type": "Organization",
                name: "Royal Wood Packers",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Request Quote",
                  item: "https://royalwoodpackers.in/request-rate",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
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
                  <span className="text-2xl font-black text-white tracking-wide">
                    ROYAL WOOD PACKERS
                  </span>
                  <p className="text-sm text-blue-400 font-semibold tracking-wider">
                    Get Wooden Pallet Quotes
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

        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Button
                variant="ghost"
                asChild
                className="mb-6 text-blue-400 hover:text-blue-300"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up">
                Request Wooden Pallet Quote - Get Instant Pricing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xlc animate-fade-in-delayed">
                Get a personalized quote for your wooden pallet and packaging
                needs from India's leading manufacturer. Fill out the form below
                and receive a detailed estimate for ISPM-15 certified pallets,
                wooden boxes, crates, and custom packaging solutions within 24
                hours.
              </p>
            </div>

            <div className=" lg:grid-cols-3 gap-12  animate-fade-in-up">
              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800 border-gray-700 shadow-lg ">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      <Calculator className="mr-3 h-6 w-6 text-blue-400" />
                      Wooden Pallet Quote Request Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Contact Information
                        </h3>
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
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-300">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              required
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
                      </div>

                      {/* Product Specifications */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Wooden Packaging Product Specifications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="productType"
                              className="text-gray-300"
                            >
                              Product Type *
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                handleSelectChange("productType", value)
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:border-blue-500">
                                <SelectValue placeholder="Select wooden packaging product" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-700 border-gray-600">
                                <SelectItem value="rubber-wood-pallets">
                                  Rubber Wood Pallets
                                </SelectItem>
                                <SelectItem value="country-wood-pallets">
                                  Country Wood Pallets
                                </SelectItem>
                                <SelectItem value="plywood-pallets">
                                  Plywood Pallets
                                </SelectItem>
                                <SelectItem value="painted-wood-pallets">
                                  Painted Wood Pallets
                                </SelectItem>
                                <SelectItem value="pine-wood-pallets">
                                  Pine Wood Pallets
                                </SelectItem>
                                <SelectItem value="plastic-pallets">
                                  Plastic Pallets
                                </SelectItem>
                                <SelectItem value="wooden-boxes">
                                  Wooden Boxes
                                </SelectItem>
                                <SelectItem value="wooden-crates">
                                  Wooden Crates
                                </SelectItem>
                                <SelectItem value="ispm15-certified">
                                  ISPM-15 Certified Pallets
                                </SelectItem>
                                <SelectItem value="custom-design">
                                  Custom Design Solution
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quantity" className="text-gray-300">
                              Quantity Required *
                            </Label>
                            <Input
                              id="quantity"
                              name="quantity"
                              type="number"
                              value={formData.quantity}
                              onChange={handleChange}
                              required
                              placeholder="Number of units needed"
                              className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label
                              htmlFor="dimensions"
                              className="text-gray-300"
                            >
                              Dimensions (if applicable)
                            </Label>
                            <Input
                              id="dimensions"
                              name="dimensions"
                              value={formData.dimensions}
                              onChange={handleChange}
                              placeholder="e.g., 1200 x 800 x 144mm or custom dimensions"
                              className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Delivery Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Delivery Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="deliveryDate"
                              className="text-gray-300"
                            >
                              Required Delivery Date
                            </Label>
                            <Input
                              id="deliveryDate"
                              name="deliveryDate"
                              type="date"
                              value={formData.deliveryDate}
                              onChange={handleChange}
                              className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="deliveryAddress"
                              className="text-gray-300"
                            >
                              Delivery Address *
                            </Label>
                            <Input
                              id="deliveryAddress"
                              name="deliveryAddress"
                              value={formData.deliveryAddress}
                              onChange={handleChange}
                              required
                              placeholder="Full delivery address with city and state"
                              className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Special Requirements */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="specialRequirements"
                          className="text-gray-300"
                        >
                          Special Requirements or Notes
                        </Label>
                        <Textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleChange}
                          rows={4}
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                          placeholder="Any special requirements like ISPM-15 certification, heat treatment, custom branding, specific wood type, load capacity requirements, or additional information about your wooden packaging needs..."
                        />
                      </div>

                      {/* Urgent Order Checkbox */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="urgentOrder"
                          checked={formData.urgentOrder}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label
                          htmlFor="urgentOrder"
                          className="text-sm text-gray-300"
                        >
                          This is an urgent wooden pallet order (rush delivery
                          may incur additional charges)
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      >
                        Submit Wooden Pallet Quote Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Information */}
              <div className="space-y-6">
                {/* Quote Process */}
                <Card className="bg-gray-800 border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      Our Quote Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Submit Request
                        </h4>
                        <p className="text-sm text-gray-400">
                          Fill out the form with your wooden pallet requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Expert Review & Analysis
                        </h4>
                        <p className="text-sm text-gray-400">
                          Our wooden packaging experts review your
                          specifications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Detailed Quote
                        </h4>
                        <p className="text-sm text-gray-400">
                          Receive comprehensive wooden pallet pricing within 24
                          hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      Why Choose Royal Wood Packers?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-sm text-blue-100">
                        24-hour wooden pallet quote turnaround
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-sm text-blue-100">
                        24+ years wooden packaging experience
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-sm text-blue-100">
                        ISPM-15 certified wooden pallets available
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-sm text-blue-100">
                        Premium quality guaranteed
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span className="text-sm text-blue-100">
                        Nationwide delivery across India
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact for Urgent Orders */}
                <Card className="bg-gray-800 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-5 w-5 text-red-400" />
                      <h3 className="font-semibold text-white">
                        Need Wooden Pallets Faster?
                      </h3>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                      For urgent wooden pallet orders or same-day quotes, call
                      our experts directly.
                    </p>
                    <div className="space-y-2 text-blue-400 font-semibold">
                      <p>
                        <a
                          href="tel:+919947405821"
                          className="hover:text-blue-300"
                        >
                          +91 9947405821
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:+919495785815"
                          className="hover:text-blue-300"
                        >
                          +91 9495785815
                        </a>
                      </p>
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
                  <Image
                    src="/logo.svg"
                    alt="Royal Wood Packers Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
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
                      href="/#about"
                      className="hover:text-blue-400 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Our Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link
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
                      href="/products/rubber-wood-pallets"
                      className="hover:text-blue-400 transition-colors"
                    >
                      ISPM-15 Certified Wooden Pallets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/wooden-boxes"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Custom Wooden Boxes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/wooden-crates"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Industrial Wooden Crates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/plywood-pallets"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Plywood Pallets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/rented-pallets"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Wooden Pallet Recycling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/get-rates"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Custom Pallet Design
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
                  <p>
                    <a
                      href="tel:+919947405821"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Phone: +91 9947405821
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+919495785815"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Phone: +91 9495785815
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@royalwoodpackers.in"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Email: info@royalwoodpackers.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>
                &copy; 2025 Royal Wood Packers - India's Leading Wooden Pallet
                Manufacturer. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
