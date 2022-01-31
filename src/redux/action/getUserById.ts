import { Dispatch } from "react"
import { fetchUserId } from "../../services/fetch"
import { IUser } from "../../types/usersTypes";

export enum GetUserByIdActionsTypes {
    GET_USER_BY_ID = "GET_USER_BY_ID",
    GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS",
    GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR",
}
interface GetUserByIdAction {
    type: GetUserByIdActionsTypes.GET_USER_BY_ID
}
interface GetUserByIdSuccessAction {
    type: GetUserByIdActionsTypes.GET_USER_BY_ID_SUCCESS,
    payload: IUser,
}
interface GetUserByIdErrorAction {
    type: GetUserByIdActionsTypes.GET_USER_BY_ID_ERROR,
    payload: string,
}
type UserByIdAction =
    GetUserByIdAction
    | GetUserByIdSuccessAction
    | GetUserByIdErrorAction


export function getUserById(userId: number) {
    return async (dispatch: Dispatch<UserByIdAction>) => {
        try {
            dispatch({ type: GetUserByIdActionsTypes.GET_USER_BY_ID })
            fetchUserId(userId)
                .then(body =>
                    dispatch({ type: GetUserByIdActionsTypes.GET_USER_BY_ID_SUCCESS, payload: body })
                );
        } catch (e) {
            dispatch({ type: GetUserByIdActionsTypes.GET_USER_BY_ID_ERROR, payload: `${e}` })
        }
    }
}