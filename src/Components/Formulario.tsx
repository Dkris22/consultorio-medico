// src/Components/Formulario.tsx
import React, { useState } from "react";

type FormularioProps = {
  onSubmit: (cita: {
    nombre: string;
    fecha: string;
    hora: string;
    especialidad: string;
    medico: string;
  }) => void;
};

const Formulario: React.FC<FormularioProps> = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [medico, setMedico] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nombre, fecha, hora, especialidad, medico });

    // Limpiar campos
    setNombre("");
    setFecha("");
    setHora("");
    setEspecialidad("");
    setMedico("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre del paciente</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Juan Pérez"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha</label>
        <input
          type="date"
          className="form-control"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          placeholder="Ej. 26/07/2025"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Hora</label>
        <input
          type="time"
          className="form-control"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          placeholder="Ej. 09:00 AM"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Especialidad</label>
        <input
          type="text"
          className="form-control"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          placeholder="Ej. Medicina General"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Médico</label>
        <input
          type="text"
          className="form-control"
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
          placeholder="Ej. Dr. Mario Castañeda"
          required
        />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Guardar cita
        </button>
      </div>
    </form>
  );
};

export default Formulario;
