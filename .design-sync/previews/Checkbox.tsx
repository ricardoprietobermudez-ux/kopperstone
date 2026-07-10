import React from 'react';
import { Checkbox } from 'kopperstone-ui';

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{children}</div>
);

const label: React.CSSProperties = {
  fontSize: 14,
  color: '#2A2E33',
  fontFamily: 'Inter, sans-serif',
  lineHeight: 1.4,
};

export const Default = () => (
  <Row>
    <Checkbox id="contact-consent" />
    <label htmlFor="contact-consent" style={label}>
      I agree to be contacted about my quote
    </label>
  </Row>
);

export const Checked = () => (
  <Row>
    <Checkbox id="contact-consent-checked" defaultChecked />
    <label htmlFor="contact-consent-checked" style={label}>
      I agree to be contacted about my quote
    </label>
  </Row>
);

export const Disabled = () => (
  <Row>
    <Checkbox id="contact-consent-disabled" disabled />
    <label htmlFor="contact-consent-disabled" style={{ ...label, color: '#8C8680' }}>
      I agree to be contacted about my quote
    </label>
  </Row>
);

export const DisabledChecked = () => (
  <Row>
    <Checkbox id="contact-consent-disabled-checked" disabled defaultChecked />
    <label htmlFor="contact-consent-disabled-checked" style={{ ...label, color: '#8C8680' }}>
      I agree to be contacted about my quote
    </label>
  </Row>
);

export const ConsultationForm = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 340 }}>
    <Row>
      <Checkbox id="q-material" defaultChecked />
      <label htmlFor="q-material" style={label}>
        Send me material samples before my consultation
      </label>
    </Row>
    <Row>
      <Checkbox id="q-newsletter" />
      <label htmlFor="q-newsletter" style={label}>
        Subscribe to the Kopperstone design newsletter
      </label>
    </Row>
    <Row>
      <Checkbox id="q-terms" defaultChecked />
      <label htmlFor="q-terms" style={label}>
        I agree to the estimate terms and cancellation policy
      </label>
    </Row>
  </div>
);
