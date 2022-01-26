import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  Typography
} from '@mui/material';
import { IUser } from '../UserList/UserList.types';

interface UserItemProps {
  user: IUser,
  showInfo: (a: number) => void
}

const UserItem: FC<UserItemProps> = ({ user, showInfo }) => {

  return (
    <Card
      sx={{ minWidth: 275, cursor: "pointer" }}
      onClick={() => {showInfo(user.id)}}
      >
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">
            {user.name}
          </Typography>
          <Typography variant={'body1'}>
            {user.email}
          </Typography>
          <Typography component={'p'} variant={'body2'} color="text.secondary">
            city: {user.address.city}
          </Typography>
          <Typography component={'p'} variant={'body2'} color="text.secondary">
            street: {user.address.street}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UserItem;
