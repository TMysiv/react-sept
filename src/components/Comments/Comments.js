import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import './comments.css'

const Comments = () => {

    let [comments,setComments] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(comments =>{
                    setComments(comments)
                })
    },[])

    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key = {comment.id} value = {comment} />)}
        </div>
    );
};


export default Comments;