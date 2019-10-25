import {User} from "../../entities/user";

interface InitialState {
    users: User[],
    loadingUsers: boolean,
    error: string,
    detailedUser: User,
    isUserLoading: boolean
}

export const initialState: InitialState = {
    users:[],
    loadingUsers: false,
    error: '',
    detailedUser: {},
    isUserLoading: false
};

export const allUsersSelector = ({usersReducer}: any) => usersReducer.users;
export const loadingUsersSelector = ({usersReducer}: any) => usersReducer.loadingUsers;
export const errorSelector = ({usersReducer}: any) => usersReducer.error;
export const isUserLoadingSelector = ({usersReducer}: any) => usersReducer.isUserLoading;
export const detailedUserSelector = ({usersReducer}: any) => usersReducer.detailedUser;
