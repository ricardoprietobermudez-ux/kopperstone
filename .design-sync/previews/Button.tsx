import { Button } from 'kopperstone-ui';

export const Default = () => <Button>Request a Quote</Button>;

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="default">Request a Quote</Button>
    <Button variant="secondary">View Collection</Button>
    <Button variant="outline">Learn More</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="link">See full specs</Button>
    <Button variant="destructive">Remove Item</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Schedule a Consultation</Button>
  </div>
);

export const Disabled = () => <Button disabled>Sold Out</Button>;
