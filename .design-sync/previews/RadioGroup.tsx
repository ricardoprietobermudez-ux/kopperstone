import React from 'react';
import { RadioGroup, RadioGroupItem } from 'kopperstone-ui';

const label: React.CSSProperties = {
  fontSize: 14,
  color: '#2A2E33',
  fontFamily: 'Inter, sans-serif',
  lineHeight: 1.4,
};

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

export const Default = () => (
  <RadioGroup defaultValue="eased" style={{ maxWidth: 260 }}>
    <div style={row}>
      <RadioGroupItem value="eased" id="edge-eased" />
      <label htmlFor="edge-eased" style={label}>Eased</label>
    </div>
    <div style={row}>
      <RadioGroupItem value="bullnose" id="edge-bullnose" />
      <label htmlFor="edge-bullnose" style={label}>Bullnose</label>
    </div>
    <div style={row}>
      <RadioGroupItem value="ogee" id="edge-ogee" />
      <label htmlFor="edge-ogee" style={label}>Ogee</label>
    </div>
    <div style={row}>
      <RadioGroupItem value="waterfall" id="edge-waterfall" />
      <label htmlFor="edge-waterfall" style={label}>Waterfall</label>
    </div>
  </RadioGroup>
);

export const OgeeSelected = () => (
  <RadioGroup defaultValue="ogee" style={{ maxWidth: 260 }}>
    <div style={row}>
      <RadioGroupItem value="eased" id="edge-eased-2" />
      <label htmlFor="edge-eased-2" style={label}>Eased</label>
    </div>
    <div style={row}>
      <RadioGroupItem value="bullnose" id="edge-bullnose-2" />
      <label htmlFor="edge-bullnose-2" style={label}>Bullnose</label>
    </div>
    <div style={row}>
      <RadioGroupItem value="ogee" id="edge-ogee-2" />
      <label htmlFor="edge-ogee-2" style={label}>Ogee</label>
    </div>
  </RadioGroup>
);
