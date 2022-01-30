import { GET_USERS, HIDE_LOADER, SHOW_LOADER } from "../helpers/constatns";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
// export function fetchPosts() {
    
//     return async dispatch => {
//         try {
//             dispatch(showLoader());
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//             const json = await response.json()
    
//             setTimeout(() => {
//                 dispatch({ type: GET_USERS, payload: json });
//                 dispatch(hideLoader());    
//             }, 500);
            
//         } catch (e) {
//             dispatch(hideLoader())
//         }

        
//     }
// }