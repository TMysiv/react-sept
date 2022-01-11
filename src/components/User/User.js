import React from 'react';
import "./user.css"

const User = ({id,name,username,email,street,suite,city,zipcode,geo,lat,lng,phone,company,catchPhrase,bs}) => {

    return (
        <div className={'user'}>
            <ul>
                <li>id - {id}</li>
                <li>name - {name}</li>
                <li>username - {username}</li>
                <li>email - {email}</li>
                <li>address :
                    <ul>
                        <li>street -{street} </li>
                        <li>suite - {suite}</li>
                        <li>city - {city}</li>
                        <li>zipcode - {zipcode}</li>
                        <li>geo : {geo}
                            <ul>
                                <li>lat - {lat}</li>
                                <li>lng - {lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>phone - {phone}</li>
                <li>company :
                    <ul>
                        <li>catchPhrase - {catchPhrase}</li>
                        <li>bs - {bs}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default User;