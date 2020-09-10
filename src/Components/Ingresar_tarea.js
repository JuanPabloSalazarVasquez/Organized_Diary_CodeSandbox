import React from "react";
import "../Styles/Ingresar_tarea.css";
import "../Global.css";

export default function Inicio() {
  return (
    <div className="Ingresar_tarea">
      <h1> Ver tarea </h1>
      <h4> Título </h4>
      <h5> Agregas el titulo </h5>

      <div className="Rayita"></div>

      <h3 className="Desc">Descripción </h3>
      <div className="text"> Acá agregas la descripción de tu tarea. </div>

      <div className="Botones">
        <div className="Botones1">
          <button className="Boton1">Fecha límite</button>{" "}
          <button className="Boton2">Recordatorio</button>{" "}
        </div>
        <button className="Boton3">Continuar</button>{" "}
      </div>
    </div>
  );
}
