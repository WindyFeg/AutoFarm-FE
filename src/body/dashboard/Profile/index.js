import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./styles.css";

function Profile(props) {
  return (
    <div className="profile container ">
      <h2>Profile:</h2>
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
      <div className="irrigation container-fluid">
        <div className="title">
          Irrigation
          <div className="infor">
            <div className="merit"> 37</div>
            <div className="unit"> ml/m2</div>
          </div>
        </div>
        <div className="state">
          Automatic
          <div className="calendar">Keeping above 30ml/m2</div>
        </div>
      </div>
      <div className="lighting container-fluid">
        <div className="title">
          Lighting
          <div className="infor">
            <div className="merit"> 37</div>
            <div className="unit"> W/m2</div>
          </div>
        </div>
        <div className="state">
          Automatic
          <div className="calendar">Keeping above 30ml/m2</div>
        </div>
      </div>
      <div className="temperature container-fluid">
        <div className="title">
          Temperatur
          <div className="infor">
            <div className="merit"> 37</div>
            <div className="unit"> oC</div>
          </div>
        </div>
        <div className="state">
          Automatic
          <div className="calendar">Keeping above 30ml/m2</div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
