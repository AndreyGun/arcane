import { Dispatch } from "react"
import { fetchUserId } from "../../services/fetch"
import { GetUsersActionTypes, UserAction } from "../reducer/usersReducer.types";

export function getUserById(userId: number) {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: GetUsersActionTypes.GET_USERS })
            fetchUserId(userId)
                .then(body =>
                    dispatch({ type: GetUsersActionTypes.GET_USER_BY_ID, payload: body })
                );
        } catch (e) {
            dispatch({ type: GetUsersActionTypes.GET_USERS_ERROR, payload: `${e}` })
        }
    }
}