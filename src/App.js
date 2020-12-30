import React from 'react';
import './App.css';
import Header from './features/counter/Header';
import SideBar from './features/counter/SideBar';
import Feed from './features/counter/Feed';

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
