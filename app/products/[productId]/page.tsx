import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Truck, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

// Product database
const productsData = {
  "rubber-wood-pallets": {
    name: "Rubber Wood Pallets",
    dimensions: "1200 x 800 x 144mm",
    weight: "28kg",
    capacity: "1800kg",
    price: "From ₹1,450",
    image: "/fourway.png",
    gallery: ["/fourway.png", "/palletImg1.png", "/palletImg4.png"],
    features: ["Dense grain strength", "Heavy load capacity", "Warp resistant", "Crack resistant"],
    description:
      "Rubberwood pallets offer good strength and durability due to their dense grain, providing a stable and sturdy option for handling heavy loads while being resistant to warping and cracking under pressure.",
    longDescription:
      "Our Rubber Wood Pallets are crafted from high-quality rubberwood, known for its exceptional strength and durability. The dense grain structure of rubberwood makes these pallets particularly suitable for handling heavy loads in various industrial applications. Unlike other wood types, rubberwood pallets resist warping and cracking even under significant pressure, ensuring a longer service life and better protection for your goods.\n\nThese pallets are ideal for export shipments, warehouse storage, and transportation of heavy machinery or products. Each pallet undergoes rigorous quality control to ensure consistent performance and reliability. The natural properties of rubberwood also provide good resistance to moisture and pests, making these pallets suitable for various environmental conditions.",
    specifications: [
      { name: "Material", value: "Premium Rubberwood" },
      { name: "Dimensions", value: "1200 x 800 x 144mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "28kg" },
      { name: "Load Capacity (Static)", value: "1800kg" },
      { name: "Load Capacity (Dynamic)", value: "1200kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Treatment", value: "Heat treated, ISPM-15 compliant" },
      { name: "Moisture Content", value: "<12%" },
      { name: "Finish", value: "Sanded smooth edges" },
    ],
    popular: true,
    relatedProducts: ["country-wood-pallets", "painted-wood-pallets", "pine-wood-pallets"],
  },
  "country-wood-pallets": {
    name: "Country Wood Pallets",
    dimensions: "1200 x 1000 x 150mm",
    weight: "32kg",
    capacity: "2200kg",
    price: "From ₹1,650",
    image: "/HardWood.png",
    gallery: ["/HardWood.png", "/palletImg1.png", "/fourway.png"],
    features: ["Superior strength", "Moisture resistant", "Sustainable option", "Heavy-duty design"],
    description:
      "Pallets made from country woods are strong, durable, resistant to wear and moisture, and offer a sustainable option for heavy-duty applications.",
    longDescription:
      "Country Wood Pallets represent our premium line of wooden pallets, crafted from locally sourced hardwoods known for their exceptional strength and durability. These pallets are specifically designed for heavy-duty industrial applications where maximum load-bearing capacity and longevity are essential.\n\nThe natural density and grain structure of country wood makes these pallets highly resistant to wear, moisture, and impact damage. Each pallet is carefully constructed with precision joinery and high-quality fasteners to ensure structural integrity even under the most demanding conditions. The sustainable sourcing of our country wood also makes these pallets an environmentally responsible choice for businesses concerned about their ecological footprint.",
    specifications: [
      { name: "Material", value: "Local hardwood varieties" },
      { name: "Dimensions", value: "1200 x 1000 x 150mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "32kg" },
      { name: "Load Capacity (Static)", value: "2200kg" },
      { name: "Load Capacity (Dynamic)", value: "1500kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Treatment", value: "Heat treated, ISPM-15 compliant" },
      { name: "Moisture Content", value: "<15%" },
      { name: "Finish", value: "Industrial grade" },
    ],
    relatedProducts: ["rubber-wood-pallets", "pine-wood-pallets", "plywood-pallets"],
  },
  "plywood-pallets": {
    name: "Plywood Pallets",
    dimensions: "1200 x 800 x 120mm",
    weight: "18kg",
    capacity: "1000kg",
    price: "From ₹900",
    image: "/palletImg4.png",
    gallery: ["/palletImg4.png", "/HardWood.png", "/painted.png"],
    features: ["Lightweight design", "Cost-effective", "Warp resistant", "Indoor storage ideal"],
    description:
      "Plywood pallets are lightweight, durable, cost-effective, and resistant to warping, making them ideal for lighter loads and indoor storage.",
    longDescription:
      "Our Plywood Pallets offer an excellent balance of strength, weight, and cost-effectiveness. Manufactured using high-quality plywood sheets and precision engineering, these pallets are significantly lighter than solid wood alternatives while still providing reliable performance for a wide range of applications.\n\nThe layered construction of plywood gives these pallets exceptional resistance to warping and splitting, ensuring consistent performance throughout their service life. Their lightweight design makes them particularly suitable for air freight, reducing shipping costs while maintaining adequate load-bearing capacity. Plywood pallets are ideal for indoor storage, one-way shipping, and applications where weight reduction is a priority.",
    specifications: [
      { name: "Material", value: "Industrial grade plywood" },
      { name: "Dimensions", value: "1200 x 800 x 120mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "18kg" },
      { name: "Load Capacity (Static)", value: "1000kg" },
      { name: "Load Capacity (Dynamic)", value: "800kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Treatment", value: "Available on request" },
      { name: "Moisture Content", value: "<10%" },
      { name: "Finish", value: "Smooth surface" },
    ],
    relatedProducts: ["wooden-boxes", "pine-wood-pallets", "rubber-wood-pallets"],
  },
  "painted-wood-pallets": {
    name: "Painted Wood Pallets",
    dimensions: "1200 x 800 x 144mm",
    weight: "26kg",
    capacity: "1500kg",
    price: "From ₹1,350",
    image: "/painted.png",
    gallery: ["/painted.png", "/fourway.png", "/palletImg1.png"],
    features: ["Moisture protection", "Pest resistant", "Weather resistant", "Polished finish"],
    description:
      "Painted pallets offer enhanced protection against moisture, pests, and weathering while providing a more polished and visually appealing finish.",
    longDescription:
      "Painted Wood Pallets combine functionality with enhanced protection and visual appeal. These pallets are constructed from quality wood and then treated with specialized industrial paint that creates a protective barrier against environmental factors.\n\nThe paint coating significantly improves resistance to moisture, pests, and UV damage, extending the service life of the pallets, especially in outdoor or humid environments. The smooth, sealed surface also makes these pallets easier to clean and sanitize, making them suitable for industries with strict hygiene requirements. Available in various colors for easy identification and brand matching, our painted pallets offer both practical benefits and aesthetic value.",
    specifications: [
      { name: "Material", value: "Treated softwood/hardwood" },
      { name: "Dimensions", value: "1200 x 800 x 144mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "26kg" },
      { name: "Load Capacity (Static)", value: "1500kg" },
      { name: "Load Capacity (Dynamic)", value: "1000kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Paint Type", value: "Industrial water-resistant" },
      { name: "Colors Available", value: "Blue, Red, Green, Custom" },
      { name: "Additional Protection", value: "Moisture and pest resistant" },
    ],
    relatedProducts: ["rubber-wood-pallets", "plastic-pallets", "country-wood-pallets"],
  },
  "pine-wood-pallets": {
    name: "Pine Wood Pallets",
    dimensions: "1200 x 800 x 144mm",
    weight: "22kg",
    capacity: "1200kg",
    price: "From ₹1,100",
    image: "/palletImg1.png",
    gallery: ["/palletImg1.png", "/fourway.png", "/HardWood.png"],
    features: ["Lightweight construction", "No staining risk", "Safe transportation", "Cost-effective"],
    description:
      "Our pinewood pallets offer lightweight construction, no risk of staining due to the absence of juices or glues, and excel in safe, efficient, and cost-effective transportation.",
    longDescription:
      "Pine Wood Pallets represent an excellent balance of performance and economy. Made from sustainably sourced pine, these pallets are lighter than hardwood alternatives while still offering reliable strength for most standard applications.\n\nThe natural properties of pine make these pallets particularly suitable for food and pharmaceutical industries, as they don't contain resins or juices that might stain or contaminate products. The lighter weight of pine also reduces shipping costs and makes handling easier for workers. Our pine pallets undergo careful kiln drying to ensure consistent moisture content and dimensional stability, providing dependable performance across various supply chain environments.",
    specifications: [
      { name: "Material", value: "Kiln-dried pine" },
      { name: "Dimensions", value: "1200 x 800 x 144mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "22kg" },
      { name: "Load Capacity (Static)", value: "1200kg" },
      { name: "Load Capacity (Dynamic)", value: "900kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Treatment", value: "Heat treated, ISPM-15 compliant" },
      { name: "Moisture Content", value: "<18%" },
      { name: "Finish", value: "Clean cut" },
    ],
    relatedProducts: ["plywood-pallets", "rubber-wood-pallets", "wooden-boxes"],
  },
  "plastic-pallets": {
    name: "Plastic Pallets",
    dimensions: "1200 x 800 x 150mm",
    weight: "15kg",
    capacity: "1500kg",
    price: "From ₹2,200",
    image: "/pp.png",
    gallery: ["/pp.png", "/painted.png", "/fourway.png"],
    features: ["Unmatched durability", "Moisture resistant", "Reusable design", "Hassle-free transport"],
    description:
      "Plastic pallets offer unmatched durability, are moisture-resistant, and ensure safe, reusable, and hassle-free transportation for all your goods.",
    longDescription:
      "Our Plastic Pallets represent the ultimate solution for modern logistics challenges. Manufactured from high-density polyethylene (HDPE) or polypropylene, these pallets combine exceptional durability with significant practical advantages over traditional wooden alternatives.\n\nCompletely resistant to water, chemicals, acids, and alkalis, plastic pallets are ideal for environments where hygiene and contamination control are critical. Their consistent dimensions and weight make them perfect for automated handling systems, while their smooth surfaces prevent product damage and reduce handling injuries. With a lifespan several times longer than wooden pallets and 100% recyclability at end-of-life, our plastic pallets offer both operational excellence and environmental responsibility.",
    specifications: [
      { name: "Material", value: "High-density polyethylene (HDPE)" },
      { name: "Dimensions", value: "1200 x 800 x 150mm (Standard)" },
      { name: "Custom Sizes", value: "Available on request" },
      { name: "Weight", value: "15kg" },
      { name: "Load Capacity (Static)", value: "1500kg" },
      { name: "Load Capacity (Dynamic)", value: "1200kg" },
      { name: "Entry Type", value: "4-way entry" },
      { name: "Temperature Range", value: "-30°C to +50°C" },
      { name: "Colors Available", value: "Black, Blue, Gray, Custom" },
      { name: "Washable", value: "Yes, high-pressure washable" },
    ],
    relatedProducts: ["painted-wood-pallets", "rubber-wood-pallets", "rented-pallets"],
  },
  "wooden-boxes": {
    name: "Wooden Boxes",
    dimensions: "Custom dimensions",
    weight: "Variable",
    capacity: "Up to 800kg",
    price: "From ₹1,800",
    image: "/box.png",
    gallery: ["/box.png", "/crate.png", "/palletImg4.png"],
    features: ["High-quality construction", "Strength & durability", "Secure packaging", "Industrial grade"],
    description:
      "We produce high-quality wooden and plywood boxes, crafted for strength and durability. Perfect for storage, shipping, and industrial use, our boxes ensure secure and reliable packaging solutions.",
    longDescription:
      "Our Wooden Boxes provide superior protection for valuable, fragile, or sensitive items during storage and transportation. Each box is meticulously constructed using premium wood materials and expert craftsmanship to ensure maximum strength and durability.\n\nDesigned with practical functionality in mind, our wooden boxes feature reinforced corners, secure closures, and optional interior fittings to prevent movement and damage. Available in both standard and custom dimensions, these boxes can be tailored to accommodate specific items or space requirements. The natural properties of wood provide excellent shock absorption and vibration dampening, making these boxes ideal for electronic equipment, machinery parts, and other sensitive items.",
    specifications: [
      { name: "Material", value: "Hardwood or plywood options" },
      { name: "Dimensions", value: "Custom to requirements" },
      { name: "Wall Thickness", value: "12-25mm depending on application" },
      { name: "Weight", value: "Varies by size and material" },
      { name: "Load Capacity", value: "Up to 800kg" },
      { name: "Closure Type", value: "Screwed, hinged, or removable lid" },
      { name: "Treatment", value: "Heat treated, ISPM-15 compliant" },
      { name: "Interior Options", value: "Foam lining, dividers, cushioning" },
      { name: "Handling", value: "Optional handles or forklift access" },
      { name: "Finish", value: "Sanded or painted options" },
    ],
    relatedProducts: ["wooden-crates", "plywood-pallets", "plywood"],
  },
  "wooden-crates": {
    name: "Wooden Crates",
    dimensions: "Custom dimensions",
    weight: "Variable",
    capacity: "Up to 1500kg",
    price: "From ₹2,800",
    image: "/crate.png",
    gallery: ["/crate.png", "/box.png", "/HardWood.png"],
    features: ["Heavy-duty design", "Superior durability", "Secure solutions", "Industrial strength"],
    description:
      "We manufacture high-quality wooden crates designed for durability and reliability. Ideal for storage, shipping, and industrial use, our crates provide strong and secure solutions for all your packaging needs.",
    longDescription:
      "Our Wooden Crates represent the ultimate heavy-duty packaging solution for industrial applications. Engineered for maximum strength and protection, these crates are constructed using robust timber frames with strategic reinforcement to handle substantial loads and withstand the rigors of transportation and handling.\n\nThe open-slat design of our crates provides excellent ventilation while maintaining structural integrity, making them ideal for items that require air circulation. Each crate is built to precise specifications, ensuring a perfect fit for your products and optimizing space utilization during shipping and storage. With options for custom dimensions, load capacities, and special features like skids or stacking capabilities, our wooden crates can be tailored to meet the most demanding industrial packaging requirements.",
    specifications: [
      { name: "Material", value: "Industrial grade hardwood" },
      { name: "Dimensions", value: "Custom to requirements" },
      { name: "Frame Thickness", value: "25-50mm depending on load" },
      { name: "Weight", value: "Varies by size and construction" },
      { name: "Load Capacity", value: "Up to 1500kg" },
      { name: "Design", value: "Open slat or solid panel options" },
      { name: "Treatment", value: "Heat treated, ISPM-15 compliant" },
      { name: "Base Design", value: "Skid or pallet base options" },
      { name: "Stacking", value: "Stackable design available" },
      { name: "Assembly", value: "Assembled or knock-down options" },
    ],
    relatedProducts: ["wooden-boxes", "country-wood-pallets", "wooden-planks"],
  },
  "wooden-planks": {
    name: "Wooden Planks",
    dimensions: "Various sizes available",
    weight: "Per piece",
    capacity: "Manufacturing grade",
    price: "From ₹45/piece",
    image: "/planks.webp",
    gallery: ["/planks.webp", "/Plywood.png", "/veneer.jpg"],
    features: ["High-quality wood", "Manufacturing ready", "Superior strength", "Industrial grade"],
    description:
      "We supplies high-quality wooden planks, perfect for manufacturing pallets, boxes, and similar products. Durable and reliable, our planks ensure superior strength and performance for industrial and packaging needs.",
    longDescription:
      "Our Wooden Planks provide the essential building blocks for a wide range of wooden packaging and construction applications. Sourced from quality timber and processed to precise dimensions, these planks offer consistent quality and performance for manufacturers and builders.\n\nAvailable in various wood types, dimensions, and grades, our planks can be customized to meet specific project requirements. Each piece undergoes careful selection and quality control to ensure freedom from defects that might compromise structural integrity. Whether you're manufacturing pallets, constructing crates, or building custom wooden packaging, our planks deliver the reliability and workability needed for efficient production and durable results.",
    specifications: [
      { name: "Material", value: "Pine, hardwood, or mixed options" },
      { name: "Standard Lengths", value: "1200mm, 1800mm, 2400mm" },
      { name: "Standard Widths", value: "75mm, 100mm, 150mm" },
      { name: "Standard Thickness", value: "19mm, 25mm, 38mm" },
      { name: "Custom Dimensions", value: "Available on request" },
      { name: "Moisture Content", value: "<18%" },
      { name: "Grade", value: "Industrial/Manufacturing" },
      { name: "Treatment Options", value: "Untreated or heat treated" },
      { name: "Surface Finish", value: "Rough sawn or planed" },
      { name: "Minimum Order", value: "Bundle quantities" },
    ],
    relatedProducts: ["plywood", "wooden-crates", "wooden-boxes"],
  },
  plywood: {
    name: "Plywood",
    dimensions: "8x4 feet sheets",
    weight: "Per sheet",
    capacity: "Commercial grade",
    price: "From ₹85/sq.ft",
    image: "/Plywood.png",
    gallery: ["/Plywood.png", "/veneer.jpg", "/planks.webp"],
    features: ["Premium quality", "Commercial grade", "Exceptional performance", "Versatile use"],
    description:
      "We offers premium-quality plywood, crafted for strength and durability. Suitable for both commercial and hardwood applications, our plywood delivers exceptional performance for all your construction and furnishing needs.",
    longDescription:
      "Our Premium Plywood sheets represent the highest standards of quality and performance in engineered wood products. Manufactured through the careful layering of wood veneers with alternating grain directions, our plywood offers exceptional strength, stability, and versatility for countless applications.\n\nAvailable in various grades, thicknesses, and wood types, our plywood can be tailored to specific project requirements. The cross-laminated construction provides superior resistance to warping, splitting, and shrinkage compared to solid wood, while maintaining excellent load-bearing capacity and screw-holding strength. Whether for packaging solutions, furniture manufacturing, or construction applications, our plywood delivers consistent quality and reliable performance.",
    specifications: [
      { name: "Material", value: "Hardwood or commercial options" },
      { name: "Standard Dimensions", value: "8' x 4' (2440mm x 1220mm)" },
      { name: "Thickness Options", value: "3mm, 6mm, 9mm, 12mm, 18mm, 25mm" },
      {
        name: "Grades Available",
        value: "MR (Moisture Resistant), BWR (Boiling Water Resistant), BWP (Boiling Water Proof)",
      },
      { name: "Core Material", value: "Hardwood or softwood options" },
      { name: "Face Veneer", value: "Various wood species available" },
      { name: "Glue Type", value: "Depending on grade (Urea, Phenol, Melamine)" },
      { name: "Density", value: "550-700 kg/m³" },
      { name: "Edge Treatment", value: "Square or tongue and groove" },
      { name: "Certification", value: "ISI marked options available" },
    ],
    relatedProducts: ["veneer-sheets", "plywood-pallets", "wooden-boxes"],
  },
  "veneer-sheets": {
    name: "Veneer Sheets",
    dimensions: "8x4 feet sheets",
    weight: "Per sheet",
    capacity: "Precision grade",
    price: "From ₹120/sq.ft",
    image: "/veneer.jpg",
    gallery: ["/veneer.jpg", "/Plywood.png", "/planks.webp"],
    features: ["High-quality finish", "Precision crafted", "Superior performance", "Plywood ready"],
    description:
      "Our high-quality veneer sheets, perfect for both commercial and hardwood plywood. Our precision-crafted veneers ensure durability and superior performance for all your plywood needs.",
    longDescription:
      "Our Veneer Sheets represent the pinnacle of wood surface aesthetics and quality. These thin slices of premium wood are carefully processed to highlight the natural beauty of the grain while providing a practical surface material for various applications.\n\nAvailable in a wide range of wood species, each with its distinctive color, grain pattern, and character, our veneers allow for the creation of visually stunning surfaces without the cost and environmental impact of solid wood. The precision cutting and processing of our veneers ensure consistent thickness and quality, making them ideal for furniture manufacturing, interior design, and decorative packaging applications. Whether you're looking for the rich tones of walnut, the classic elegance of oak, or the unique character of exotic species, our veneer collection offers options to suit every aesthetic preference and project requirement.",
    specifications: [
      { name: "Material", value: "Various wood species available" },
      { name: "Standard Dimensions", value: "8' x 4' (2440mm x 1220mm)" },
      { name: "Thickness", value: "0.3mm - 0.6mm" },
      { name: "Cutting Methods", value: "Rotary cut, quarter cut, rift cut" },
      { name: "Backing Options", value: "Paper-backed or unbacked" },
      { name: "Popular Species", value: "Teak, Oak, Walnut, Maple, Cherry" },
      { name: "Grade", value: "Premium, Standard, Commercial" },
      { name: "Jointing", value: "Book-matched, slip-matched options" },
      { name: "Finish", value: "Sanded ready for application" },
      { name: "Applications", value: "Furniture, cabinetry, decorative panels" },
    ],
    relatedProducts: ["plywood", "wooden-planks", "plywood-pallets"],
  },
  "rented-pallets": {
    name: "Rented Pallets",
    dimensions: "Standard sizes",
    weight: "Managed service",
    capacity: "Various options",
    price: "From ₹25/month",
    image: "/rented.jpg",
    gallery: ["/rented.jpg", "/fourway.png", "/pp.png"],
    features: ["Cost reduction", "Environmental impact", "Management included", "Repair service"],
    description:
      "Our rental helps reduce your costs and environmental impact. We handle the management, tracking, and repair of pallets, so you can focus on what matters most: your business.",
    longDescription:
      "Our Pallet Rental Service offers a comprehensive solution for businesses looking to optimize their logistics operations while reducing costs and environmental impact. This service transforms pallet management from a capital expense to a flexible operational cost, providing significant advantages for companies of all sizes.\n\nWith our rental program, you gain access to high-quality pallets without the upfront investment of purchasing. Our team handles all aspects of pallet management, including delivery, collection, tracking, cleaning, and repairs, allowing you to focus on your core business activities. The service includes regular inspections and maintenance to ensure consistent quality and performance, eliminating the costs associated with pallet damage and replacement. By participating in our circular economy model, your business also contributes to significant environmental benefits through reduced wood consumption and waste.",
    specifications: [
      { name: "Pallet Types", value: "Wooden, plastic, or mixed fleet options" },
      { name: "Standard Sizes", value: "Euro (1200x800mm), Industrial (1200x1000mm), and others" },
      { name: "Rental Period", value: "Flexible terms from weekly to annual" },
      { name: "Minimum Quantity", value: "Starting from 50 units" },
      { name: "Delivery", value: "Scheduled or on-demand options" },
      { name: "Collection", value: "Regular or as-needed scheduling" },
      { name: "Tracking", value: "Optional digital tracking system" },
      { name: "Maintenance", value: "Regular inspection and repair included" },
      { name: "Reporting", value: "Monthly usage and inventory reports" },
      { name: "Billing", value: "Based on actual usage or fixed contract" },
    ],
    relatedProducts: ["rubber-wood-pallets", "plastic-pallets", "country-wood-pallets"],
  },
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params
  const product = productsData[productId as keyof typeof productsData]

  if (!product) {
    notFound()
  }

  const relatedProductsData = product.relatedProducts
    ? product.relatedProducts.map((id) => productsData[id as keyof typeof productsData])
    : []

  return (
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
                <p className="text-sm text-blue-400 font-semibold tracking-wider">Quality Wood Pallet Makers</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 animate-slide-in-right">
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">
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
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="text-blue-400 hover:text-blue-300">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          {/* Product Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-gray-700">
                {product.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover animate-fade-in-up"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery?.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in-right">
              <h1 className="text-4xl font-bold text-white">{product.name}</h1>
              <div className="text-3xl font-bold text-blue-400">{product.price}</div>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg">{product.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm pt-4">
                  <div>
                    <span className="font-medium text-gray-300">Dimensions:</span>
                    <p className="text-gray-400">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Weight:</span>
                    <p className="text-gray-400">{product.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium text-gray-300">Capacity:</span>
                    <p className="text-gray-400">{product.capacity}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-medium text-white mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 group transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/request-rate">Request Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/get-rates">Calculate Price</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-white mb-4">Product Description</h2>
                <div className="text-gray-300 space-y-4">
                  {product.longDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
                <div className="divide-y divide-gray-700">
                  {product.specifications?.map((spec, idx) => (
                    <div key={idx} className="py-3 grid grid-cols-2">
                      <div className="font-medium text-gray-300">{spec.name}</div>
                      <div className="text-gray-400">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-fade-in-right">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Shield, text: "Premium Quality Materials" },
                    { icon: CheckCircle, text: "Rigorous Quality Control" },
                    { icon: Truck, text: "Fast Nationwide Delivery" },
                    { icon: Star, text: "24+ Years of Experience" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <item.icon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 animate-fade-in-right">
                <h3 className="text-xl font-bold text-white mb-3">Need Custom Specifications?</h3>
                <p className="text-blue-100 mb-4">We can customize this product to meet your specific requirements.</p>
                <Button asChild variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProductsData.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProductsData.map((relatedProduct, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{relatedProduct.name}</CardTitle>
                      <div className="text-xl font-bold text-blue-400">{relatedProduct.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm line-clamp-2">{relatedProduct.description}</p>
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link
                          href={`/products/${Object.keys(productsData).find((key) => productsData[key as keyof typeof productsData] === relatedProduct) || ""}`}
                        >
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

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
                      <Link href="/" className="hover:text-blue-400 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-blue-400 transition-colors">
                        Wooden Pallet Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-blue-400 transition-colors">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/request-rate" className="hover:text-blue-400 transition-colors">
                        Get Wooden Pallet Quote
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
      </div>
    </div>
  )
}
