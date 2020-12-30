import React, { useState } from 'react';
import './Login.css';
import { auth } from './features/firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/reducer/userSlice';

export default function Login() {    
    const [email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPic] = useState('');

    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();

    }
    

    const register = e => {
        e.preventDefault();
        if (!name) {
            return alert('Please enter a name');
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user.updateProfile({
            displayName: name,
            photoUrl: pic,
            })
            .then(() => { 
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: pic,
                    })
                );
            });
        }).catch((error) => alert(error.message));
        }
    
    return (
        <>
        <div className="login">
            <img className="logo" src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt="" />
            <form onSubmit={register}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={pic} onChange={(e) => setPic(e.target.value)} placeholder="Link to profile pic" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </form>
            <button type="submit" onSubmit={loginToApp}>Sign in</button>
            <br />
            <br />
            <p style={{textAlign: 'center'}}>Not a member? <span className="login__register">Sign in</span></p>
        </div>
        </>
    )
}
