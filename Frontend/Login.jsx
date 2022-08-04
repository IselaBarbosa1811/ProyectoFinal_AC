import './styles.css';
import React, {useState} from 'react';


export default function Login (props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

const cambiarNombre = (e) =>{
  setNombre(e.target.value);
}
const cambiarCorreo = (e) =>{
  setCorreo(e.target.value);
}
const cambiarContrasena = (e) =>{
  setContrasena(e.target.value);
}

const enviarDatos = (e) => {
  e.preventDefault();
  console.log(`Nombre: ${nombre} , Corrreo: ${correo}, Contrasena: ${contrasena}`);
}

  return (

    <div className="Auth-form-container">
      <form onSubmit={enviarDatos}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={cambiarNombre} />
          </div>
            <label>Correo</label>
            <input type="email" value={correo} onChange={cambiarCorreo} />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input type="password" value={contrasena} onChange={cambiarContrasena} />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
