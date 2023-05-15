import { Fragment, useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";
import axios from "axios";
import * as mqtt from 'mqtt/dist/mqtt'

function Body() {
    const [realTimeData, setRealTimeData] = useState({})
    const [Loading, setLoading] = useState(true)
    const [history, setData] = useState([])


    var client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
        username: "popos",
        password: "mqttserver"
    })
    var topic = 'historicalData'

    client.on('message', (topic, message) => {
        var message = message.toString()
        var splitData = message.split(' ')
        var temp = {
            temp: parseFloat(splitData[0]),
            humi: parseFloat(splitData[1]),
            humi_dirt: parseFloat(splitData[2]),
        }
        setRealTimeData(temp);
    })

    client.on('connect', () => {
        client.subscribe(topic)
    })

    const fetchHistory = async () => {
        const response = await axios.get('http://localhost:3001/data/history')
        setData(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchHistory()
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