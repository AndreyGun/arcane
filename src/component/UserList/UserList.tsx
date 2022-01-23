import React, { FC } from 'react';
import UserItem from '../UserItem/UserItem';
import { Grid } from '@mui/material';
import { IUser } from './UserList.types';

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <Grid container sx={{ justifyContent: 'center' }} gap={2}>
            {users.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </Grid>
    );
}

export default UserList;
