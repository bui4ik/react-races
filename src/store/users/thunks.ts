import {USERS} from "../../mock/users.mock";
import * as actions from "./actions"

export const getAllUsers = () => async (dispatch: any) => {
    dispatch(actions.getAllUsersRequest());
    try {
        await setTimeout(() => dispatch(actions.getAllUsersSuccess(USERS)), 1000);
    } catch (e) {
        dispatch(actions.getAllUsersFailure(e));
    }
};

export const getUser = (userId: string) => async (dispatch: any) => {
    dispatch(actions.getUserRequest());
    try {
        const user = USERS.find(user => user.id === userId);
        await setTimeout(() => dispatch(actions.getUserSuccess(user)), 1000)
    } catch (e) {
        dispatch(actions.getUserFailure(e))
    }
};
