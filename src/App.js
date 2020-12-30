import React from 'react';
import './App.css';
import Header from './features/Header';
import SideBar from './features/SideBar';
import Feed from './features/Feed';

import { selectUser } from './features/reducer/userSlice'
import { useSelector } from 'react-redux';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <>
    <div className="app">
    <Header />
    {!user ? <Login /> : (
      
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widgets */} 
      </div>
    )}
    </div>
    </>
  );
}

export default App;
