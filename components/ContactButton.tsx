'use client';

export default function ContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center gap-3 bg-primary text-[#0d1b10] px-5 py-3 rounded-full shadow-2xl font-bold hover:scale-105 transition-all">
        <span className="material-symbols-outlined">chat_bubble</span>
        <span className="hidden md:inline">Contact Expert</span>
      </button>
    </div>
  );
}
