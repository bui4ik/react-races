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
                loadingUsers: true
            }
        }
        case actions.GET_ALL_USERS_SUCCESS: {
            return {
                ...state,
                users: payload,
                loadingUsers: false
            }
        }
        case actions.GET_ALL_USERS_FAILURE: {
            console.log(payload);
            return {
                ...state,
                loadingUsers: false,
                error: payload
            }
        }
        case actions.GET_USER_REQUEST: {
            return {
                ...state,
                isUserLoading: true
            }
        }
        case actions.GET_USER_SUCCESS: {
            return {
                ...state,
                isUserLoading: false,
                detailedUser: payload
            }
        }
        case actions.GET_USER_FAILURE: {
            return {
                ...state,
                isUserLoading: false,
                error: payload
            }
        }
        default: {
            return state
        }
    }
};

export default usersReducer;
