import "./styles.css";
import ProfileHeader from "./header.js";
import Irrigation from "./irrigation.js";
import Lighting from "./lighting";
import Temperature from "./temperature";
import Header from "./header.js";

function Profile(props) {
  return (
    <div className="profile container ">
      <ProfileHeader />
      <Irrigation />
      <Lighting />
      <Temperature />
    </div>
  );
}
export default Profile;
