import React from 'react';
import "./post.css"

const Post = ({value}) => {
    return (
        <div className = {'post'}>
            <h2>userId - {value.userId}  id - {value.id}</h2>
            <h3>tittle - {value.tittle}</h3>
            <h3>body - {value.body}</h3>
        </div>
    );
};

export default Post;

