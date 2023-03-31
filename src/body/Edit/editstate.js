import Dropdown from "react-bootstrap/Dropdown";
import { Fragment } from "react";
import { useState } from 'react';

function EditState(props) {
    const [mode, setMode] = useState('');
    const [humiDirt, setHumiDirt] = useState('');

    const handleDropdownChange = (event) => {
        setMode(event.target.value);
    };

    const handleHumiDirtChange = (event) => {
        setHumiDirt(event.target.value);
    };

    const ActiveTime = <div className="statefont">
        ACTIVE TIME FROM
        <input className="stateinput" /> TO <input className="stateinput" />
    </div>

    const Irrigation = <div className="statefont">
        KEEP ml/m2 ABOVE
        <div className="dropdown--state  custom--state">
            <select value={humiDirt} onChange={handleHumiDirtChange}>
                <option value="Low"><Dropdown.Item href="#/action-1">Low</Dropdown.Item></option>
                <option value="Mid"><Dropdown.Item href="#/action-2">Mid</Dropdown.Item></option>
                <option value="High"><Dropdown.Item href="#/action-2">High</Dropdown.Item></option>
            </select>
        </div>
    </div>

    const Lighting = <div className="statefont">
    </div>

    const Temperature = <div className="statefont">
        {/* ALERT RANGE: TEMP LESS THAN <input className="stateinput" /> OR TEMP GREATER THAN <input className="stateinput" /> */}
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