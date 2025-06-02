"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Package, Box, Grid3X3 } from "lucide-react"

interface CustomOptionsProps {
  onSelect: (wizard: "wizardOne" | "wizardTwo" | "wizardThree") => void
}

export const CustomOptions: React.FC<CustomOptionsProps> = ({ onSelect }) => {
  const options = [
    {
      id: "wizardOne" as const,
      title: "Wooden Pallets",
      description: "Calculate pricing for custom wooden pallets with various specifications",
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "wizardTwo" as const,
      title: "Wooden Boxes",
      description: "Get estimates for wooden and plywood boxes for storage and shipping",
      icon: Box,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "wizardThree" as const,
      title: "Wooden Crates",
      description: "Calculate costs for heavy-duty wooden crates for industrial use",
      icon: Grid3X3,
      color: "from-blue-700 to-blue-800",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {options.map((option) => (
          <Card
            key={option.id}
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            onClick={() => onSelect(option.id)}
          >
            <CardContent className="p-8 text-center">
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <option.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
              <p className="text-gray-300 leading-relaxed">{option.description}</p>
              <div className="mt-6 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                Click to Calculate →
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
