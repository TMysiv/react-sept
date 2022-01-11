import React from 'react';
import "./post.css"

const Post = ({userId,id,tittle,body}) => {
    return (
        <div className = {'post'}>
            <h2>userId - {userId}  id - {id}</h2>
            <h3>tittle - {tittle}</h3>
            <h3>body - {body}</h3>
        </div>
    );
};

export default Post;