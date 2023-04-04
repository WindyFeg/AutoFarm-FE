function Card(props) {

    function capitalizeFirstLetter(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1)).replace("_", " ");
    }

    return (<div className={`${props.type} container-fluid`}>
        <div className="title">
            {capitalizeFirstLetter(props.type)}
            <div className="infor">
                <div className="merit"> {props.realTimeData === undefined ? <>0.00</> : props.realTimeData}</div>
                <div className="unit">
                    {
                        props.type === "humid_Dirt" ? "ml/m2" :
                            props.type === "humid_Air" ? "W/m2"
                                : "°C"
                    }
                </div>
            </div>
        </div>
        <div className="state">
            Automatic
            <div className="calendar">Keeping above 30ml/m2</div>
        </div>
    </div>)
}

export default Card;