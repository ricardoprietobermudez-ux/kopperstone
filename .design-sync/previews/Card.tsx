import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'kopperstone-ui';

export const Default = () => (
  <Card style={{ maxWidth: 360 }}>
    <CardHeader>
      <CardTitle>Calacatta Gold Quartz</CardTitle>
      <CardDescription>Kitchen countertops, fabricated in-house</CardDescription>
    </CardHeader>
    <CardContent>
      <p style={{ margin: 0, fontSize: 14, color: 'hsl(var(--muted-foreground))' }}>
        A warm, veined surface built for daily use — heat resistant, non-porous,
        and backed by our lifetime fabrication warranty.
      </p>
    </CardContent>
    <CardFooter>
      <Button>Request a Sample</Button>
    </CardFooter>
  </Card>
);

export const HeaderOnly = () => (
  <Card style={{ maxWidth: 360 }}>
    <CardHeader>
      <CardTitle>Custom Cabinetry</CardTitle>
      <CardDescription>Designed and built to your kitchen's exact dimensions</CardDescription>
    </CardHeader>
  </Card>
);
