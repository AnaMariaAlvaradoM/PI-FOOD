const { Router } = require('express');
//const getAllDietsHandler = require('../Controllers/DietsControllers');
const { getDietsHandler } = require('../Handlers/DietasHandlers');

const postRouter = Router();

// Ruta para obtener todos los tipos de dietas
postRouter.get('/', getDietsHandler);



// postRouter.post("/", (req,res)=>{
//     res.send("CREACION DE UNA RECETA")
// })

module.exports = postRouter;