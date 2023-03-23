import ProfileManager from "./editprofilemanager";
import Card from "./editcard";

function Edit() {
    const cardType = ["editIrrigation", "editLighting", "editTemperature"]

    return (
        <div className="editProfile ">
            <div>
                <h2 className="bodylabel">Profile:</h2>
                <ProfileManager />
                <div className="cardContainer">
                    {cardType.map((type) => {
                        return <Card type={type} />
                    })}
                </div>
            </div>
        </div>
    );
}
export default Edit;