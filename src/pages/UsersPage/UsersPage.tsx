import React, { useEffect, useState, FC } from 'react';
import Loading from '../../component/Loading/Loading';
import UserList from '../../component/UserList/UserList';
import { IUser } from '../../types/usersTypes';
import { fetchUsers } from '../../services/fetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const UsersPage: FC = () => {
    const state = useSelector(state => state);
    console.log(state);

    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    function showInfo(userID: number) {
        navigate('/users/' + userID);
    };

    interface Props {
        users: IUser[],
        showInfo: (a: number) => void
    }
    const props: Props = {
        users,
        showInfo
    }

    useEffect(() => {
        setLoading(true);
        fetchUsers()
            .then(body => {
                setUsers(body);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <Loading />
    }
    return <UserList {...props} />;
};

export default UsersPage;
