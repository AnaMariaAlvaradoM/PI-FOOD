import { GET_RECIPES, GET_RECIPE, SEARCH_BY_NAME, CREATE_RECIPE, GET_ALL_DIETS } from "./Actions"

const initialState = {
    recipes: [],
    recipe: {},
    result: [], 
    diets: [],
};
const rootReducer= (state = initialState, action) =>{
    switch (action.type){
        case GET_RECIPES:
            return { ...state, recipes: action.payload};
        case GET_RECIPE:
            return { ...state, recipe: action.payload};
        case SEARCH_BY_NAME:
            return { ...state, result: action.payload}
        case CREATE_RECIPE:
            return { ...state, recipes: action.payload}
        case GET_ALL_DIETS:
            return { ...state, diets: action.payload }; 
        default:
            return state;
            // return { ...state}
    }
};
export default rootReducer;