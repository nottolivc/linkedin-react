import React from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Feed() {
    return (
        <div className="feed">
        <div className="feed__inputContainter">
            <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button type="submit">Post</button>
            </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption color='#7085f9' Icon={ImageIcon} title='Photo' />
                <InputOption color='#E7A33E' Icon={VideoLibraryIcon} title='Video' />
                <InputOption color='#C0CBCD' Icon={EventNoteIcon} title='Event' />
                <InputOption color='#7FC15E' Icon={DescriptionIcon} title='Article' />
            </div>
        </div>
        </div>
    )
}
