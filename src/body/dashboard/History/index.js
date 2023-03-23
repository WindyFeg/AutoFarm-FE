import React from 'react';
import Graph from './graph';

function History(props) {
    const cardType = ["irrigation", "lighting", "temperature"]

    return (
        <div className="history" style={myStyle}>
            <h2>History</h2>
            {cardType.map((type) => {
                return <Graph type={type} />
            })}

        </div>
    );
}
export default History;