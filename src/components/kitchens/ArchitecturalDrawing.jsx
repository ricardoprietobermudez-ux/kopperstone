import React from 'react';

// Unified brand palette
const C = {
  bg: '#F5EFE6', // cream
  bgDark: '#0E1A2B', // navy
  line: '#2A2E33', // charcoal
  lineMid: '#6B6560', // warm grey
  gold: '#C9A77C',
  cabinet: '#D6C9B8',
  cabinetDark: '#3A3028',
  appliance: '#1C1C1C',
  wood: '#C49A6C',
  concrete: '#9E9E98',
  marble: '#EDE8E1',
  text: '#2A2E33',
  textLight: '#8C8680'
};

function DrawingHeader({ name }) {
  return (
    <g>
      <text x="24" y="22" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="2" fill={C.gold} textAnchor="start" fontWeight="500">KOPPERSTONE</text>
      <text x="24" y="32" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.5" fill={C.textLight} textAnchor="start">{name.toUpperCase()} / ARCHITECTURAL DRAWING</text>
      <line x1="24" y1="38" x2="520" y2="38" stroke={C.gold} strokeWidth="0.5" opacity="0.5" />
    </g>);

}

function ScaleBar({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight} letterSpacing="1">SCALE 1 : 50</text>
      <g transform="translate(0,6)">
        <rect x="0" y="0" width="20" height="4" fill={C.line} />
        <rect x="20" y="0" width="20" height="4" fill="none" stroke={C.line} strokeWidth="0.5" />
        <rect x="40" y="0" width="20" height="4" fill={C.line} />
        <text x="0" y="12" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>0</text>
        <text x="18" y="12" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>1m</text>
        <text x="38" y="12" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>2m</text>
      </g>
    </g>);

}

function NorthArrow({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx="10" cy="10" r="9" fill="none" stroke={C.gold} strokeWidth="0.8" />
      <polygon points="10,2 7,14 10,11 13,14" fill={C.gold} />
      <text x="10" y="24" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>N</text>
    </g>);

}

function SectionLabel({ x, y, label }) {
  return (
    <text x={x} y={y} fontFamily="Inter, sans-serif" fontSize="8" fill={C.text} fontStyle="italic" fontWeight="400">{label}</text>);

}

function DimLine({ x1, y1, x2, y2, label, orient = 'h' }) {
  const mid = orient === 'h' ? { x: (x1 + x2) / 2, y: y1 - 6 } : { x: x1 - 8, y: (y1 + y2) / 2 };
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.lineMid} strokeWidth="0.5" strokeDasharray="2,2" />
      <line x1={x1} y1={orient === 'h' ? y1 - 3 : y1} x2={x1} y2={orient === 'h' ? y1 + 3 : y1} stroke={C.lineMid} strokeWidth="0.5" />
      <line x1={x2} y1={orient === 'h' ? y1 - 3 : y2} x2={x2} y2={orient === 'h' ? y1 + 3 : y2} stroke={C.lineMid} strokeWidth="0.5" />
      <text x={mid.x} y={mid.y} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>{label}</text>
    </g>);

}

