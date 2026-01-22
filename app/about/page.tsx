import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <header className="relative pt-40 pb-32 overflow-hidden border-b border-[#e7f3e9] dark:border-white/5">
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-10 mix-blend-multiply dark:invert dark:opacity-5"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD51aBmN1dpqFiFG1KpWABDkMZJuMHwGZoIKF9qK4caxPK3oM5xUD8wNhdhrkPhWDPfA40XXuyTOCYuYYhLO1UkmFpKnbIMRZqegatSe697nb07BdSf8JOCblrq9tGO3mCGa7Zwofmm5EcUJcZzN65rPet4XLkuwjIlU7MMns6S-9KOQqHrog9rK-VRvIqZLp89G8hpB6mq4G8XXZ3Voml8Q942pmJf1N3YLlkUe4llG91wxBho9k-CiZX_HEf16dvteZJO7dLkhZc")`,
            filter: 'grayscale(100%) contrast(150%)'
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-8">
              Established 1994
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-12 leading-[1.1] text-stone-900 dark:text-white">
              Our Vision and Studio Story
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <p className="text-lg font-light leading-relaxed text-stone-600 dark:text-stone-300">
                Founded on the principles of <span className="text-stone-900 dark:text-white font-medium">Precision Craft</span> and{' '}
                <span className="text-stone-900 dark:text-white font-medium">Natural Harmony</span>, Scape began as a small boutique studio
                dedicated to the art of the private estate.
              </p>
              <p className="text-lg font-light leading-relaxed text-stone-600 dark:text-stone-300">
                Today, we are a multidisciplinary collective of architects, horticulturists, and artisans crafting legacy environments that
                bridge the gap between architectural rigor and the fluid beauty of the natural world.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 lg:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif italic mb-4">Precision &amp; Heritage</h2>
            <p className="text-sm tracking-widest uppercase opacity-50">Defining the Modern Estate</p>
          </div>
          <div className="md:w-2/3 space-y-12">
            <div className="border-l-2 border-primary/30 pl-8">
              <h3 className="text-xl font-bold mb-4">The Architect&apos;s Hand</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light leading-loose">
                We view the garden not as a separate entity, but as an extension of the interior living space. Every line is intentional,
                every specimen selected for its architectural contribution and its ability to age gracefully within the landscape.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-8">
              <h3 className="text-xl font-bold mb-4">Botanical Curation</h3>
              <p className="text-stone-600 dark:text-stone-400 font-light leading-loose">
                Our botanical approach is one of restraint and sophistication. We specialize in rare species and native palettes that create a
                sense of place, fostering a deep connection between the inhabitant and the local ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 dark:bg-stone-900/40 py-32 px-6 lg:px-20 border-y border-[#e7f3e9] dark:border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20 text-center">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">The Studio</span>
            <h2 className="text-4xl md:text-5xl font-serif italic">Meet the Visionaries</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-stone-800 mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  alt="Lead Architect"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdiTzEbbTEwKi9j0ydKCB2fJG-B3-Om0V4gJpq_0Xzg2F67WgwDqsY_wq5KD8-cKjEhmWCn75wmePy6ZNikRlhV3lbWDUAEmZDuJgdo5ehChcPCBDLh_P7HNcU2rkr28E0m7lsro8-faA9jFgQCgRIBe6KwSPzeKzNoJy-RYwmXCUws9ofymgxpUC6av4sHqUEoBXKZloRXa3GSjobv-2Hm4xDhoIXq4eO3NWVdKWJvevleIuxjg9fIWXXzmT_73jQSqlHo5flOZc"
                  width={400}
                  height={533}
                  
                />
              </div>
              <h3 className="text-2xl font-serif italic mb-2">Julian Voss</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Principal Architect</p>
              <p className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-400">
                With over two decades of experience in structural landscaping, Julian brings a meticulous eye for geometry and material
                permanence to every project.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-stone-800 mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  alt="Horticultural Lead"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_atqdmjyAfi6tyUigGmLv3L02QHvJtgE0boX0UcCwwoZeIeZCl0a3uEZcLHiNZLCSSOV1erVAElpwXMiCOhjfG-grY7u_4ANg7hJNhUFWJLSNKeWW_RTxxmgyHO7_ovsT2OulPTf8IqIJU6Ym_YQ-cO6lWHyE7iWlqQhhb0fN3TVyejJfiTD7XOnr4_L6sBqFgSrvVS-vy1L3sak4SsKOm3feUYPOeXdkA5l_fP_ya9ynoCu2PzGZnyeqe01CI7XW0TMQYjYFHw"
                  width={400}
                  height={533}
                  
                />
              </div>
              <h3 className="text-2xl font-serif italic mb-2">Elena Rossi</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Horticultural Director</p>
              <p className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-400">
                Elena&apos;s philosophy centers on biodiversity and sensory engagement, curating plant palettes that evolve dramatically
                through the seasons.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-stone-800 mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  alt="Design Lead"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT0jzZ9JglaRr386mW-t-Rzo3r5FeXRVbIZ_6RiO3N0ni9RO0lq8nO9aj8KYhz3JZQlQBagpIMR2gBU9L90HslOFiUsPhvnTiRGPXaZB9rfMd-qafvQr5wuOFpFnQm9-WBPUy_Z49VlLFfoxjX8bRZ8gM7oGNPEVPpqzpEMk8I5GD1Qq5NnOy4VKSOujJLDp_V1-98qxv1SJm1dso8uAUv-MDKuBIL-gen5fwt1QKKtkChYg4kFe0NcT-CRsrdTfgOR9ZNas4ryxw"
                  width={400}
                  height={533}
                  
                />
              </div>
              <h3 className="text-2xl font-serif italic mb-2">Marcus Chen</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Master Craftsman</p>
              <p className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-400">
                Specializing in artisanal stone and water integration, Marcus ensures that the physical execution of our designs meets the
                highest standards of craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-8">format_quote</span>
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-stone-800 dark:text-white mb-10">
            &quot;A true garden is not a static picture, but a living dialogue between the site&apos;s heritage and its future.&quot;
          </blockquote>
          <cite className="not-italic text-sm font-bold uppercase tracking-[0.3em] opacity-50">— The Studio Manifesto</cite>
        </div>
      </section>
    </div>
  );
}
