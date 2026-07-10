import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Button,
} from 'kopperstone-ui';

export const Default = () => (
  <Sheet defaultOpen>
    <SheetTrigger asChild>
      <Button variant="outline">View Quote Summary</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Your Quote Request</SheetTitle>
        <SheetDescription>
          Calacatta Gold Quartzite countertops for the Thompson Residence kitchen renovation.
        </SheetDescription>
      </SheetHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Countertops (42 sq ft)</span>
          <span>$7,770</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Edge profile: Eased</span>
          <span>Included</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Undermount sink cutout</span>
          <span>$250</span>
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
        <Button>Confirm Quote</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
