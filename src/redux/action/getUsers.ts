import { Dispatch } from "react";
import { fetchUsers } from "../../services/fetch";
import { GetUsersActionTypes, UserAction } from "../reducer/usersReducer.types";

export function getUsers() {

    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: GetUsersActionTypes.GET_USERS});
            fetchUsers().then(body => {
                dispatch({ type: GetUsersActionTypes.GET_USERS_SUCCESS, payload: body});
            });

        } catch (e) {
            dispatch({ type: GetUsersActionTypes.GET_USERS_ERROR, payload: `${e}`});
        }


    }
}