// ── MODERN COLLECTION ──────────────────────────────────────────────────────────
function ModernDrawing() {
  return (
    <svg viewBox="0 0 544 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="544" height="520" fill={C.bg} />
      <DrawingHeader name="Modern Collection" />

      {/* Plan View */}
      <SectionLabel x="24" y="60" label="Plan View" />
      <line x1="24" y1="63" x2="110" y2="63" stroke={C.line} strokeWidth="0.8" />

      {/* Room outline 4400 x 3000 */}
      <rect x="40" y="72" width="320" height="180" fill="none" stroke={C.line} strokeWidth="1.5" />
      {/* Back wall cabinets */}
      <rect x="40" y="72" width="320" height="36" fill={C.cabinet} stroke={C.line} strokeWidth="0.8" />
      {/* Cooktop */}
      <rect x="160" y="76" width="60" height="28" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="190" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">COOKTOP</text>
      {/* Oven right */}
      <rect x="320" y="72" width="40" height="36" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="340" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">OVEN</text>
      {/* Left wall cabinets — L shape */}
      <rect x="40" y="108" width="40" height="100" fill={C.cabinet} stroke={C.line} strokeWidth="0.8" />
      {/* Sink in left cabinet */}
      <rect x="44" y="128" width="32" height="24" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      <text x="60" y="143" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>SINK</text>
      {/* Door swing */}
      <path d="M40,208 Q60,208 60,228" fill="none" stroke={C.lineMid} strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Room label */}
      <text x="220" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={C.textLight} letterSpacing="3">KITCHEN</text>
      <text x="220" y="188" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill={C.textLight}>9.6 m²</text>

      <DimLine x1="40" y1="265" x2="360" y2="265" label="4400" orient="h" />
      <DimLine x1="368" y1="72" x2="368" y2="252" label="3000" orient="v" />

      {/* Elevation A */}
      <SectionLabel x="24" y="295" label="Elevation A — Back wall" />
      <line x1="24" y1="298" x2="180" y2="298" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="308" width="320" height="140" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Upper cabinets */}
      {[0, 1, 2, 3, 4, 5].map((n) =>
      <rect key={n} x={40 + n * 53} y={308} width={52} height={52} fill={C.cabinet} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Hood */}
      <rect x="152" y="310" width="80" height="32" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="192" y="330" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill="white" letterSpacing="1">· HOOD ·</text>
      {/* Countertop line */}
      <rect x="40" y="360" width="320" height="6" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      {/* Lower cabinets */}
      {[0, 1, 2, 3, 4, 5].map((n) =>
      <rect key={n} x={40 + n * 53} y={366} width={52} height={58} fill={C.cabinet} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Oven */}
      <rect x="299" y="310" width="61" height="114" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="330" y="372" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="white">OVEN</text>

      <text x="40" y="458" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="451" x2="360" y2="451" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="190" y="462" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>4400</text>

      {/* Legend */}
      <g transform="translate(24,475)">
        <text fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.text} letterSpacing="1.5" fontWeight="500">LEGEND</text>
        <rect x="0" y="8" width="10" height="10" fill={C.cabinet} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Cabinetry</text>
        <rect x="80" y="8" width="10" height="10" fill={C.appliance} />
        <text x="94" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Appliance</text>
        <rect x="160" y="8" width="10" height="10" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
        <text x="174" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Marble</text>
        <rect x="240" y="8" width="10" height="10" fill="none" stroke={C.line} strokeWidth="0.5" strokeDasharray="2,2" />
        <text x="254" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Wall structure</text>
        <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>All dimensions in mm · FFL = Finished Floor Level</text>
      </g>
      <ScaleBar x="380" y="475" />
    </svg>);

}

