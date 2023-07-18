import axios from "axios";

export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE = "GET_RECIPE"

export const getRecipes = () =>{ //PAso acá el array de las rectas
    return async function(dispatch){
        const apiData = await axios.get("http://localhost:3001/recipes"); 

        const recipes = apiData.data;
        dispatch({type: GET_RECIPES, payload: recipes})
    }
};
export const getRecipe = (idRecipe) =>{ //Paso una sola receta
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes/${idRecipe}`); 
    
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE, payload: recipe})
    }
};

