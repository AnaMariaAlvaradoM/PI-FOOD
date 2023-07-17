const { Router } = require('express');
const recetasRouter = require('./recetasRutas');
const postRouter = require('./dietasRutas');
//const dietas = require('./dietasRutas');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//* Rutas para recetas
routes.use("/recipes", recetasRouter);
//* Rutas para dietas
routes.use("/diets", postRouter);


module.exports = routes;