// ── FRENCH COLLECTION ──────────────────────────────────────────────────────────
function FrenchDrawing() {
  const bgFrench = '#EDE5D8';
  const cab = '#D4C5AF'; // cabinet / counter fill
  const doorPanel = '#C8B89A'; // door panel
  const bsMarble = '#C8C0B4'; // backsplash / marble
  return (
    <svg viewBox="0 0 544 820" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="544" height="820" fill={bgFrench} />
      <DrawingHeader name="French Collection" />

      {/* ── PLAN VIEW ── */}
      <SectionLabel x="24" y="60" label="Plan View" />
      <line x1="24" y1="63" x2="100" y2="63" stroke={C.line} strokeWidth="0.8" />

      {/* Room outline — U-shape: 6000 x 3200 */}
      {/* Outer wall */}
      <rect x="40" y="72" width="380" height="210" fill="none" stroke={C.line} strokeWidth="1.5" />
      {/* Back wall cabinets (top) */}
      <rect x="40" y="72" width="380" height="38" fill={cab} stroke={C.line} strokeWidth="0.8" />
      {/* Cooktop on back wall */}
      <rect x="168" y="77" width="64" height="28" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <circle cx="178" cy="84" r="4" fill="none" stroke="#888" strokeWidth="0.8" />
      <circle cx="194" cy="84" r="4" fill="none" stroke="#888" strokeWidth="0.8" />
      <circle cx="178" cy="98" r="4" fill="none" stroke="#888" strokeWidth="0.8" />
      <circle cx="194" cy="98" r="4" fill="none" stroke="#888" strokeWidth="0.8" />
      <text x="214" y="95" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">COOKTOP</text>
      {/* Left wall cabinets */}
      <rect x="40" y="110" width="38" height="130" fill={cab} stroke={C.line} strokeWidth="0.8" />
      {/* Sink on left wall */}
      <rect x="43" y="128" width="32" height="24" fill={bsMarble} stroke={C.line} strokeWidth="0.5" />
      <text x="59" y="143" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4" fill={C.textLight}>SINK</text>
      {/* Right wall cabinets */}
      <rect x="382" y="110" width="38" height="130" fill={cab} stroke={C.line} strokeWidth="0.8" />

      <NorthArrow x="430" y="72" />

      <text x="230" y="188" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill={C.textLight} letterSpacing="3">KITCHEN</text>
      <text x="230" y="201" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill={C.textLight}>21.6 m²</text>

      <DimLine x1="40" y1="292" x2="420" y2="292" label="6000" orient="h" />
      <DimLine x1="428" y1="72" x2="428" y2="282" label="3200" orient="v" />

      {/* ── ELEVATION A — Back wall ── */}
      <SectionLabel x="24" y="318" label="Elevation A — Back wall" />
      <line x1="24" y1="321" x2="200" y2="321" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="330" width="420" height="165" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Height markers */}
      <text x="34" y="336" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>2700</text>
      <text x="34" y="374" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>2400</text>
      <text x="34" y="408" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>1500</text>
      <text x="34" y="440" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>900</text>

      {/* Upper cabinets with arched doors — 8 units */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
        const x = 40 + n * 52;
        return (
          <g key={n}>
            <rect x={x} y={330} width={51} height={44} fill={cab} stroke={C.line} strokeWidth="0.6" />
            {/* Arch detail inner panel */}
            <rect x={x + 4} y={334} width={43} height={36} fill={doorPanel} stroke={C.line} strokeWidth="0.3" />
            <path d={`M${x + 4},${345} Q${x + 25},${334} ${x + 47},${345}`} fill="none" stroke={C.line} strokeWidth="0.4" />
          </g>);

      })}
      {/* Hood centre */}
      <rect x="168" y="332" width="84" height="30" fill="#8B7355" stroke={C.line} strokeWidth="0.5" />
      <text x="210" y="351" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="white" letterSpacing="1">HOOD</text>

      {/* Backsplash zone */}
      <rect x="40" y="374" width="420" height="36" fill={bsMarble} stroke={C.line} strokeWidth="0.4" opacity="0.6" />

      {/* Countertop */}
      <rect x="40" y="410" width="420" height="7" fill={cab} stroke={C.line} strokeWidth="0.5" />

      {/* Lower cabinets — 8 units */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
        const x = 40 + n * 52;
        return (
          <g key={n}>
            <rect x={x} y={417} width={51} height={70} fill={cab} stroke={C.line} strokeWidth="0.6" />
            <rect x={x + 4} y={421} width={43} height={62} fill={doorPanel} stroke={C.line} strokeWidth="0.3" />
          </g>);

      })}
      {/* Integrated appliance columns on sides */}
      <rect x="40" y="330" width="42" height="157" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="61" y="412" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">REF</text>
      <rect x="418" y="330" width="42" height="157" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="439" y="412" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">OVN</text>

      <text x="40" y="502" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="496" x2="460" y2="496" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="245" y="506" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>6000</text>

      {/* ── ELEVATION B — Left wall ── */}
      <SectionLabel x="24" y="524" label="Elevation B — Left wall" />
      <line x1="24" y1="527" x2="200" y2="527" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="534" width="280" height="150" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Height markers */}
      <text x="34" y="540" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>2700</text>
      <text x="34" y="578" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>2400</text>
      <text x="34" y="620" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>900</text>

      {/* Upper cabinets left wall — 4 units + window gap */}
      {[0, 1].map((n) =>
      <g key={n}>
          <rect x={40 + n * 52} y={534} width={51} height={44} fill={cab} stroke={C.line} strokeWidth="0.6" />
          <rect x={44 + n * 52} y={538} width={43} height={36} fill={doorPanel} stroke={C.line} strokeWidth="0.3" />
          <path d={`M${44 + n * 52},${549} Q${65 + n * 52},${538} ${86 + n * 52},${549}`} fill="none" stroke={C.line} strokeWidth="0.4" />
        </g>
      )}
      {/* Window */}
      <rect x="148" y="534} " width="80" height="44" fill="none" stroke={C.line} strokeWidth="0.5" />
      <rect x="152" y="538" width="72" height="36" fill="#DAEAF5" stroke={C.line} strokeWidth="0.4" opacity="0.7" />
      <text x="188" y="560" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>WINDOW</text>
      {/* Remaining uppers */}
      {[0, 1].map((n) =>
      <g key={n}>
          <rect x={232 + n * 44} y={534} width={43} height={44} fill={cab} stroke={C.line} strokeWidth="0.6" />
          <rect x={236 + n * 44} y={538} width={35} height={36} fill={doorPanel} stroke={C.line} strokeWidth="0.3" />
        </g>
      )}

      {/* Backsplash zone */}
      <rect x="40" y="578" width="280" height="28" fill={bsMarble} stroke={C.line} strokeWidth="0.4" opacity="0.6" />

      {/* Countertop */}
      <rect x="40" y="606" width="280" height="7" fill={cab} stroke={C.line} strokeWidth="0.5" />

      {/* Sink base cabinet */}
      <rect x="40" y="613" width="280" height="65" fill={cab} stroke={C.line} strokeWidth="0.6" />
      {/* Individual lower door panels */}
      {[0, 1, 2, 3, 4].map((n) =>
      <rect key={n} x={44 + n * 55} y={617} width={51} height={57} fill={doorPanel} stroke={C.line} strokeWidth="0.3" />
      )}
      {/* Sink cutout */}
      <rect x="112" y="615" width="70" height="28" fill={bsMarble} stroke={C.line} strokeWidth="0.5" />
      <text x="147" y="633" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>SINK</text>

      <text x="40" y="687" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="681" x2="320" y2="681" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="175" y="690" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>3600</text>

      {/* ── LEGEND ── */}
      <g transform="translate(340,590)">
        <text fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.text} letterSpacing="1.5" fontWeight="500">LEGEND</text>
        <rect x="0" y="10" width="10" height="10" fill={cab} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="19" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>Cabinetry / counter</text>
        <rect x="0" y="26" width="10" height="10" fill={doorPanel} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="35" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>Door panel</text>
        <rect x="0" y="42" width="10" height="10" fill={bsMarble} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="51" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>Backsplash / marble</text>
        <rect x="0" y="58" width="10" height="10" fill={C.appliance} />
        <text x="14" y="67" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>Appliance / fixture</text>
        <rect x="0" y="74" width="10" height="4" fill={C.line} />
        <text x="14" y="82" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>Overhead unit</text>
      </g>

      <ScaleBar x="340" y="700" />
      <text x="340" y="720" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>All dimensions in mm</text>
      <text x="340" y="729" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>FPL = Finished Floor Level</text>
    </svg>);

}

