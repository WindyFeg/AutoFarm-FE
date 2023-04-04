import ProfileManager from "./profilemanager";
import Card from "./card";


function Profile(props) {
  const cardType = ["humid_Dirt", "humid_Air", "temperature"]

  function getRealTimeData(type) {
    if (type === "humid_Dirt") {
      return props.realTimeData.humi_dirt;
    }
    else if (type === "humid_Air") {
      return props.realTimeData.humi;
    }
    else {
      return props.realTimeData.temp;
    }
  }

  return (
    <div className="profile ">
      <h2 className="bodylabel">Profile:</h2>
      <ProfileManager />
      <div>
        {cardType.map((type) => {
          return <Card
            type={type}
            key={type}
            realTimeData={getRealTimeData(type)}
          />
        })}
      </div>
    </div>

  );
}
export default Profile;
