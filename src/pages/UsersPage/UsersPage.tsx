import React, { useEffect, useState, FC } from 'react';
import Loading from '../../component/Loading/Loading';
import UserList from '../../component/UserList/UserList';
import { IUser } from '../../component/UserList/UserList.types';
import { fetchUsers } from '../../services/fetch';

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);
        fetchUsers()
            .then(body => {
                setTimeout(() => {
                    setUsers(body);
                    setLoading(false);
                }, 1000);
            });
    }, []);


    if (loading) {
        return <Loading />
    }
    return <UserList users={users} />;
};

export default UsersPage;
