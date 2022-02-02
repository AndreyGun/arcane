import { IUser } from "../../types/usersTypes";

export interface IUserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}
export enum GetUsersActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USER_BY_ID = 'GET_USER_BY_ID',
    GET_USERS_ERROR = 'GET_USERS_ERROR',
}
interface GetUsersAction {
    type: GetUsersActionTypes.GET_USERS;
}
interface GetUsersSuccessAction {
    type: GetUsersActionTypes.GET_USERS_SUCCESS;
    payload: IUser[];
}
interface GetUserById {
    type: GetUsersActionTypes.GET_USER_BY_ID;
    payload: IUser;
}
interface GetUsersErrorAction {
    type: GetUsersActionTypes.GET_USERS_ERROR;
    payload: string;
}

export type UserAction = 
    GetUsersAction
    | GetUsersSuccessAction
    | GetUsersErrorAction
    | GetUserById