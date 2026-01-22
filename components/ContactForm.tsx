'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <input
            className="thin-input"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <input
            className="thin-input"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="relative">
        <input
          className="thin-input"
          placeholder="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative">
        <textarea
          className="thin-input resize-none"
          placeholder="Your Message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="pt-6">
        <button
          className="bg-primary hover:bg-[#12cc4a] text-[#0d1b10] px-12 py-5 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-3"
          type="submit"
        >
          Send Inquiry
          <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
        </button>
      </div>
    </form>
  );
}
