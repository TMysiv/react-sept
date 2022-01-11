import React from 'react';
import "./user.css"

const User = ({value}) => {

    return (
        <div className={'user'}>
            <ul>
                <li>id - {value.id}</li>
                <li>name - {value.name}</li>
                <li>username - {value.username}</li>
                <li>email - {value.email}</li>
                <li>phone - {value.phone}</li>
            </ul>
        </div>
    );
};

export default User;