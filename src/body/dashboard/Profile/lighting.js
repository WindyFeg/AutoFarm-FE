import "./styles.css";

function Lighting() {
  return (
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
  );
}

export default Lighting;