// ── AMERICAN COLLECTION ────────────────────────────────────────────────────────
function AmericanDrawing() {
  return (
    <svg viewBox="0 0 544 540" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="544" height="540" fill={C.bg} />
      <DrawingHeader name="American Collection" />

      <SectionLabel x="24" y="60" label="Plan View" />
      <line x1="24" y1="63" x2="110" y2="63" stroke={C.line} strokeWidth="0.8" />

      {/* Room 5800 x 4500 */}
      <rect x="40" y="72" width="380" height="220" fill="none" stroke={C.line} strokeWidth="1.5" />
      {/* Back wall */}
      <rect x="40" y="72" width="380" height="40" fill={C.cabinetDark} stroke={C.line} strokeWidth="0.8" />
      {/* Fridge */}
      <rect x="44" y="76" width="50" height="32" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="69" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">FRIDGE</text>
      {/* Glass display */}
      <rect x="100" y="76" width="60" height="32" fill={C.cabinetDark} stroke={C.gold} strokeWidth="0.5" />
      <text x="130" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill={C.gold}>GLASS DISPLAY</text>
      {/* DBL Oven */}
      <rect x="280" y="72" width="60" height="40" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="310" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">DBL OVEN</text>
      {/* Range */}
      <rect x="346" y="72" width="70" height="40" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="381" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">RANGE</text>

      {/* Island */}
      <rect x="130" y="162" width="200" height="80" fill={C.marble} stroke={C.line} strokeWidth="1" />
      <text x="230" y="207" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill={C.textLight} letterSpacing="3">ISLAND</text>
      {/* Bar stools */}
      {[155, 205, 255].map((x) =>
      <circle key={x} cx={x} cy={268} r={10} fill="none" stroke={C.gold} strokeWidth="1" />
      )}

      <text x="350" y="185" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill={C.textLight} letterSpacing="2">KITCHEN</text>
      <text x="350" y="198" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>20.1 m²</text>

      <DimLine x1="40" y1="303" x2="420" y2="303" label="5800" orient="h" />
      <DimLine x1="428" y1="72" x2="428" y2="292" label="4500" orient="v" />

      {/* Elevation A */}
      <SectionLabel x="24" y="328" label="Elevation A — Back wall" />
      <line x1="24" y1="331" x2="180" y2="331" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="340" width="380" height="148" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Fridge column */}
      <rect x="40" y="340" width="58" height="148" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="69" y="420" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="white" dominantBaseline="middle">FRIDGE</text>
      {/* Upper dark cabinets */}
      {[1, 2, 3, 4].map((n) =>
      <rect key={n} x={100 + n * 48} y={340} width={46} height={54} fill={C.cabinetDark} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Hood */}
      <rect x="148" y="342" width="96" height="36" fill="#2A2420" stroke={C.gold} strokeWidth="0.5" />
      <text x="196" y="364" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.gold} letterSpacing="1">HOOD</text>
      {/* Countertop */}
      <rect x="100" y="394" width="280" height="8" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      {/* Lower dark cabinets */}
      {[0, 1, 2, 3, 4, 5].map((n) =>
      <rect key={n} x={100 + n * 46} y={402} width={44} height={72} fill={C.cabinetDark} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Range / oven right */}
      <rect x="378" y="340" width="42" height="148" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="399" y="418" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">DBL{'\n'}OVEN</text>

      <text x="40" y="496" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="490" x2="420" y2="490" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="225" y="500" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>5800</text>

      <g transform="translate(24,510)">
        <text fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.text} letterSpacing="1.5" fontWeight="500">LEGEND</text>
        <rect x="0" y="8" width="10" height="10" fill={C.cabinetDark} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Walnut cabinetry</text>
        <rect x="100" y="8" width="10" height="10" fill={C.appliance} />
        <text x="114" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Appliance</text>
        <rect x="180" y="8" width="10" height="10" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
        <text x="194" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Marble</text>
        <rect x="250" y="8" width="10" height="10" fill={C.gold} opacity="0.3" stroke={C.gold} strokeWidth="0.5" />
        <text x="264" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Gold detail</text>
      </g>
      <ScaleBar x="380" y="510" />
    </svg>);

}

