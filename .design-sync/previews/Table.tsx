import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from 'kopperstone-ui';

export const Default = () => (
  <Table style={{ maxWidth: 520 }}>
    <TableCaption>Countertop material comparison, updated quarterly.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Material</TableHead>
        <TableHead>Price per sq ft</TableHead>
        <TableHead>Durability</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Quartz</TableCell>
        <TableCell>$65 - $95</TableCell>
        <TableCell>Excellent</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Quartzite</TableCell>
        <TableCell>$90 - $140</TableCell>
        <TableCell>Excellent</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Marble</TableCell>
        <TableCell>$75 - $120</TableCell>
        <TableCell>Moderate</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Granite</TableCell>
        <TableCell>$55 - $85</TableCell>
        <TableCell>Very Good</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
