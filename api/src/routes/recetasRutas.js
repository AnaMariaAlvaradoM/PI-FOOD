const { Router } = require('express');

const { getRecetaIdHandler, 
        getRecetaNameHandler, 
        createRecetaHandler}
        = require("../Handlers/RecetasHandlers");

const recetasRouter = Router();

recetasRouter.get("/:idRecipe", getRecetaIdHandler);

recetasRouter.get("/", getRecetaNameHandler);

recetasRouter.post("/", createRecetaHandler)

module.exports = recetasRouter;