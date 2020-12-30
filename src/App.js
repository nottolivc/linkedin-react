import React from 'react';
import './App.css';
import Header from './features/Header';
import SideBar from './features/SideBar';
import Feed from './features/Feed';

function App() {
  return (
    <>
    <div className="app">
    <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widgets */} 
      </div>
    </div>
    </>
  );
}

export default App;
