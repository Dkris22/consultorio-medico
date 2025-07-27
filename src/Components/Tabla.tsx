import React from "react";

type Cita = {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  especialidad: string;
  medico: string;
};

type TablaProps = {
  citas: Cita[];
};

const Tabla: React.FC<TablaProps> = ({ citas }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Especialidad</th>
            <th>Médico</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.id}</td>
              <td>{cita.nombre}</td>
              <td>{cita.fecha}</td>
              <td>{cita.hora}</td>
              <td>{cita.especialidad}</td>
              <td>{cita.medico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
