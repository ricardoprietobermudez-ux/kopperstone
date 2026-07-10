import React from 'react';
import { Progress } from 'kopperstone-ui';

const label: React.CSSProperties = {
  fontSize: 13,
  fontFamily: 'Inter, sans-serif',
  color: '#2A2E33',
  marginBottom: 6,
};

export const Default = () => (
  <div style={{ maxWidth: 340 }}>
    <div style={label}>Fabrication: 65%</div>
    <Progress value={65} />
  </div>
);

export const InstallationScheduled = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340 }}>
    <div>
      <div style={label}>Templating: 100%</div>
      <Progress value={100} />
    </div>
    <div>
      <div style={label}>Fabrication: 65%</div>
      <Progress value={65} />
    </div>
    <div>
      <div style={label}>Installation scheduled: 90%</div>
      <Progress value={90} />
    </div>
  </div>
);
