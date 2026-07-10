import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, Button } from 'kopperstone-ui';

export const Default = () => (
  <Dialog defaultOpen>
    <DialogTrigger asChild>
      <Button variant="outline">Schedule a Consultation</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Schedule a Design Consultation</DialogTitle>
        <DialogDescription>
          Meet with a Kopperstone designer to plan your kitchen or bath renovation.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
