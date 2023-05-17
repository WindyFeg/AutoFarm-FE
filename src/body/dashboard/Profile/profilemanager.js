import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';
import * as mqtt from 'mqtt/dist/mqtt';

function ProfileManager(props) {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState("Manual");
    const [selectedMode, setSelectedMode] = useState("medium");

    function createNewProfile() {
        navigate("/edit");
    }

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
    };

    const handleWateringMode = (event) => {
        setSelectedMode(event.target.value);
        console.log(event.target.value);
    };

    const handleWateringButtonClick = () => {
        const client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
            username: "popos",
            password: "mqttserver"
        });
        console.log("send" + selectedMode);
        client.publish('profile', selectedMode);
    };

    const handleSaveButtonClick = () => {
        const client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
            username: "popos",
            password: "mqttserver"
        });
        console.log(document.getElementById("temp").value);
        console.log(document.getElementById("humi_dirt").value);
        client.publish("humi_dirt", document.getElementById("humi_dirt").value);
    }

    const handleAutoMode = () => {
        const client = mqtt.connect('ws://mqtt.binhnguyen.dev', {
            username: "popos",
            password: "mqttserver"
        });
        document.getElementById("auto").innerHTML = "Auto mode is on";
        console.log("auto");
        client.publish("profile", "auto");
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

            {
                selectedValue === "Automatic" && (
                    <div style={{ color: "green" }} id="auto">
                        <Button onClick={handleAutoMode} id="edit-button" variant="success" size="sm" value="Tưới">
                            Save
                        </Button>
                    </div>
                )
            }

            {selectedValue === "Manual" && (
                <Fragment>
                    <div className="dropdown">
                        <select id="manual_mode" value={selectedMode} onChange={handleWateringMode}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <Button onClick={handleWateringButtonClick} id="edit-button" variant="success" size="sm" value="Tưới">
                        Watering
                    </Button>
                </Fragment>
            )}

            {selectedValue === "Semi" && (
                <Fragment>
                    <div>
                        Water Condition:
                    </div>
                    Temperature greater than
                    <input className="inputbox semi" id="temp" type={"number"} required />
                    Or Humid dirt less than
                    <input className="inputbox semi" id="humi_dirt" type={"number"} required />
                    <Button onClick={handleSaveButtonClick} id="edit-button" variant="success" size="sm" value="Tưới">
                        Save
                    </Button>
                </Fragment>
            )}
        </Fragment>
    );
}

export default ProfileManager;
