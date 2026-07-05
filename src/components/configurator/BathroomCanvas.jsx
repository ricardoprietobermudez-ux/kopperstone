import React from 'react';

const VANITY_COLORS = {
  'acrylic-white': '#EEEEEE',
  'acrylic-black': '#222222',
  'lacquer-navy': '#0E1A2B',
  'lacquer-forest': '#2D4A2D',
  'laminate-walnut': '#7B4F2E',
  'veneer-oak': '#C4A882',
};

const HARDWARE_COLORS = {
  'brushed-gold': '#C9A77C',
  'matte-black': '#1A1A1A',
  'gunmetal': '#4A4E54',
  'brushed-steel': '#B8BEC6',
};

export default function BathroomCanvas({ config }) {
  const vanityColor = VANITY_COLORS[config.vanity] || '#EEEEEE';
  const hwColor = HARDWARE_COLORS[config.hardware] || '#C9A77C';

  const isLight = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 128;
  };
  const vanityStroke = isLight(vanityColor) ? '#AAAAAA' : '#555555';

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-3">
          <p className="text-[9px] font-sans uppercase tracking-widest text-warm-grey">
            {config.layout?.replace(/-/g, ' ').toUpperCase()} — PLAN VIEW
          </p>
        </div>

        <svg viewBox="0 0 400 280" className="w-full border border-navy/10 bg-white shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          {/* Room outline */}
          <rect x="20" y="20" width="360" height="240" fill="#FAFAF9" stroke="#1A1A1A" strokeWidth="3" />

          {/* Dimensions */}
          <line x1="20" y1="270" x2="380" y2="270" stroke="#999" strokeWidth="0.5" />
          <line x1="20" y1="266" x2="20" y2="274" stroke="#999" strokeWidth="0.5" />
          <line x1="380" y1="266" x2="380" y2="274" stroke="#999" strokeWidth="0.5" />
          <text x="200" y="278" textAnchor="middle" fontSize="6" fill="#999">10'-0" / 3048mm</text>
          <line x1="10" y1="20" x2="10" y2="260" stroke="#999" strokeWidth="0.5" />
          <text x="6" y="143" textAnchor="middle" fontSize="6" fill="#999" transform="rotate(-90,6,143)">8'-0" / 2438mm</text>

          {/* Content based on layout */}
          {config.layout === 'single-vanity' && <SingleVanityPlan vanityColor={vanityColor} vanityStroke={vanityStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'double-vanity' && <DoubleVanityPlan vanityColor={vanityColor} vanityStroke={vanityStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'powder-room' && <PowderRoomPlan vanityColor={vanityColor} vanityStroke={vanityStroke} hwColor={hwColor} config={config} />}
          {config.layout === 'master-suite' && <MasterSuitePlan vanityColor={vanityColor} vanityStroke={vanityStroke} hwColor={hwColor} config={config} />}

          {/* Legend */}
          <g transform="translate(25,250)">
            <rect x="0" y="0" width="8" height="6" fill={vanityColor} stroke={vanityStroke} strokeWidth="0.5" />
            <text x="10" y="5.5" fontSize="5" fill="#666">Vanity</text>
            <circle cx="70" cy="3" r="2.5" fill={hwColor} />
            <text x="75" y="5.5" fontSize="5" fill="#666">Hardware</text>
            <rect x="130" y="0" width="8" height="6" fill="#E8F4F8" stroke="#9AB" strokeWidth="0.5" />
            <text x="140" y="5.5" fontSize="5" fill="#666">Wet area</text>
          </g>
        </svg>

        <p className="text-center text-[8px] font-sans text-warm-grey/50 mt-2">SCALE 1:50 · All dimensions ±2% · Not for construction · Kopperstone Design Studio</p>
      </div>
    </div>
  );
}

