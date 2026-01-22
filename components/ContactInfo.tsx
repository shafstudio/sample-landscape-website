export default function ContactInfo() {
  return (
    <div className="space-y-16">
      <div className="space-y-12">
        <div className="group">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0d1b10]/40 dark:text-white/40 mb-4 group-hover:text-primary transition-colors">
            Studio Address
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            1200 Architecture Plaza, Suite 400<br />
            San Francisco, CA 94103
          </p>
        </div>

        <div className="group">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0d1b10]/40 dark:text-white/40 mb-4 group-hover:text-primary transition-colors">
            Direct Lines
          </h3>
          <div className="space-y-2 text-xl md:text-2xl font-light">
            <p>+1 (415) 555-8290</p>
            <p>inquiry@scape.com</p>
          </div>
        </div>

        <div className="group">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0d1b10]/40 dark:text-white/40 mb-4 group-hover:text-primary transition-colors">
            Business Hours
          </h3>
          <div className="space-y-2 text-base md:text-lg opacity-80">
            <div className="flex justify-between max-w-xs">
              <span>Mon — Fri</span>
              <span>09:00 — 18:00</span>
            </div>
            <div className="flex justify-between max-w-xs">
              <span>Sat</span>
              <span>By Appointment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <a
          className="w-12 h-12 flex items-center justify-center border border-[#0d1b10]/10 dark:border-white/10 rounded-full hover:bg-primary hover:border-primary hover:text-[#0d1b10] transition-all"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">public</span>
        </a>
        <a
          className="w-12 h-12 flex items-center justify-center border border-[#0d1b10]/10 dark:border-white/10 rounded-full hover:bg-primary hover:border-primary hover:text-[#0d1b10] transition-all"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">photo_camera</span>
        </a>
      </div>
    </div>
  );
}
