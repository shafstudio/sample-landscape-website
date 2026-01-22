export default function PhilosophySection() {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-[1280px] mx-auto" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0d1b10] dark:text-white">
            Our Philosophy
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-lg text-[#0d1b10]/70 dark:text-white/70 leading-relaxed font-medium">
            We believe in the harmony between architecture and nature. Our commitment to sustainability and precision ensures every project is a masterpiece of modern design.
          </p>
          <p className="text-base text-[#0d1b10]/60 dark:text-white/60 leading-relaxed">
            Every stone is placed with intent; every plant is selected to flourish within its specific microclimate. We don&apos;t just landscape; we architect experiences that evolve with the seasons.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group p-8 rounded-xl bg-white dark:bg-[#1a3a1f]/30 border border-[#cfe7d3] dark:border-white/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainable Design</h3>
            <p className="text-[#4c9a59] dark:text-primary/70 text-sm leading-relaxed">
              Eco-friendly practices that preserve local ecosystems and minimize water consumption through native planting.
            </p>
          </div>

          <div className="group p-8 rounded-xl bg-white dark:bg-[#1a3a1f]/30 border border-[#cfe7d3] dark:border-white/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">straighten</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Precision Craft</h3>
            <p className="text-[#4c9a59] dark:text-primary/70 text-sm leading-relaxed">
              Meticulous attention to detail in every stone joint and layout line, ensuring long-lasting structural integrity.
            </p>
          </div>

          <div className="group p-8 rounded-xl bg-white dark:bg-[#1a3a1f]/30 border border-[#cfe7d3] dark:border-white/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">domain</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Natural Harmony</h3>
            <p className="text-[#4c9a59] dark:text-primary/70 text-sm leading-relaxed">
              Seamless transitions between indoor living and outdoor exploration, extending the luxury of your home.
            </p>
          </div>

          <div className="group p-8 rounded-xl bg-white dark:bg-[#1a3a1f]/30 border border-[#cfe7d3] dark:border-white/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Botanical Curation</h3>
            <p className="text-[#4c9a59] dark:text-primary/70 text-sm leading-relaxed">
              Rare and exquisite plant selections that create a unique visual identity for your private estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
