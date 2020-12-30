import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import InputOption from './InputOption';

export default function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                <h2>Author: {name}</h2>
                    <p>Description: {description}</p>
                </div>
            </div>

                <div className="post__body">
                    <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title=" Like" />
                <InputOption Icon={ShareIcon} title=" Share" />
                <InputOption Icon={CommentIcon} title=" Comment" />
                <InputOption Icon={SendIcon} title=" Send" />
            </div>
        </div>
    )
}
