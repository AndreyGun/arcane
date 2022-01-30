import React, { FC } from 'react';
import UserItem from '../UserItem/UserItem';
import { Grid } from '@mui/material';
import { IUser } from '../../types/usersTypes';

interface UserListProps {
    users: IUser[],
    showInfo: (a: number) => void
}

const UserList: FC<UserListProps> = ({ users, showInfo }) => {
    return (
        <Grid container sx={{ justifyContent: 'center' }} gap={2}>
            {users.map(user =>
                <UserItem key={user.id} user={user} showInfo={showInfo} />
            )}
        </Grid>
    );
}

export default UserList;
