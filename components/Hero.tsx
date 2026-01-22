export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD51aBmN1dpqFiFG1KpWABDkMZJuMHwGZoIKF9qK4caxPK3oM5xUD8wNhdhrkPhWDPfA40XXuyTOCYuYYhLO1UkmFpKnbIMRZqegatSe697nb07BdSf8JOCblrq9tGO3mCGa7Zwofmm5EcUJcZzN65rPet4XLkuwjIlU7MMns6S-9KOQqHrog9rK-VRvIqZLp89G8hpB6mq4G8XXZ3Voml8Q942pmJf1N3YLlkUe4llG91wxBho9k-CiZX_HEf16dvteZJO7dLkhZc")`
        }}
      />
      <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-20 text-center md:text-left">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 bg-primary/20 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest rounded mb-6">
            Landscape Architecture
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Curating Nature&apos;s Finest Canvas.
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 leading-relaxed">
            Bespoke outdoor environments designed for the modern estate, blending architectural precision with organic serenity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-primary text-[#0d1b10] px-8 py-4 rounded-lg text-base font-bold transition-all hover:scale-105">
              View Our Work
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/20 transition-all">
              Our Philosophy
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
