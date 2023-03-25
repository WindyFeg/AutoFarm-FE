import Dropdown from "react-bootstrap/Dropdown";
import { Fragment } from "react";
import { useState } from 'react';

function EditState(props) {
    const [mode, setMode] = useState('');

    const handleDropdownChange = (event) => {
        setMode(event.target.value);
    };

    const ActiveTime = <div className="statefont">
        ACTIVE TIME FROM
        <input className="stateinput" /> TO <input className="stateinput" />
    </div>

    const Irrigation = <div className="statefont">
        KEEP ml/m2 ABOVE
        <input className="stateinput" />
    </div>

    const Lighting = <div className="statefont">
        LIGHT ON FROM
        <input className="stateinput" /> TO <input className="stateinput" />
    </div>

    const Temperature = <div className="statefont">
        ALERT RANGE: TEMP LESS THAN <input className="stateinput" /> OR TEMP GREATER THAN <input className="stateinput" />
    </div>

    const statePalette = {
        "editTemperature": Temperature,
        "editIrrigation": Irrigation,
        "editLighting": Lighting,
    }

    return (
        <Fragment>
            <div className="dropdown--state">
                <select value={mode} onChange={handleDropdownChange}>
                    <option value="Automatic"><Dropdown.Item href="#/action-1">Automatic</Dropdown.Item></option>
                    <option value="Manual"><Dropdown.Item href="#/action-2">Manual</Dropdown.Item></option>
                </select>
            </div>

            {statePalette[props.type]}
            {ActiveTime}
        </Fragment>
    );
}

export default EditState;