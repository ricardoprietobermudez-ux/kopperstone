// To re-trigger this popup during testing, run in the browser console:
//   localStorage.removeItem('kp_founding_popup_seen')
// then refresh the page.

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { submitLead } from '@/lib/leads';

const STORAGE_KEY = 'kp_founding_popup_seen';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FoundingClientPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef(null);
  const emailInputRef = useRef(null);

  // Trigger: 7s timer or 40% scroll depth, whichever happens first — skipped entirely if already seen.
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    function open() {
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
      setIsOpen(true);
    }

    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      if (window.scrollY / scrollableHeight >= 0.4) open();
    }

    const timerId = setTimeout(open, 7000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Body scroll lock, initial focus, Escape-to-close, and a hand-rolled focus trap while open.
  useEffect(() => {
    if (!isOpen) return;

    emailInputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        handleDismiss();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-close the thank-you state after 4 seconds.
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setIsOpen(false), 4000);
    return () => clearTimeout(timer);
  }, [submitted]);

  function markSeen() {
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  function closeAndReturnFocus() {
    setIsOpen(false);
    document.body.setAttribute('tabindex', '-1');
    document.body.focus();
    document.body.removeAttribute('tabindex');
  }

  function handleDismiss() {
    markSeen();
    closeAndReturnFocus();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await submitLead(email);
      markSeen();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founding-client-popup-heading"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-0 bg-navy/55"
            onClick={handleDismiss}
          />
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-[420px] bg-cream rounded px-8 py-9 shadow-2xl"
          >
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <h2 className="font-serif text-3xl text-navy mb-3">You're on the list</h2>
                <p className="text-sm text-navy/70 leading-relaxed">
                  We'll reach out within one business day to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[12px] tracking-[2.5px] uppercase text-gold font-sans mb-4">
                  Summer 2026 · Founding Client Program
                </p>
                <h2
                  id="founding-client-popup-heading"
                  className="font-serif text-[32px] leading-tight text-navy font-semibold mb-4"
                >
                  25% off your kitchen or bath renovation
                </h2>
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <p className="text-[14.5px] text-navy leading-relaxed mb-6">
                  We're welcoming our first 10 single-family homeowners in Ontario and BC as
                  Founding Clients — 25% off design and installation, up to $5,000 in savings.
                  Offer ends August 31.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  <input
                    ref={emailInputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full bg-white border border-navy/30 px-4 py-3 text-sm text-navy mb-3 focus:outline-none focus:border-gold"
                  />
                  {error && <p className="text-xs text-red-600 mb-3">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-navy text-cream text-xs tracking-[1.5px] uppercase py-3.5 font-sans hover:bg-navy-light transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Claim My Founding Client Spot'}
                  </button>
                </form>
                <p className="text-[11.5px] text-warm-grey text-center mt-5">
                  7 of 10 spots remaining · WSIB registered · $2M liability insured
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
