import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalwoodpackers.in"),
  title: {
    default: "Royal Wood Packers - Premium Wooden Pallets Manufacturer in India | ISPM-15 Certified",
    template: "%s | Royal Wood Packers - Leading Wooden Pallet Manufacturer India",
  },
  description:
    "Royal Wood Packers - India's leading wooden pallet manufacturer since 2000. Premium quality wooden pallets, boxes, crates & packaging solutions. ISPM-15 certified, nationwide delivery. Get instant quotes for export pallets, industrial packaging & custom wooden solutions.",
  keywords: [
    "wooden pallets manufacturer India",
    "ISPM-15 certified pallets",
    "export pallets India",
    "wooden packaging solutions",
    "pallet manufacturer Kerala",
    "industrial wooden pallets",
    "custom wooden pallets",
    "wooden boxes manufacturer",
    "wooden crates India",
    "plywood pallets",
    "pallet rental services",
    "heat treated pallets",
    "wooden pallet supplier",
    "packaging solutions India",
    "logistics pallets",
    "warehouse pallets",
    "shipping pallets",
    "wooden pallet price",
    "pallet manufacturing company",
    "sustainable packaging solutions",
  ],
  authors: [{ name: "Royal Wood Packers" }],
  creator: "Royal Wood Packers",
  publisher: "Royal Wood Packers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://royalwoodpackers.in",
    siteName: "Royal Wood Packers",
    title: "Royal Wood Packers - Premium Wooden Pallets Manufacturer in India",
    description:
      "India's leading wooden pallet manufacturer since 2000. Premium quality wooden pallets, boxes, crates & packaging solutions. ISPM-15 certified, nationwide delivery.",
    images: [
      {
        url: "/rwp.svg",
        width: 1200,
        height: 630,
        alt: "Royal Wood Packers - Premium Wooden Pallets Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Wood Packers - Premium Wooden Pallets Manufacturer in India",
    description:
      "India's leading wooden pallet manufacturer since 2000. Premium quality wooden pallets, boxes, crates & packaging solutions. ISPM-15 certified, nationwide delivery.",
    images: ["/rwp.svg"],
    creator: "@royalwoodpackers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://royalwoodpackers.in",
  },
  category: "Manufacturing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="canonical" href="https://royalwoodpackers.in" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Perumbavoor, Kerala, India" />
        <meta name="geo.position" content="10.1102;76.4734" />
        <meta name="ICBM" content="10.1102, 76.4734" />
        <meta name="business:contact_data:locality" content="Perumbavoor" />
        <meta name="business:contact_data:region" content="Kerala" />
        <meta name="business:contact_data:postal_code" content="683547" />
        <meta name="business:contact_data:country_name" content="India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Royal Wood Packers",
              alternateName: "Royal Wood Packers India",
              url: "https://royalwoodpackers.in",
              logo: "https://royalwoodpackers.in/logo.svg",
              description:
                "India's leading wooden pallet manufacturer since 2000. Premium quality wooden pallets, boxes, crates & packaging solutions.",
              foundingDate: "2000",
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
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Malayalam"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9495785815",
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Malayalam"],
                },
              ],
              email: "info@royalwoodpackers.in",
              sameAs: [
                "https://www.facebook.com/royalwoodpackers",
                "https://www.linkedin.com/company/royalwoodpackers",
                "https://www.instagram.com/royalwoodpackers",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wooden Packaging Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wooden Pallets",
                      description: "Premium quality wooden pallets for industrial and export use",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wooden Boxes",
                      description: "Custom wooden boxes for storage and shipping",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wooden Crates",
                      description: "Heavy-duty wooden crates for industrial applications",
                    },
                  },
                ],
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 10.1102,
                  longitude: 76.4734,
                },
                geoRadius: "2000000",
              },
            }),
          }}
        />
      </head>
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-black text-white `}>{children}</body>
    </html>
  )
}
