import { Toggle } from 'kopperstone-ui';

export const Default = () => (
  <Toggle aria-label="Toggle favorite" variant="outline">
    Save to Favorites
  </Toggle>
);

export const Pressed = () => (
  <Toggle aria-label="Toggle favorite" variant="outline" defaultPressed>
    Saved to Favorites
  </Toggle>
);

export const Disabled = () => (
  <Toggle aria-label="Toggle favorite" variant="outline" disabled>
    Save to Favorites
  </Toggle>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Toggle variant="default">Quartz</Toggle>
    <Toggle variant="outline">Quartzite</Toggle>
    <Toggle variant="outline" defaultPressed>
      Marble
    </Toggle>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Toggle size="sm" variant="outline">
      Sm
    </Toggle>
    <Toggle size="default" variant="outline">
      Default
    </Toggle>
    <Toggle size="lg" variant="outline">
      Large
    </Toggle>
  </div>
);

export const FinishFilter = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 300 }}>
    <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8C8680' }}>
      Filter by finish
    </span>
    <div style={{ display: 'flex', gap: 8 }}>
      <Toggle variant="outline" defaultPressed>
        Polished
      </Toggle>
      <Toggle variant="outline">Honed</Toggle>
      <Toggle variant="outline">Leathered</Toggle>
    </div>
  </div>
);
