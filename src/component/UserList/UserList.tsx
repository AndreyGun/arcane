import React from 'react';
import UserItem from '../UserItem/UserItem';
import { IUser } from './UserList.types';

function UserList() {

    const users: IUser[] = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
            },
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
            },
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
            },
        },
    ]
    return (
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </div>
    );
}

export default UserList;
