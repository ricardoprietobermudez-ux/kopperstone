import { Avatar, AvatarImage, AvatarFallback } from 'kopperstone-ui';

export const Default = () => (
  <Avatar>
    <AvatarFallback>RP</AvatarFallback>
  </Avatar>
);

export const ProjectTeam = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Avatar style={{ border: '2px solid #F5EFE6', marginRight: -6, zIndex: 3 }}>
      <AvatarFallback>RP</AvatarFallback>
    </Avatar>
    <Avatar style={{ border: '2px solid #F5EFE6', marginRight: -6, zIndex: 2 }}>
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar style={{ border: '2px solid #F5EFE6', zIndex: 1 }}>
      <AvatarFallback>CS</AvatarFallback>
    </Avatar>
  </div>
);
