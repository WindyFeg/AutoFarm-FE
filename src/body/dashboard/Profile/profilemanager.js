import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';

function ProfileManager() {
    const navigate = useNavigate()
    const [mode, setMode] = useState(0);

    function createNewProfile() {
        navigate("/edit");
    }
    const [selectedValue, setSelectedValue] = useState("Manual");

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value == "Manual") {
            document.getElementById("func-button").innerHTML = "<Button class='header_btn edit-button' variant='success' size='sm' onclick={WaterMode()}>Watering</Button>"
        }
        else if (event.target.value == "Semi") {
            document.getElementById("func-button").innerHTML = "<Button class='header_btn edit-button' variant='success' size='sm' >Edit</Button>";
        }
        console.log(event.target.value)
    };

    function WaterMode(mode) {
        console.log(mode);
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
                {/* <Button id="edit-button" variant="success" size="sm" value="Tưới">
                    Edit profile
                </Button> */}


                {/* <Button id="create-button" variant="success" size="sm" onClick={() => createNewProfile()}>
                    New profile
                </Button> */}


            </div>
        </Fragment>

    );
}

export default ProfileManager;