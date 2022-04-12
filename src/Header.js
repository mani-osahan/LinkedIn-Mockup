import React, {Component} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CommentIcon from '@mui/icons-material/Comment';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Header extends Component {
    render() {
        return (
            <div className="header">

                <div className="header-left">
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                        alt=""/>

                    <div className="header-search">
                        <SearchIcon/>
                        <input type="text"/>
                    </div>

                </div>

                <div className="header-right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={GroupIcon} title="My Network"/>
                    <HeaderOption Icon={WorkIcon} title="Jobs"/>
                    <HeaderOption Icon={CommentIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption avatar={AccountCircleIcon} title="me"/>
                </div>

            </div>
        );
    }
}

export default Header;