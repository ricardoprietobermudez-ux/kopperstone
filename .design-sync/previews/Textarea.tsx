import { Textarea } from 'kopperstone-ui';

export const Default = () => (
  <Textarea placeholder="Tell us about your project" style={{ maxWidth: 340 }} />
);

export const WithValue = () => (
  <Textarea
    style={{ maxWidth: 340 }}
    defaultValue={
      "We're renovating a 14x18 kitchen and want to replace our laminate counters with a quartzite or quartz surface. Looking for something durable near a cooktop, with a waterfall edge on the island."
    }
  />
);

export const Disabled = () => (
  <Textarea placeholder="Additional notes for your fabricator" disabled style={{ maxWidth: 340 }} />
);
