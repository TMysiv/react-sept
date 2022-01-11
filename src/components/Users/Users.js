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
            {users.map(user => <User key = {user.id} id = {user.id} name = {user.name}
            username = {user.username} email = {user.email} street={user.address.street} suite={user.address.suite}
            city={user.address.city} zipcode={user.address.zipcode} lat={user.address.geo.lat} lng={user.address.geo.lng}
            phone={user.phone} catchPhrase={user.company.catchPhrase} bs={user.company.bs}/>)
            }
        </div>
    );
};

export default Users;