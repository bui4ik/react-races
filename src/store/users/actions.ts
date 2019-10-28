import {User} from "../../entities/user";

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const CREATE_NEW_USER_REQUEST  = 'CREATE_NEW_USER_REQUEST';
export const CREATE_NEW_USER_SUCCESS  = 'CREATE_NEW_USER_SUCCESS';
export const CREATE_NEW_USER_FAILURE  = 'CREATE_NEW_USER_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

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

export const getUserRequest = (id: string): IAction => ({
    type: GET_USER_REQUEST,
    payload: id
});

export const getUserSuccess = (user: User | undefined): IAction => ({
    type: GET_USER_SUCCESS,
    payload: user
});

export const getUserFailure = (error: string): IAction => ({
    type: GET_USER_FAILURE,
    payload: error
});

export const updateUserRequest = (user: any): IAction => ({
    type: UPDATE_USER_REQUEST,
    payload: user
});

export const updateUserSuccess = (user: any ):IAction => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
});

export const updateUserFailure = (error: string ):IAction => ({
    type: UPDATE_USER_FAILURE,
    payload: error
});

export const createUserRequest = ( user: any ): IAction => ({
   type: CREATE_NEW_USER_REQUEST,
   payload: user
});

export const createUserSuccess = ( user: any ): IAction => ({
type: CREATE_NEW_USER_SUCCESS,
    payload: user
});

export const createUserFailure = (error: string ):IAction => ({
    type: CREATE_NEW_USER_FAILURE,
    payload: error
});

export const deleteUserRequest = (id: string): IAction => ({
    type: DELETE_USER_REQUEST,
    payload: id
});

export const deleteUserSuccess = (id: string): IAction => ({
    type: DELETE_USER_SUCCESS,
    payload: id
});

export const deleteUserFailure = (error: string): IAction => ({
    type: DELETE_USER_FAILURE,
    payload: error
});

