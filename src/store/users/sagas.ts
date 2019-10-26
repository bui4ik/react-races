import { takeLatest, put, call } from 'redux-saga/effects'
import {GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE} from "./actions";
import axios from 'axios'

function* getUsersSaga() {
    try {
        let users = yield call<any>(axios.get('./data/users.json')
            .then(res => res.data));
        yield put({type: GET_ALL_USERS_SUCCESS, users})
    } catch (e) {
        const error = 'Something goes wrong when fetching users, please try again';
        yield put({type: GET_USER_FAILURE, error})
    }
}

export function* watchGetAllUsers() {
    yield takeLatest(GET_ALL_USERS_REQUEST, getUsersSaga)
}
