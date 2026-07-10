import { Alert, AlertTitle, AlertDescription } from 'kopperstone-ui';

export const Default = () => (
  <Alert style={{ maxWidth: 420 }}>
    <AlertTitle>Sample kit on the way</AlertTitle>
    <AlertDescription>
      Your requested quartz and quartzite samples ship within 2 business days.
      A tracking link will be emailed once they leave our fabrication shop.
    </AlertDescription>
  </Alert>
);

export const Destructive = () => (
  <Alert variant="destructive" style={{ maxWidth: 420 }}>
    <AlertTitle>Template appointment could not be scheduled</AlertTitle>
    <AlertDescription>
      We couldn't confirm a technician for your requested date. Please choose
      another day or call your project coordinator to reschedule.
    </AlertDescription>
  </Alert>
);

export const TitleOnly = () => (
  <Alert style={{ maxWidth: 420 }}>
    <AlertTitle>Your quote request has been received.</AlertTitle>
  </Alert>
);
