import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone } from 'lucide-react'
import { parrotFlying } from '../assets/images'

interface PolicyLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-inter">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-150 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="w-px h-5 bg-white/10" />
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={parrotFlying}
              alt="Parrotix"
              className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-lg font-fredoka font-bold text-white">Parrotix</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl sm:text-4xl font-fredoka font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>
        <div className="prose-policy">{children}</div>
      </main>

      {/* Office & contact footer */}
      <footer className="border-t border-white/5 mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 sm:gap-16">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold mb-0.5">Office Address</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                D-311 Orange Street<br />
                Garden West, Karachi
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold mb-0.5">Contact</p>
              <a
                href="tel:+923263409626"
                className="text-gray-400 text-sm hover:text-white transition-colors duration-150"
              >
                +92 326 340 9626
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Parrotix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
