import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'kopperstone-ui';

const body: React.CSSProperties = {
  fontSize: 14,
  color: '#2A2E33',
  lineHeight: 1.5,
  margin: 0,
};

export const Default = () => (
  <Tabs defaultValue="overview" style={{ maxWidth: 460 }}>
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="specifications">Specifications</TabsTrigger>
      <TabsTrigger value="care">Care & Maintenance</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <p style={body}>
        Calacatta Gold Quartz brings the warmth of natural marble with the
        durability of engineered stone — ideal for kitchen islands, waterfall
        edges, and full-height backsplashes.
      </p>
    </TabsContent>
    <TabsContent value="specifications">
      <p style={body}>
        Slab size: 126" x 63" &bull; Thickness: 2cm or 3cm &bull; Finish: Polished
        or honed &bull; Heat resistance: up to 400&deg;F &bull; Non-porous, no sealing required.
      </p>
    </TabsContent>
    <TabsContent value="care">
      <p style={body}>
        Wipe daily with warm water and mild soap. Avoid abrasive pads and
        high-pH cleaners. No periodic sealing needed — quartz resists staining
        and etching far better than natural stone.
      </p>
    </TabsContent>
  </Tabs>
);

export const SpecificationsActive = () => (
  <Tabs defaultValue="specifications" style={{ maxWidth: 460 }}>
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="specifications">Specifications</TabsTrigger>
      <TabsTrigger value="care">Care & Maintenance</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <p style={body}>
        Calacatta Gold Quartz brings the warmth of natural marble with the
        durability of engineered stone — ideal for kitchen islands, waterfall
        edges, and full-height backsplashes.
      </p>
    </TabsContent>
    <TabsContent value="specifications">
      <p style={body}>
        Slab size: 126" x 63" &bull; Thickness: 2cm or 3cm &bull; Finish: Polished
        or honed &bull; Heat resistance: up to 400&deg;F &bull; Non-porous, no sealing required.
      </p>
    </TabsContent>
    <TabsContent value="care">
      <p style={body}>
        Wipe daily with warm water and mild soap. Avoid abrasive pads and
        high-pH cleaners. No periodic sealing needed — quartz resists staining
        and etching far better than natural stone.
      </p>
    </TabsContent>
  </Tabs>
);
