import React, { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import { IUser } from '../../types/usersTypes';
import UserItemDetails from '../../component/UserItemDetails/UserItemDetails';
import { useDispatch } from 'react-redux';
import { getUserById } from '../../redux/action/getUserById';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const UserDetailsPage: FC = () => {
    let params = useParams();
    const dispatch = useDispatch();

    const state = useTypedSelector( state => state.users );
    const { users, loading } = state;
    
    const user: IUser | null = users.length ? users.filter((u: IUser) => u.id === Number(params.id))[0] : null;
    interface Props {
        user: IUser | null
    }
    const props: Props = {
        user
    }
    useEffect(() => {
        console.log("user before: ", user);
        
        if (!user) {
            // TODO: add case to reducer
            dispatch(getUserById(Number(params.id)));
            console.log("user after: ", user);
        }
    }, [dispatch, params.id]);

    if (loading) {
        return <Loading />
    }
    return (
        <UserItemDetails {...props} />
    );
};

export default UserDetailsPage;

