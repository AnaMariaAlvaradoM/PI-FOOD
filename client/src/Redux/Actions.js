import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
// const CLEAN_DETAIL = "CLEAN_DETAIL";


export const getRecipes = () =>{ //Paso un array 
  return async function (dispatch) {
      const apiData = await axios.get("http://localhost:3001/recipes"); 
  
      const recipes = apiData.data;
      dispatch({type: GET_RECIPES, payload: recipes})
  }
}
export const getRecipe = (id) =>{ //Paso una sola receta
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`); 
    
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE, payload: recipe})
    }
}

export const getRecipeByName = (title) =>{ //Paso una sola receta
  return async function(dispatch){
      const apiData = await axios.get(`http://localhost:3001/recipes?name=${title}`); 
  
      const result = apiData.data;
      dispatch({type: SEARCH_BY_NAME, payload: result})
  }
}

export const createRecipe = (data) => async (dispatch) => {
  try {
    const apiData = await axios.post(`http://localhost:3001/recipes`, data);
    const recipes = apiData.data; // Si la API devuelve solo un objeto receta, utiliza 'recipe' en lugar de 'recipes'
    dispatch({ type: CREATE_RECIPE, payload: recipes });
  } catch (error) {
    alert(error.message); // Muestra el mensaje de error en lugar de 'error'
  }
};

export const getAllDiets = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/diets");
    const allDiets = response.data;
    dispatch({ type: GET_ALL_DIETS, payload: allDiets });
  };
};