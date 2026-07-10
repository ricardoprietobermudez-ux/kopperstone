import { GoldOverline } from 'kopperstone-ui';

export const Default = () => <GoldOverline>Featured Collection</GoldOverline>;

export const SectionEyebrow = () => (
  <div style={{ maxWidth: 420 }}>
    <GoldOverline>Our Process</GoldOverline>
    <h2
      style={{
        margin: '10px 0 0',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 32,
        fontWeight: 500,
        color: '#0E1A2B',
      }}
    >
      From Slab to Installation
    </h2>
    <p style={{ margin: '10px 0 0', fontSize: 14, color: '#8C8680', lineHeight: 1.6 }}>
      Every Kopperstone project moves through the same disciplined path: template,
      fabricate, and install — with a dedicated project lead from first
      measurement to final walkthrough.
    </p>
  </div>
);

export const OnDark = () => (
  <div style={{ background: '#0E1A2B', padding: '32px', maxWidth: 420 }}>
    <GoldOverline>New Arrivals</GoldOverline>
  </div>
);
