'use client';

import { FormEvent, useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDetails: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Consultation request:', formData);
    // You can add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 px-8 lg:px-16 max-w-[1440px] mx-auto text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl mb-8">Begin the Transformation</h2>
        <p className="text-lg opacity-60 mb-16">
          Request a private consultation with our principal architect to discuss your vision for a legacy landscape.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              Full Name
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-[#0d1b10]/20 dark:border-white/20 px-0 py-3 focus:ring-0 focus:border-primary transition-colors text-lg outline-none"
              placeholder="Alexander Wright"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              Email Address
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-[#0d1b10]/20 dark:border-white/20 px-0 py-3 focus:ring-0 focus:border-primary transition-colors text-lg outline-none"
              placeholder="alexander@example.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              Project Location &amp; Vision
            </label>
            <textarea
              className="w-full bg-transparent border-0 border-b border-[#0d1b10]/20 dark:border-white/20 px-0 py-3 focus:ring-0 focus:border-primary transition-colors text-lg resize-none outline-none"
              placeholder="Estate in Beverly Hills, focus on native botanical curation..."
              rows={3}
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2 pt-8">
            <button
              className="w-full md:w-auto px-16 py-5 bg-[#0d1b10] dark:bg-white text-white dark:text-[#0d1b10] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary dark:hover:bg-primary transition-colors"
              type="submit"
            >
              Request Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
