
export const USERS_URL: string = "https://jsonplaceholder.typicode.com/users?limit=10";

export async function fetchUsers(url: string = "https://jsonplaceholder.typicode.com/users?limit=10") {
    try {
        const res = await fetch(url)
        const body = await res.json();
        return body;
    } catch (e) {
        alert(e)
    }
}
