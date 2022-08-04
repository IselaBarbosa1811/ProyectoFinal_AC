import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Registroprod(props) {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [proveedor, setProveedor] = useState("");
    const [preciocompra, setPrecioCompra] = useState("");
    const [precioventa, setPrecioVenta] = useState("");
    const [peso, setPesoProduct] = useState("");
    const [stock, setStock] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const cambiarNombre = (e) => {
        setNombre(e.target.value);
    }
    const cambiarCategoria = (e) => {
        setCategoria(e.target.value);
    }

    const cambiarProveedor = (e) => {
        setProveedor(e.target.value);
    }
    const cambiarPreciocompra = (e) => {
        setPrecioCompra(e.target.value);
    }
    const cambiarPrecioventa = (e) => {
        setPrecioVenta(e.target.value);
    }
    const cambiarPesoprodct = (e) => {
        setPesoProduct(e.target.value);
    }
    const cambiarStock = (e) => {
        setStock(e.target.value);
    }
    const cambiarDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    const guardarProductos = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre} , Categoria: ${categoria},  Proveedor: ${proveedor}, Precio compra: ${preciocompra},
        Precio venta: ${precioventa}, Peso: ${peso}, Stock: ${stock}, Descripcion: ${descripcion}`);
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
                            <h4>Registrar Productos</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={guardarProductos}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombre</label>
                                        <input type="text" value={nombre} onChange={cambiarNombre} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Categoria</label>
                                        <input type="text" value={categoria} onChange={cambiarCategoria} />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Proveedor</label>
                                            <input type="text" value={proveedor} onChange={cambiarProveedor} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Precio compra</label>
                                            <input type="text" value={preciocompra} onChange={cambiarPreciocompra} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Precio venta</label>
                                            <input type="text" value={precioventa} onChange={cambiarPrecioventa} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Peso del producto</label>
                                            <input type="text" value={peso} onChange={cambiarPesoprodct} />
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
                                            <label>Descripción</label>
                                            <input type="text" className="form-control required" />
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
