import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PackageX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg">
          <PackageX className="h-24 w-24 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-300 mb-8">
            Sorry, we couldn't find the product or page you were looking for. It might have been removed or doesn't
            exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">Return Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
