import "./styles.css";

function Irrigation(){
  return (
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
  );
}

export default Irrigation;