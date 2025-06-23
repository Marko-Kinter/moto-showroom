import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white">MKM</div>
              <div className="ml-2 text-xl font-light text-gray-300">Garage</div>
            </div>
            <p className="text-gray-400 max-w-md">
              Your premier destination for adventure motorcycles. We fuel the spirit of exploration and the call of the
              wild road.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Adventure Awaits</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/motorcycles/adventure" className="text-gray-400 hover:text-white transition-colors">
                  Adventure Touring
                </Link>
              </li>
              <li>
                <Link href="/motorcycles/dual-sport" className="text-gray-400 hover:text-white transition-colors">
                  Dual Sport
                </Link>
              </li>
              <li>
                <Link href="/motorcycles/enduro" className="text-gray-400 hover:text-white transition-colors">
                  Enduro
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MKM Garage®. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
