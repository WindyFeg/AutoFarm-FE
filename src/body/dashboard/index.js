import { useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";

function Body() {
    const myStyle = {
        paddingLeft: '30px',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: '5%'
    }
    return (
        <div className="body" style={myStyle}>
            <Profile />
            <History />
        </div>
    )
}

export default Body;