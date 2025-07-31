// src/Components/ResumenCitas.tsx
import React from 'react';

// Definimos todos los tipos necesarios dentro del mismo archivo
type Cita = {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  especialidad: string;
  medico: string;
  estado: 'pendiente' | 'atendida' | 'cancelada';
};

type ResumenCitasProps = {
  citas: Cita[];
};

const ResumenCitas: React.FC<ResumenCitasProps> = ({ citas }) => {
  // Función para agrupar citas por especialidad
  const agruparPorEspecialidad = () => {
    const grupos: Record<string, Cita[]> = {};

    citas.forEach((cita) => {
      if (!grupos[cita.especialidad]) {
        grupos[cita.especialidad] = [];
      }
      grupos[cita.especialidad].push(cita);
    });

    return grupos;
  };

  // Función para traducir estados a colores
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'atendida':
        return 'bg-success text-white';
      case 'cancelada':
        return 'bg-danger text-white';
      default:
        return 'bg-warning';
    }
  };

  const citasAgrupadas = agruparPorEspecialidad();

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h3 className="mb-0">Resumen de Citas por Especialidad</h3>
      </div>
      <div className="card-body">
        {Object.entries(citasAgrupadas).map(([especialidad, citasGrupo]) => (
          <div key={especialidad} className="mb-4">
            <h4 className="d-flex justify-content-between align-items-center">
              {especialidad}
              <span className="badge bg-secondary">{citasGrupo.length} citas</span>
            </h4>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Médico</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {citasGrupo.map((cita) => (
                    <tr key={cita.id}>
                      <td>{cita.nombre}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.hora}</td>
                      <td>Dr. {cita.medico}</td>
                      <td>
                        <span className={`badge ${getEstadoColor(cita.estado)}`}>
                          {cita.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumenCitas;