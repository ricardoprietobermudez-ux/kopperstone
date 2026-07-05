import React from 'react';

const CABINET_COLORS = {
  'acrylic-white': '#EEEEEE',
  'acrylic-black': '#222222',
  'lacquer-navy': '#0E1A2B',
  'lacquer-forest': '#2D4A2D',
  'laminate-walnut': '#7B4F2E',
  'veneer-oak': '#C4A882',
};

const COUNTERTOP_COLORS = {
  'calacatta': '#F8F6F3',
  'statuario': '#F0EDE8',
  'carrara': '#F5F4F1',
  'pure-white': '#FFFFFF',
  'charcoal-ss': '#3A3A3A',
  'terrazzo': '#D4C8B8',
};

const HARDWARE_COLORS = {
  'brushed-gold': '#C9A77C',
  'matte-black': '#1A1A1A',
  'gunmetal': '#4A4E54',
  'brushed-steel': '#B8BEC6',
};

export default function KitchenCanvas({ config }) {
  const cabColor = CABINET_COLORS[config.cabinet] || '#EEEEEE';
  const ctColor = COUNTERTOP_COLORS[config.countertop] || '#F8F6F3';
  const hwColor = HARDWARE_COLORS[config.hardware] || '#C9A77C';
  const isLight = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 128;
  };
  const cabStroke = isLight(cabColor) ? '#AAAAAA' : '#555555';
  const ctStroke = isLight(ctColor) ? '#BBBBBB' : '#666666';

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <div className="text-center mb-3">
          <p className="text-[9px] font-sans uppercase tracking-widest text-warm-grey">
            {config.layout?.replace(/-/g, ' ').toUpperCase()} LAYOUT — PLAN VIEW
          </p>
        </div>

        {/* SVG Floor Plan */}
        <svg viewBox="0 0 400 280" className="w-full border border-navy/10 bg-white shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          {/* Room outline */}
          <rect x="20" y="20" width="360" height="240" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="3" />

          {/* Dimension lines */}
          <line x1="20" y1="270" x2="380" y2="270" stroke="#999" strokeWidth="0.5" />
          <line x1="20" y1="266" x2="20" y2="274" stroke="#999" strokeWidth="0.5" />
          <line x1="380" y1="266" x2="380" y2="274" stroke="#999" strokeWidth="0.5" />
          <text x="200" y="278" textAnchor="middle" fontSize="6" fill="#999">14'-0" / 4267mm</text>
          <line x1="10" y1="20" x2="10" y2="260" stroke="#999" strokeWidth="0.5" />
          <line x1="6" y1="20" x2="14" y2="20" stroke="#999" strokeWidth="0.5" />
          <line x1="6" y1="260" x2="14" y2="260" stroke="#999" strokeWidth="0.5" />
          <text x="6" y="143" textAnchor="middle" fontSize="6" fill="#999" transform="rotate(-90,6,143)">10'-0" / 3048mm</text>

          {/* Kitchen layout based on config.layout */}
          {config.layout === 'galley' && <GalleyPlan cabColor={cabColor} cabStroke={cabStroke} ctColor={ctColor} ctStroke={ctStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'l-shaped' && <LShapedPlan cabColor={cabColor} cabStroke={cabStroke} ctColor={ctColor} ctStroke={ctStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'u-shaped' && <UShapedPlan cabColor={cabColor} cabStroke={cabStroke} ctColor={ctColor} ctStroke={ctStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'island' && <IslandPlan cabColor={cabColor} cabStroke={cabStroke} ctColor={ctColor} ctStroke={ctStroke} hwColor={hwColor} config={config} />}

          {/* Compass rose */}
          <g transform="translate(365,35)">
            <circle cx="0" cy="0" r="8" fill="none" stroke="#CCC" strokeWidth="0.5" />
            <text x="0" y="-10" textAnchor="middle" fontSize="5" fill="#999">N</text>
            <line x1="0" y1="-7" x2="0" y2="7" stroke="#999" strokeWidth="0.5" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="#999" strokeWidth="0.5" />
          </g>

          {/* Legend */}
          <g transform="translate(25,248)">
            <rect x="0" y="0" width="8" height="6" fill={cabColor} stroke={cabStroke} strokeWidth="0.5" />
            <text x="10" y="5.5" fontSize="5" fill="#666">Cabinetry</text>
            <rect x="60" y="0" width="8" height="6" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
            <text x="70" y="5.5" fontSize="5" fill="#666">Countertop</text>
            <circle cx="130" cy="3" r="2.5" fill={hwColor} />
            <text x="135" y="5.5" fontSize="5" fill="#666">Hardware</text>
          </g>
        </svg>

        {/* Scale note */}
        <p className="text-center text-[8px] font-sans text-warm-grey/50 mt-2">SCALE 1:50 · All dimensions ±2% · Not for construction · Kopperstone Design Studio</p>
      </div>
    </div>
  );
}

function GalleyPlan({ cabColor, cabStroke, ctColor, ctStroke, hwColor, config }) {
  return (
    <>
      {/* Top run cabinets */}
      <rect x="25" y="30" width="350" height="45" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      {/* Top countertop */}
      <rect x="25" y="72" width="350" height="10" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="33" width="46" height="36" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {/* Hardware top */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="49" width="12" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Bottom run cabinets */}
      <rect x="25" y="195" width="350" height="45" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      {/* Bottom countertop */}
      <rect x="25" y="188" width="350" height="10" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="198" width="46" height="36" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {/* Hardware bottom */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="184" width="12" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Sink */}
      <SinkSymbol x={160} y={188} config={config} />

      {/* Walk zone label */}
      <text x="200" y="145" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">WORK ZONE</text>
      <line x1="120" y1="145" x2="160" y2="145" stroke="#CCC" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="240" y1="145" x2="280" y2="145" stroke="#CCC" strokeWidth="0.5" strokeDasharray="3,2" />
    </>
  );
}

function LShapedPlan({ cabColor, cabStroke, ctColor, ctStroke, hwColor, config }) {
  return (
    <>
      {/* Left vertical run — stops short of the bottom run so doors don't overlap it */}
      <rect x="25" y="30" width="45" height="165" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="67" y="30" width="10" height="165" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2].map(i => (
        <rect key={i} x="28" y={33 + i * 46} width="36" height="42" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1,2].map(i => (
        <rect key={i} x="36" y={52 + i * 46} width="3" height="10" rx="1" fill={hwColor} />
      ))}

      {/* Bottom horizontal run */}
      <rect x="25" y="195" width="315" height="45" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="25" y="188" width="315" height="10" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={28 + i * 51} y="198" width="47" height="36" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={48 + i * 51} y="184" width="10" height="3" rx="1" fill={hwColor} />
      ))}

      <SinkSymbol x={130} y={188} config={config} />
      <text x="220" y="130" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">KITCHEN</text>
    </>
  );
}

