import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function Registromascotas(props) {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [raza, setRaza] = useState("");
    const [dueño, setDueño] = useState("");
    

    const cambiarNombre = (e) => {
        setNombre(e.target.value);
    }
    const cambiarTipo = (e) => {
        setTipo(e.target.value);
    }

    const cambiarRaza= (e) => {
        setRaza(e.target.value);
    }
    const cambiarDueño = (e) => {
        setDueño(e.target.value);
    }
    

    const guardarRegistroMasc = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre} , Tipo: ${tipo},  Raza: ${raza}, Dueño: ${dueño}`);
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
                            <h4>Registrar mascota</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarRegistroMasc}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                        <input type="text" value={nombre} onChange={cambiarNombre} />
                                    </div>

                                    <div className="row">
                                    <div className="col-md-6">
                                        <label>Tipo</label>
                                        <input type="text" value={tipo} onChange={cambiarTipo} />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6">
                                        <label>Raza</label>
                                        <input type="text" value={raza} onChange={cambiarRaza} />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6">
                                        <label>Dueño</label>
                                        <input type="text" value={dueño} onChange={cambiarDueño} />
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

