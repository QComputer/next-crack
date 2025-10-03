import Link from 'next/link'
import '@/app/globals.css'
export default function Navbar() {
  return (
      <nav className="navbar sticky top-0 z-50 backdrop-blur-md bg-neutral-900/70 border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-display hover:text-emerald-400 transition-colors">
              Crack Coffee
            </Link>

            <div className="flex-row items-center gap-60">
              <Link href="#about" className="text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link href="#products" className="text-sm hover:text-white transition-colors">
                Products
              </Link>
              <Link href="#courses" className="text-sm hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="#blog" className="text-sm hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}
