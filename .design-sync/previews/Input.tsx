import { Input } from 'kopperstone-ui';

export const Default = () => (
  <Input placeholder="Enter your ZIP code" style={{ maxWidth: 280 }} />
);

export const WithValue = () => (
  <Input defaultValue="Sarah Whitfield" style={{ maxWidth: 280 }} />
);

export const Disabled = () => (
  <Input placeholder="Project ID" disabled style={{ maxWidth: 280 }} />
);

export const Email = () => (
  <Input type="email" placeholder="you@example.com" style={{ maxWidth: 280 }} />
);

export const QuoteRequestForm = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 320 }}>
    <div>
      <label
        style={{
          display: 'block',
          fontSize: 12,
          letterSpacing: '0.04em',
          color: '#2A2E33',
          marginBottom: 6,
        }}
      >
        Full Name
      </label>
      <Input placeholder="Sarah Whitfield" />
    </div>
    <div>
      <label
        style={{
          display: 'block',
          fontSize: 12,
          letterSpacing: '0.04em',
          color: '#2A2E33',
          marginBottom: 6,
        }}
      >
        Project ZIP Code
      </label>
      <Input placeholder="Enter your ZIP code" />
    </div>
  </div>
);
