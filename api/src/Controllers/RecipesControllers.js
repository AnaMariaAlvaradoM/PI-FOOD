const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
const {API_KEY} = process.env;

const cleanArray = (array)=> {
  return    array.map((elem) => { 
        const recipe = {
                    id: elem.id,
                    title: elem.title,
                    image: elem.image,
                    dietTypes: elem.diets,
                    summary: elem.summary,
                    healthScore: elem.healthScore,
                    steps: elem.analyzedInstructions[0]?.steps.map(elem => {
                        return {
                            // number: elem.number,
                            // step: elem.step
                            number: elem.number,
          step: `Paso ${elem.number}: ${elem.step}`
                        }
                    }),
                    createInBd: false,
                }
                return recipe;
});
}
// Queremos retornar lo que nos de Recipe.Create, la cual retorna una promesa, ya que demora un tiempo
// en resolverse.
const createRecipe = async (title, image, summary, healthScore, steps) =>{
      await Recipe.create({title, image, summary, healthScore, steps});
}

const getRecetaById = async ( idRecipe, source) =>{
    let recipe;
  
    if (source === "api") {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`);
    recipe = {
      id: response.data.id,
      title: response.data.title,
      image: response.data.image,
      diets: response.diets,
      healthscore: response.data.healthScore,
      summary: response.data.summary,
      steps: response.data.analyzedInstructions[0]?.steps.map(step => {
        return { number: step.number, step: step.step };
      }) || [],
    };
  } else {
    recipe = await Recipe.findByPk(idRecipe, {
      include: {
        model: Diets,
        attributes: ["id","title"] 
      }
    })
  }
  return recipe;     
};

const getAllRecipes = async() =>{
// // buscar en bdd 
    const dataBaseRecetas = await Recipe.findAll();
    
    const apiRecipeRaw =
     (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data 

    const apiRecipes = cleanArray(apiRecipeRaw.results)
    
    return [...dataBaseRecetas,...apiRecipes]
}
const searchRecipesByName = async (title) =>{
    const dataBaseRecetas = await Recipe.findAll({ 
      where: {
        title: {
          [Op.iLike]: `%${title}%`
        }
        }
    });
    
    const apiRecipeRaw =
     (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data 

    const apiRecipes = cleanArray(apiRecipeRaw.results);
    
    
    const filteredApi = apiRecipes.filter((recipe) => recipe.title.toLowerCase().includes(title.toString().toLowerCase()));  
    

    return [...filteredApi, ...dataBaseRecetas]
    
};

module.exports = { createRecipe, getRecetaById, getAllRecipes, searchRecipesByName }; 