// GoldOverline is a default export, which `export *` never forwards.
// Re-exporting it by name here and wiring this file in via cfg.extraEntries
// gets it onto window.KopperstoneUI without touching the live app source.
export { default as GoldOverline } from '../../src/components/ui/GoldOverline.jsx';
