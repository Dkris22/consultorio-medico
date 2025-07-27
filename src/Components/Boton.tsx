// src/Components/Boton.tsx
import React from "react";

type BotonProps = {
  label?: string;
  modalTargetId?: string;
};

const Boton: React.FC<BotonProps> = ({
  label = "Agendar una cita",
  modalTargetId,
}) => {
  return (
    <div className="text-end my-4">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target={`#${modalTargetId}`} // importante: #
      >
        {label}
      </button>
    </div>
  );
};

export default Boton;
