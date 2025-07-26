import React from "react";
import Titulo from "./Components/Titulo";
import Grid from "./Components/Grid";
import Boton from "./Components/Boton";
import Tabla from "./Components/Tabla";

const App: React.FC = () => {
  return (
    <div className="container">
      <Titulo tituloG="Agenda de Citas - Consultorio Médico" />
      <Grid />
      <Boton />

      <Titulo tituloM="Lista de Citas" />
      <Tabla />
    </div>
  );
};

export default App;
