import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase';

export default function Feed() {
    const [inputPost, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
    
        db.collection('posts').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: '',
            description: '',
            message: inputPost,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <>
        <div className="feed">
        <div className="feed__inputContainter">
            <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" value={inputPost} onChange={e => setInput(e.target.value)} />
                <button onClick={sendPost} type="submit">Post</button>
            </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption color='#7085f9' Icon={ImageIcon} title='Photo' />
                <InputOption color='#E7A33E' Icon={VideoLibraryIcon} title='Video' />
                <InputOption color='#C0CBCD' Icon={EventNoteIcon} title='Event' />
                <InputOption color='#7FC15E' Icon={DescriptionIcon} title='Article' />
            </div>
        </div>
        {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
            <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
        {/* <Post className="post" 
        name='Test' 
        description='working?' 
        message='hello world' 
        photoUrl='' /> */}
        </div>
    </>
    )
}