function SingleVanityPlan({ vanityColor, vanityStroke, hwColor, config }) {
  return (
    <>
      {/* Vanity cabinet */}
      <rect x="120" y="25" width="160" height="50" fill={vanityColor} stroke={vanityStroke} strokeWidth="1" />
      {/* Counter */}
      <rect x="120" y="72" width="160" height="8" fill="#F0EDE8" stroke="#CCC" strokeWidth="0.5" />
      {/* Basin */}
      <ellipse cx="200" cy="69" rx="22" ry="14" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx="200" cy="69" r="3" fill={hwColor} />
      {/* Cabinet doors */}
      <rect x="123" y="28" width="74" height="42" fill="none" stroke={vanityStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      <rect x="203" y="28" width="74" height="42" fill="none" stroke={vanityStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Handles */}
      <rect x="195" y="48" width="10" height="3" rx="1" fill={hwColor} />
      {/* Toilet */}
      <g transform="translate(60,100)">
        <rect x="0" y="0" width="40" height="55" rx="3" fill="#F0F0F0" stroke="#999" strokeWidth="1" />
        <ellipse cx="20" cy="40" rx="16" ry="18" fill="#E8E8E8" stroke="#999" strokeWidth="0.5" />
        <text x="20" y="80" textAnchor="middle" fontSize="5" fill="#AAA">WC</text>
      </g>
      {/* Door swing */}
      <path d="M 380 140 Q 340 140 340 100" fill="none" stroke="#CCC" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="340" y1="140" x2="380" y2="140" stroke="#CCC" strokeWidth="1" />
      <text x="200" y="180" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">BATHROOM</text>
    </>
  );
}

function DoubleVanityPlan({ vanityColor, vanityStroke, hwColor, config }) {
  return (
    <>
      {/* Vanity cabinet — full width */}
      <rect x="25" y="25" width="350" height="55" fill={vanityColor} stroke={vanityStroke} strokeWidth="1" />
      <rect x="25" y="77" width="350" height="8" fill="#F0EDE8" stroke="#CCC" strokeWidth="0.5" />
      {/* Left basin */}
      <ellipse cx="115" cy="72" rx="22" ry="14" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx="115" cy="72" r="3" fill={hwColor} />
      {/* Right basin */}
      <ellipse cx="285" cy="72" rx="22" ry="14" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx="285" cy="72" r="3" fill={hwColor} />
      {/* Doors */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={28 + i * 50} y="28" width="46" height="46" fill="none" stroke={vanityStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      {/* Handles */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={46 + i * 50} y="50" width="10" height="3" rx="1" fill={hwColor} />
      ))}
      {/* Toilet */}
      <g transform="translate(55,120)">
        <rect x="0" y="0" width="40" height="55" rx="3" fill="#F0F0F0" stroke="#999" strokeWidth="1" />
        <ellipse cx="20" cy="40" rx="16" ry="18" fill="#E8E8E8" stroke="#999" strokeWidth="0.5" />
        <text x="20" y="80" textAnchor="middle" fontSize="5" fill="#AAA">WC</text>
      </g>
      <text x="200" y="190" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">DOUBLE VANITY BATHROOM</text>
    </>
  );
}

function PowderRoomPlan({ vanityColor, vanityStroke, hwColor, config }) {
  return (
    <>
      {/* Compact vanity */}
      <rect x="130" y="25" width="140" height="45" fill={vanityColor} stroke={vanityStroke} strokeWidth="1" />
      <rect x="130" y="67" width="140" height="7" fill="#F0EDE8" stroke="#CCC" strokeWidth="0.5" />
      <ellipse cx="200" cy="65" rx="18" ry="12" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx="200" cy="65" r="2.5" fill={hwColor} />
      {/* Toilet centered */}
      <g transform="translate(160,140)">
        <rect x="0" y="0" width="80" height="90" rx="4" fill="#F0F0F0" stroke="#999" strokeWidth="1" />
        <ellipse cx="40" cy="68" rx="30" ry="26" fill="#E8E8E8" stroke="#999" strokeWidth="0.5" />
        <text x="40" y="120" textAnchor="middle" fontSize="5" fill="#AAA">WC</text>
      </g>
      <text x="300" y="180" textAnchor="middle" fontSize="7" fill="#AAAAAA" letterSpacing="2">POWDER ROOM</text>
    </>
  );
}

function MasterSuitePlan({ vanityColor, vanityStroke, hwColor, config }) {
  return (
    <>
      {/* Vanity left */}
      <rect x="25" y="25" width="160" height="45" fill={vanityColor} stroke={vanityStroke} strokeWidth="1" />
      <rect x="25" y="67" width="160" height="7" fill="#F0EDE8" stroke="#CCC" strokeWidth="0.5" />
      <ellipse cx="105" cy="65" rx="18" ry="12" fill="#E8F4F8" stroke="#9AB" strokeWidth="1" />
      <circle cx="105" cy="65" r="2.5" fill={hwColor} />
      {/* Doors */}
      <rect x="28" y="28" width="74" height="36" fill="none" stroke={vanityStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      <rect x="108" y="28" width="74" height="36" fill="none" stroke={vanityStroke} strokeWidth="0.5" strokeDasharray="2,2" />
      <rect x="63" y="50" width="10" height="3" rx="1" fill={hwColor} />
      <rect x="143" y="50" width="10" height="3" rx="1" fill={hwColor} />

      {/* Shower right — layout differs per shower type */}
      {config.shower === 'walkin-glass' && (
        <>
          <rect x="215" y="25" width="165" height="110" fill="#E8F4F8" stroke="#9AB" strokeWidth="1.5" />
          <line x1="215" y1="25" x2="215" y2="135" stroke="#87CEEB" strokeWidth="2.5" />
          <text x="297" y="83" textAnchor="middle" fontSize="6" fill="#9AB">SHOWER</text>
        </>
      )}
      {config.shower === 'tub-shower' && (
        <>
          {/* Single combined tub/shower fixture */}
          <rect x="215" y="25" width="165" height="110" rx="4" fill="#D8EEF5" stroke="#9AB" strokeWidth="1.5" />
          <line x1="215" y1="25" x2="215" y2="135" stroke="#87CEEB" strokeWidth="2.5" />
          <text x="297" y="83" textAnchor="middle" fontSize="6" fill="#9AB">TUB / SHOWER</text>
        </>
      )}
      {config.shower === 'standalone' && (
        <>
          {/* Separate tub */}
          <rect x="215" y="25" width="70" height="60" rx="4" fill="#D8EEF5" stroke="#9AB" strokeWidth="1" />
          <text x="250" y="58" textAnchor="middle" fontSize="6" fill="#9AB">TUB</text>
          {/* Separate shower stall, clearly divided from the tub */}
          <rect x="295" y="25" width="85" height="110" fill="#E0EFF5" stroke="#9AB" strokeWidth="1.5" />
          <text x="337" y="83" textAnchor="middle" fontSize="6" fill="#9AB">SHOWER</text>
        </>
      )}
      {config.shower === 'wet-room' && (
        <>
          <path d="M215,25 L380,25 L380,135 L215,135 Z" fill="#D8EEF5" stroke="#9AB" strokeWidth="0.5" strokeDasharray="3,2" />
          <text x="297" y="83" textAnchor="middle" fontSize="6" fill="#9AB">WET ROOM</text>
        </>
      )}

      {/* Toilet */}
      <g transform="translate(30,130)">
        <rect x="0" y="0" width="50" height="70" rx="3" fill="#F0F0F0" stroke="#999" strokeWidth="1" />
        <ellipse cx="25" cy="52" rx="20" ry="22" fill="#E8E8E8" stroke="#999" strokeWidth="0.5" />
        <text x="25" y="95" textAnchor="middle" fontSize="5" fill="#AAA">WC</text>
      </g>

      <text x="130" y="240" textAnchor="middle" fontSize="6" fill="#AAAAAA" letterSpacing="1">MASTER ENSUITE</text>
    </>
  );
}