import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';
import * as mqtt from 'mqtt/dist/mqtt'
import ReactDOM from 'react-dom';

function ProfileManager(props) {
    const navigate = useNavigate()
    const [selectedValue, setSelectedValue] = useState("Manual");
    const [selectedMode, setSelectedMode] = useState("medium");


    function createNewProfile() {
        navigate("/edit");
    }


    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value == "Manual") {
            ReactDOM.render(<WaterButton />, document.getElementById("func-button"));
        }
        else if (event.target.value == "Semi") {
            document.getElementById("func-button").innerHTML = "<Button  class='edit-button btn btn-success'  variant='success' size='sm' >Edit</Button>";
        }
        console.log(event.target.value)
    };
    const handleWateringMode = (event) => {
        setSelectedMode(event.target.value);
        console.log(event.target.value)
    }

    const WaterButton = () => {
        return (
            <Fragment>
                <div className="dropdown">
                    <select id="manual_mode" value={selectedMode} onChange={handleWateringMode}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <Button onClick={() => {
                    const client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
                        username: "popos",
                        password: "mqttserver"
                    })
                    client.publish('profile', document.getElementById("manual_mode").value)
                }} id="edit-button" variant="success" size="sm" value="Tưới">
                    Watering
                </Button>
            </Fragment>)
    }


    return (
        <Fragment>
            <div className="dropdown">
                <select id="mode-select" value={selectedValue} onChange={handleDropdownChange}>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Semi">Semi</option>
                </select>
            </div>

            <div id="func-button" className="group-button mx-auto">
                {/* <WaterButton mode="low" /> */}
            </div>
        </Fragment >

    );
}

export default ProfileManager;