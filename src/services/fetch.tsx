
export const USERS_URL: string = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(url: string = "https://jsonplaceholder.typicode.com/users?limit=10") {
    try {
        const res = await fetch(url)
        return await res.json();
    } catch (e) {
        alert(e)
    }
}

export async function fetchUserId(userID: number) {
    try {
        const res = await fetch(USERS_URL + "/" + userID);
        return await res.json();
    } catch (e) {
        alert(e)
    }
}
