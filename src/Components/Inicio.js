import React from 'react';

import "../Global.css";
import "../Styles/Inicio.css"

export default function Inicio() {
    return (
        <div className="Inicio">
            <div className="titulo center_txt">
                <h1>Organized</h1>
                <h2>Diary</h2>
            </div>
            <div className="botones center_txt">
                <button>Registrarme</button>
                <br />
                <button>Ya tengo una cuenta</button>
            </div>
        </div>
    )
}