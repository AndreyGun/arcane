import { GetUsersActionTypes, IUserState, UserAction } from "./usersReducer.types";



const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
}

const usersReducer = (state = initialState, action: UserAction): IUserState => {
    console.log("here2");
    console.log(state);
    switch (action.type) {
        case GetUsersActionTypes.GET_USERS:
            return {
                loading: true,
                error: null,
                users: [...state.users]
            }
        case GetUsersActionTypes.GET_USERS_SUCCESS:
            return {
                loading: false,
                error: null,
                users: action.payload
            }
        case GetUsersActionTypes.GET_USER_BY_ID:
            return {
                loading: false,
                error: null,
                users: [...state.users, action.payload]
            }
        case GetUsersActionTypes.GET_USERS_ERROR:
            return {
                loading: false,
                error: action.payload,
                users: [...state.users]
            }
        default:
            return state;
    }
}

export default usersReducer;