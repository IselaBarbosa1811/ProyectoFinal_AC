import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Registroclientes(props) {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [celular, setCelular] = useState("");
    const [usuario, setUsuario] = useState("");
    const [direccion, setDireccion] = useState("");
    const [correo, setCorreo] = useState("");

    const cambiarNombre = (e) => {
        setNombre(e.target.value);
    }
    const cambiarApellidos = (e) => {
        setApellidos(e.target.value);
    }

    const cambiarCelular = (e) => {
        setCelular(e.target.value);
    }
    const cambiarUsuario = (e) => {
        setUsuario(e.target.value);
    }
    const cambiarDireccion = (e) => {
        setDireccion(e.target.value);
    }
    const cambiarCorreo = (e) => {
        setCorreo(e.target.value);
    }

    const guardarClientes = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre} , Apellidos: ${apellidos},  Celular: ${celular}, Usuario: ${usuario},
        Direccion: ${direccion}, Correo: ${correo}`);
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                        <div className="container text-center fa-5x">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="card-header bg-info text-center">
                            <h4>Registrar clientes</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarClientes}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombres</label>
                                        <input type="text" value={nombre} onChange={cambiarNombre} />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Apellidos</label>
                                            <input type="text" value={apellidos} onChange={cambiarApellidos} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Celular</label>
                                            <input type="text" value={celular} onChange={cambiarCelular} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Usuario</label>
                                            <input type="text" value={usuario} onChange={cambiarUsuario} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Dirección</label>
                                            <input type="text" value={direccion} onChange={cambiarDireccion} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Correo</label>
                                            <input type="email" value={correo} onChange={cambiarCorreo} />
                                        </div>
                                    </div>

                                </div>
                                <br />
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

