import React, {useEffect, useState} from 'react';
import './posts.css'

import Post from "../Post/Post";

const Posts = () => {

    let [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(posts =>{
                    setPosts(posts)
                })
    })
    return (
        <div className={'posts'}>
            {posts.map(post => <Post key = {post.id} value={post}/>)}
        </div>
    );
};

export default Posts;