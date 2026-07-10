import { Popover, PopoverTrigger, PopoverContent, Button } from 'kopperstone-ui';

export const Default = () => (
  <Popover defaultOpen>
    <PopoverTrigger asChild>
      <Button variant="outline">Calacatta Gold — Quartzite</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, margin: 0 }}>
          Calacatta Gold Quartzite
        </p>
        <p style={{ fontSize: 13, color: '#8C8680', margin: 0 }}>
          Origin: Northern Italy &middot; 3cm slab &middot; Polished finish
        </p>
        <p style={{ fontSize: 13, margin: 0 }}>$185 / sq ft, installed</p>
        <Button size="sm">Request a Sample</Button>
      </div>
    </PopoverContent>
  </Popover>
);
