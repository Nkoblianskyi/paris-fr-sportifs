import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Site Name */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 hover-scale transition-transform duration-300">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-float">
                  {/* Custom football/soccer ball icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 text-white"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M4.93 4.93l4.24 4.24" />
                    <path d="M14.83 14.83l4.24 4.24" />
                    <path d="M14.83 9.17l4.24-4.24" />
                    <path d="M14.83 9.17l3.53-3.53" />
                    <path d="M4.93 19.07l4.24-4.24" />
                  </svg>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-blue-400 opacity-30 rounded-full blur-md animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-blue-900 gradient-text">PariFrSportifs</h1>
                <p className="text-sm text-gray-600">Meilleurs Sites de Paris</p>
              </div>
            </Link>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3">
            {/* 18+ Badge */}
            <Badge
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 hover-scale transition-all duration-300"
            >
              18+
            </Badge>

            {/* GambleAware Badge */}
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-14 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors hover-scale"
              aria-label="GambleAware"
            >
              <Image src={"/gamble.webp"} alt="GambleAware Logo" width={64} height={64} />
            </Link>

            {/* GamCare Badge */}
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-14 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors hover-scale"
              aria-label="GamCare"
            >
              <Image src="/gamecare.svg" alt="GamCare Logo" width={64} height={64} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