// ── INDUSTRIAL COLLECTION ──────────────────────────────────────────────────────
function IndustrialDrawing() {
  const cabinetGrey = '#4A4D52';
  const oakWood = '#C49A6C';
  return (
    <svg viewBox="0 0 544 540" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="544" height="540" fill={C.bg} />
      <DrawingHeader name="Industrial Collection" />

      <SectionLabel x="24" y="60" label="Plan View" />
      <line x1="24" y1="63" x2="110" y2="63" stroke={C.line} strokeWidth="0.8" />

      {/* Room 5800 x 4070 */}
      <rect x="40" y="72" width="380" height="210" fill="none" stroke={C.line} strokeWidth="1.5" />
      {/* Back wall */}
      <rect x="40" y="72" width="380" height="40" fill={cabinetGrey} stroke={C.line} strokeWidth="0.8" />
      {/* Fridge */}
      <rect x="44" y="76" width="46" height="32" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="67" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">FRIDGE</text>
      {/* Oven */}
      <rect x="96" y="76" width="40" height="32" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="116" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">OVEN</text>
      {/* Sink */}
      <rect x="220" y="76" width="60" height="32" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      <text x="250" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill={C.textLight}>SINK</text>
      {/* Tall storage */}
      <rect x="374" y="72" width="46" height="210" fill={cabinetGrey} stroke={C.line} strokeWidth="0.8" />
      <text x="397" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill="white">TALL{'\n'}STOR.</text>

      {/* Breakfast bar island */}
      <rect x="100" y="155" width="200" height="65" fill={oakWood} stroke={C.line} strokeWidth="1" />
      <text x="200" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill="white" letterSpacing="2">BREAKFAST BAR</text>

      {/* Dining zone */}
      <rect x="80" y="235" width="100" height="40" fill={oakWood} opacity="0.4" stroke={C.line} strokeWidth="0.5" />
      <text x="130" y="258" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>DINING</text>

      <DimLine x1="40" y1="295" x2="420" y2="295" label="5800" orient="h" />
      <DimLine x1="428" y1="72" x2="428" y2="282" label="4070" orient="v" />

      {/* Elevation A */}
      <SectionLabel x="24" y="322" label="Elevation A — Back wall" />
      <line x1="24" y1="325" x2="180" y2="325" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="334" width="380" height="138" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Exposed ductwork header */}
      <rect x="40" y="334" width="380" height="20" fill="#333638" stroke={C.line} strokeWidth="0.5" />
      <text x="230" y="348" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="#888" letterSpacing="2">EXPOSED DUCTWORK</text>
      {/* Grey upper cabinets */}
      {[0, 1].map((n) =>
      <rect key={n} x={40 + n * 90} y={354} width={88} height={44} fill={cabinetGrey} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Walnut open shelf middle */}
      <rect x="220" y="356" width="200" height="12" fill={oakWood} stroke={C.line} strokeWidth="0.5" />
      <rect x="220" y="376" width="200" height="12" fill={oakWood} stroke={C.line} strokeWidth="0.5" />
      {/* Countertop */}
      <rect x="40" y="398" width="380" height="6" fill={C.concrete} stroke={C.line} strokeWidth="0.5" />
      {/* Lower cabinets */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) =>
      <rect key={n} x={40 + n * 47} y={404} width={45} height={62} fill={cabinetGrey} stroke={C.line} strokeWidth="0.5" />
      )}
      {/* Sink cutout */}
      <rect x="178" y="406" width="68" height="30" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      <text x="212" y="424" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>SINK</text>

      <text x="40" y="477" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="471" x2="420" y2="471" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="225" y="482" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>5800</text>

      <g transform="translate(24,492)">
        <text fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.text} letterSpacing="1.5" fontWeight="500">LEGEND</text>
        <rect x="0" y="8" width="10" height="10" fill={cabinetGrey} />
        <text x="14" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Dark grey cabinetry</text>
        <rect x="110" y="8" width="10" height="10" fill={oakWood} />
        <text x="124" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Oak wood</text>
        <rect x="185" y="8" width="10" height="10" fill={C.appliance} />
        <text x="199" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Appliance</text>
        <rect x="260" y="8" width="10" height="10" fill={C.concrete} stroke={C.line} strokeWidth="0.5" />
        <text x="274" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Concrete</text>
        <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>All dimensions in mm · FFL = Finished Floor Level</text>
      </g>
      <ScaleBar x="380" y="492" />
    </svg>);

}

