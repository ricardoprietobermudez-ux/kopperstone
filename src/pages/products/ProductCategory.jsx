import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const SOLID  = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/98dc5de89_generated_image.png';
const QUARTZ = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/6285b3a94_generated_image.png';
const CAB    = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/7caa8e76d_generated_image.png';
const VAN    = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/4454f1e2c_generated_image.png';
const SHOWER = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/8eb20d42b_generated_image.png';
const SINK   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/5f01c3e72_generated_image.png';
const APPL   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/d69270869_generated_image.png';
const BATH   = 'https://media.base44.com/images/public/69fe4ed5912775ef1d08d528/24219b1c5_generated_image.png';

const categoryData = {
  quartz: {
    title: 'Quartz Countertops',
    hero: QUARTZ,
    sub: 'Engineered Stone · NSF/ANSI 51 · Greenguard Gold',
    desc: 'Specification-grade engineered quartz countertops for hotel rooms, multi-family residential kitchens, and commercial applications. 93% natural quartz content. Pre-cut to specification, container-ready.',
    specs: [
      { label: 'Material',          value: '93% Natural Quartz + Polymer Resin Binder' },
      { label: 'Standard Sizes',    value: '3200mm × 1600mm · 3000mm × 1400mm · Custom available' },
      { label: 'Thickness Options', value: '12mm · 20mm · 30mm' },
      { label: 'Surface Finish',    value: 'Polished · Honed · Suede · Concrete texture' },
      { label: 'Edge Profiles',     value: 'Eased · Beveled · Bullnose · Mitered · Waterfall' },
      { label: 'Color Range',       value: 'Pure white · Veined marble look · Concrete greys · Bold solid colors' },
    ],
    collections: [
      { name: 'Calacatta Alto',      sub: '20mm · Polished · Heavy Vein', code: 'QZ-CA-001' },
      { name: 'Statuario Vena',      sub: '20mm · Honed · Fine Vein',     code: 'QZ-SV-002' },
      { name: 'Concrete Grey',       sub: '30mm · Suede · Uniform',        code: 'QZ-CG-003' },
      { name: 'Bianco Carrara',      sub: '20mm · Polished · Classic',    code: 'QZ-BC-004' },
      { name: 'Nero Assoluto',       sub: '20mm · Polished · Deep Black',  code: 'QZ-NA-005' },
      { name: 'Botticino Beige',     sub: '20mm · Honed · Warm Tone',     code: 'QZ-BB-006' },
      { name: 'Sahara Storm',        sub: '30mm · Suede · Sandy Vein',    code: 'QZ-SS-007' },
      { name: 'Glacier White',       sub: '12mm · Polished · Pure',       code: 'QZ-GW-008' },
    ],
  },
  cabinets: {
    title: 'Kitchen Cabinets',
    hero: CAB,
    sub: 'CARB Phase 2 · KCMA Certified · Soft-Close Standard',
    desc: 'Full-range kitchen cabinet program for multi-family residential, hotel suites, and commercial fit-out. Custom and semi-custom programs with 6–10 week lead times. Private label available.',
    specs: [
      { label: 'Construction',    value: 'Plywood box · Solid wood face frame · Dovetail drawer boxes' },
      { label: 'Door Styles',     value: 'Shaker · Flat panel · Raised panel · Slab · Louvered' },
      { label: 'Box Material',    value: '3/4" plywood · CARB Phase 2 compliant' },
      { label: 'Hardware',        value: 'Blum soft-close hinges & drawer slides standard' },
      { label: 'Finishes',        value: 'Thermofoil · Lacquer · Melamine · Wood veneer · Natural hardwood' },
      { label: 'Program Options', value: 'Semi-custom (stock SKUs) · Full custom · Private label' },
    ],
    collections: [
      { name: 'Komo Kitchen',        sub: 'Flat Panel · Matte Lacquer',    code: 'KC-KM-001' },
      { name: 'Lolita Brown',        sub: 'Customized · Walnut Thermofoil', code: 'KC-LB-002' },
      { name: 'Becca Wooden',        sub: 'Melamine · Light Oak',          code: 'KC-BW-003' },
      { name: 'Nordic White Shaker', sub: 'Shaker · Bright White',         code: 'KC-NW-004' },
      { name: 'Charcoal Slab',       sub: 'Slab · Dark Charcoal',          code: 'KC-CS-005' },
      { name: 'Warm Maple',          sub: 'Shaker · Natural Maple',        code: 'KC-WM-006' },
      { name: 'Sage Green Shaker',   sub: 'Shaker · Sage Green',           code: 'KC-SG-007' },
      { name: 'Greige Flat Panel',   sub: 'Flat Panel · Greige Lacquer',   code: 'KC-GF-008' },
    ],
  },
  vanities: {
    title: 'Bathroom Vanities',
    hero: VAN,
    sub: 'Floating & Freestanding · CARB Phase 2 · CSA Plumbing',
    desc: 'Specification-grade bathroom vanity program for hotel, multi-family residential, and healthcare applications. Wall-mounted and freestanding configurations. Integrated basin options.',
    specs: [
      { label: 'Configurations',  value: 'Wall-mounted · Freestanding · Pedestal' },
      { label: 'Standard Widths', value: '24" · 30" · 36" · 48" · 60" · 72"' },
      { label: 'Box Material',    value: 'Plywood carcass · CARB Phase 2 compliant' },
      { label: 'Top Options',     value: 'Quartz · Solid surface · Cultured marble · Ceramic' },
      { label: 'Basin Options',   value: 'Undermount · Vessel · Integrated solid surface · Top-mount' },
      { label: 'Finishes',        value: 'White gloss · Matte white · Walnut · Grey · Custom color' },
    ],
    collections: [
      { name: 'Alto Floating',    sub: '36" · Matte White · Integrated Basin', code: 'BV-AF-001' },
      { name: 'Oslo Double',      sub: '60" · Natural Oak · Quartz Top',      code: 'BV-OD-002' },
      { name: 'Mira Single',      sub: '30" · Glossy White · Undermount',     code: 'BV-MS-003' },
      { name: 'Kensington',       sub: '48" · Dark Walnut · Solid Surface',   code: 'BV-KE-004' },
      { name: 'Drift Grey',       sub: '36" · Grey Lacquer · Quartz',         code: 'BV-DG-005' },
      { name: 'Porter Double',    sub: '72" · Matte Charcoal · Stone Top',    code: 'BV-PD-006' },
    ],
  },
  'shower-systems': {
    title: 'Shower Systems',
    hero: SHOWER,
    sub: 'Pans · Surrounds · Wall Panels · CSA B125.1',
    desc: 'Complete shower system specification including bases, wall panels, and fixtures for hotel rooms, multi-family bathrooms, and healthcare facilities. NSF/ANSI 61 certified plumbing components.',
    specs: [
      { label: 'Pan Material',    value: 'Solid surface acrylic · Cultured marble · Tile-ready foam' },
      { label: 'Panel Material',  value: 'Solid surface · Large format porcelain · Acrylic surround' },
      { label: 'Standard Sizes',  value: '32"×32" · 36"×36" · 36"×48" · 48"×48" · 60"×32" · Custom' },
      { label: 'Drain Configs',   value: 'Center · Linear · Corner · Offset' },
      { label: 'Compliance',      value: 'ADA accessible options · CSA B45.5 · IAPMO certified' },
      { label: 'Finish Options',  value: 'Matte white · Bone · Grey · Custom color-match' },
    ],
    collections: [
      { name: 'Planar Panel System',  sub: 'Solid Surface · Seamless', code: 'SS-PP-001' },
      { name: 'Linear Drain Base',    sub: 'Acrylic · ADA Option',     code: 'SS-LD-002' },
      { name: 'Hotel Alcove Kit',     sub: 'All-in-one · 60"×32"',    code: 'SS-HA-003' },
      { name: 'Premium Walkin',       sub: 'Open · Linear Drain',      code: 'SS-PW-004' },
      { name: 'Corner Enclosure',     sub: 'Neo-angle · Tempered Glass', code: 'SS-CE-005' },
      { name: 'Curbless Barrier-Free',sub: 'ADA · Slope Prefab',       code: 'SS-CB-006' },
    ],
  },
  'sinks-faucets': {
    title: 'Sinks & Faucets',
    hero: SINK,
    sub: 'NSF/ANSI 61 · CSA B125.1 · WaterSense',
    desc: 'Commercial-grade sinks and faucets for project-scale specification. Plumbing fixtures certified for both U.S. and Canadian market. Available in single and bulk-order quantities.',
    specs: [
      { label: 'Sink Materials',  value: 'Stainless 18/9 · Solid surface · Fireclay · Composite granite' },
      { label: 'Faucet Body',     value: 'Solid brass · Stainless steel body' },
      { label: 'Finishes',        value: 'Chrome · Brushed nickel · Matte black · Brushed gold · Oil-rubbed bronze' },
      { label: 'Certifications',  value: 'NSF/ANSI 61 · CSA B125.1 · WaterSense (where applicable)' },
      { label: 'Lead Content',    value: '<0.25% weighted average lead · NSF/ANSI 372 compliant' },
      { label: 'Flow Rate',       value: '1.5 GPM (lavatory) · 1.8 GPM (kitchen) · WaterSense labeled options' },
    ],
    collections: [
      { name: 'Meridian Kitchen', sub: 'Single Bowl SS · Undermount',    code: 'SF-MK-001' },
      { name: 'Alto Lav Faucet',  sub: 'Single Hole · Matte Black',      code: 'SF-AL-002' },
      { name: 'Nordic Bar Sink',  sub: '18" SS · Undermount',            code: 'SF-NB-003' },
      { name: 'Kura Vessel',      sub: 'Vessel · White Ceramic',         code: 'SF-KV-004' },
      { name: 'Stretto Pull-Down',sub: 'Pull-Down · Brushed Nickel',     code: 'SF-SP-005' },
      { name: 'Forte Lavatory',   sub: 'Wall-Mount · Commercial Grade',  code: 'SF-FL-006' },
    ],
  },
  appliances: {
    title: 'Appliances',
    hero: APPL,
    sub: 'UL Listed · Energy Star · CSA Certified',
    desc: 'Specification-grade appliance packages for hotel suites, multi-family residential units, and commercial kitchens. Bulk ordering, unified SKU management, and delivery coordination included.',
    specs: [
      { label: 'Categories',     value: 'Refrigeration · Cooking · Dishwashing · Laundry · Ventilation' },
      { label: 'Finishes',       value: 'Stainless steel · Panel-ready · Black stainless · White · Custom' },
      { label: 'Certifications', value: 'UL/cUL · Energy Star · CSA · NSF (food service models)' },
      { label: 'Voltage',        value: '120V · 240V · 347V configurations available' },
      { label: 'Program Options','value': 'Unit package pricing · Phase delivery · Coordinated drop-off' },
      { label: 'Warranty',       value: 'Manufacturer 1-year parts & labor · Extended available' },
    ],
    collections: [
      { name: 'Suite Compact Fridge', sub: '24" · Panel-Ready · 10 cu ft',   code: 'AP-SC-001' },
      { name: 'Hotel Microwave',      sub: 'Countertop · 1000W · SS',        code: 'AP-HM-002' },
      { name: 'Residential Range',    sub: '30" · SS · Self-Clean',          code: 'AP-RR-003' },
      { name: 'Slim Dishwasher',      sub: '18" · Panel-Ready · 48 dBA',    code: 'AP-SD-004' },
      { name: 'Wall Oven',            sub: '24" · Electric · Convection',    code: 'AP-WO-005' },
      { name: 'Cooktop Induction',    sub: '30" · 4-Burner · 7200W',        code: 'AP-CI-006' },
    ],
  },
  furniture: {
    title: 'Furniture',
    hero: BATH,
    sub: 'Commercial Grade · CARB Phase 2 · BIFMA',
    desc: 'Specification-grade furniture for hotel FF&E, multi-family common areas, and commercial interiors. BIFMA-compliant. Private label and custom upholstery programs available.',
    specs: [
      { label: 'Categories',     value: 'Seating · Tables · Storage · Casegoods · Custom millwork' },
      { label: 'Construction',   value: 'Solid hardwood · Engineered wood · Steel frame · Upholstered' },
      { label: 'Certifications', value: 'CARB Phase 2 · BIFMA X5.1 · GREENGUARD (select)' },
      { label: 'Upholstery',     value: 'Contract-grade fabric · COM available · Leather options' },
      { label: 'Lead Times',     value: '8–12 weeks production · FOB origin · Project delivery' },
      { label: 'Program Options','value': 'FF&E packages · Model suite mock-up · Custom branding' },
    ],
    collections: [
      { name: 'Loft Side Table',   sub: 'Walnut + Steel · Contract',       code: 'FN-LS-001' },
      { name: 'Meridian Lounge',   sub: 'Upholstered · Commercial Fabric', code: 'FN-ML-002' },
      { name: 'Nordic Credenza',   sub: 'Engineered Oak · 60"',            code: 'FN-NC-003' },
      { name: 'Stack Chair',       sub: 'Steel Frame · BIFMA X5.1',        code: 'FN-SC-004' },
      { name: 'Suite Desk',        sub: '48" · Walnut Veneer · Wire Mgmt', code: 'FN-SD-005' },
      { name: 'Platform Bed Frame',sub: 'King · Upholstered Headboard',    code: 'FN-PB-006' },
    ],
  },
  lighting: {
    title: 'Lighting',
    hero: APPL,
    sub: 'UL/cUL · Title 24 · LED Specification Grade',
    desc: 'Specification-grade lighting for kitchen and bathroom applications in hotel, multi-family, and commercial programs. LED throughout. Dimmable drivers standard. Cabinet lighting packages available.',
    specs: [
      { label: 'Lamp Type',      value: 'LED · Dimmable · Warm White 2700K–3000K · CRI 90+' },
      { label: 'Certifications', value: 'UL/cUL · Title 24 (California) · IC Rated where applicable' },
      { label: 'Finishes',       value: 'Brushed brass · Matte black · Chrome · Antique bronze · Nickel' },
      { label: 'Cabinet Lighting','value': 'Under-cabinet · Interior · Puck · Linear LED strip' },
      { label: 'Control',        value: 'Dimmable (TRIAC / ELV) · 0–10V · Zigbee / Z-Wave (select)' },
      { label: 'Warranty',       value: '3-year limited on LED driver · 50,000-hour rated life' },
    ],
    collections: [
      { name: 'WL-01 Under Cabinet', sub: 'LED Strip · 24V · Warm White',   code: 'LT-WL-001' },
      { name: 'WL-02 Cabinet Interior', sub: 'Puck Light · Touch Dimmer',   code: 'LT-WL-002' },
      { name: 'BL-01 Base Cabinet',  sub: 'Motion · Warm White · 3W',       code: 'LT-BL-001' },
      { name: 'TL-01 Pantry',        sub: 'Linear · PIR Sensor · 12W',      code: 'LT-TL-001' },
      { name: 'Bath Vanity Bar',      sub: '36" · CRI 95 · 2700K',          code: 'LT-VB-001' },
      { name: 'Recessed 4" Trim',     sub: 'IC Rated · Dimmable · White',   code: 'LT-RC-001' },
    ],
  },
};

