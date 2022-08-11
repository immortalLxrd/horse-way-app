import {applyMiddleware, createStore} from "redux";
import {horseDataReducer} from "./horseDataReducer";
import thunk from "redux-thunk";

export const store = createStore(horseDataReducer, applyMiddleware(thunk));
