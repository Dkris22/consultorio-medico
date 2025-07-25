import React from "react";
import Titulo from "./Components/Titulo";
import Grid from "./Components/Grid";

const App: React.FC = () => {
  return (
    <div className="container">
      <Titulo />
      <Grid />
    </div>
  );
};

export default App;
