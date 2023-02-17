// Importamos las dependencias necesarias
const { ExtractJwt, Strategy } = require("passport-jwt");
const passport = require("passport");

// Importamos el controlador que se encarga de buscar un usuario por su id
const { findUserById } = require("../users/users.controllers");

// Configuramos el objeto que contendrá los datos necesarios para autenticar un usuario
const passportConfigs = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "academlo",
};

// Creamos una nueva estrategia de autenticación con Passport, utilizando el objeto de configuración anterior
passport.use(
  new Strategy(passportConfigs, (tokenDecoded, done) => {
    // Buscamos al usuario por su id, utilizando el controlador importado
    findUserById(tokenDecoded.id)
      .then((data) => {
        // Si encontramos al usuario, lo pasamos al callback done() junto con el token decodificado
        if (data) {
          done(null, tokenDecoded);
        } else {
          // Si no encontramos al usuario, pasamos false al callback done()
          done(null, false);
        }
      })
      .catch((err) => {
        // Si ocurre un error durante la búsqueda del usuario, lo pasamos al callback done()
        done(err, false);
      });
  })
);

// Exportamos el objeto passport, que contiene las funciones necesarias para autenticar usuarios
module.exports = passport;
