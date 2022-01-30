import { IUser } from "../../types/usersTypes";

export interface IUserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export interface IUserAction {
    type: string;
    payload?: any;
}

