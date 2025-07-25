import React from "react";

const Grid: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img src="./images/body.png" className="img-fluid" alt="body" />
          <p className="lead">Médicos profesionales</p>
        </div>
        <div className="col">
          <img
            src="./images/calendar.png"
            className="img-fluid"
            alt="calendar"
          />
          <p className="lead">Agenda tu cita</p>
        </div>
        <div className="col">
          <img
            src="./images/medicine.png"
            className="img-fluid"
            alt="medicine"
          />
          <p className="lead">Antibióticos efectivos</p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
