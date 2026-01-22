import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e7f3e9] dark:border-[#1a3a1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-primary size-6">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <h2 className="text-[#0d1b10] dark:text-white text-xl font-extrabold tracking-tighter uppercase">
            Scape
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/services" className="text-sm font-semibold hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-semibold hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-[#0d1b10] px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
          Book a Consultation
        </button>
      </div>
    </div>
  );
}
