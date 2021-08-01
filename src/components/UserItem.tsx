import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user:IUser
    onClick: (user:IUser) => void
}

const UserItem: React.FC<UserItemProps> = ({user,onClick}) => {
    return (
        <div onClick={() => onClick(user)}  style={{padding: 15, border: "1px solid gray"}}>
            <p>
                {user.id}. {user.name} lives in the city: {user.address.city} on the street: {user.address.street}
            </p>
        </div>
    );
};

export default UserItem