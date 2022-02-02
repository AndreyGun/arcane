import React, { FC, useEffect } from 'react';
import Loading from '../../component/Loading/Loading';
import UserList from '../../component/UserList/UserList';
import { IUser } from '../../types/usersTypes';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUsers } from '../../redux/action/getUsers';
import { useDispatch } from 'react-redux';

const UsersPage: FC = () => {
    const { users, loading } = useTypedSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

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


    if (loading) {
        return <Loading />
    }
    return <UserList {...props} />;
};

export default UsersPage;
