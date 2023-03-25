import React from 'react';
import Graph from './graph';
import axios from 'axios';
import { useEffect, useState } from 'react';

function History(props) {
    const cardType = ["irrigation", "lighting", "temperature"]

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/data/history')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    function datasets(type) {
        if (type === "irrigation") {
            return data.map(obj => obj.humi_dirt);
        }
        else if (type === "lighting") {
            return data.map(obj => obj.humi);
        }
        else {
            return data.map(obj => obj.temp);
        }
    }


    return (
        <div className="history" >
            <h2 className='bodylabel'>History</h2>
            {cardType.map((type) => {
                return <Graph type={type} data={datasets(type)} />
            })}

        </div>
    );
}
export default History;