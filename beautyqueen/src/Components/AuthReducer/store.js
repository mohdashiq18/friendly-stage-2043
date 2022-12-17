import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {Reducer as AuthReducer} from "./Reducer";

import { LoginReducer as LogReducer } from "./LoginReducer";
const rootReducer=combineReducers({AuthReducer,LogReducer})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
export { store };