import { Badge } from 'kopperstone-ui';

export const Default = () => <Badge>In Stock</Badge>;

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Badge variant="default">In Stock</Badge>
    <Badge variant="secondary">Made to Order</Badge>
    <Badge variant="outline">Limited Slab</Badge>
    <Badge variant="destructive">Discontinued</Badge>
  </div>
);

export const InventoryList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#2A2E33' }}>Calacatta Gold Quartz</span>
      <Badge variant="default">In Stock</Badge>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#2A2E33' }}>Taj Mahal Quartzite</span>
      <Badge variant="secondary">Made to Order</Badge>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#2A2E33' }}>Statuario Venato Marble</span>
      <Badge variant="outline">Limited Slab</Badge>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#2A2E33' }}>Nero Marquina Marble</span>
      <Badge variant="destructive">Discontinued</Badge>
    </div>
  </div>
);
