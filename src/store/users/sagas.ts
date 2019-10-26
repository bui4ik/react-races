import { takeEvery, put, call, delay, all } from 'redux-saga/effects'
import * as ac from "./actions";
import * as requests from "../../api/requests/usersRequest";

function* getUsers() {
    try {
        yield delay(1000);
        const users = yield call<any>(requests.getAllUsers);
        yield put(ac.getAllUsersSuccess(users))
    } catch (e) {
        const error = 'Something goes wrong when fetching users, please try again';
        yield put(ac.getAllUsersFailure(error))
    }
}

function* getUser(action: any) {
    try {
        yield delay(1000);
        const user = yield call<any>(requests.getUser, action);
        yield put(ac.getUserSuccess(user))
    }catch (e) {
        yield put(ac.getUserFailure(e))
    }
}

export function* watchUsers() {
    yield all([
        takeEvery(ac.getAllUsersRequest, getUsers),
        // начинает жестко лагать
        takeEvery(ac.getUserRequest, getUser)
    ]);
}
