
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './Reducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
//      // esta línea es para poder hacer peticiones a un server
// );
// export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import recipeReducer from "./Reducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;