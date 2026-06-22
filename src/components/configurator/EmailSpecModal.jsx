import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Download } from 'lucide-react';
import jsPDF from 'jspdf';

export default function EmailSpecModal({ mode, config, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const doc = new jsPDF();
    const gold = [201, 167, 124];
    const navy = [14, 26, 43];

    doc.setFillColor(...navy);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(245, 239, 230);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Kopperstone', 20, 20);
    doc.setFontSize(8);
    doc.setTextColor(...gold);
    doc.setFont('helvetica', 'normal');
    doc.text('DEVELOPER SUPPLY PARTNER', 20, 28);

    doc.setTextColor(...navy);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`Your ${mode === 'kitchen' ? 'Kitchen' : 'Bathroom'} Specification`, 20, 58);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for using the Kopperstone Design Configurator. Below is your selected specification.', 20, 68);

    doc.setFillColor(245, 240, 232);
    doc.rect(20, 78, 170, Object.keys(config).length * 10 + 20, 'F');
    doc.setTextColor(...gold);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('SELECTED CONFIGURATION', 28, 90);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(10);
    let y = 100;
    Object.entries(config).forEach(([k, v]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${k.charAt(0).toUpperCase() + k.slice(1)}:`, 28, y);
      doc.setFont('helvetica', 'normal');
      doc.text(v.replace(/-/g, ' '), 80, y);
      y += 10;
    });

    y += 14;
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.text('This specification is indicative. Final specifications, SKUs, and pricing are', 20, y);
    doc.text('confirmed upon project consultation.', 20, y + 6);

    y += 20;
    doc.setFillColor(...gold);
    doc.rect(20, y, 60, 10, 'F');
    doc.setTextColor(...navy);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('REQUEST A FORMAL QUOTE', 24, y + 7);

    doc.setFillColor(...navy);
    doc.rect(0, 275, 210, 22, 'F');
    doc.setTextColor(245, 239, 230, 0.4);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(`© ${new Date().getFullYear()} Kopperstone Inc. · info@kopperstone.com`, 20, 288);

    doc.save(`Kopperstone-${mode}-spec.pdf`);
    setDownloaded(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="bg-navy-light border border-cream/15 p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
          <X className="w-4 h-4" />
        </button>
        {downloaded ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-2">Specification Downloaded</h3>
            <p className="text-cream/50 text-sm font-sans">Your PDF spec sheet has been saved to your downloads.</p>
            <button onClick={onClose} className="mt-6 border border-gold/40 text-gold text-xs font-sans uppercase tracking-wide px-6 py-2.5 hover:bg-gold/5 transition-colors">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="gold-overline mb-4">DOWNLOAD SPEC SHEET</div>
            <h3 className="font-serif text-2xl text-cream mb-2">Download Your Spec</h3>
            <p className="text-cream/45 text-xs font-sans mb-6 leading-relaxed">
              We'll generate a PDF with your selected materials, estimated lead times, and a CTA to request a formal quote.
            </p>
            <div className="bg-navy border border-cream/10 p-4 mb-6">
              <p className="text-[9px] font-sans uppercase tracking-widest text-gold mb-2">Your Configuration</p>
              <div className="space-y-1">
                {Object.entries(config).map(([k, v]) => (
                  <div key={k} className="flex gap-2 text-[10px] font-sans">
                    <span className="text-cream/50 capitalize">{k}:</span>
                    <span className="text-cream/80">{v.replace(/-/g, ' ')}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="w-full bg-gold text-navy text-xs font-sans uppercase tracking-wide py-3.5 hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Download Spec Sheet PDF
            </button>
            <p className="text-cream/25 text-[10px] font-sans mt-3 text-center">Specification-grade materials list · Estimated lead times · SKU references</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
