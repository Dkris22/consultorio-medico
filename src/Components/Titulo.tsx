import React from "react";

type TituloProps = {
  tituloG?: string;
  tituloM?: string;
};

const Titulo: React.FC<TituloProps> = ({ tituloG, tituloM }) => {
  return (
    <div className="text-center my-4">
      {tituloM && <h4 className="text-secondary">{tituloM}</h4>}

      {tituloG && (
        <div
          className="container-md border border-dark rounded p-3"
          style={{ backgroundColor: "#e4f7feff" }}
        >
          <h1 className="text-primary-emphasis">{tituloG}</h1>
        </div>
      )}
    </div>
  );
};

export default Titulo;