function UShapedPlan({ cabColor, cabStroke, ctColor, ctStroke, hwColor, config }) {
  return (
    <>
      {/* Top */}
      <rect x="25" y="30" width="350" height="40" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="25" y="67" width="350" height="8" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="33" width="46" height="32" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="63" width="12" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Left — stops short of the bottom run so doors don't overlap it */}
      <rect x="25" y="30" width="42" height="165" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="64" y="75" width="8" height="120" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1].map(i => (
        <rect key={i} x="28" y={78 + i * 46} width="34" height="42" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1].map(i => (
        <rect key={i} x="42" y={95 + i * 46} width="10" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Right — mirrors left */}
      <rect x="333" y="30" width="42" height="165" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="328" y="75" width="8" height="120" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1].map(i => (
        <rect key={i} x="338" y={78 + i * 46} width="34" height="42" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1].map(i => (
        <rect key={i} x="348" y={95 + i * 46} width="10" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Bottom */}
      <rect x="25" y="195" width="350" height="45" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="25" y="188" width="350" height="10" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="198" width="46" height="36" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="184" width="12" height="3" rx="1" fill={hwColor} />
      ))}

      <SinkSymbol x={170} y={188} config={config} />
      <text x="200" y="145" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">WORK ZONE</text>
    </>
  );
}

function IslandPlan({ cabColor, cabStroke, ctColor, ctStroke, hwColor, config }) {
  return (
    <>
      {/* Top perimeter */}
      <rect x="25" y="30" width="350" height="40" fill={cabColor} stroke={cabStroke} strokeWidth="1" />
      <rect x="25" y="67" width="350" height="8" fill={ctColor} stroke={ctStroke} strokeWidth="0.5" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="33" width="46" height="30" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="63" width="12" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Island */}
      <rect x="110" y="140" width="180" height="80" fill={cabColor} stroke={cabStroke} strokeWidth="1.5" />
      <rect x="110" y="130" width="180" height="12" fill={ctColor} stroke={ctStroke} strokeWidth="1" />
      <rect x="110" y="218" width="180" height="12" fill={ctColor} stroke={ctStroke} strokeWidth="1" />
      {[0,1,2].map(i => (
        <rect key={i} x={115 + i * 58} y="143" width="52" height="72" fill="none" stroke={cabStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {/* Island hardware */}
      {[0,1,2].map(i => (
        <rect key={i} x={130 + i * 58} y="178" width="22" height="3" rx="1" fill={hwColor} />
      ))}

      {/* Sink on island */}
      <SinkSymbol x={175} y={130} config={config} />

      <text x="200" y="185" textAnchor="middle" fontSize="6" fill="#FFFFFF" opacity="0.4" letterSpacing="2">ISLAND</text>
      <text x="200" y="120" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">KITCHEN</text>
    </>
  );
}

function SinkSymbol({ x, y, config }) {
  const isDouble = config.sink === 'drop-in-double';
  const isFarmhouse = config.sink === 'farmhouse';
  if (isDouble) return (
    <g>
      <rect x={x - 20} y={y - 1} width="18" height="12" rx="1" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <rect x={x + 2} y={y - 1} width="18" height="12" rx="1" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx={x - 11} cy={y + 5} r="1.5" fill="#9AB" />
      <circle cx={x + 11} cy={y + 5} r="1.5" fill="#9AB" />
    </g>
  );
  if (isFarmhouse) return (
    <g>
      <rect x={x - 22} y={y - 2} width="44" height="16" rx="0" fill="#E8F4F8" stroke="#9AB" strokeWidth="1.5" />
      <circle cx={x} cy={y + 6} r="1.5" fill="#9AB" />
    </g>
  );
  return (
    <g>
      <rect x={x - 17} y={y - 1} width="34" height="13" rx="2" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx={x} cy={y + 5} r="2" fill="#9AB" />
    </g>
  );
}