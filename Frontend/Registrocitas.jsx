import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function Registrocitas(props) {
    const [nombredueño, setNombre] = useState("");
    const [nombrevet, setNombreVet] = useState("");
    const [cita, setCita] = useState("");
    const [nombremasc, setNombreMasc] = useState("");
    const [tipo, setTipo] = useState("");    
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [fechainicio, setFechaInicio] = useState("");
    const [fechafin, setFechaFin] = useState("");

    const cambiarNombreDueño = (e) => {
        setNombre(e.target.value);
    }
    const cambiarNombreVeterinario = (e) => {
        setNombreVet(e.target.value);
    }
   
    const cambiarCita = (e) => {
        setCita(e.target.value);
    }
    const cambiarNombreMascota = (e) => {
        setNombreMasc(e.target.value);
    }
    const cambiarTipo = (e) => {
        setTipo(e.target.value);
    } 
    const cambiarDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    const cambiarPrecio = (e) => {
        setPrecio(e.target.value);
    }
    const cambiarFechaInicio = (e) => {
        setFechaInicio(e.target.value);
    }
    const cambiarFechaFin = (e) => {
        setFechaFin(e.target.value);
    }


    const guardarCitas = (e) => {
        e.preventDefault();
        console.log(`Nombre dueño: ${nombredueño} , Nombre veterinario: ${nombrevet},  Cita: ${cita}, Nombre mascotas: ${nombremasc},
        Tipo: ${tipo}, Descripcion: ${descripcion},  Precio: ${precio}, Fecha Inicio: ${fechainicio}, Fecha Fin: ${fechafin}`);
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
                            <h4>Registrar Cita</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarCitas}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre del dueño</label>
                                        <input type="text" value={nombredueño} onChange={cambiarNombreDueño} />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre del veterinario</label>
                                            <input type="text" value={nombrevet} onChange={cambiarNombreVeterinario} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Descripción de la cita</label>
                                            <input type="text" value={cita} onChange={cambiarCita} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre de la mascota</label>
                                            <input type="text" value={nombremasc} onChange={cambiarNombreMascota} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Tipo</label>
                                            <input type="text" value={tipo} onChange={cambiarTipo} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Descripción del servicio</label>
                                            <input type="text" value={descripcion} onChange={cambiarDescripcion} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Precio</label>
                                            <input type="text" value={precio} onChange={cambiarPrecio} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Fecha de inicio</label>
                                            <input type="date" value={fechainicio} onChange={cambiarFechaInicio} />
                                        </div>
                                    </div>
                                    <br />

                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Fecha fin</label>
                                            <input type="text" value={fechafin} onChange={cambiarFechaFin} />
                                        </div>
                                    </div>
                                    <div>
                                        <br />
                                        <Form.Select aria-label="Default select example">
                                            <option>Forma de pago</option>
                                            <option value="1">Efectivo</option>
                                            <option value="2">Tarjeta</option>
                                            <option value="3">Transferencia</option>
                                        </Form.Select>
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

