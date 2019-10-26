import { takeLatest, put, call, delay } from 'redux-saga/effects'
import {
    GET_ALL_USERS_FAILURE,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS
} from "./actions";
import axios from 'axios'

const allUsersRequest = () => {
    return axios.get('./data/users.json')
        .then(response => response.data)
};

function* getUsersSaga() {
    try {
        yield delay(1000);
        const users = yield call<any>(allUsersRequest);
        yield put({type: GET_ALL_USERS_SUCCESS, payload: users})
    } catch (e) {
        const error = 'Something goes wrong when fetching users, please try again';
        yield put({type: GET_ALL_USERS_FAILURE, payload: error})
    }
}

export function* watchGetAllUsers() {
    yield takeLatest(GET_ALL_USERS_REQUEST, getUsersSaga)
}
