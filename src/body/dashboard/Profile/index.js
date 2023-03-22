import ProfileManager from "./profilemanager";
import Card from "./card";


function Profile(props) {
  const cardType = ["irrigation", "lighting", "temperature"]

  return (
    <div className="profile ">
      <h2>Profile:</h2>
      <ProfileManager />
      <div>
        {cardType.map((type) => {
          return <Card type={type} />
        })}
      </div>
    </div>

  );
}
export default Profile;
