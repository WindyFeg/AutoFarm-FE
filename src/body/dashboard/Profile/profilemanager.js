import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';

function ProfileManager() {
    const navigate = useNavigate()

    function createNewProfile() {
        navigate("/edit");
    }
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Fragment>
            <div className="dropdown">
                <select value={selectedValue} onChange={handleDropdownChange}>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Semi">Semi</option>
                </select>
            </div>
            <div className="group-button mx-auto">
                <Button id="edit-button" variant="success" size="sm">
                    Edit profile
                </Button>{" "}
                <Button id="create-button" variant="success" size="sm" onClick={() => createNewProfile()}>
                    New profile
                </Button>
            </div>
        </Fragment>

    );
}

export default ProfileManager;