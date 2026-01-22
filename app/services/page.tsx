import ServiceSection from '@/components/ServiceSection';
import ConsultationForm from '@/components/ConsultationForm';

export const metadata = {
  title: 'Elite Landscaping Services | Scape',
  description: 'Comprehensive landscape architecture services including master planning, botanical curation, and estate stewardship.',
};

export default function ServicesPage() {
  return (
    <>
      <header className="pt-40 pb-20 px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
            Core Capabilities
          </span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
            Elevated Exterior Artistry
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#0d1b10]/60 dark:text-white/60 leading-relaxed max-w-2xl">
            A comprehensive overview of our architectural landscape disciplines, dedicated to the mastery of space,
            form, and living matter.
          </p>
        </div>
      </header>

      <div className="h-px bg-[#0d1b10]/10 dark:bg-white/10 mx-8 lg:mx-16"></div>

      <ServiceSection
        serviceNumber="Service 01"
        title="Landscape Architecture"
        description={[
          'We approach every site as a structural dialogue between the built environment and the natural horizon. Our architectural team utilizes precise site analysis to develop master plans that respect topographical nuance while asserting modern geometric clarity.',
          'From custom hardscaping to complex hydraulic engineering, we orchestrate the physical foundation upon which your estate breathes.'
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuD51aBmN1dpqFiFG1KpWABDkMZJuMHwGZoIKF9qK4caxPK3oM5xUD8wNhdhrkPhWDPfA40XXuyTOCYuYYhLO1UkmFpKnbIMRZqegatSe697nb07BdSf8JOCblrq9tGO3mCGa7Zwofmm5EcUJcZzN65rPet4XLkuwjIlU7MMns6S-9KOQqHrog9rK-VRvIqZLp89G8hpB6mq4G8XXZ3Voml8Q942pmJf1N3YLlkUe4llG91wxBho9k-CiZX_HEf16dvteZJO7dLkhZc"
        imageAlt="Landscape Architecture"
        imagePosition="right"
        features={[
          { text: 'Master Planning & Site Analysis' },
          { text: 'Custom Structural Hardscaping' },
          { text: 'Drainage & Hydraulic Systems' }
        ]}
      />

      <ServiceSection
        serviceNumber="Service 02"
        title="Botanical Curation"
        description={[
          'Selection is the soul of the garden. Our horticulturalists source rare, specimen-grade flora that thrives within your specific microclimate while fulfilling a curated aesthetic vision.',
          'We treat plant material as a living palette—manipulating color, texture, and scent to create sensory experiences that evolve through the changing seasons.'
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCRx1nZzL11P0p1tD4zTpUe9uZOHSErrpFhfG4UhqCaWdZbOX2tJ1CYZx9U69qeAFIGVtLHx5DXSFZCuqqLypiaikoanpO2cjBtlktwhS9ynD4Lh-BfuaIdSVRtsnSF599wMsYBXFLiUkzbZno9373XNAiokiI9SW77_AMdt2Pjscf5FP1lXSBnL_Z4Wf8zNfbzXxfpmUgfrkLdBnJR_PW0JqyIDqQX_WiTknxmaXIl1E83Z0S5eySJ5Woqhq7SZd-VuLkvU_uDvIY"
        imageAlt="Botanical Curation"
        imagePosition="left"
        backgroundColor="bg-[#f2f6f2] dark:bg-[#121c13]"
        imageEffect=""
        stats={[
          { value: '94%', label: 'Native Species Usage' },
          { value: '120+', label: 'Specimen Nurseries' }
        ]}
      />

      <ServiceSection
        serviceNumber="Service 03"
        title="Preservation & Stewardship"
        description={[
          'A masterpiece requires vigilant stewardship. Our white-glove maintenance programs are designed for estates that demand perfection year-round. We provide expert care that matures with the garden.',
          'Our team manages everything from specialized pruning techniques to soil health monitoring and automated irrigation optimization.'
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDJQVijTPqub45I55ircRxFgmlQFFRFlROESsAB2anLgWGe3iKWHC_TrIT2X1MhOogpxaMH7amjcTOqOXWoS_qdBM4-IInezRx8Hh5CuQJKquXiOimvLPl8h-2_kmWNpLPW03-C8dtGLI_wzC5EhHba7q269aZS1y-ClkJ-nqjgoYqXc6vZDnTCfMBWG11mx9BLZLOLLuQHnKnG1TZqns1fgc-ZsxWL03o0LRF8QJ0AoMk7LB5CozGrSajdIasmowhhRrAwQrsAMBA"
        imageAlt="Garden Maintenance"
        imagePosition="right"
        imageEffect="brightness-90"
        linkText="View Maintenance Packages"
        linkHref="/contact"
      />

      <div className="h-px bg-[#0d1b10]/10 dark:bg-white/10 mx-8 lg:mx-16"></div>

      <ConsultationForm />
    </>
  );
}
