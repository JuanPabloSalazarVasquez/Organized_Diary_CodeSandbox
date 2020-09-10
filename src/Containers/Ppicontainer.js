import React from "react";

import Inicio_sesion from "../Components/Inicio_sesion"
import Registro from "../Components/Registro"
import Carga from "../Components/Carga"
import Tablero from "../Components/Tablero"
import Ingresar_tarea from "../Components/Ingresar_tarea"
import Recordatorio from "../Components/Recordatorio"
import Calendario from "../Components/Calendario"
import Inicio from "../Components/Inicio"


export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <Carga />,
      <Inicio />,
      <Inicio_sesion />,
      <Registro />,
      <Tablero />,
      <Ingresar_tarea />,
      <Calendario />,
      <Recordatorio />,
    </div>
  );
}
