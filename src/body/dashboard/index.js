import { useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";

function Body() {

    return (
        <div className="body" >
            <Profile />
            <History />
        </div>
    )
}

export default Body;