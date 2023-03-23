
import EditState from "./editstate";

function EditCard(props) {
    function removeEditLetter(str) {
        return str.slice(4);
    }


    return (
        <div className={`${props.type} container-fluid`}>
            <div className="title editTitle">
                {removeEditLetter(props.type)}
                <div className="infor">
                    <div className="merit"> 37</div>
                    <div className="unit">
                        {
                            props.type === "editIrrigation" ? "ml/m2" :
                                props.type === "editLighting" ? "W/m2"
                                    : "°C"
                        }
                    </div>
                </div>
            </div>
            <div className="state editState">
                <EditState />
            </div>
        </div>
    )
}

export default EditCard;