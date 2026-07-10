import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarLabel,
} from 'kopperstone-ui';

export const Default = () => (
  <Menubar defaultValue="project">
    <MenubarMenu value="project">
      <MenubarTrigger>Project</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>Thompson Residence — Kitchen Remodel</MenubarLabel>
        <MenubarSeparator />
        <MenubarItem>
          New Quote Request <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Duplicate Project <MenubarShortcut>⌘D</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Print Specification Sheet <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Archive Project</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu value="samples">
      <MenubarTrigger>Samples</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Request Slab Samples</MenubarItem>
        <MenubarItem>Track Sample Shipment</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu value="view">
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Material Board</MenubarItem>
        <MenubarItem>Quote Summary</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);
