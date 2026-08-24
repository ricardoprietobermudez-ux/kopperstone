import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      {/* AnnouncementBar removed — was advertising an "Industrial & Loft
          Collection launching Q3 2026" that doesn't exist. Re-add
          <AnnouncementBar /> (still in ./AnnouncementBar.jsx) when there's
          a real announcement to run. */}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}