import React from 'react';
import './comment.css'

const Comment = ({value}) => {
    return (
        <div className={'comment'}>
            <h2>id - {value.id} name - {value.name}</h2>
            <h3>email - {value.email} body - {value.body}</h3>
        </div>
    );
};

export default Comment;
