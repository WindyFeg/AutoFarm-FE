import React from 'react';
import Graph from './graph';
import axios from 'axios';
import { useEffect, useState } from 'react';

function History(props) {
    const cardType = ["humid_Dirt", "humid_Air", "temperature"]
    const [Loading, setLoading] = useState(true)
    const [history, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/data/history')
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    function historySets(type) {
        if (type === "humid_Dirt") {
            return history.map(obj => obj.humi_dirt);
        }
        else if (type === "humid_Air") {
            return history.map(obj => obj.humi);
        }
        else {
            return history.map(obj => obj.temp);
        }
    }


    return (
        <div className="history" >
            <h2 className='bodylabel'>History</h2>
            {Loading ? <div>Loading...</div> :
                cardType.map((type) => {
                    return <Graph
                        type={type}
                        history={historySets(type)}
                        key={type}
                    />
                })}

        </div>
    );
}
export default History;