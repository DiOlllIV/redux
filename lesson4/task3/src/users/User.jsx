import React from 'react';

const User =({user}) => {
    return (
        <li className="user"
        >
            <span className="user__name">
                {user.name}
            </span>
            <span className="user__age">
                {user.age}
            </span>
        </li>)
};

export default User;