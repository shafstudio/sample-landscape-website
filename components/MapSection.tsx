import Image from 'next/image';

export default function MapSection() {
  return (
    <section className="w-full h-[450px] mt-10 relative overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 opacity-40 grayscale contrast-125">
        <Image
          alt="Map texture"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Czh24cNPkNJDW8GkQUN0vtvciCa2NmKnCxcZ9ICBUFUtPsNa6AIBEYeJ1w0QZuTv02Wm4nzw6qv5zQb3RmztiuFyDN08olW2W0s7sy5lYF116PC3F0Aj00282z_FWvWpCtDTCGG-WHPoC8fchcPPUT1-uXdJp7hwuNsymuv5XXEOjfUdhgJ_OfVwZSUXMk-jE3DwOU9mDzA9eeY4gsYFn0INHyXwxg6i98gBxba4ZdvSq2uu9iN11W5lAD8B_f30dXNuAxP4YdE"
          width={1920}
          height={450}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary/30 animate-ping rounded-full"></div>
          <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-[#0d1b10] z-10"></div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 bg-background-dark/90 backdrop-blur-md p-6 border border-white/10 rounded-lg max-w-xs hidden md:block">
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Our Studio</p>
        <p className="text-white/70 text-sm leading-relaxed">
          Located in the heart of the design district, welcoming visits by private appointment.
        </p>
      </div>
    </section>
  );
}
