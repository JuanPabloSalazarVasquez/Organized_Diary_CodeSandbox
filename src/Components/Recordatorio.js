import React from "react";
import "../Styles/Recordatorio.css";
import { InputGroup } from "react-bootstrap";

import "../Global.css";

export default function Inicio() {
  return (
    <div className="Recordatorio">
      <h1> Recordatorio </h1>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <h3> Nada</h3>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <h3> Minutos</h3>
        <p> 30 </p>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <h3> Horas </h3>
        <p> 12 </p>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <h3> Días </h3>
        <p> 1 </p>
      </div>

      <button> Agregar Tarea </button>
    </div>
  );
}
