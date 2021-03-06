import React from 'react';
import './App.css';
import Header from './features/Header';
import SideBar from './features/SideBar';
import Feed from './features/Feed';
//import { Route } from 'react-router-dom';
import { selectUser } from './features/reducer/userSlice'
import { useSelector } from 'react-redux';
import Login from './Login';
//import { auth } from './features/firebase';
//import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser)
  //const dispatch = useDispatch();

  // useEffect(() => {

  //   auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //       }))
  //     }
  //       else {
  //         dispatch(logout())
  //       }
  //   });
  // }, [])

  return (
    <>
    <div className="app">
    <Header />
    {user ? <Login /> : ( 
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
