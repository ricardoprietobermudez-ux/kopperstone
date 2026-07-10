import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from 'kopperstone-ui';

export const Default = () => (
  <TooltipProvider>
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="outline">Book a Fabrication Slot</Button>
      </TooltipTrigger>
      <TooltipContent>
        Only 3 fabrication slots left this month
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
