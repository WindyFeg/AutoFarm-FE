import ProfileManager from "./profilemanager";
import Card from "./card";


function Profile(props) {
  const cardType = ["humid_Dirt", "humid_Air", "temperature"]

  return (
    <div className="profile ">
      <h2 className="bodylabel">Profile:</h2>
      <ProfileManager />
      <div>
        {cardType.map((type) => {
          return <Card
            type={type}
            key={type}
          />
        })}
      </div>
    </div>

  );
}
export default Profile;
