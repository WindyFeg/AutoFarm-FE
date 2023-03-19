import { useEffect, useState } from "react";
import Profile from "./profile";
import History from "./history";

function Body() {

    return (
        <div className="body">
            <h1>This is body</h1>
            <div>
                <h2>Profiles</h2>
                <Profile />
            </div>
            <div>
                <h2>History</h2>
                <History />
            </div>
        </div>
    )
}

export default Body;