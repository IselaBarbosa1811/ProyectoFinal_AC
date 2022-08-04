import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function Registroventas(props) {
    const [codigo, setCodigo] = useState("");
    const [nombreproducto, setNombreProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [stock, setStock] = useState("");
    const [numerofactura, setFactura] = useState("");
    const [nombrecliente, setNombrecliente] = useState("");
    const [fecha, setFecha] = useState("");


    const cambiarCodigo = (e) => {
        setCodigo(e.target.value);
    }
    const cambiarNombreProducto = (e) => {
        setNombreProducto(e.target.value);
    }

    const cambiarPrecio = (e) => {
        setPrecio(e.target.value);
    }
    const cambiarCantidad = (e) => {
        setCantidad(e.target.value);
    }
    const cambiarStock = (e) => {
        setStock(e.target.value);
    }
    const cambiarFactura = (e) => {
        setFactura(e.target.value);
    }
    const cambiarNombrecliente = (e) => {
        setNombrecliente(e.target.value);
    }
    const cambiarFecha = (e) => {
        setFecha(e.target.value);
    }

    const guardarVentas = (e) => {
        e.preventDefault();
        console.log(`Codigo: ${codigo} , Nombre del producto: ${nombreproducto},  Precio: ${precio}, Cantidad: ${cantidad},
        Stock: ${stock}, Factura: ${numerofactura},  Nombre del cliente: ${nombrecliente}, Fecha: ${fecha} `);
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
                            <h4>Registrar Ventas</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarVentas}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Código</label>
                                        <input type="text" value={codigo} onChange={cambiarCodigo} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Producto</label>
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
                                            <label>Cantidad</label>
                                            <input type="number" value={cantidad} onChange={cambiarCantidad} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Stock</label>
                                            <input type="number" value={stock} onChange={cambiarStock} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Número Factura</label>
                                            <input type="text" value={numerofactura} onChange={cambiarFactura} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre cliente</label>
                                            <input type="text" value={nombrecliente} onChange={cambiarNombrecliente} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Fecha</label>
                                            <input type="date" value={fecha} onChange={cambiarFecha} />
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

