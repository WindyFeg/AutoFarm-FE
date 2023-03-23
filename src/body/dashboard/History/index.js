import React from 'react';
import Graph from './graph';

function History(props) {
    const myStyle = {
        marginLeft : '30px',
        marginRight: '30px',
        textAlign: 'left'
    }
    return (
        <div className="history" style={myStyle}>
            <h2>History</h2>
            <Graph />
            {/* <Graph />
            <Graph /> */}

        </div>
    );
}
export default History;