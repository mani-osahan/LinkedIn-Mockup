import React from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from "./InputOptions"
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';

function Feed(props) {
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input placeholder="Start a post" type=" "/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={OndemandVideoSharpIcon} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={DateRangeSharpIcon} title="Photo" color="#C0CBCD"/>
                    <InputOptions Icon={ImageIcon} title="Photo" color="#7FC15E"/>
                </div>
            </div>
        </div>
    );
}

export default Feed;