import { Box } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserDetails } from './UserItemDetails.types';

interface UserItemProps {
    user: IUserDetails | null
}

const UserItemDetails: FC<UserItemProps> = ({ user }) => {
    
    const navigate = useNavigate();

    return (

        <Box>
            <h1>User Details Page</h1>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <h4>adress:</h4>
            <p>{user?.address?.street}</p>
            <p>{user?.address?.city}</p>
            <h4>company:</h4>
            <p>{user?.company?.name}</p>
            <p>{user?.company?.bs}</p>
            <button
                onClick={() => { navigate('/users'); }}
            >Back</button>
        </Box>
    );
};

export default UserItemDetails;
