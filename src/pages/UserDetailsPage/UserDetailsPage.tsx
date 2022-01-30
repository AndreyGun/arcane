import React, { useState, useEffect, FC } from 'react';
import { fetchUserId } from '../../services/fetch';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import { IUserDetails } from '../../types/usersTypes';
import UserItemDetails from '../../component/UserItemDetails/UserItemDetails';

const UserDetailsPage: FC = () => {
    const [user, setUser] = useState<IUserDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    let params = useParams();


    interface Props {
        user: IUserDetails | null
    }
    const props:Props = {
        user
    }
    useEffect(() => {
        setLoading(true);
        fetchUserId(params.id)
            .then(body => {
                setUser(body);
                setLoading(false);
            })
    }, [params.id]);

    if (loading) {
        return <Loading />
    }
    return (
        <UserItemDetails {...props} />
    );
};

export default UserDetailsPage;
