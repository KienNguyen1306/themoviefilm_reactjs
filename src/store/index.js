import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./movies/reducer";
import ortherReducer from "./orthers/reducer";


const rootReducer = combineReducers({
  movies: moviesReducer,
  orther:ortherReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
