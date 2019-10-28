import { takeLatest, put, call, delay, all } from 'redux-saga/effects'
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
        const user = yield call<any>(requests.getUser, action.payload);
        yield put(ac.getUserSuccess(user))
    }catch (e) {
        yield put(ac.getUserFailure(e))
    }
}

function* updateUser(action: any) {
    try {
        yield delay(1000);
        const updatedUser = yield call<any>(requests.updateUser, (action.payload));
        yield put(ac.updateUserSuccess(updatedUser))
    } catch (e) {
        yield put(ac.updateUserFailure(e))
    }
}

function* createUser(action: any) {
    try {
        yield delay(1000);
        const createdUser = yield call<any>(requests.addNewUser, (action.payload));
        yield put(ac.createUserSuccess(createdUser))
    } catch (e) {
        yield put(ac.createUserFailure(e))
    }
}

function* deleteUser(action: any) {
    try {
        yield delay(1000);
        const deletedUserId = yield call<any>(requests.deleteUser, (action.payload));
        yield put(ac.deleteUserSuccess(deletedUserId))
    } catch (e) {
        yield put(ac.deleteUserFailure(e.message))
    }
}

export default function* () {
    yield all([
        takeLatest(ac.GET_ALL_USERS_REQUEST, getUsers),
        takeLatest(ac.GET_USER_REQUEST, getUser),
        takeLatest(ac.UPDATE_USER_REQUEST, updateUser),
        takeLatest(ac.CREATE_NEW_USER_REQUEST, createUser),
        takeLatest(ac.DELETE_USER_REQUEST, deleteUser)
    ]);
}
