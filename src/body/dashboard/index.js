import { Fragment, useEffect, useState } from "react";
import Profile from "./Profile";
import History from "./History";
import axios from "axios";
import * as mqtt from 'mqtt/dist/mqtt'

function Body() {
    const [realTimeData, setRealTimeData] = useState({})
    const [history, setData] = useState([])
    var Loading = false

    var client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
        username: "popos",
        password: "mqttserver"
    })
    var topic = 'historicalData'

    const fetchHistory = async () => {
        const response = await axios.get('http://localhost:3001/data/history')
        Loading = true
        setData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchHistory()
        client.on('message', (topic, message) => {
            var message = message.toString()
            var splitData = message.split(' ')
            var temp = {
                temp: parseFloat(splitData[0]),
                humi: parseFloat(splitData[1]),
                humi_dirt: parseFloat(splitData[2]),
            }
            console.log(temp);
            setRealTimeData(temp);
        })

        client.on('connect', () => {
            client.subscribe(topic)
        })

        return () => {
            client.end()
        }
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