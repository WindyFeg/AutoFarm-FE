import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import "./styles.css";
import {useState} from 'react';

function ProfileManager() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Fragment>
            <div className="dropdown">
            <select value={selectedValue} onChange={handleDropdownChange}>
                <option value= "">
                        Default
                </option>
                    <option value= "Automatic"><Dropdown.Item  href="#/action-1">Automatic</Dropdown.Item></option>
                    <option value= "Manual"><Dropdown.Item  href="#/action-2">Manual</Dropdown.Item></option>
                    <option value= "Something else"><Dropdown.Item  href="#/action-3">Something else</Dropdown.Item></option>
            </select>
            </div>
            <div className="group-button mx-auto">
                <Button id="edit-button" variant="success" size="sm">
                    Edit profile
                </Button>{" "}
                <Button id="create-button" variant="success" size="sm">
                    New profile
                </Button>
            </div>
        </Fragment>

    
        // const [selectedValue, setSelectedValue] = useState('');
      
        // const handleDropdownChange = (event) => {
        //   setSelectedValue(event.target.value);
        // };
      
        // return (
        //   <select value={selectedValue} onChange={handleDropdownChange}>
        //     <option value="">--Please choose an option--</option>
        //     <option value="option1">Option 1</option>
        //     <option value="option2">Option 2</option>
        //     <option value="option3">Option 3</option>
        //   </select>
        );
}

export default ProfileManager;