import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./users/reducer";
import createSagaMiddleware from 'redux-saga';
import {watchUsers} from "./users/sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const reducers = combineReducers<any>({
    usersReducer: usersReducer,
});

const store = createStore(reducers, initialState ,applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(watchUsers);

export default store;
