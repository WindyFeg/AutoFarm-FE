import "./styles.css";

function Temperature() {
  return (   
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
  );
}

export default Temperature;
