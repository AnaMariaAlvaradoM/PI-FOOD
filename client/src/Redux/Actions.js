import axios from "axios";
import { GET_RECIPES, GET_RECIPES_DETAIL, CLEAN_DETAIL } from "./ActionTypes";



export const getRecipes = () => {//PAso acá el array de las rectas
    return async (dispatch) => {
      const response = await axios.get("http://localhost:3001/recipes/");
      const recipes = response.data;
      dispatch({ type: GET_RECIPES, payload: recipes });
    };
  };
  export const getRecipesDetail = (idRecipe) => {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/recipes/${idRecipe}`);
      const recipe = response.data;
      dispatch({ type: GET_RECIPES_DETAIL, payload: recipe });
    };
  };
  export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };
  

// export const getRecipe = (idRecipe) =>{ //Paso una sola receta
//     return async function(dispatch){
//         const apiData = await axios.get(`http://localhost:3001/recipes/${idRecipe}`); 
    
//         const recipe = apiData.data;
//         dispatch({type: GET_RECIPE, payload: recipe})
//     }
// }
// export const searchByQuery = (query) => {
//     return async (dispatch) => {
//       const response = await axios.get(
//         `/recipes?title=${query}`
//       );
//       const recipes = response.data;
//       dispatch({ type: SEARCH_BY_QUERY, payload: recipes });
//     };
//   };
// export const getRecipesDetail = (id) => {
//     return async (dispatch) => {
//       const apiData = await axios.get(`recipes/${id}`);
//       const recipe = apiData.data;
//       dispatch({ type: GET_RECIPES_DETAIL, payload: recipe });
      
//     };
//   };
   