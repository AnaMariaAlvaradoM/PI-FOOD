import { GET_RECIPES, GET_RECIPES_DETAIL, CLEAN_DETAIL } from "./ActionTypes";


const initialState = {
    recipes: [],
    recipe: {},
};
const rootReducer= (state = initialState, action) =>{
    switch (action.type){
        case GET_RECIPES:
            return { ...state, recipes: action.payload};
        case GET_RECIPES_DETAIL:
            return { ...state, recipe: action.payload };
        case CLEAN_DETAIL:
            return { ...state, recipe: {}};
        default:
            return { ...state}
    }

};

export default rootReducer;