import React, { useEffect } from 'react';
import Graph from './graph';
import { useState, } from 'react';

function History(props) {
    const cardType = ["humid_Dirt", "humid_Air", "temperature"]
    const [history, setData] = useState([])

    useEffect(() => {
        setData(props.history)
    }, [props.history])

    function historySets(type) {
        console.log(history)
        if (history.err !== undefined) {
            console.log("Database Error!")
            return [4, 0, 4]
        }
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
            {cardType.map((type) => {
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