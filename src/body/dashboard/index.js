import { useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";
import axios from "axios";

function Body() {

    const [realTimeData, setRealTimeData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/data/getOne')
            .then(response => setRealTimeData(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="body" >
            <Profile realTimeData={realTimeData} />
            <History realTimeData={realTimeData} />
        </div>
    )
}

export default Body;