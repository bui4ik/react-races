import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./users/reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const reducers = combineReducers<any>({
    usersReducer: usersReducer,
});

const store = createStore(reducers, initialState , composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

export default store;
