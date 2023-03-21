import { useEffect, useState } from "react";
import Profile from "./profile";
import History from "./history";

function Body() {

    return (
        <div className="body">
            <Profile />
            <History />
        </div>
    )
}

export default Body;