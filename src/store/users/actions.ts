import {User} from "../../entities/user";

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

interface IAction {
    type: string;
    payload? : any;
}

export const getAllUsersRequest = ():IAction => ({
    type: GET_ALL_USERS_REQUEST,
});

export const getAllUsersSuccess = (users: User[]):IAction => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: users
});

export const getAllUsersFailure = (error: string): IAction => ({
    type: GET_ALL_USERS_FAILURE,
    payload: error
});

export const getUserRequest = (): IAction => ({
    type: GET_USER_REQUEST,
});

export const getUserSuccess = (user: User | undefined): IAction => ({
    type: GET_USER_SUCCESS,
    payload: user
});

export const getUserFailure = (error: string): IAction => ({
    type: GET_USER_FAILURE,
    payload: error
});
