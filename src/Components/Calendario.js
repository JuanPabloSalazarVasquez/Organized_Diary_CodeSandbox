import React from 'react';
import "../Styles/Calendario.css"

import "../Global.css";

export default function Calendario(){
    return(
        <div className="Calendario">
            <img
                src="./img/calendario.png"
                alt="Calendario"
            />
            <div>
            <button> OK </button>
            </div>
        </div>
    )
}