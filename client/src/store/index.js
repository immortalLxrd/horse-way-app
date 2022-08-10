import {applyMiddleware, createStore} from "redux";
import {horseDataReducer} from "./horseDataReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

export const store = createStore(horseDataReducer, composeWithDevTools(applyMiddleware(thunk)));
