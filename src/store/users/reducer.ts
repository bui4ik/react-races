import * as actions from './actions'
import {initialState} from "./selectors";

interface Action {
    type: string,
    payload: any,
    users: any
}

const usersReducer = (state = initialState, { type, payload } : Action) => {
    switch (type) {
        case actions.GET_ALL_USERS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.GET_ALL_USERS_SUCCESS: {
            return {
                ...state,
                users: payload,
                isLoading: false
            }
        }
        case actions.GET_ALL_USERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        case actions.GET_USER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                detailedUser: payload
            }
        }
        case actions.GET_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        case actions.UPDATE_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case actions.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.map(user => user._id === payload.id ? payload : user),
                detailedUser: payload,
                isLoading: false,
            }
        }
        case actions.UPDATE_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        case actions.CREATE_NEW_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case actions.CREATE_NEW_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                users: [...state.users, payload]
            }
        }
        case actions.CREATE_NEW_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        case actions.DELETE_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case actions.DELETE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.filter( user => user._id !== payload),
                isLoading: false
            }
        }
        case actions.DELETE_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        default: {
            return state
        }
    }
};

export default usersReducer;
