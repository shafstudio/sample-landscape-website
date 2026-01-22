import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';

export const metadata = {
  title: 'Scape | Get in Touch',
  description: 'Contact us to discuss your landscape architecture project. We welcome inquiries and consultations.',
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-40 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <header className="mb-20 text-center lg:text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              Connect
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-[#0d1b10] dark:text-white leading-tight">
              Get in Touch
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <MapSection />
    </>
  );
}
