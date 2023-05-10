import { Fragment, useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";
import axios from "axios";
import * as mqtt from 'mqtt/dist/mqtt'

var client = mqtt.connect('http://makerzone.net',{
    username: "popos",
    password: "mqttserver"
})
var topic = 'historicalData'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

function Body() {

    const [realTimeData, setRealTimeData] = useState({})
    const [Loading, setLoading] = useState(true)
    const [history, setData] = useState([])

    const fetchRealTimeData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/data/getOne');
            setRealTimeData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchHistory = async () => {
        const response = await axios.get('http://localhost:3001/data/history')
        setData(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchHistory()
        const intervalId = setInterval(fetchRealTimeData, 5000);
        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        setData(prevHistory => {
            let temp = [...prevHistory];
            temp.unshift(realTimeData);
            temp.pop();
            return temp;
        });
    }, [realTimeData]);

    const Load = <Fragment>
        <h2 className='bodylabel'>History</h2>
        <div>loading...</div>
    </Fragment>

    return (
        <div className="body" >
            <Profile realTimeData={realTimeData} />
            {Loading ?
                Load
                :
                <History
                    history={history}
                />
            }
        </div>
    )
}

export default Body;