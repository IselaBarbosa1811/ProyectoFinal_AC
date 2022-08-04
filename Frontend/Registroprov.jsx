import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function RegistroProveedores(props) {
    const [nombres, setNombres] = useState("");
    const [direccion, setDireccion] = useState("");
    const [pais, setPais] = useState("");
    const [telefono, setTelefono] = useState("");
    const [celular, setCelular] = useState("");
    const [correo, setCorreo] = useState("");

    const cambiarNombres = (e) => {
        setNombres(e.target.value);
    }
    const cambiarDireccion = (e) => {
        setDireccion(e.target.value);
    }

    const cambiarPais = (e) => {
        setPais(e.target.value);
    }
    const cambiarTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const cambiarCelular = (e) => {
        setCelular(e.target.value);
    }
    const cambiarCorreo = (e) => {
        setCorreo(e.target.value);
    }

    const guardarProveedores = (e) => {
        e.preventDefault();
        console.log(`Nombres: ${nombres} ,Direccion: ${direccion} Pais: ${pais},  Telefono: ${telefono}, Celular: ${celular},
        , Correo: ${correo}`);
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
                            <h4>Registrar Proveedores</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarProveedores}>
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombres</label>
                                            <input type="text" value={nombres} onChange={cambiarNombres} />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Dirección</label>
                                                <input type="text" value={direccion} onChange={cambiarDireccion} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Pais</label>
                                                <input type="text" value={pais} onChange={cambiarPais} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Teléfono</label>
                                                <input type="text" value={telefono} onChange={cambiarTelefono} />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Celular</label>
                                                    <input type="text" value={celular} onChange={cambiarCelular} />
                                                </div>
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

