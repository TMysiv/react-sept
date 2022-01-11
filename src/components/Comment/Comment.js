import React from 'react';
import './comment.css'

const Comment = ({id,name,email,body}) => {
    return (
        <div className={'comment'}>
            <h2>id - {id} name - {name}</h2>
            <h3>email - {email} body - {body}</h3>
        </div>
    );
};

export default Comment;