function Card(props) {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (<div className={`${props.type} container-fluid`}>
        <div className="title">
            {capitalizeFirstLetter(props.type)}
            <div className="infor">
                <div className="merit"> 37</div>
                <div className="unit">
                    {
                        props.type === "irrigation" ? "ml/m2" :
                            props.type === "lighting" ? "W/m2"
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