// ── EUROPEAN COLLECTION ────────────────────────────────────────────────────────
function EuropeanDrawing() {
  const cabinetGrey = '#C8C4BC';
  return (
    <svg viewBox="0 0 544 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="544" height="520" fill={C.bg} />
      <DrawingHeader name="European Collection" />

      <SectionLabel x="24" y="60" label="Plan View" />
      <line x1="24" y1="63" x2="110" y2="63" stroke={C.line} strokeWidth="0.8" />

      {/* Room 5600 x 3600 */}
      <rect x="40" y="72" width="370" height="195" fill="none" stroke={C.line} strokeWidth="1.5" />
      {/* Back wall cabinets */}
      <rect x="40" y="72" width="370" height="38" fill={cabinetGrey} stroke={C.line} strokeWidth="0.8" />
      {/* Fridge */}
      <rect x="44" y="76" width="52" height="30" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="70" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">FRIDGE</text>
      {/* Oven */}
      <rect x="102" y="76" width="42" height="30" fill={C.appliance} stroke={C.line} strokeWidth="0.5" />
      <text x="123" y="94" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="4.5" fill="white">OVEN</text>

      {/* Island with sink */}
      <rect x="120" y="155" width="210" height="75" fill={C.marble} stroke={C.line} strokeWidth="1" />
      <rect x="155" y="162" width="55" height="30" fill="none" stroke={C.line} strokeWidth="0.6" />
      <text x="182" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="5" fill={C.textLight}>SINK</text>
      <text x="225" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill={C.textLight} letterSpacing="2">ISLAND</text>

      <text x="340" y="175" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill={C.textLight} letterSpacing="2">KITCHEN</text>
      <text x="340" y="188" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>18.4 m²</text>

      <DimLine x1="40" y1="278" x2="410" y2="278" label="5600" orient="h" />
      <DimLine x1="418" y1="72" x2="418" y2="267" label="3600" orient="v" />

      {/* Elevation A */}
      <SectionLabel x="24" y="304" label="Elevation A — Back wall" />
      <line x1="24" y1="307" x2="180" y2="307" stroke={C.line} strokeWidth="0.8" />

      <rect x="40" y="316" width="370" height="140" fill="none" stroke={C.line} strokeWidth="1" />
      {/* Upper grey cabinets */}
      {[0, 1, 2, 3, 4, 5, 6].map((n) =>
      <rect key={n} x={40 + n * 52} y={316} width={50} height={52} fill={cabinetGrey} stroke={C.line} strokeWidth="0.6" />
      )}
      {/* Glass inserts on 2 upper cabinets */}
      {[1, 2].map((n) =>
      <rect key={n} x={44 + n * 52} y={320} width={42} height={42} fill="none" stroke={C.gold} strokeWidth="0.5" strokeDasharray="1.5,1.5" />
      )}
      {/* Hood */}
      <rect x="196" y="318" width="86" height="34" fill="#8B8480" stroke={C.line} strokeWidth="0.5" />
      <text x="239" y="339" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="white" letterSpacing="1">HOOD</text>
      {/* Countertop — marble */}
      <rect x="40" y="368" width="370" height="7" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
      {/* Lower grey cabinets */}
      {[0, 1, 2, 3, 4, 5, 6].map((n) =>
      <rect key={n} x={40 + n * 52} y={375} width={50} height={62} fill={cabinetGrey} stroke={C.line} strokeWidth="0.6" />
      )}

      <text x="40" y="450" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>FFL ±0</text>
      <line x1="40" y1="443" x2="410" y2="443" stroke={C.lineMid} strokeWidth="0.5" />
      <text x="220" y="454" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill={C.textLight}>5600</text>

      <g transform="translate(24,466)">
        <text fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.text} letterSpacing="1.5" fontWeight="500">LEGEND</text>
        <rect x="0" y="8" width="10" height="10" fill={cabinetGrey} stroke={C.line} strokeWidth="0.5" />
        <text x="14" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Cabinetry</text>
        <rect x="75" y="8" width="10" height="10" fill={C.appliance} />
        <text x="89" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Appliance</text>
        <rect x="155" y="8" width="10" height="10" fill={C.marble} stroke={C.line} strokeWidth="0.5" />
        <text x="169" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Marble</text>
        <rect x="225" y="8" width="10" height="10" fill="none" stroke={C.gold} strokeWidth="0.5" strokeDasharray="1.5,1.5" />
        <text x="239" y="17" fontFamily="Inter, sans-serif" fontSize="6.5" fill={C.textLight}>Glass display</text>
        <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="5.5" fill={C.textLight}>All dimensions in mm · FFL = Finished Floor Level</text>
      </g>
      <ScaleBar x="380" y="468" />
    </svg>);

}

const DRAWING_MAP = {
  modern: ModernDrawing,
  french: FrenchDrawing,
  american: AmericanDrawing,
  industrial: IndustrialDrawing,
  european: EuropeanDrawing
};

export default function ArchitecturalDrawing({ collectionId, collectionName }) {
  const DrawingComponent = DRAWING_MAP[collectionId];
  if (!DrawingComponent) return null;
  return null;




}