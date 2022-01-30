import { IUserAction, IUserState } from "./appReducer.types";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,

}
const appReducer = (state = initialState, action: IUserAction): IUserState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default appReducer;