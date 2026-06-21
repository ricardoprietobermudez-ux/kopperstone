import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Mail, ClipboardList, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ onClose }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="relative bg-navy border border-cream/15 w-full max-w-md shadow-2xl"
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-cream/10">
          <h2 className="font-serif text-xl text-cream">Get in Touch</h2>
          <button onClick={onClose} className="text-cream/30 hover:text-cream transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-7 space-y-3">
          {/* General inquiry */}
          <a
            href="mailto:info@kopperstone.com"
            className="flex items-center gap-4 border border-cream/10 p-4 hover:border-gold/40 hover:bg-gold/5 transition-colors group"
            onClick={onClose}
          >
            <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0">
              <Mail className="w-3.5 h-3.5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-cream font-sans group-hover:text-gold transition-colors">General Inquiry</p>
              <p className="text-xs text-cream/40 font-sans">info@kopperstone.com</p>
            </div>
          </a>

          {/* Project consultation */}
          <Link
            to="/contact"
            className="flex items-center gap-4 border border-cream/10 p-4 hover:border-gold/40 hover:bg-gold/5 transition-colors group"
            onClick={onClose}
          >
            <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-3.5 h-3.5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-cream font-sans group-hover:text-gold transition-colors">Project Consultation</p>
              <p className="text-xs text-cream/40 font-sans">Request a quote for your development</p>
            </div>
          </Link>

          {/* Leadership contact */}
          <button
            className="w-full flex items-center gap-4 border border-cream/10 p-4 hover:border-gold/40 hover:bg-gold/5 transition-colors group text-left"
            onClick={() => setExpanded(expanded === 'leadership' ? null : 'leadership')}
          >
            <div className="w-9 h-9 border border-gold/30 flex items-center justify-center flex-shrink-0">
              <User className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-cream font-sans group-hover:text-gold transition-colors">Leadership Contact</p>
              <p className="text-xs text-cream/40 font-sans">Reach Ricardo or Santiago directly</p>
            </div>
            <span className="text-cream/25 text-xs font-sans">{expanded === 'leadership' ? '▲' : '▼'}</span>
          </button>

          <AnimatePresence>
            {expanded === 'leadership' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="border border-t-0 border-cream/10 px-4 pb-4 space-y-3 pt-4">
                  {[
                    { name: 'Ricardo Prieto', role: 'Co-Founder & CEO', email: 'ricardo@kopperstone.com' },
                    { name: 'Santiago Rojas', role: 'Co-Founder & CRO', email: 'santiago@kopperstone.com' },
                  ].map(p => (
                    <a key={p.name} href={`mailto:${p.email}`} className="flex items-center gap-3 group" onClick={onClose}>
                      <div className="w-7 h-7 rounded-full bg-charcoal border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-[10px] text-cream">{p.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-xs text-cream font-sans group-hover:text-gold transition-colors">{p.name}</p>
                        <p className="text-[10px] text-cream/40 font-sans">{p.role} · {p.email}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}