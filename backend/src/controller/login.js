const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuarios');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(contrasena, usuario.contrasena).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400 /* 24hs */,
        });

        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contrasena incorrecta" });
      }
    });
  });
};

module.exports = login;
