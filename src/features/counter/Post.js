import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

export default function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                <h2>Author</h2>
                <p>Description</p>
                </div>
            </div> 
        </div>
    )
}
