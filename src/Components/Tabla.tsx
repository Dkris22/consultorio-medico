import React from "react";

type Cita = {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  especialidad: string;
  medico: string;
  estado: 'pendiente' | 'atendida' | 'cancelada'; 
};

type Props = {
  citas: Cita[];
  onMarcarComoAtendida: (id: number) => void; 
  onCancelarCita: (id: number) => void; 
};

const Tabla: React.FC<Props> = ({ citas, onMarcarComoAtendida, onCancelarCita }) => {
  
  const citasPorFecha: { [fecha: string]: Cita[] } = {};
  citas.forEach((cita) => {
    if (!citasPorFecha[cita.fecha]) {
      citasPorFecha[cita.fecha] = [];
    }
    citasPorFecha[cita.fecha].push(cita);
  });

  const esHoy = (fecha: string) => {
    const hoy = new Date();
    const [anio, mes, dia] = fecha.split("-");
    return (
      hoy.getFullYear() === parseInt(anio) &&
      hoy.getMonth() + 1 === parseInt(mes) &&
      hoy.getDate() === parseInt(dia)
    );
  };

  return (
    <div className="table-responsive">
      {Object.keys(citasPorFecha).map((fecha) => (
        <div key={fecha}>
          <h5 className="mt-4">
            {esHoy(fecha) ? "📅 Hoy - " : "📆 "} {fecha}
          </h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Hora</th>
                <th>Especialidad</th>
                <th>Médico</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citasPorFecha[fecha].map((cita) => (
                <tr
                  key={cita.id}
                  className={esHoy(fecha) ? "table-success" : ""}
                >
                  <td>{cita.id}</td>
                  <td>{cita.nombre}</td>
                  <td>{cita.hora}</td>
                  <td>{cita.especialidad}</td>
                  <td>{cita.medico}</td>
                  <td>{cita.estado}</td> 
                  <td>
                    {cita.estado === 'pendiente' && (
                      <div className="btn-group" role="group">
                        <button
                          onClick={() => onMarcarComoAtendida(cita.id)}
                          className="btn btn-sm btn-success"
                        >
                          Atender
                        </button>
                        <button
                          onClick={() => onCancelarCita(cita.id)}
                          className="btn btn-sm btn-danger ms-2"
                        >
                          Cancelar
                        </button>
                      </div>
                    )}
                    {cita.estado !== 'pendiente' && '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Tabla;

