import React, { useState, useEffect } from "react";
import Titulo from "./Components/Titulo";
import Grid from "./Components/Grid";
import Boton from "./Components/Boton";
import Tabla from "./Components/Tabla";
import Formulario from "./Components/Formulario";
import Modal from "./Components/Modal";
import ResumenCitas from "./Components/ResumenCitas";

declare global {
  interface Window {
    bootstrap: any;
  }
}

type Cita = {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  especialidad: string;
  medico: string;
  estado: 'pendiente' | 'atendida' | 'cancelada'; 
};

const App: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>(() => {
    const citasGuardadas = localStorage.getItem("citas");
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita: Omit<Cita, "id" | "estado">) => {
    const nuevaCita: Cita = {
      id: citas.length + 1,
      estado: "pendiente", 
      ...cita,
    };
    setCitas([...citas, nuevaCita]);

    const modalElement = document.getElementById("modalFormulario");
    const modalInstance =
      window.bootstrap.Modal.getInstance(modalElement!) ||
      new window.bootstrap.Modal(modalElement!);
    modalInstance.hide();
  };

  const marcarComoAtendida = (id: number) => {
    setCitas(citas.map(cita => 
      cita.id === id ? { ...cita, estado: "atendida" } : cita
    ));
  };

  const cancelarCita = (id: number) => {
    setCitas(citas.map(cita => 
      cita.id === id ? { ...cita, estado: "cancelada" } : cita
    ));
  };

  const handleFiltroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value.toLowerCase());
  };

  const toggleResumen = () => {
    setMostrarResumen(!mostrarResumen);
  };

  const citasFiltradas = [...citas]
    .filter((cita) => {
      const ahora = new Date();
      const fechaHoraCita = new Date(`${cita.fecha}T${cita.hora}`);
      const coincideFiltro =
        cita.especialidad.toLowerCase().includes(filtro) ||
        cita.medico.toLowerCase().includes(filtro);
      return fechaHoraCita >= ahora && coincideFiltro;
    })
    .sort((a, b) => {
      const fechaHoraA = new Date(`${a.fecha}T${a.hora}`);
      const fechaHoraB = new Date(`${b.fecha}T${b.hora}`);
      return fechaHoraA.getTime() - fechaHoraB.getTime();
    });

  return (
    <div
      style={{
        backgroundImage: "url('./images/doctor.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="container">
        <Titulo tituloG="Agenda de Citas - Consultorio Médico" />
        <Grid />

        <div className="row align-items-center my-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Buscar por especialidad o médico"
              value={filtro}
              onChange={handleFiltroChange}
            />
          </div>
          <div className="col-md-6 text-end">
            <button 
              onClick={toggleResumen}
              className="btn btn-secondary me-2"
            >
              {mostrarResumen ? 'Ver Tabla' : 'Ver Resumen'}
            </button>
            <Boton modalTargetId="modalFormulario" />
          </div>
        </div>

        <Modal id="modalFormulario" title="Registrar nueva cita">
          <Formulario onSubmit={agregarCita} />
        </Modal>

        <Titulo tituloM={mostrarResumen ? "Resumen de Citas" : "Lista de Citas"} />

        {mostrarResumen ? (
          <ResumenCitas citas={citasFiltradas} />
        ) : (
          <Tabla
            citas={citasFiltradas}
            onMarcarComoAtendida={marcarComoAtendida} 
            onCancelarCita={cancelarCita} 
          />
        )}
      </div>
    </div>
  );
};

export default App;