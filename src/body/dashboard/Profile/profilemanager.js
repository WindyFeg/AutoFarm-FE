import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import "./styles.css";

function ProfileManager() {

    return (
        <Fragment>
            <Dropdown className="dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Default
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Automatic</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Manual</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="group-button mx-auto">
                <Button id="edit-button" variant="success" size="sm">
                    Edit profile
                </Button>{" "}
                <Button id="create-button" variant="success" size="sm">
                    New profile
                </Button>
            </div>
        </Fragment>

    )
}

export default ProfileManager;