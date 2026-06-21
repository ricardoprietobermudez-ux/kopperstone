import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="text-center">
        <span className="font-serif text-9xl text-cream/8 select-none">404</span>
        <h1 className="font-serif text-3xl text-cream mt-4">Page Not Found</h1>
        <p className="text-cream/35 text-sm mt-4 max-w-sm mx-auto leading-relaxed font-sans">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 mt-10 bg-gold text-navy px-6 py-3 text-sm font-sans uppercase tracking-wide hover:bg-gold/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}