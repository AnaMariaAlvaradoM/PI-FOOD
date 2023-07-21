
// //! llamar a la fn qie obtiene los datos de food
// //! Llamar a la fn que obtenga los datos de la API
// //! Unir los datos, unificando el formato
// //! Cuando tenga los datos, responder con los mismos.

const { createRecipe, getRecetaById, getAllRecipes, searchRecipesByName } = require("../Controllers/RecipesControllers");

const getRecetaIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try{
        const recipe = await getRecetaById(id, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};
const getRecetaNameHandler = async (req, res) => {
    const { name } =  req.query;
    const results = name ? await searchRecipesByName(name) : await getAllRecipes(); 
    res.status(200).json(results);

}
const createRecetaHandler = async (req, res) => {
    const {id, title, image, diets, summary, healthScore, steps} = req.body;
    try{
        const NewRecipe = await createRecipe(id, title, image, diets, summary, healthScore, steps);
        res.status(200).json(NewRecipe);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};
module.exports={
    getRecetaIdHandler,
    getRecetaNameHandler,
    createRecetaHandler,
}