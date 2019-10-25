import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./users/reducer";

const initialState = {};
const reducers = combineReducers<any>({
    usersReducer: usersReducer,
});

const store = createStore(reducers, initialState ,applyMiddleware(thunk));

export default store;
