import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {Reducer as AuthReducer} from "./AuthReducer/Reducer";
const store = legacy_createStore(AuthReducer,applyMiddleware(thunk));
export { store };