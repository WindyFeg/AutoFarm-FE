import { useNavigate } from "react-router-dom";

function EditProfileManager(props) {
    const navigate = useNavigate();

    function saveProfile() {
        navigate('/');
    }

    return (
        <div className="editProfile_manager">
            <input className="inputbox" type={"text"} />
            <button className="header_btn" onClick={() => saveProfile()}>Save</button>
        </div>
    );
}

export default EditProfileManager;