import React, {FC} from 'react';
import { IUser } from '../UserList/UserList.types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return(
    <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
    </div>
  );
}

export default UserItem;
