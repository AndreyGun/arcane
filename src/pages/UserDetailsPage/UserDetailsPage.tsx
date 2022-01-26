import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { IUser } from '../../component/UserList/UserList.types';
import { fetchUserId } from '../../services/fetch';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';

const UserDetailsPage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    let params = useParams();
    
    
    useEffect(() => {
        setLoading(true);
        fetchUserId(params.id)
        .then( body => {
            setUser(body);
            setLoading(false);
        })
    }, [params.id]);
    
    if (loading) {
        return <Loading />
    }
    return(
        <Box>
            <h1>User Details Page</h1>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.address?.street}</p>
            <p>{user?.address?.city}</p>
            <button
             onClick={() => {navigate('/users');}}
            >Back</button>
        </Box>
    );
};

export default UserDetailsPage;
