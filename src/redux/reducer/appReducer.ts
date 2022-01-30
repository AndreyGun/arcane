import { GetUsersActionTypes, IUserState, UserAction } from "./appReducer.types";



const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
}

const appReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case GetUsersActionTypes.GET_USERS:
            return {
                loading: true,
                error: null,
                users: []
            }
        case GetUsersActionTypes.GET_USERS_SUCCESS:
            return {
                loading: false,
                error: null,
                users: action.payload
            }
        case GetUsersActionTypes.GET_USERS_ERROR:
            return {
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state;
    }
}

export default appReducer;