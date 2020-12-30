import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './SideBar.css';

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1547994770-e5d8509b114d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <AccountCircleIcon className="sidebar__avatar" />
                <h2>My Profile</h2>
                <h4>user@linkedin.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,401</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Posts</p>
                    <p className="sidebar__statNumber">8,401</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('softwaredevelopment')}
                {recentItem('softwareengineering')}
                {recentItem('softwaredesign')}
                {recentItem('webdevelopment')}
            </div>  
        </div>
    )
}

export default SideBar;