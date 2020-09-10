import React from 'react';
import { Form } from "react-bootstrap"

import "../Global.css";
import "../Styles/Regitro-Inicio_sesion.css"

export default function Registro() {
    return (
        <div className="Registro">
            <h1>Registro</h1>
            <div className="formulario">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su nombre de usuario" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su ontraseña" />
                    </Form.Group>
                    <div className="botones">
                        <button>
                            Atrás
                        </button>
                        <button>
                            Registrarme
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}