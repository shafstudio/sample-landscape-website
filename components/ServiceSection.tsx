import Image from 'next/image';

interface ServiceFeature {
  text: string;
}

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceSectionProps {
  serviceNumber: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  features?: ServiceFeature[];
  stats?: ServiceStat[];
  linkText?: string;
  linkHref?: string;
  backgroundColor?: string;
  imageEffect?: string;
}

export default function ServiceSection({
  serviceNumber,
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'right',
  features,
  stats,
  linkText,
  linkHref,
  backgroundColor,
  imageEffect = 'grayscale hover:grayscale-0'
}: ServiceSectionProps) {
  const contentOrder = imagePosition === 'left' ? 'order-2' : 'order-2 lg:order-1';
  const imageOrder = imagePosition === 'left' ? 'order-1' : 'order-1 lg:order-2';

  return (
    <section className={`py-32 px-8 lg:px-16 ${backgroundColor || ''}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className={contentOrder}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-8 block">
              {serviceNumber}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 italic">{title}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#0d1b10]/70 dark:text-white/70">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {features && features.length > 0 && (
              <ul className="mt-12 space-y-4 border-t border-[#0d1b10]/10 dark:border-white/10 pt-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest"
                  >
                    <span className="w-2 h-2 bg-primary"></span> {feature.text}
                  </li>
                ))}
              </ul>
            )}

            {stats && stats.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-8 border-t border-[#0d1b10]/10 dark:border-white/10 pt-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <span className="block text-2xl font-serif italic mb-1">{stat.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {linkText && linkHref && (
              <div className="mt-12">
                <a
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest group"
                  href={linkHref}
                >
                  {linkText}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </a>
              </div>
            )}
          </div>

          <div className={imageOrder}>
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-2xl">
              <Image
                alt={imageAlt}
                className={`w-full h-full object-cover transition-all duration-700 ${imageEffect}`}
                src={image}
                width={800}
                height={1066}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
