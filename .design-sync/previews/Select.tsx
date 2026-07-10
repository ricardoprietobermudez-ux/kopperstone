import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
} from 'kopperstone-ui';

export const Default = () => (
  <Select defaultOpen defaultValue="quartz">
    <SelectTrigger style={{ width: 240 }}>
      <SelectValue placeholder="Select a material" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Countertop Materials</SelectLabel>
        <SelectItem value="quartz">Quartz</SelectItem>
        <SelectItem value="quartzite">Quartzite</SelectItem>
        <SelectItem value="marble">Marble</SelectItem>
        <SelectItem value="granite">Granite</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);
