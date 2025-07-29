import React, { useState } from "react";
import Titulo from "./Components/Titulo";
import Grid from "./Components/Grid";
import Boton from "./Components/Boton";
import Tabla from "./Components/Tabla";
import Formulario from "./Components/Formulario";
import Modal from "./Components/Modal";

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
};

const App: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);

  const agregarCita = (cita: Omit<Cita, "id">) => {
    const nuevaCita: Cita = {
      id: citas.length + 1,
      ...cita,
    };
    setCitas([...citas, nuevaCita]);

    // Cierra el modal manualmente
    const modalElement = document.getElementById("modalFormulario");
    const modalInstance =
      window.bootstrap.Modal.getInstance(modalElement!) ||
      new window.bootstrap.Modal(modalElement!);
    modalInstance.hide();
  };

  return (
    <div className="container">
      <Titulo tituloG="Agenda de Citas - Consultorio Médico" />
      <Grid />

      {/* Usa el componente Boton y activa el modal por id */}
      <Boton modalTargetId="modalFormulario" />

      <Modal id="modalFormulario" title="Registrar nueva cita">
        <Formulario onSubmit={agregarCita} />
      </Modal>

      <Titulo tituloM="Lista de Citas" />
      <Tabla
        citas={[...citas]
          .filter((cita) => {
            const ahora = new Date();
            const fechaHoraCita = new Date(`${cita.fecha}T${cita.hora}`);
            return fechaHoraCita >= ahora;
          })
          .sort((a, b) => {
            const fechaHoraA = new Date(`${a.fecha}T${a.hora}`);
            const fechaHoraB = new Date(`${b.fecha}T${b.hora}`);
            return fechaHoraA.getTime() - fechaHoraB.getTime();
          })}
      />
    </div>
  );
};

export default App;
