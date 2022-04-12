import React from 'react';
import "./Sidebar.css"
import { Avatar } from '@mui/material';

function Sidebar(props) {

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )




    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
                <Avatar className="sidebar-avater"/>
                <h2>Manipal Osahan</h2>
                <h4>manipalosahan@gmail.com</h4>
            </div>


            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Connections </p>
                    <p className="sidebar-statNumber">2,542</p>
                </div>

                <div className="sidebar-stat">
                    <p>Viewed your profile</p>
                    <p className="sidebar-statNumber">2,000</p>
                </div>

            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("programming")}
                {recentItem("developer")}
                {recentItem("photography")}
            </div>


        </div>
    );
}

export default Sidebar;