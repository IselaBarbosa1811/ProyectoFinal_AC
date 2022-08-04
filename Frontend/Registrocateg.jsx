import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Registrocateg(props) {
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");

    const cambiarNombre = (e) => {
        setNombre(e.target.value);
    }
    const cambiarFecha = (e) => {
        setFecha(e.target.value);
    }

    const guardarCategorias = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre} , Fecha: ${fecha}`);
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <form onSubmit={guardarCategorias}>
                    <div className="col-md-7  mx-auto">
                        <div className="card">
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="card-header bg-info text-center">
                                <h4>Registrar Categoria</h4>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                        <input type="text" value={nombre} onChange={cambiarNombre} />
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Fecha</label>
                                            <input type="date" value={fecha} onChange={cambiarFecha} />
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                <br />
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

