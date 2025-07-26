import React from "react";

const Tabla: React.FC = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <tr>
          <th scope="row">1</th>
        </tr>
        <tr>
          <th scope="row">2</th>
        </tr>
        <tr>
          <th scope="row">3</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Tabla;
