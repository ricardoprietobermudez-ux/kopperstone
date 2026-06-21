import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-navy text-cream/70 text-[11px] font-sans tracking-wide py-2.5 px-4 flex items-center justify-center gap-6 relative">
      <span>
        <span className="text-gold font-medium">New:</span> Industrial & Loft Collection launching Q3 2026 ·{' '}
        <a href="/contact" className="underline underline-offset-2 hover:text-gold transition-colors">Request Preview</a>
      </span>
      <button onClick={() => setVisible(false)} className="absolute right-4 text-cream/40 hover:text-cream transition-colors">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}