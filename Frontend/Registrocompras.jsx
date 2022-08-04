import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function Registrocompras(props) {
    const [codigo, setCodigo] = useState("");
    const [nombreproducto, setNombreProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [nombreproveedor, setNombreProveedor] = useState("");
    const [fecha, setFecha] = useState("");
    const [total, setTotal] = useState("");
    

    const cambiarCodigo = (e) => {
        setCodigo(e.target.value);
    }
    const cambiarNombreProducto = (e) => {
        setNombreProducto(e.target.value);
    }

    const cambiarPrecio= (e) => {
        setPrecio(e.target.value);
    }
    const cambiarNombreProveedor = (e) => {
        setNombreProveedor(e.target.value);
    }
    const cambiarFecha = (e) => {
        setFecha(e.target.value);
    }
    const cambiarTotal = (e) => {
        setTotal(e.target.value);
    }

    const guardarCompras = (e) => {
        e.preventDefault();
        console.log(`Codigo: ${codigo} , Nombre del producto: ${nombreproducto},  Precio: ${precio}, Nombre del proveedor: ${nombreproveedor},
        Fecha: ${fecha}, Total: ${total}`);
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
                            <h4>Registrar Compras</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarCompras}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Código</label>
                                        <input type="text" value={codigo} onChange={cambiarCodigo} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre del Producto</label>
                                        <input type="text" value={nombreproducto} onChange={cambiarNombreProducto} />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Precio</label>
                                            <input type="text" value={precio} onChange={cambiarPrecio} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre del proveedor</label>
                                            <input type="text" value={nombreproveedor} onChange={cambiarNombreProveedor} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Fecha</label>
                                            <input type="date" value={fecha} onChange={cambiarFecha} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total</label>
                                            <input type="text" value={total} onChange={cambiarTotal} />
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

