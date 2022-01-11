import React, {useEffect, useState} from 'react';
import './users.css'

import User from "../User/User";

const Users = () => {

    let [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(users =>{
                        setUsers(users)
                })
    },[])
    return (
        <div className={'users'}>
            {users.map(user => <User key = {user.id} value={user}/>)
            }
        </div>
    );
};

export default Users;