export default function ProductCategory() {
  const { slug } = useParams();
  const data = categoryData[slug];

  if (!data) {
    return (
      <div className="bg-limestone pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-obsidian">Category Not Found</h1>
          <Link to="/products" className="mt-4 inline-block text-copper">← View All Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-limestone pt-24">
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden bg-obsidian">
        <img src={data.hero} alt={data.title} className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 to-obsidian/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full pb-16">
            <p className="text-[10px] font-sans tracking-widest uppercase text-copper mb-3">Products — {data.title}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-limestone tracking-tight">{data.title}</h1>
            <p className="mt-4 text-limestone/55 text-base max-w-xl leading-relaxed">{data.desc}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 text-xs font-sans text-stone">
          <Link to="/" className="hover:text-copper transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-copper transition-colors">Products</Link>
          <span>/</span>
          <span className="text-obsidian">{data.title}</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Specs */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-copper" />
              <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Technical Specifications</span>
            </div>
            <h2 className="font-serif text-3xl text-obsidian mb-8">Specification Reference</h2>
            <div className="border-t border-border">
              {data.specs.map(s => (
                <div key={s.label} className="grid grid-cols-2 border-b border-border py-4 gap-4">
                  <span className="text-xs font-sans uppercase tracking-wide text-stone">{s.label}</span>
                  <span className="text-sm font-sans text-obsidian">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 border border-obsidian/20 px-5 py-2.5 text-xs font-sans uppercase tracking-wide text-obsidian hover:border-copper hover:text-copper transition-colors">
                <Download className="w-3.5 h-3.5" /> Download Spec Sheet
              </button>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-copper text-limestone px-5 py-2.5 text-xs font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors">
                Request Samples <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-7">
            <img src={data.hero} alt={data.title} className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>

      {/* Collections */}
      <div className="bg-obsidian py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-copper" />
                <span className="text-[10px] font-sans tracking-widest uppercase text-copper">Collections</span>
              </div>
              <h2 className="font-serif text-3xl text-limestone">{data.title} Collections</h2>
            </div>
            <Link to="/contact" className="text-xs text-copper font-sans tracking-wide hover:underline hidden md:block">
              Custom Specification Available →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-limestone/5">
            {data.collections.map((col) => (
              <motion.div
                key={col.code}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group bg-obsidian p-6 border border-limestone/8 hover:border-copper/30 transition-colors cursor-pointer"
              >
                <div className="w-full aspect-square bg-limestone/5 group-hover:bg-copper/5 mb-4 transition-colors" />
                <p className="text-[10px] font-sans tracking-widest uppercase text-copper/40 group-hover:text-copper/70">{col.code}</p>
                <h4 className="font-serif text-sm text-limestone/80 group-hover:text-limestone mt-1">{col.name}</h4>
                <p className="text-xs text-limestone/30 group-hover:text-limestone/50 mt-0.5">{col.sub}</p>
                <div className="mt-4 text-xs text-copper opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View Spec <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-limestone py-16 border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-obsidian">Ready to Specify {data.title}?</h3>
            <p className="text-stone text-sm mt-2">Request samples, spec sheets, or a project volume quote.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-copper text-limestone px-8 py-3.5 text-sm font-sans uppercase tracking-wide hover:bg-copper/90 transition-colors whitespace-nowrap">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}