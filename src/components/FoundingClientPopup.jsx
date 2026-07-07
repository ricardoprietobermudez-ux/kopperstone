// To re-trigger this popup during testing, run in the browser console:
//   localStorage.removeItem('kp_founding_popup_claimed')
// then refresh the page.

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import { submitLead } from '@/lib/leads';

// Only set once someone actually submits — dismissing (X/overlay/Escape) does NOT
// suppress future visits, so repeat visitors keep seeing the offer until they claim it.
const STORAGE_KEY = 'kp_founding_popup_claimed';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Static — confirmed with Ricardo this is a fixed program size, not a live count.
const SPOTS_TOTAL = 10;
const SPOTS_REMAINING = 7;

const OFFER_DEADLINE = new Date(2026, 7, 31, 23, 59, 59); // August 31, 2026, end of day

function getTimeLeft() {
  const diff = OFFER_DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function FoundingClientPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const modalRef = useRef(null);
  const emailInputRef = useRef(null);

  // Trigger: 7s timer or 40% scroll depth, whichever happens first — skipped entirely if already claimed.
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

  // Live countdown, ticking once a minute while the popup is open.
  useEffect(() => {
    if (!isOpen) return;
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
    return () => clearInterval(id);
  }, [isOpen]);

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

  function markClaimed() {
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  function closeAndReturnFocus() {
    setIsOpen(false);
    document.body.setAttribute('tabindex', '-1');
    document.body.focus();
    document.body.removeAttribute('tabindex');
  }

  function handleDismiss() {
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
      markClaimed();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const claimedPct = Math.round(((SPOTS_TOTAL - SPOTS_REMAINING) / SPOTS_TOTAL) * 100);

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
            className="relative w-full max-w-[480px] sm:max-w-[880px] max-h-[90vh] overflow-y-auto bg-cream rounded-lg shadow-2xl grid grid-cols-1 sm:grid-cols-[38%_1fr]"
          >
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cream/90 text-navy/60 hover:text-navy hover:bg-cream shadow-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="col-span-full text-center py-16 px-8">
                <h2 className="font-serif text-3xl text-navy mb-3">You're on the list</h2>
                <p className="text-sm text-navy/70 leading-relaxed">
                  We'll reach out within one business day to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <div className="relative h-44 sm:h-full">
                  <img
                    src="/images/founding-client-kitchen.jpg"
                    alt="Bespoke Kopperstone kitchen renovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy/45 via-transparent to-transparent" />
                </div>

                <div className="px-7 py-8 sm:px-10 sm:py-10">
                  <p className="text-[12px] tracking-[2.5px] uppercase text-gold font-sans mb-4">
                    Summer 2026 · Founding Client Program
                  </p>

                  <h2 id="founding-client-popup-heading" className="mb-4">
                    <span className="block font-serif text-[56px] sm:text-[68px] leading-none text-gold font-semibold">
                      25% off
                    </span>
                    <span className="block font-serif text-xl sm:text-2xl leading-snug text-navy font-semibold mt-2">
                      your kitchen or bath renovation
                    </span>
                  </h2>

                  <div className="w-12 h-0.5 bg-gold mb-4" />

                  <p className="text-[14.5px] text-navy leading-relaxed mb-6">
                    We're welcoming our first 10 single-family homeowners in Ontario and BC as
                    Founding Clients — 25% off design and installation, up to $5,000 in savings.
                  </p>

                  <div className="mb-6">
                    <p className="flex items-center gap-1.5 text-[11px] tracking-[1.5px] uppercase text-warm-grey mb-2">
                      <Clock className="w-3 h-3" />
                      Offer ends August 31
                    </p>
                    <div className="flex gap-2">
                      {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Mins', value: timeLeft.minutes },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex-1 bg-navy/5 rounded px-3 py-2 text-center">
                          <div className="font-serif text-xl text-navy font-semibold tabular-nums">
                            {String(value).padStart(2, '0')}
                          </div>
                          <div className="text-[9.5px] tracking-[1px] uppercase text-warm-grey mt-0.5">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between text-[11.5px] text-warm-grey mb-1.5">
                      <span>Founding Client spots</span>
                      <span className="text-navy font-medium">
                        {SPOTS_REMAINING} of {SPOTS_TOTAL} remaining
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-navy/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full"
                        style={{ width: `${claimedPct}%` }}
                      />
                    </div>
                  </div>

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
                    WSIB registered · $2M liability insured
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
