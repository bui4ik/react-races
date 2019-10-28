import {User} from "../../entities/user";

interface InitialState {
    users: User[],
    isLoading: boolean,
    error: string,
    detailedUser: User,
}

export const initialState: InitialState = {
    users:[],
    isLoading: false,
    error: '',
    detailedUser: {},
};

export const allUsersSelector = ({usersReducer}: any) => usersReducer.users;
export const isLoadingSelector = ({usersReducer}: any) => usersReducer.isLoading;
export const errorSelector = ({usersReducer}: any) => usersReducer.error;
export const isUserLoadingSelector = ({usersReducer}: any) => usersReducer.isUserLoading;
export const detailedUserSelector = ({usersReducer}: any) => usersReducer.detailedUser;
