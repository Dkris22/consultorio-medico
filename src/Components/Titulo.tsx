import React from "react";

const Titulo: React.FC = () => {
  return (
    <div className="text-center my-4">
      <div
        className="container-md border border-dark rounded p-2"
        style={{ backgroundColor: "#d2d2d2ff" }}
      >
        <h1 className="text-primary-emphasis">
          Agenda de Citas - Consultorio Médico
        </h1>
      </div>
    </div>
  );
};

export default Titulo;
