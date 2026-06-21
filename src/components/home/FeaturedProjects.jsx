import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  { id: 'KS-2401', type: 'Hotel', scale: '180 keys', location: 'Toronto, Ontario', title: '180-Key Hotel Kitchen & Bathroom Package, Toronto', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80' },
  { id: 'KS-2312', type: 'Multi-Family Residential', scale: '212 units', location: 'Austin, Texas', title: '212-Unit Multi-Family Residential Specification, Austin', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: 'KS-2308', type: 'Hotel', scale: '95 villas', location: 'Cancún, Mexico', title: 'Luxury Resort Villa Kitchen Package, Cancún', img: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80' },
  { id: 'KS-2303', type: 'Commercial', scale: '48,000 sq ft', location: 'Vancouver, BC', title: 'Corporate Office Fit-Out, Vancouver Financial District', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { id: 'KS-2210', type: 'Multi-Family Residential', scale: '340 units', location: 'Miami, Florida', title: '340-Unit Luxury Residential Tower, Miami', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section className="bg-cream py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="gold-overline mb-4" style={{ color: '#C9A77C' }}>SELECTED PROJECTS</div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy tracking-tight">
              Featured<br /><em className="text-gold italic">Case Studies</em>
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-navy text-sm font-sans tracking-wide uppercase hover:text-gold transition-colors group whitespace-nowrap">
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-navy">
            <motion.img key={p.id} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">{p.type} · {p.id}</p>
              <h3 className="font-serif text-2xl text-cream leading-tight max-w-lg">{p.title}</h3>
              <p className="text-cream/40 text-sm mt-1">{p.scale} · {p.location}</p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col bg-navy">
            {projects.map((proj, i) => (
              <button key={proj.id} onClick={() => setActive(i)}
                className={`flex-1 text-left p-5 border-b border-cream/5 transition-all ${i === active ? 'bg-cream/5' : 'hover:bg-cream/3'}`}>
                <p className="text-[10px] font-sans tracking-widest uppercase text-gold/50 mb-1">{proj.type}</p>
                <p className={`text-sm font-sans leading-snug ${i === active ? 'text-cream' : 'text-cream/35'}`}>
                  {proj.title.length > 55 ? proj.title.slice(0, 55) + '…' : proj.title}
                </p>
                <p className="text-xs text-cream/20 mt-0.5">{proj.location}</p>
              </button>
            ))}
            <div className="p-5 flex items-center gap-3 border-t border-cream/5">
              <button onClick={() => setActive((active - 1 + projects.length) % projects.length)}
                className="w-8 h-8 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold text-cream/30 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setActive((active + 1) % projects.length)}
                className="w-8 h-8 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold text-cream/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs text-cream/20 font-sans ml-auto">
                {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}