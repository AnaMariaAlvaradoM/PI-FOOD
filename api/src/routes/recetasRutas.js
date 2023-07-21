const { Router } = require('express');

const { getRecetaIdHandler, 
        getRecetaNameHandler, 
        createRecetaHandler}
        = require("../Handlers/RecetasHandlers");

const recetasRouter = Router();

recetasRouter.get("/:id", getRecetaIdHandler);

recetasRouter.get("/", getRecetaNameHandler);

recetasRouter.post("/", createRecetaHandler)

module.exports = recetasRouter;