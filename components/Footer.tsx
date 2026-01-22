import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0d1b10] py-20 px-6 lg:px-20 border-t border-[#e7f3e9] dark:border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary size-5">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tighter uppercase">Scape</h2>
            </div>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              Creating timeless outdoor spaces that define luxury living. Serving discerning clients worldwide.
            </p>
            <div className="flex gap-4">
              <a className="p-2 bg-background-light dark:bg-white/5 rounded-lg hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a className="p-2 bg-background-light dark:bg-white/5 rounded-lg hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a className="p-2 bg-background-light dark:bg-white/5 rounded-lg hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-70">
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Residential Estates
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Commercial Landscapes
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition-colors">
                  Water Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-70">
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h3>
            <p className="text-sm opacity-60 mb-4">Receive monthly design inspiration and landscape tips.</p>
            <div className="relative">
              <input
                className="w-full bg-background-light dark:bg-white/5 border border-transparent focus:border-primary rounded-lg px-4 py-3 text-sm outline-none transition-all"
                placeholder="Your email"
                type="email"
              />
              <button className="absolute right-2 top-1.5 bg-primary text-[#0d1b10] p-1.5 rounded-md">
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e7f3e9] dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 font-semibold uppercase tracking-widest">
          <p>© 2024 Scape. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
