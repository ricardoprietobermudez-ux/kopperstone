import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Button,
} from 'kopperstone-ui';

export const Default = () => (
  <DropdownMenu defaultOpen>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Quote #A-1042 Actions</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Thompson Residence — Kitchen</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        View Details <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>Send to Client</DropdownMenuItem>
      <DropdownMenuItem>
        Duplicate Quote <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Archive</DropdownMenuItem>
      <DropdownMenuItem>Delete Quote</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
