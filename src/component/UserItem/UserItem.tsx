import React, { FC } from 'react';
import { Card, CardContent } from '@mui/material';
import { IUser } from '../UserList/UserList.types';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>city: {user.address.city}</p>
        <p>street: {user.address.street}</p>
      </CardContent>
    </Card>
  );
}

export default UserItem;
